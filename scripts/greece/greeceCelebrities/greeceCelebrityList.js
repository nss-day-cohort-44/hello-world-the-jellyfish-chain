import {Celebrity} from "./greeceCelebrity.js"

import { useCelebrities } from "./greeceCelebrityDataProvider.js"

export const celebrityList = () => {
    const contentElement = document.querySelector(".details__card__celebrities")

    const celebrities = useCelebrities()

    let celebrityHtmlRepresentations = ""

    for(const celebrity of celebrities) {
        celebrityHtmlRepresentations += Celebrity(celebrity)
    }
    contentElement.innerHTML += `
        <h3>Celebrities</h3>
        ${celebrityHtmlRepresentations}
    `
    
}