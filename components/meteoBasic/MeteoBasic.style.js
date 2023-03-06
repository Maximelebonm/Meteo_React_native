import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    clock : {
       alignItems : 'flex-end',
    },
    label : {
        alignSelf : 'flex-end',
        transform : [{rotate:"-90deg"}],
        fontSize : 20,
    },
    temperature_container : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'baseline',
    },
    temperature : {
       fontSize : 150, 
    },
    image : {
        width : 90,
        height : 90,
    }
})