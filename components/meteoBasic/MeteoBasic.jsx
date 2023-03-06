import { s } from "./MeteoBasic.style" ;
import { Txt } from "../Txt/Txt";
import { View, Image } from 'react-native';
import { getWeater } from "../../service/meteo.service";
import { Clock } from "../clock/Clock";
import { TouchableOpacity } from "react-native";

export const MeteoBasic =({onPress, temperature, city, interpretation})=> {

    return (
        <>
        <View style={s.clock}>
        <Clock/>
        </View>
        <View>
        <Txt>{city}</Txt>
        <Txt style={s.label}>{interpretation.label}</Txt>
        </View>
        <View style={s.temperature_container}>
        <TouchableOpacity onPress={onPress}>
            <Txt style={s.temperature}>{temperature}°</Txt>
            </TouchableOpacity>
        <Image style={s.image} source={interpretation.image}/>
        </View>
        
        </>
    )
}