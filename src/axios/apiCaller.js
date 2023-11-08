import axios from "axios";

const baseURL = "";
const apiKey = "8E2298DBF33572C28729FE909C4F7F77";

function makeAxios(
  authToken,
  responseType = "json",
  accept = "application/json",
  refreshToken
) {
  // authToken = authToken || localStorage.auth.getToken()
  authToken = authToken;
  return axios.create({
    baseURL: baseURL,
    withCredentials: false,
    headers: {
      Accept: accept,
      "Content-Type": "application/json",
    },
    responseType,
  });
}

const apiCaller = {
  call: async function (
    method,
    path,
    params,
    query,
    authToken = null,
    refreshToken = null,
    responseType = "json",
    accept = "application/json"
  ) {
    if (method === undefined || path === undefined) {
      throw Error("The parameters method and path must be required.");
    }
    method = method.toUpperCase();
    // const key = uuidv4()
    let url = `${path}`;
    if (query) {
      url = `${url}?${Object.keys(query)
        .map((key) => `${key}=${query[key]}`)
        .join("&")}`;
    }
    let res = null;
    try {
      console.log("[API] ", url, params);
      if (method === "GET") {
        res = await makeAxios(
          authToken,
          responseType,
          accept,
          refreshToken
        ).get(url);
      } else if (method === "POST") {
        res = await makeAxios(
          authToken,
          responseType,
          accept,
          refreshToken
        ).post(url, params);
      }
      console.log("[API response] ", res);
    } catch (e) {
      console.error(JSON.stringify(e, null, 4));
      console.error(e);
    }
    return res;
  },
};

const apiCallBox = {
  game: {
    async getGameData() {
      return await apiCaller.call(
        "GET",
        "https://partner.steam-api.com/ISteamUserStats/GetSchemaForGame/v2/"
      );
    },
  },
};

export default apiCallBox;
