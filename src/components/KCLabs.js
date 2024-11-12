import React from 'react';
import roomsinfo from "../KC/KC.json";
import RoomLabSection from './RoomLabSection';
import { Link } from 'react-router-dom';

function KCLabs() {
    const labs = roomsinfo.KC.labs;
    return (
        <>
            <RoomLabSection block_code="kc" />
            <div className="accordion" id="accordionExample">
                {labs.map((lab, labIndex) => (
                    <div className="accordion-item" key={labIndex}>
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${labIndex}`}
                                aria-expanded={labIndex === 0}
                                aria-controls={`collapse${labIndex}`}
                            >
                                Lab Number: {lab.room_no}
                            </button>
                        </h2>
                        <div id={`collapse${labIndex}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                {lab.days.map((day, dayIndex) => (
                                    <div key={dayIndex} style={{ marginBottom: '1rem' }}>
                                        <h5 style={{ color: "black" }}>{day.day}</h5>
                                        <ul>
                                            {Object.entries(day.slots).map(([time, slot]) => (
                                                <li className='d-flex align-items-center justify-content-left' key={time}>
                                                    {time}: <strong> {slot.status}</strong> - 
                                                    {slot.status === "Occupied" ? ` ${slot.subject} by ${slot.teacher}` : (
                                                        <Link to="/book" className="btn btn-outline-dark btn-sm m-1">Book</Link>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default KCLabs
