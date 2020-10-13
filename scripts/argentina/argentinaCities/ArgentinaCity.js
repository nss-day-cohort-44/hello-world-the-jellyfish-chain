export const CityHTML = (singleCityObject) => {
  return `
  <section>
    <p>Name: ${singleCityObject.name}</p>
    <p>Population: ${singleCityObject.population}</p>
  </section>
  `
}