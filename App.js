import { Home } from "./screens/home/Home";
import AlataRegular from "./assets/fonts/Alata-Regular.ttf";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Forecast } from "./screens/forecast/Forcast";

const Stack = createNativeStackNavigator();
const navTheme = {
  colors: {
    background: "transparent",
  },
};

export default function App() {
  const [fontIsLoad] = useFonts({
    "Alata-Regular": AlataRegular,
  });
  return (
    <NavigationContainer theme={navTheme}>
      {fontIsLoad ? (
        <Stack.Navigator
          screenOptions={{ headerShown: false,
          animation : "none"}}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Forecast" component={Forecast} />
        </Stack.Navigator>
      ) : null}
    </NavigationContainer>
  );
}
