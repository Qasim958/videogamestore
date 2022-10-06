import axios from "axios";
import { CLIENT_ID } from "../settings/api";

// export const instance = axios.create();
// instance.defaults.baseURL = BASE_URL;
// instance.defaults.headers.common["client_id"] = CLIENT_ID;
// instance.defaults.headers.common["client_secret"] = CLIENT_SECRET;

export const getApiData = async (url, method, headers, data) => {
  // console.log({ url, method, headers, data });
  try {
    let response;
    if (data !== undefined && headers !== undefined) {
      console.log("1");
      response = await axios({
        url,
        method,
        headers,
        data,
      });
    } else if (data === undefined && headers !== undefined) {
      console.log("called");
      response = await axios({
        url,
        headers,
      });
    } else if (data === undefined && headers === undefined) {
      response = await axios({ url, method, data });
    }
    return response.status === 200 ? await response.data : false;
  } catch (error) {
    // console.error("Check internet connection!!!");

    console.error(error);
  }
};
