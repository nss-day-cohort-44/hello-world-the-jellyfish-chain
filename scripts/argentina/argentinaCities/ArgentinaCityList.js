import { useCities } from "./ArgentinaCityDataProvider.js"
import { CityHTML } from "./ArgentinaCity"

// a function that gets exported so main.js can execute it
export const populateCityList = () => {
  // we need to know what html element to reference to put cities in
  const cityContainer = document.querySelector(".cities")
  // store what useCities returns into a variable (the array of copied cities)
  const arrayOfCities = useCities()

  // starting the string to add all of the HTML to
  let buildCityList = "" 
  // loop through the array of donuts, 
  for (const singleCity of arrayOfCities) {
      // and turn each donut object into an html representation of a donut AND adding the HTML to our buildDonutList string
      buildCityList += CityHTML(singleCity)
  }

  // we need to put the list of donuts in the donutContainer
  cityContainer.innerHTML += `<div class="coolStyles">${buildCityList}</div>`
  console.log("GOOD JOB! 👍")
}