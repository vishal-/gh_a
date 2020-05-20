const host =
  process.env.NODE_ENV === "development"
    ? "http://192.168.1.48:4040"
    : "http://192.168.1.48:4040";

export const METHOD = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE"
};

export const API = {
  OFFERING: `${host}/offering`,
  SERVICE: `${host}/service`
};
