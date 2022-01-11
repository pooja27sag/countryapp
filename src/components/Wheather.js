import React from "react";

import Axios from "axios";
import { useState, useEffect } from "react/cjs/react.development";



const Wheather = (query) => { 
    const[weather, setWeather] = useState([]);
    useEffect(() => {
        console.log(weather);
        
      }, [weather]);

 const ACCESS_KEY="575a5cec6d4d38354039e1fcb72d3030";
 const countryName="india";

const weather_url=`http://api.weatherstack.com/current?access_key=575a5cec6d4d38354039e1fcb72d3030&query=${query.query}`;



const getWeather = async() => {

    const weather_result = await Axios.get(weather_url);
    setWeather(weather_result.data);
    console.log(weather["current"].temperature);  

}

return(
    
        <div>
        <div>
           <button onClick={getWeather}>get weather</button>
        </div>
        {/* {weather&&weather.length>0?
       weather.map(data => {
return <div>
    <h2>{data.current.feelslike}</h2>
     </div> */}
        </div>
       

)
    
}

export default Wheather;
