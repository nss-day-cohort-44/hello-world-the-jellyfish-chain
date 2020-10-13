import { useCelebrities } from "./ArgentinaCelebrityDataProvider.js"
import { CelebrityHTML } from "./ArgentinaCelebrity.js"


export const populateCelebrityList = () => {

  const celebrityContainer = document.querySelector(".details__card--celebrities")
  const arrayOfCelebrities = useCelebrities()

  let buildCelebrityList = "" 
  for (const singleCelebrity of arrayOfCelebrities) {
    buildCelebrityList += CelebrityHTML(singleCelebrity)
  }

  celebrityContainer.innerHTML += `
  <h1>Celebrities</h1>
  <div>${buildCelebrityList}</div>
  `
  
}