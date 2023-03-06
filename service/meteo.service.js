export const WEATHER_INTERPRATIONS = [
    {
      codes: [0],
      label: "Ensoleillé",
      image: require("../assets/meteo_img/sun.png"),
    },
    {
      codes: [1, 2, 3, 45, 48],
      label: "Nuageux",
      image: require("../assets/meteo_img/clouds.png"),
    },
    {
      codes: [
        51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 85, 86,
      ],
      label: "Pluvieux",
      image: require("../assets/meteo_img/rain.png"),
    },
    {
      codes: [71, 73, 75, 77],
      label: "Neigeux",
      image: require("../assets/meteo_img/snow.png"),
    },
    {
      codes: [96, 99],
      label: "Orageux",
      image: require("../assets/meteo_img/thunder.png"),
    },
  ];

  export const getWeater = (code) => {
    return WEATHER_INTERPRATIONS.find(item => item.codes.includes(code))
  }