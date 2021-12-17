import React, {ChangeEvent} from 'react';
import {fetch, ObjType, setErrorAC} from "../../Bll/weatherReducer";
import {useDispatch} from "react-redux";
import s from './Search.module.scss'
import style from '../../common/styles/Styles.module.scss'


type PropsType = {
    setUseName: (name: string) => void
    useName: string
    cities: ObjType[]
    error: string
}
export const Search = (props: PropsType) => {

    const {useName, setUseName, cities} = props
    const dispatch = useDispatch()


    const onchange = (e: ChangeEvent<HTMLInputElement>) => {
        setUseName(e.currentTarget.value)
        dispatch(setErrorAC(''))
    }

    const addHandler = () => {
        dispatch(fetch(cities, useName))
        setUseName('')
    }
    const onKeyPressHandler = (e: any) => {
        if (e.key === 'Enter') {
            addHandler()
        }
    }
    return (
<div className={s.container}>
        <h3 className={s.name}>Weather in your city</h3>
        <div className={s.settings}>

            <input
                value={useName}
                onChange={onchange}
                onFocus={() => dispatch(setErrorAC(''))}
                className={s.input}
                placeholder={'enter city'}
                onKeyPress={onKeyPressHandler}
            />

            <button
                onClick={addHandler}
                className={style.btn}>
                Add
            </button>
        </div>
</div>
    );
};

