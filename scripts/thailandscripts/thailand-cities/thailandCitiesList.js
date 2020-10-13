import { useCities } from "./thailandCitiesData.js";
import { City } from "./thailandCities.js";

export const ThailandCityList = () => {
  const cityContent = document.querySelector(".details__city");
  const CitiesList = useCities();
  let cityContentHTML = "";

  for (const city of CitiesList) {
    cityContentHTML += City(city);
  }
  return (cityContent.innerHTML += `
  <h4>Cities</h4>
  ${cityContentHTML}
  `);
};
