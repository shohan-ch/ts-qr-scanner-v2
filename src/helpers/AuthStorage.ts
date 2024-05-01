const authStorage = {
  set: (token: string) => {
    localStorage.setItem("token", token);
    return true;
  },

  get: () => {
    let token = localStorage.getItem("token");
    return token || null;
  },
};

export default authStorage;
