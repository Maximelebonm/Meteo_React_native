import { Text, View } from 'react-native';
import {s} from './Home.style';
import { useEffect, useState } from 'react';
import {requestForegroundPermissionsAsync, getCurrentPositionAsync} from "expo-location"
import { meteoApi, cityApi } from '../../api/meteo';
import { Txt } from '../../components/Txt/Txt';
import { MeteoBasic } from '../../components/meteoBasic/MeteoBasic';
import { getWeater } from '../../service/meteo.service';
import { MeteoAdvanced } from '../../components/meteoAvdanced/MeteoAdvanced';
import {useNavigation} from '@react-navigation/native'
import { Container } from '../../components/container/container';

export const Home = () => {
    const [coords, setCoords] = useState();
    const [weather, setWeather] = useState();
    const [city, setCity] = useState();
    const nav = useNavigation()
    const currentWeather = weather?.current_weather

    useEffect(()=>{
        getUserCoords()
    },[])

    useEffect(()=>{
        if(coords){
            fetchWeather(coords)
            fetchCity(coords)
        }
    },[coords])

    async function getUserCoords(){
        let {status} = await requestForegroundPermissionsAsync()
        if(status=="granted"){
            const location = await getCurrentPositionAsync()
            setCoords({lat : location.coords.latitude, lng : location.coords.longitude})
        }else{
            setCoords({lat: "48.85", lng:"2.35"})
        }
    }

    const fetchWeather = async (coordinate) => {
     const weatherResponse = await meteoApi(coordinate);
     setWeather(weatherResponse) 
    }
    console.log(weather)

    const fetchCity = async (coordinate) => {
       const cityResponse =  await cityApi(coordinate);
       setCity(cityResponse); 
    }

    function goToForcastPage (){
        nav.navigate("Forecast", {city, ...weather.daily});
    }

    return currentWeather?(
        <Container>
        <View style={s.meteo_basic}>
        <MeteoBasic 
        temperature={Math.round(currentWeather?.temperature)}
        city={city}
        interpretation={getWeater(currentWeather?.weathercode)}
        onPress={goToForcastPage}
        />

        </View>
        <View style={s.navBar}>
        <Text>Hello middle</Text>

        </View>
        <View style={s.advancedMeteo}>
            <MeteoAdvanced wind={Math.round(currentWeather?.windspeed)} dusk={weather.daily.sunrise[0].split("T")[1]} dawn={weather.daily.sunset[0].split("T")[1]}/>

        </View>
        </Container>
    ) : null
}