console.log("Welcome to the main module")

import { celebrityList } from "./greece/greeceCelebrities/greeceCelebrityList.js"
import {cityList} from "./greece/greeceCities/greeceCityList.js"
import {landmarkList} from "./greece/greeceLandmarks/greeceLandmarkList.js"
cityList()
landmarkList()
celebrityList()






// import { ThailandCityList } from "./thailandscripts/thailand-cities/thailandCitiesList.js";
// import { ThailandCelebList } from "./thailandscripts/thailand-celebs/thailandCelebList.js";
// import { ThailandLandmarkList } from "./thailandscripts/thailand-landmarks/thailandLandmarksList.js";

// ThailandCityList();
// ThailandCelebList();
// ThailandLandmarkList();


import { populateCelebrityList } from "./argentina/argentinaCelebrities/ArgentinaCelebrityList.js"
import { populateCityList } from "./argentina/argentinaCities/ArgentinaCityList.js"
import { populateLandmarkList } from "./argentina/argentinaLandmarks/ArgentinaLandmarkList.js"

populateCityList()
populateCelebrityList()
populateLandmarkList()


import { useCeleb } from "./iceland/celebrities/icelandCelebrityDataProvider.js";
import { celebList } from "./iceland/celebrities/icelandCelebrityList.js";

const allTheCelebs = useCeleb();
celebList();





