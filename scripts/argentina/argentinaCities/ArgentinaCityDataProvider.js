const cities = [
  {
    name: "Buenos Aries",
    population: "2.89 million"
  },
  {
    name: "Mendoza",
    population: "1.886 million"
  },
  {
    name: "Ushuaia",
    population: "150,000"
  }
]

export const useCities = () => {
  return cities.slice()
}