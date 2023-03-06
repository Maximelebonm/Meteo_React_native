import { s } from "./Forecast.style";
import { TouchableOpacity, View } from "react-native";
import { Txt } from "../../components/Txt/Txt";
import { Container } from '../../components/container/container';
import { useRoute, useNavigation } from "@react-navigation/native";
import { ForecastListItem } from "../../components/forecastListItem/ForecastListItem";
import { getWeater } from "../../service/meteo.service";
import { DAYS } from "../../service/date.service";
import { dateToDDMM } from "../../service/date.service";

export const Forecast = ({}) => {
    const {params}=useRoute();
    const nav = useNavigation()
    const backButton = (
        <TouchableOpacity style={s.backbutton} onPress={()=>{nav.goBack()}}>
            <Txt>{"<"}</Txt>
        </TouchableOpacity>
    )

    const header = (
        <View style={s.header}>
            {backButton}
            <View style={s.header_texts}>
                <Txt>{params.city}</Txt>
                <Txt style={s.subtitle}>Prévision pour 7 jours</Txt>
            </View >
        </View>
    )

    const forcastList = <View style={s.forcastList}>
        {params.time.map((time, index) => {
            const code = params.weathercode[index];
            const image = getWeater(code).image;
            const date = new Date(time);
            const day = DAYS[date.getDay(date)];
            const temperature = params.temperature_2m_max[index];

            return <ForecastListItem key={time} day={day} date={dateToDDMM(date)} image={image} temperature={Math.round(temperature)}/>
        })}
    </View>
    console.log("params",params)
    return (
        <Container>
            {header}
            {forcastList}
        </Container>
    )
}