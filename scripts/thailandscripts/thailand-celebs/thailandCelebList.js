import { useCelebs } from "./thailandCelebsData.js";
import { Celeb } from "./thailandCeleb.js";

export const ThailandCelebList = () => {
  const celebContent = document.querySelector(".details__celebs");
  const celebsList = useCelebs();
  let celebContentHTML = "";

  for (const celeb of celebsList) {
    celebContentHTML += Celeb(celeb);
  }

  return (celebContent.innerHTML += `
  <h4>Celebrities</h4>
  ${celebContentHTML}
  `);
};
