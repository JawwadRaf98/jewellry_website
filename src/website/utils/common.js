// return the token from the session storage
export const getTokenSession = () => {
  return localStorage.getItem("token") || null;
};

// remove the token and user from the session storage
export const removeTokenSession = () => {
  localStorage.removeItem("token");
  console.log("Coming in  common.js")
};

// set the token and user from the session storage
export const setTokenSession = (token) => {
  localStorage.setItem("token", token);
};
