import React from 'react';
import roomsinfo from '../KC/KC.json';
import RoomLabSection from './RoomLabSection';

function KC() {
    const rooms = roomsinfo.KC.rooms;
    return (
        <>
            <RoomLabSection block_code="kc" />
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
                                        <h5>{`Day: ${day.day}`}</h5>
                                        <ul>
                                            {Object.entries(day.slots).map(([time, slot]) => (
                                                <li key={time}>
                                                    {time}: <strong>{slot.status}</strong> -
                                                    {slot.status === "Occupied" ? ` ${slot.subject} by ${slot.teacher}` : " None"}
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

export default KC
