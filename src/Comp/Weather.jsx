
import {  useRef, useState } from "react";
import ReactAnimatedWeather from 'react-animated-weather';


const defaults = {
    icon: 'CLEAR_DAY',
    color: 'goldenrod',
    size: 52,
    animate: true
  };

function Weather() {


    


    const [cityName,setCityName] =  useState("")
    const[weather,setWeather] = useState({})
    const useDemo = useRef("")
    const useError = useRef("")


    function handleSearch(){
     const Apikey = "b50b7899bcb9a3e1f9d070bc512dab93"
     const Url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${Apikey}&units=metric`

    fetch(Url)
      .then((data) => {
        return data.json();
      })
      .then((result) => {
        setWeather(result)

        if(  result.message === "city not found"){

            useDemo.current.focus()
            useError.current.style.border ="1px solid red"
            useError.current.innerText ="🤔🤔"
          }
        
      });
    }


  function handleChange(e){
        setCityName(e.target.value)
  }



  return (
    <>
      <div className=" bg-Body-image w-full h-screen flex bg-cover bg-no-repeat justify-center items-center">
      <div className=" flex w-3/4 h-4/5  rounded-lg bg-[#ffffff4a] justify-center items-center">

       {/* Left side  */}
       <div className=" bg-left   h-full w-1/2 flex flex-col justify-between  rounded-l-lg">
          <div className=" flex justify-end m-4  ">
            <p className="text-xl text-red-300 font-bold ">{weather&&weather.name}</p>
          </div>

                <div className="flex justify-center">
                    <img src={`https://openweathermap.org/img/wn/${weather.weather&&weather.weather[0].icon}@2x.png

                  `} alt=""/>
                </div>

          <div className="flex  justify-between m-5 ">
            
            <div className="text-blue-400">
              <p className="text-xl font-bold">Longitude:-{weather.coord && weather.coord.lon}</p>
              <p className="text-xl font-bold">Latitude:-{weather.coord && weather.coord.lat}</p>
            </div>
            <div className="text-xl font-bold text-blue-300">
              <p>Temp:-{weather.main&&weather.main.temp}°C </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className=" h-full w-1/2  ">


        <div className="h-1/5 flex justify-center items-center  border-b border-gray-300 m-4">
                <ReactAnimatedWeather
                icon={defaults.icon}
                color={defaults.color}
                size={defaults.size}
                animate={defaults.animate}
                 />    
            </div>

          <div className="flex border border-silver-500 rounded-lg w-2/4 mx-auto  " ref={useError}>

           

            {/* mt-40 comment kar na ha */}
            <input
              type="search"
              value={cityName}
              onChange={handleChange}
              placeholder="Search"
              className="bg-transparent outline-none  text-white placeholder-white px-5 py-1 "
              ref={useDemo}
              
              
            />

            <span className=" text-xl cursor-pointer  text-black rounded-full p-1 float-right -mx-3 " onClick={handleSearch} ref={useError}
               >
              Search 
            </span>
          </div>

          <div className=" text-center font-serif m-2 font-bold">
            <p>{weather.name} {weather.sys && weather.sys.country}</p>
            <p>Desc:- {weather.weather&& weather.weather[0].description}</p>
          </div>

          <div className="flex justify-between  m-9 font-bold font-sans border-b border-gray-300 pb-1 ">
            <p>Temp</p>
            <p>{weather.main&&weather.main.temp}°C</p>
          </div>

          <div className="flex justify-between  m-9 font-bold font-sans border-b border-gray-300 pb-1 ">
            <p>Visibility</p>
            <p>{weather.visibility&&weather.visibility/1000}Km</p>
          </div>

          <div className="flex justify-between  m-9 font-bold font-sans border-b border-gray-300 pb-1 ">
            <p>Wind Speed</p>
            <p> {weather.wind&&weather.wind.speed} meter/sec</p>
          </div>
        </div>

      </div>
       
      </div>
    </>
  );
}
export default Weather;
