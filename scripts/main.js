console.log("Welcome to the main module")












import { populateCityList } from "./argentina/argentinaCities/ArgentinaCityList.js"
populateCityList()






































import { useCeleb } from "./iceland/celebrities/icelandCelebrityDataProvider.js"
import { celebList } from "./iceland/celebrities/icelandCelebrityList.js"

const allTheCelebs = useCeleb()
celebList()

import { ThialandCityList } from "./thailandscripts/thailand-cities/thailandCitiesList.js";

ThialandCityList();
