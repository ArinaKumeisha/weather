import React, {useState} from 'react';
import style from './Modal.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../Bll/store";
import {showModalAC} from "../../Bll/weatherReducer";

type PropsType = {
    error: string
}
export const Modal = (props: PropsType) => {
        const {error} = props
        const [active, setActive] = useState(false)
        const isModal = useSelector<AppStoreType, boolean>(state => state.weather.isModal)
        const dispatch = useDispatch()
        const closeModalHandler = () => {
            if (error) {
                setActive(false)
                dispatch(showModalAC(false))
            }
        }
        return (
            <div className={style.container} onClick={closeModalHandler}>
                {isModal && error && <div className={style.modal}>
                    {error}
                </div>}
            </div>

        );
    }
;

