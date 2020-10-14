import { LandmarkHTML } from "./ArgentinaLandmark.js"
import { useLandmarks } from "./ArgentinaLandmarkDataProvider.js" 

export const populateLandmarkList = () => {

  const landmarkContainer = document.querySelector(".details__card--landmarks")
  const arrayOfLandmarks = useLandmarks()

  let buildLandmarkList = "" 
  for (const singleLandmark of arrayOfLandmarks) {
    buildLandmarkList += LandmarkHTML(singleLandmark)
  }

  landmarkContainer.innerHTML += `
  <h2>Landmarks</h2>
  <p>${buildLandmarkList}</p>
  `
  
}