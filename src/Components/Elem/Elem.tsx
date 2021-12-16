import React from 'react';
import s from './Elems.module.css'
import {ObjType} from "../../Bll/weatherReducer";
import {Settings} from "../Settings/Settings";


export const Elem = (props: ObjType) => {
    const {name, temp, speed, pressure, humidity, dt, deg} = props;

    return (
        <div className={s.elem}>
            <h2>City: <span>{name}</span></h2>
            <div>Temperature:<span> {temp}ºС</span></div>
            <div>Speed of wind: {speed}M/C</div>
            <div>Direction of wind: {deg}º</div>
            <div>Pressure: {pressure}</div>
            <div>Humidity:{humidity}</div>
            <div>Last update:{dt}</div>

            <Settings
                name={name}
            />
        </div>
    )
}


