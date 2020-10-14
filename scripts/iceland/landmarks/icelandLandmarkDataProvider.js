/*
 *  You need to add more properties to complete the
 *  representation as an object.
 */

const landmarks = [
    {
       name: "Aurora Borealis"
    },
    {
       name: "Blue Lagoon"
    },
    {
       name: "Gluggafoss"
    }
]

export const useLandmark = () => {
    return landmarks.slice()
}

export const addLandmark = (landmarkObj) => {
    landmarks.push(landmarkObj)
}