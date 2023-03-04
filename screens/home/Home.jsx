import { Text, View } from 'react-native';
import {s} from './Home.style';
import { useEffect, useState } from 'react';
import {requestForegroundPermissionsAsync, getCurrentPositionAsync} from "expo-location"
import { meteoApi } from '../../api/meteo';
import { Txt } from '../../components/Txt';

export const Home = ({}) => {
    const [coords, setCoords] = useState();
    const [weather, setWeather] = useState();

    useEffect(()=>{
        getUserCoords()
    },[])

    useEffect(()=>{
        if(coords){
            fetchWeather(coords)
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
    return (
        <>
        <View style={s.meteo_basic}>
        <Txt>Hello</Txt>

        </View>
        <View style={s.navBar}>
        <Text>Hello middle</Text>

        </View>
        <View>
        <Text style={s.advancedMeteo}>Hello bottom</Text>

        </View>
        </>
    )
}