import { useCities } from "./ArgentinaCityDataProvider.js"
import { CityHTML } from "./ArgentinaCity.js"

// export const populateCityList = () => {
//   const CitiesList = useCities()
//   console.log(CitiesList)
// }

export const populateCityList = () => {

  const cityContainer = document.querySelector(".details__card--cities")
  const arrayOfCities = useCities()
  console.log(arrayOfCities)

  let buildCityList = "" 
  for (const singleCity of arrayOfCities) {
    buildCityList += CityHTML(singleCity)
  }

 cityContainer.innerHTML += `
  <section>
  <div>${buildCityList}</div>
  </section>
  `
console.log(cityContainer)
  
}