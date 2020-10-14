const cityCollection = [
    {
        name: "Santorini",
        population:"15,550" ,
        
    },
    {
        name: "Athens",
        population: "664,046" ,
        
    },
    {
        name: "Mykonos",
        population: "10,134" ,
    
    },
]

export const useCities = () => {
    return cityCollection.slice()
}

