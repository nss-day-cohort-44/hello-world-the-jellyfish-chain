/**
 *  Celebrities which renders individual tip objects as HTML
 */

export const Celeb = (celebObj) => {
    return `
    <section class="details__card">
        <p>${celebObj.name}</p>  
    </section>
    `
}
