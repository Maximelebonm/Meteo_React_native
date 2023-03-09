import { s } from "./SearchBar.style";
import { TextInput} from "react-native";
export const SearchBar = ({onSubmit})=> {
    return (
        <TextInput onSubmitEditing={(e)=> onSubmit(e.nativeEvent.text)} style={s.input} placeholder="cherche une ville"/>
    )
}