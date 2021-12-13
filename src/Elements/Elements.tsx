import React, {ChangeEvent, useEffect, useState} from 'react';
import {api} from "../api/api";
import s from './Elements.module.css'
import {Elem, ElemType} from '../Elem/Elem'

export const Elements = () => {
    const getData = () => {
        const data = localStorage.getItem('elems')
        if (data) {
            return JSON.parse(data)
        } else {
            return []
        }
    }

    const [name, setName] = useState<string>('')
    const [error, setError] = useState('error')
    const [elems, setElems] = useState<ElemType[]>(getData())

    useEffect(() => {
        localStorage.setItem('elems', JSON.stringify(elems))

    }, [elems])

    const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    const addHandler = async () => {
        const res = await api.getRequest(name)
        try {
            if (res.status === 200) {
                const elem: ElemType = {
                    name: res.data.name,
                    temperature: res.data.main.temp,
                    humidity: res.data.main.humidity,
                    pressure: res.data.main.pressure,
                    wind: res.data.wind.speed,
                }

                localStorage.setItem('elems', JSON.stringify(elems))
                const newElems = localStorage.getItem('elems')
                const el = newElems && JSON.parse(newElems)
                setElems([...el, elem])
            }
        } catch (e: any) {
            setError(e)
        }
    }

    return (
        <div className={s.container}>
            <div className={s.btn}>
                <input
                    value={name}
                    onChange={onchangeHandler}/>

                <button
                    onClick={addHandler}>Add
                </button>
            </div>
            <div className={s.block}>
                {elems.map((e, index) => {
                    return (
                        <Elem key={index} elem={e}/>)
                })}
            </div>
        </div>
    )
}


