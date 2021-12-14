import React from 'react';
import s from './Elems.module.css'
import {ObjType} from "../Bll/weatherReducer";


export const Elem = (props: ObjType) => {
    const {name, temp, speed, pressure, humidity, dt, deg} = props;
    return (
        <div className={s.elem}>
            <h2>City: {name}</h2>
            <div>Temperature: {temp}</div>
            <div>Wind: {deg}{speed}</div>
            <div>Pressure: {pressure}</div>
            <div>Humidity:{humidity}</div>
            <div>dt:{dt}</div>
            <button>delete</button>
            <button>update</button>
        </div>
    )
}


