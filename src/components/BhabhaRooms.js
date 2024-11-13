import React from 'react';
import roomsinfo from "../Bhabha/BB.json";
import RoomLabSection from './RoomLabSection';
import { Link } from 'react-router-dom';

function Bhabha() {
    const rooms = roomsinfo.Bhabha.rooms;
    return (
        <>
            <RoomLabSection block_code="bb" />
            <div className="accordion" id="accordionExample">
                {rooms.map((room, index) => (
                    <div className="accordion-item" key={index}>
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${index}`}
                                aria-expanded={index === 0}
                                aria-controls={`collapse${index}`}
                            >
                                Room Number: {room.room_no}
                            </button>
                        </h2>
                        <div id={`collapse${index}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                {room.days.map((day, dayIndex) => (
                                    <div key={dayIndex} style={{ marginBottom: '1rem' }}>
                                        <h5 style={{ color: "black" }}>{`${day.day}`}</h5>
                                        <ul>
                                            {Object.entries(day.slots).map(([time, slot]) => (
                                                <li key={time}>
                                                    {time}: <strong>{slot.status}</strong> -
                                                    {slot.status === "Occupied" ? ` ${slot.subject} by ${slot.teacher}` : <Link to="/book" className="btn btn-outline-dark btn-sm m-1">Book</Link>}
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

export default Bhabha
