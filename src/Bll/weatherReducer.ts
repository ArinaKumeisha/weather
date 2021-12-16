import {Dispatch} from "redux";
import {api} from "../api/api";
import {ACTION_TYPE} from "./enum";


const initialState = {
    cities: [] as ObjType[],
    error: '',
    isModal: false,
}
export type InitialStateType = typeof initialState
export const weatherReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ACTION_TYPE.GET_CITY:
            return {...state, cities: [action.obj, ...state.cities]}
        case ACTION_TYPE.SET_ERROR:
            return {...state, error: action.error}
        case ACTION_TYPE.UPDATE_DATA:
            return {...state, cities: state.cities.map(city => city.id === action.object.id ? {...action.object}: city)}
        case ACTION_TYPE.DELETE_DATA:
            return {...state, cities: state.cities.filter(city => city.id !== action.object.id)}
        case ACTION_TYPE.SHOW_MODAL:
            return {...state, isModal: action.isModal}
        default:
            return state

    }
}

export const getCityAC = (obj: ObjType) => (
    {type: ACTION_TYPE.GET_CITY, obj} as const
)
export const setErrorAC = (error: string) => (
    {type: ACTION_TYPE.SET_ERROR, error} as const
)
export const showModalAC = (isModal: boolean) => (
    {type: ACTION_TYPE.SHOW_MODAL, isModal} as const)

export type ObjType = {
    name: string,
    id: number,
    dt: any,
    humidity: number,
    pressure: number,
    temp: number,
    deg: number,
    speed: number,
}
export const fetch = (cities: ObjType[], city: string) => {
    return async (dispatch: Dispatch<ActionType>) => {
        try {
            const res = await api.getRequest(city)
            const obj: ObjType = {
                name: res.data.name,
                id: res.data.id,
                dt: res.data.dt,
                humidity: res.data.main.humidity,
                pressure: res.data.main.pressure,
                temp: res.data.main.temp,
                deg: res.data.wind.deg,
                speed: res.data.wind.speed,
            }
            const existCity = cities.some(city => city.id === obj.id)
            if (existCity) {
                dispatch(setErrorAC('this city have added'))
                dispatch(showModalAC(true))
            } else {
                dispatch(getCityAC(obj))
                dispatch(showModalAC(false))
            }
        } catch (e: any) {
            dispatch(setErrorAC('check your request please'))
            dispatch(showModalAC(true))

        }
    }
}
export const updateDataAC = (object: ObjType) =>
    ({ type: ACTION_TYPE.UPDATE_DATA,object } as const)
export const deleteDataAC = (object: ObjType) =>
    ({ type: ACTION_TYPE.DELETE_DATA,object } as const)

export const updateData = (city: string) => {
    return async (dispatch: Dispatch<ActionType>) => {
        try {
            const res = await api.getRequest(city)
            const obj: ObjType = {
                name: res.data.name,
                id: res.data.id,
                dt: res.data.dt,
                humidity: res.data.main.humidity,
                pressure: res.data.main.pressure,
                temp: res.data.main.temp,
                deg: res.data.wind.deg,
                speed: res.data.wind.speed,
            }
            dispatch(updateDataAC(obj))
        }catch (e: any){
        }
    }
}
export const deleteData = (city: string) => {
    return async (dispatch: Dispatch<ActionType>) => {
        try {
            const res = await api.getRequest(city)
            const obj: ObjType = {
                name: res.data.name,
                id: res.data.id,
                dt: res.data.dt,
                humidity: res.data.main.humidity,
                pressure: res.data.main.pressure,
                temp: res.data.main.temp,
                deg: res.data.wind.deg,
                speed: res.data.wind.speed,
            }
            dispatch(deleteDataAC(obj))
        }catch (e: any){
        }
    }
}
type UpdateDataType = ReturnType<typeof updateDataAC>
type SetErrorType = ReturnType<typeof setErrorAC>
type GetCityType = ReturnType<typeof getCityAC>
type DeleteType = ReturnType<typeof deleteDataAC>
type ShowModalType = ReturnType<typeof showModalAC>
type ActionType = GetCityType | SetErrorType | UpdateDataType | DeleteType | ShowModalType