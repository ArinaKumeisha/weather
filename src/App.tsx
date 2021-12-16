import React, {useState} from 'react';
import './App.module.scss';
import {Elements} from './Components/Elements/Elements'
import {Search} from "./Components/Search/Search";
import {useSelector} from "react-redux";
import {AppStoreType} from "./Bll/store";
import {ObjType} from "./Bll/weatherReducer";
import s from './App.module.scss'
import {Modal} from "./common/Modals/Modal";

function App() {
    const error = useSelector<AppStoreType, string>(state => state.weather.error)
    const cities = useSelector<AppStoreType, ObjType[]>(state => state.weather.cities)
    const [useName, setUseNName] = useState<string>('')
  return (
    <div className={s.app}>
        <Search
            useName={useName}
            cities={cities}
            setUseName={setUseNName}
            error={error}
        />
        <Modal
            error={error}
         />
      <Elements
          cities={cities}
          error={error}
      />




    </div>
  );
}

export default App;
