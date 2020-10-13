import { ThailandCityList } from "./thailandscripts/thailand-cities/thailandCitiesList.js";
import { ThailandCelebList } from "./thailandscripts/thailand-celebs/thailandCelebList.js";
import { ThailandLandmarkList } from "./thailandscripts/thailand-landmarks/thailandLandmarksList.js";

ThailandCityList();
ThailandCelebList();
ThailandLandmarkList();

import { populateCityList } from "./argentina/argentinaCities/ArgentinaCityList.js";
populateCityList();

import { useCeleb } from "./iceland/celebrities/icelandCelebrityDataProvider.js";
import { celebList } from "./iceland/celebrities/icelandCelebrityList.js";

const allTheCelebs = useCeleb();
celebList();

import { populateLandmarkList } from "./argentina/argentinaLandmarks/ArgentinaLandmarkList.js";
populateLandmarkList();

import { populateCityList } from "./argentina/argentinaCities/ArgentinaCityList.js";
populateCityList();

import { useCeleb } from "./iceland/celebrities/icelandCelebrityDataProvider.js";
import { celebList } from "./iceland/celebrities/icelandCelebrityList.js";

const allTheCelebs = useCeleb();
celebList();
