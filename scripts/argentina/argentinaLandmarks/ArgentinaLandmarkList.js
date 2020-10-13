import { LandmarkHTML } from "./ArgentinaLandmark.js"
import { useLandmarks } from "./ArgentinaLandmarkDataProvider.js" 

export const populateLandmarkList = () => {

  const landmarkContainer = document.querySelector(".cities")
  const arrayOfCities = useCities()

  let buildCityList = "" 
  for (const singleCity of arrayOfCities) {
    buildCityList += CityHTML(singleCity)
  }

  landmarkContainer.innerHTML += `
  <div>${buildCityList}</div>
  `
  
}