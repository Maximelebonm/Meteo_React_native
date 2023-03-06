import { ImageBackground } from "react-native";
import backgroundImg from "../../assets/background.png";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./container.style";

export function Container({children}){
 return (
    <ImageBackground
      source={backgroundImg}
      style={s.imageBackground}
      imageStyle={s.backgroundOpacity}
    >
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
            {children}
        </SafeAreaView>
    </SafeAreaProvider>
    </ImageBackground>
 )
}