import React, {useState} from 'react';
import './App.css';
import axios from "axios";

function App() {
    const [state, setState] = useState<any>()
  const url = `http://api.openweathermap.org/data/2.5/weather?q=London&appid=e49884ac099317c54fb2fa8c00755bf8`
  const request = () => {
   return axios.get(url)
       .then((res)=>{
           setState(res.data)
           console.log(res.data)
       })
  }
  return (
    <div className="App">
     <button onClick={request}>add</button>
        <div>{JSON.stringify(state)}</div>
    </div>
  );
}

export default App;
