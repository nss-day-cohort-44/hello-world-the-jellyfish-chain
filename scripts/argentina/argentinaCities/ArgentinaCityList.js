import { useCities } from "./ArgentinaCityDataProvider.js"
import { CityHTML } from "./ArgentinaCity.js"


export const populateCityList = () => {

  const cityContainer = document.querySelector(".details__card--cities")
  const arrayOfCities = useCities()

  let buildCityList = "" 
  for (const singleCity of arrayOfCities) {
    buildCityList += CityHTML(singleCity)
  }

  cityContainer.innerHTML += `
  <div>${buildCityList}</div>
  `
  
}