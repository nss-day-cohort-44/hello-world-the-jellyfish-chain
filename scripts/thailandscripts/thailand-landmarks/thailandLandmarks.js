export const Landmark = (landmarkObj) => {
  return `
    <p><span class="bold">Name</span>${landmarkObj.name}</p>
     <p><span class="bold">Location</span>${landmarkObj.location}</p>
    `;
};
