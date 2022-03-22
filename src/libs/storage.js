const storagePrefix = "y_react_";

const storage = {
  getUser: () => {
    return JSON.parse(window.localStorage.getItem(`${storagePrefix}user`));
  },
  setUser: (user) => {
    window.localStorage.setItem(`${storagePrefix}user`, JSON.stringify(user));
  },
  clearUser: () => {
    window.localStorage.removeItem(`${storagePrefix}user`);
  },
  getToken: () => {
    return JSON.parse(window.localStorage.getItem(`${storagePrefix}token`));
  },
};

export default storage;
