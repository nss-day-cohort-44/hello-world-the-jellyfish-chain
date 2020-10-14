export const Celebrity = (celebrityObj) => {
    return `
        <div class="details__card__one__celebrity">
            <p>Name: ${celebrityObj.name}</p>
            <p>Fact: ${celebrityObj.fact} </p>
        </div>`
}