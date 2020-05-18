const host =
  process.env.NODE_ENV === "development"
    ? "http://192.168.1.48:4040"
    : "http://192.168.1.24:4040";

export const API = {
  OFFERING: `${host}/offering`,
};
