export const Landmark = (landmarkObj) => {
    return `
        <div class="details__card__one__landmark">
            <p>Name: ${landmarkObj.name}</p>
            <p>Year: ${landmarkObj.year} </p>
        </div>`
}