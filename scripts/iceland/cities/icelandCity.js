/**
 *  Cities which renders individual objects as HTML
 */

export const City = (cityObj) => {
    return `
        <div class="iceland__cities">
        <p class="city__Reykjavik">${cityObj.name}</p>
        </div>
        `
}

