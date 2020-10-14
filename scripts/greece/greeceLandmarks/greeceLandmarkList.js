import {Landmark} from "./greeceLandmark.js"

import { useLandmarks } from "./greeceLandmarkDataProvider.js"

export const landmarkList = () => {
    const contentElement = document.querySelector(".details__card__landmarks")

    const landmarks = useLandmarks()

    let landmarkHtmlRepresentations = ""

    for(const landmark of landmarks) {
        landmarkHtmlRepresentations += Landmark(landmark)
    }
    contentElement.innerHTML += `
        <h3>Landmarks</h3>
        ${landmarkHtmlRepresentations}
    `
    
}