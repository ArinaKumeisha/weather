import React from 'react';
import {deleteData, updateData} from "../../Bll/weatherReducer";
import {useDispatch} from "react-redux";
import style from '../../common/styles/Styles.module.scss'
import s from './Settings.module.scss'

type PropsType = {
    name: string
}
export const Settings = (props: PropsType) => {
    const {name} = props
    const dispatch = useDispatch()
    const updateHandler = () => {
        dispatch(updateData(name))
    }
    const deleteHandler = () => {
        dispatch(deleteData(name))
    }
    return (
        <div className={s.container}>
            <button onClick={deleteHandler} className={style.btn}>delete</button>
            <button onClick={updateHandler} className={style.btnRed}>update</button>
        </div>
    );
};

