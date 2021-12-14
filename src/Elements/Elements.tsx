import React, {ChangeEvent, useState} from 'react';
import s from './Elements.module.css'
import {Elem} from '../Elem/Elem'
import {useDispatch, useSelector} from "react-redux";
import {fetch, ObjType} from "../Bll/weatherReducer";
import {AppStoreType} from "../Bll/store";

export const Elements = () => {
    const cities = useSelector<AppStoreType, ObjType[]>(state => state.weather.cities)
    const dispatch = useDispatch()

    const [name, setName] = useState<string>('')
    const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }
    const addHandler = () => {
        dispatch(fetch(cities, name))
    }

    return (
        <div className={s.container}>
            <div className={s.btn}>

                <input
                    value={name}
                    onChange={onchangeHandler}
                />

                <button
                    onClick={addHandler}>Add
                </button>
            </div>
            <div className={s.block}>

                {cities.map(e => {
                    return (
                        <Elem
                            name={e.name}
                            pressure={e.pressure}
                            humidity={e.humidity}
                            deg={e.deg}
                            temp={e.temp}
                            id={e.id}
                            key={e.id}
                            dt={e.dt}
                            speed={e.speed}/>)
                })}
            </div>
        </div>
    )
}


