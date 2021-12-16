import React from 'react';
import s from './Elements.module.css'
import {Elem} from '../Elem/Elem'
import {timeConverter} from "../../common/timeConverter";
import {ObjType} from "../../Bll/weatherReducer";

type PropsType = {
    cities: ObjType[]
    error: string
}
export const Elements = (props: PropsType) => {

    const {cities} = props

    // const filtered = cities.filter(c => {
    //     return c.name.toLowerCase().includes(name.toLowerCase())
    // })

    return (
        <div className={s.block}>
            {cities.map((e) => {
                return (
                    <Elem
                        key={e.id}
                        name={e.name}
                        pressure={e.pressure}
                        humidity={e.humidity}
                        deg={e.deg}
                        temp={+e.temp.toFixed(1)}
                        id={e.id}
                        dt={timeConverter(e.dt)}
                        speed={e.speed}/>)
            })}
        </div>

    )
}


