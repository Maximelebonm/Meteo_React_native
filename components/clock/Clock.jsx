import { Txt } from "../Txt/Txt";
import { s } from "./Clock.style";
import { HourNow } from "../../service/date.service";
import { useState, useEffect } from "react";

export const Clock = () => {
    const [time, setTime] = useState(HourNow())

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(HourNow())
        },1000);

        return ()=>{
            clearInterval(interval)
        }
    },[])

    return <Txt style={s.time}>{time}</Txt>
}