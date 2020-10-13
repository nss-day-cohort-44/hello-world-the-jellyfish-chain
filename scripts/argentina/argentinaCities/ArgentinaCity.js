export const CityHTML = (singleCityObject) => {
  return `
  <section class="details__card">
    <p>Name: ${singleCityObject.name}</p>
    <p>Population: ${singleCityObject.population}</p>
  </section>
  `
}