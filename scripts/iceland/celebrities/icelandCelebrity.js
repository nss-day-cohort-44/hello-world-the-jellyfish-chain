/**
 *  Celebrities which renders individual tip objects as HTML
 */

export const Celeb = (celebObj) => {
    return `
    <section class="detailsCelebrity__card">
        <p class="celebrity__Hafþór">${celebObj.name}</p>  
    </section>
    `
}
