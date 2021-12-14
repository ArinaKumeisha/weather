import {Dispatch} from "redux";
import {api} from "../api/api";
import {ACTION_TYPE} from "./enum";


const initialState = {
    cities: [] as ObjType[],
}
export type InitialStateType = typeof initialState
export const weatherReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ACTION_TYPE.GET_CITY:
            return {...state, cities: [...state.cities, action.obj]}
        default:
            return state

    }
}

export const getCityAC = (obj: ObjType) => (
    {type: ACTION_TYPE.GET_CITY, obj}
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
export const fetch = ( cities: any, city: string) => {
    return async (dispatch: Dispatch<ActionType>) => {
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
        try {
                dispatch(getCityAC(obj))

        } catch
            (e: any) {


        }
    }
}

// type GetMainType = ReturnType<typeof getMainAC>
type GetCityType = ReturnType<typeof getCityAC>
// type GetWindType = ReturnType<typeof getWindAC>

type ActionType = GetCityType  /*GetMainType | GetWindType*/