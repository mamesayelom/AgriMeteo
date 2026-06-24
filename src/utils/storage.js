export const setLocationAsked = () => {
  localStorage.setItem("locationAsked", "true");
};

export const isLocationAsked = () => {
  return localStorage.getItem("locationAsked");
};