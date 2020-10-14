const landmarkCollection = [
    {
        name: "The Parthenon",
        year:"447 BC" ,
        
    },
    {
        name: "Mt Lycabettus",
        year: "Unknown" ,
        
    },
    {
        name: "Delos",
        year: "478 BC" ,
    
    },
]

export const useLandmarks = () => {
    return landmarkCollection.slice()
}

