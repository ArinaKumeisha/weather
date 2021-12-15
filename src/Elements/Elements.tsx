import React, {ChangeEvent, useState} from 'react';
import s from './Elements.module.css'
import {Elem} from '../Elem/Elem'
import {useDispatch, useSelector} from "react-redux";
import {fetch, ObjType, setErrorAC} from "../Bll/weatherReducer";
import {AppStoreType} from "../Bll/store";

export const Elements = () => {
    const cities = useSelector<AppStoreType, ObjType[]>(state => state.weather.cities)
    const error = useSelector<AppStoreType, string>(state => state.weather.error)
    const dispatch = useDispatch()
    const [name, setName] = useState<string>('')

    const filtered = cities.filter(c => {
        return c.name.toLowerCase().includes(name.toLowerCase())
    })

    const onchange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
        dispatch(setErrorAC(''))
    }

    const addHandler = () => {
        const newName = name.trim()
        if (newName) {
            dispatch(fetch(cities, newName))
            setName('')
        } else {
            dispatch(setErrorAC('check correct'))
        }
    }

    return (
        <div className={s.container}>
            <div className={s.btn}>

                <input
                    value={name}
                    onChange={onchange}
                    onFocus={() => dispatch(setErrorAC(''))}
                />

                <div>
                    <button
                        onClick={addHandler}>Add
                    </button>
                    <div>{error}</div>
                </div>

            </div>
            <div className={s.block}>

                {filtered.map(e => {
                    return (
                        <Elem
                            key={e.id}
                            name={e.name}
                            pressure={e.pressure}
                            humidity={e.humidity}
                            deg={e.deg}
                            temp={e.temp}
                            id={e.id}
                            dt={e.dt}
                            speed={e.speed}/>)
                })}
            </div>
        </div>
    )
}


