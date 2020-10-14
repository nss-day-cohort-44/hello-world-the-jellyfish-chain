import {City} from "./greeceCity.js"

import { useCities } from "./greeceDataProvider.js"

export const cityList = () => {
    const contentElement = document.querySelector(".details__card__cities")

    const cities = useCities()

    let cityHtmlRepresentations = ""

    for(const city of cities) {
        cityHtmlRepresentations += City(city)
    }
    contentElement.innerHTML += `
        <h3>Cities</h3>
        ${cityHtmlRepresentations}
    `
    
}

