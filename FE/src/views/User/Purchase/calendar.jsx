import React, { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css'

export default function CalendarComponent ({ type }) {
    console.log(type)
    const date = new Date()
    const [valueOld, onChangeOld] = useState(new Date(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`));
    const [value, onChange] = useState(date);
    return (
        <>
            <div className={`wraper-calendar ${type === 0 ? '__left' : '__right'}`}>
                {
                    type === 0
                    ? <Calendar onChange={onChangeOld} value={valueOld} />
                    : type === 1
                    ? <Calendar onChange={onChange} value={value} />
                    : <></>
                }
            </div>
        </>
    )
}