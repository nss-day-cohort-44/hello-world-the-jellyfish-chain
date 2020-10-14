export const City = (cityObj) => {
    return `
        <div class="details__card__one__city">
            <p>Name:${cityObj.name}</p>
            <p>Population: ${cityObj.population} </p>
        </div>`
}