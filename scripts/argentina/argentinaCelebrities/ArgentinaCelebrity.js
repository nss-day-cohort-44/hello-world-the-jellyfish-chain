export const CelebrityHTML = (singleCelebrityObject) => {
  return `
  <section class="details__card">
    <p>Name: ${singleCelebrityObject.name}</p>
    <p>About: ${singleCelebrityObject.about}</p>
  </section>
  `
}