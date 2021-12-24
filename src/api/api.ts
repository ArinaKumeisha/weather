import axios from "axios";

export const api = {
    getRequest(q: string) {
        return axios.get<GetType>(`https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=e49884ac099317c54fb2fa8c00755bf8`)
    }
}

type GetType = {   //type getRequest
    status: number
    text: string
    "coord": {
        "lon": number
        "lat": number
    },
    "weather": WeatherType[]
    "base": string
    "main": MainType
    "visibility": number
    "wind": { "speed": number, "deg": number }
    "clouds": { "all": number }
    "dt": number,
    "sys": SysType
    "timezone": number
    "id": number
    "name": string
    "cod": number
    'message': string

}

type WeatherType = {
    "id": number
    "main": string
    "description": string
    "icon": string
}
type MainType = {
    "temp": number,
    "feels_like": number,
    "temp_min": number,
    "temp_max": number,
    "pressure": number,
    "humidity": number
}
type SysType = {
    "type": number,
    "id": number,
    "country": string,
    "sunrise": number,
    "sunset": number
}


