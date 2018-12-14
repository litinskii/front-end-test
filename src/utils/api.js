import { API_URL } from "../configuration/settings";

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(`Error while checkStatus, status: ${response.statusText}`);
  error.response = response;
  throw error;
};

const parseJSON = response => response.json();

const get = async url => await parseJSON(checkStatus(await fetch(`${API_URL}${url}`)));

const set = async (url, params) =>
  await parseJSON(
    checkStatus(
      await fetch(`${API_URL}${url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
      })
    )
  );

export { get, set };
