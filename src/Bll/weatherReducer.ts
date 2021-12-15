import {Dispatch} from "redux";
import {api} from "../api/api";
import {ACTION_TYPE} from "./enum";


const initialState = {
    cities: [] as ObjType[],
    error: ''
}
export type InitialStateType = typeof initialState
export const weatherReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ACTION_TYPE.GET_CITY:
            return {...state, cities: [action.obj, ...state.cities]}
        case ACTION_TYPE.SET_ERROR:
            return {...state, error: action.error}
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
        const res = await api.getRequest(city)
        console.log(res)
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
        try {
            const existCity = cities.some(city => city.id === obj.id)
            if (existCity) {
                dispatch(setErrorAC('this city have added'))
            } else {
                dispatch(getCityAC(obj))
            }
        } catch (e: any) {
            dispatch(setErrorAC('checked request please'))

        }

    }
}
type SetErrorType = ReturnType<typeof setErrorAC>
type GetCityType = ReturnType<typeof getCityAC>
type ActionType = GetCityType | SetErrorType