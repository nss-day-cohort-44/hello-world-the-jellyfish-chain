export const City = (cityObj) => {
  return `
    <div class="card">
    <p><span class="bold">Name:</span>${cityObj.name}</p> 
    <p><span class="bold">Population:</span>${cityObj.population}</p> 
    </div>`;
};
