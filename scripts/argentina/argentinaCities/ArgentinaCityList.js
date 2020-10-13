import { useCities } from "./ArgentinaCityDataProvider.js"
import { CityHTML } from "./ArgentinaCity.js"


export const populateCityList = () => {

  const cityContainer = document.querySelector(".cities")
  const arrayOfCities = useCities()

  let buildCityList = "" 
  for (const singleCity of arrayOfCities) {
    buildCityList += CityHTML(singleCity)
  }

  cityContainer.innerHTML += `
  <div>${buildCityList}</div>
  `
  console.log("GOOD JOB! 👍")
}