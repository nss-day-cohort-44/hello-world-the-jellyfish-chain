const celebrityCollection = [
    {
        name: "Prince Phillip of Greece and Denmark, Duke of Edinburgn",
        fact:"447 Royal Family of the United Kingdom and the other Commonwealth realms" ,
        
    },
    {
        name: "Tommy Lee",
        fact: "Musician, Songwriter, drummer, DJ" ,
        
    },
    {
        name: "Zach Galifianakis",
        fact: "Stand-up, film, television, music" ,
    
    },
]

export const useCelebrities = () => {
    return celebrityCollection.slice()
}