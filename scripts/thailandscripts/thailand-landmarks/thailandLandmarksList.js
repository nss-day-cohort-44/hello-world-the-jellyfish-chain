import { useLandmarks } from "./thailandLandmarksData.js";
import { Landmark } from "./thailandLandmarks.js";

export const ThailandLandmarkList = () => {
  const landmarkContent = document.querySelector(".details__landmarks");
  const landmarkList = useLandmarks();
  let landmarkContentHTML = "";

  for (const landmark of landmarkList) {
    landmarkContentHTML += Landmark(landmark);
  }

  return (landmarkContent.innerHTML += `
  <h4>Landmarks</h4>
  ${landmarkContentHTML}
  `);
};
