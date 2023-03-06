import { View } from "react-native";
import { s } from "./MeteoAdvanced.style";
import { Txt } from "../Txt/Txt";

export const MeteoAdvanced = ({dusk, dawn, wind}) => {
    return (
            <View style={s.MeteoAdvancedBox}>
                <View style={{alignItems : 'center'}}>
                    <Txt style={{fontSize : 20}}>{dusk}</Txt>
                    <Txt style={{fontSize : 15}}>Aube</Txt>
                </View>
                <View style={{alignItems : 'center'}}>
                <Txt style={{fontSize : 20}}>{dawn}</Txt>
                    <Txt style={{fontSize : 15}}>crépuscule</Txt>
                </View>
                <View style={{alignItems : 'center'}}>
                <Txt style={{fontSize : 20}}>{wind} km/h</Txt>
                    <Txt style={{fontSize : 15}} >Vent</Txt>
                </View>
            </View>
    )
}