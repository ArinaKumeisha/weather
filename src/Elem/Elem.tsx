import React from 'react';
import s from './Elems.module.css'

export type ElemType = {
    name: string
    temperature: number
    humidity: number
    pressure: number
    wind: number
}
type PropsType = {
    elem: ElemType
}
export const Elem = (props: PropsType) => {
    const {elem} = props

    return (
        <div className={s.elem}>
            <h2>City: {elem.name}</h2>
            <div>Temperature: {elem.temperature}</div>
            <div>Wind: {elem.wind}</div>
            <div>Pressure: {elem.pressure}</div>
            <div>Humidity:{elem.humidity}</div>
        </div>
    )
}


