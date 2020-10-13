import { useCelebrity } from "./ArgentinaCelebrityDataProvider.js"
import { CelebrityHTML } from "./ArgentinaCelebrity.js"


export const populateCelebrityList = () => {

  const celebrityContainer = document.querySelector(".details__card--celebrities")
  const arrayOfCelebrities = useCelebrity()

  let buildCelebrityList = "" 
  for (const singleCelebrity of arrayOfCelebrities) {
    buildCelebrityList += CelebrityHTML(singleCelebrity)
  }

  celebrityContainer.innerHTML += `
  <div>${buildCelebrityList}</div>
  `
  
}