import React from 'react'
import "./RoomsLabSection.css"
import { Link } from 'react-router-dom'

function RoomLabSection(props) {
    return (
        <>
            <div className='p-3' style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center", backgroundColor: "rgb(73 75 77 / 68%)" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "5rem" }}>
                    <Link to={`/${props.block_code}/rooms`}>
                        <div className='icon' style={{ borderRadius: "50%", height: "12vh", width: "6rem", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
                            <i className="fa-solid fa-book" style={{ fontSize: "3.5rem" }}></i>
                        </div>
                    </Link>
                    <h5>Rooms</h5>
                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Link to={`/${props.block_code}/labs`}>
                        <div className='icon' style={{ borderRadius: "50%", height: "12vh", width: "6rem", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
                            <i className="fa-solid fa-flask" style={{ fontSize: "3.5rem" }}></i>
                        </div>
                    </Link>
                    <h5>Labs</h5>
                </div>
            </div>
        </>
    )
}

export default RoomLabSection
