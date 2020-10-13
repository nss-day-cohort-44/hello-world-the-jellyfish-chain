/**
 *  CelebList which renders individual celeb objects as HTML
 */

// TODO: Import `useCeleb` from the data provider module

import { Landmark } from "./icelandLandmark.js"
import { useLandmark } from "./icelandLandmarkDataProvider.js"

export const landmarkList = () => {
    const contentElement = document.querySelector(".listForLandmarks")

const landmarks = useLandmark()

let landmarkHTMLRepresentations = ""
for (const landmark of landmarks) {

    landmarkHTMLRepresentations += Landmark(landmark)
}

    contentElement.innerHTML += `
    <h4>Landmarks</h4>
        <p>${landmarkHTMLRepresentations}</p>
    `

}

