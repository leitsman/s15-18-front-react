export const SERVER_ROUTES = {
  login: "/auth/login",
  register: "/auth/register",
  person: {
    getAll: "/persons/all",
    getCurrent: "/persons/info",
    create: "/persons/save",
    update: "/persons/update",
    setRecycleCenterStart: "/persons/",
    setRecycleCenterEnd: "/assign-recycle-center/",
    findByID: "/persons/",
    findByDNI: "/persons/findByDNI/"
  },
  recycleHistory: {
    getByPersonId: "/history/personId/",
    create: "/history/recycle"
  }
};
