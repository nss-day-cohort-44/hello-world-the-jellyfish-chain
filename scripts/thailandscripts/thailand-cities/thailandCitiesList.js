import { useCities } from "./thailandCitiesData.js";
import { City } from "./thailandCities.js";

export const ThialandCityList = () => {
  const CitiesList = useCities();
  console.log(CitiesList);
};
