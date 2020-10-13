console.log("Welcome to the main module")


















































import { useCeleb } from "./iceland/celebrities/icelandCelebrityDataProvider.js"
import { celebList } from "./iceland/celebrities/icelandCelebrityList.js"
import { useCity } from "./iceland/cities/icelandCityDataProvider.js"
import { cityList } from "./iceland/cities/icelandCityList.js"
import { useLandmark} from "./iceland/landmarks/icelandLandmarkDataProvider.js"
import { landmarkList } from "./iceland/landmarks/icelandLandmarkList.js"

const allTheCelebs = useCeleb()
const allTheCities = useCity()
const alltheLandmarks = useLandmark()
celebList()
cityList()
landmarkList()

//import { populateCityList } from "./argentina/argentinaCities/ArgentinaCityList";
//populateCityList()

import { ThialandCityList } from "./thailandscripts/thailand-cities/thailandCitiesList.js";

ThialandCityList()
