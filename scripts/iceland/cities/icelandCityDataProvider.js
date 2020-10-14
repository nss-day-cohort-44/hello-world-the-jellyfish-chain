/*
 *  You need to add more properties to complete the
 *  representation as an object.
 */

const cities = [
    {
       name: "Hafnarfjordur"
    },
    {
       name: "Kópavogur"
    },
    {
       name: "Reykjavik"
    }
]

export const useCity = () => {
    return cities.slice()
}

export const addCity = (cityObj) => {
    cities.push(cityObj)
}