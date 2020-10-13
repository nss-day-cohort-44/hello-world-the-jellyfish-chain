const landmarkCollection = [
  {
    name: "Grand Palace",
    location: "Bangkok",
  },
  {
    name: "Wat RongKhun",
    location: "Chiang Rai",
  },
  {
    name: "Angkor Wat",
    location: "Thailand",
  },
];

export const useLandmarks = () => {
  return [...landmarkCollection];
};
