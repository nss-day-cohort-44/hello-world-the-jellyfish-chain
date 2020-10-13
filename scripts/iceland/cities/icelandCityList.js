/**
 *  CelebList which renders individual celeb objects as HTML
 */

// TODO: Import `useCeleb` from the data provider module

import { City } from "./icelandCity.js"
import { useCity } from "./icelandCityDataProvider.js"

export const cityList = () => {
    const contentElement = document.querySelector(".listForCities")

const cities = useCity()

let cityHTMLRepresentations = ""
for (const city of cities) {

    cityHTMLRepresentations += City(city)
}

    contentElement.innerHTML += `
    <h4>Cities</h4>
        <p>${cityHTMLRepresentations}</p>
    `

}

