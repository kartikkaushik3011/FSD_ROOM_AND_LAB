import React, { useState, useEffect, useRef } from 'react';
import Blocks from './Blocks';
import blockImage from "./assets/blockImage.jpg"

function AllBlocks() {
    const [visibleBlocks, setVisibleBlocks] = useState(new Array(5).fill(false));
    const blockRefs = useRef([]);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = Number(entry.target.dataset.index);
                    setVisibleBlocks((prev) => {
                        const newVisibleBlocks = [...prev];
                        newVisibleBlocks[index] = true;
                        return newVisibleBlocks;
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, options);
        blockRefs.current.forEach((block) => {
            if (block) {
                observer.observe(block);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);
    const getStyle = (index) => ({
        transform: visibleBlocks[index] ? 'translateX(0)' : index % 2 === 0 ? 'translateX(-100%)' : 'translateX(100%)',
        opacity: visibleBlocks[index] ? 1 : 0,
        transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
        willChange: 'transform, opacity',
    });

    return (
        <>
            <div className="d-flex justify-content-around p-4">
                <div ref={(el) => (blockRefs.current[0] = el)} data-index={0} style={getStyle(0)}>
                    <Blocks
                        image={blockImage}
                        block="Kalpana Chawla"
                        info="A block of college"
                        block_code="kc/rooms"
                    />
                </div>
                <div ref={(el) => (blockRefs.current[1] = el)} data-index={1} style={getStyle(1)}>
                    <Blocks
                        image={blockImage}
                        block="Aryabhatta"
                        info="A block of college"
                        block_code="ab/rooms"
                    />
                </div>
            </div>
            <div className="d-flex justify-content-around p-4">
                <div ref={(el) => (blockRefs.current[2] = el)} data-index={2} style={getStyle(2)}>
                    <Blocks
                        image={blockImage}
                        block="Ramanujan"
                        info="A block of college"
                        block_code="rj/rooms"
                    />
                </div>
                <div ref={(el) => (blockRefs.current[3] = el)} data-index={3} style={getStyle(3)}>
                    <Blocks
                        image={blockImage}
                        block="Bhabha"
                        info="A block of college"
                        block_code="bb/rooms"
                    />
                </div>
            </div>
            <div className="d-flex justify-content-around p-4">
                <div ref={(el) => (blockRefs.current[4] = el)} data-index={4} style={getStyle(4)}>
                    <Blocks
                        image={blockImage}
                        block="Raman"
                        info="A block of college"
                        block_code="rm/rooms"
                    />
                </div>
            </div>
        </>
    );
}

export default AllBlocks;
