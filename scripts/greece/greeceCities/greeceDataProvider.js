const cityCollection = [
    {
        name: ">Santorini",
        image:"../greece_pics/Santorini.jpg",
        Population:15,550 ,
        Climate: "Semi-Arid",
        funFact: "Due to it's volcanic past, Santorini has white and black beaches",
    },
    {
        name: "Athens",
        image:"./greece_pics/Athens,"
        Population: 664,046 ,
        Climate: "Mediterranean",
        funFact: "It is Europe's oldest capital",
    },
    {
        name: ">Mykonos",
        image: "../greece_pics/Mykonos.jpg",
        Population: 10,134 ,
        Climate: "Mediterranean",
        funFact: "Mykonos was a popular pirate hangout in the 1900's.",
    },
]

export const useCities = () {
    return cityCollection.slice()
}

