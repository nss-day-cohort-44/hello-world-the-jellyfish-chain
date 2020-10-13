import { useCelebs } from "./thailandCelebsData.js";
import { Celeb } from "./thailandCeleb";

export const ThailandCelebList = () => {
  const celebContent = document.querySelector(".details__ce;ebs");
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
