/*
 *  You need to add more properties to complete his
 *  representation as an object.
 */

 const celebrities = [
     {
        name: "Hafþór Júlíus Björnsson"
     },
     {
        name: "Olafur Arnalds"
     },
     {
        name: "Stefan Karl Stefansson"
     }
 ]

 export const useCeleb = () => {
     return celebrities.slice()
 }

 export const addCeleb = (celebObj) => {
     celebrities.push(celebObj)
 }