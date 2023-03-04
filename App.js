import { ImageBackground } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";
import { Home } from "./screens/home/Home";
import backgroundImg from "./assets/background.png";
import AlataRegular from "./assets/fonts/Alata-Regular.ttf";
import { useFonts } from "expo-font";

export default function App() {
  const [fontIsLoad] = useFonts({
    "Alata-Regular": AlataRegular,
  });
  return (
    <ImageBackground
      source={backgroundImg}
      style={s.imageBackground}
      imageStyle={s.backgroundOpacity}
    >
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          {fontIsLoad ? <Home /> : null}
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
