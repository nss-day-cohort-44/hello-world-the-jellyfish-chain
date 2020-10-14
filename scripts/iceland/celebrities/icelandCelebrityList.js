/**
 *  CelebList which renders individual celeb objects as HTML
 */

// TODO: Import `useCeleb` from the data provider module

import { Celeb } from "./icelandCelebrity.js"
import { useCeleb } from "./icelandCelebrityDataProvider.js"

export const celebList = () => {
    const contentElement = document.querySelector(".details__celebs")

const celebs = useCeleb()

let celebHTMLRepresentations = ""
for (const celeb of celebs) {

    celebHTMLRepresentations += Celeb(celeb)
}

    contentElement.innerHTML += `
    <h4>Celebrities</h4>
        <p>${celebHTMLRepresentations}</p>
    `

}

