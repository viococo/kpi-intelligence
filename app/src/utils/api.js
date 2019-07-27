export const baseurl_api = "http://localhost:4000";

export const api = ({ route, method, data }) => {
  return new Promise((resolve, reject) => {
    fetch(`${baseurl_api}${route}`, {
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: data
    })
      .then(response => response.json())
      .then(json => {
        if (json.err === null) {
          console.log(json);
          return resolve(json.data);
        } else {
          return reject(json.message);
        }
      })
      .catch(error => {
        console.error(error);
        return reject("L'API ne répond pas.");
      });
  });
};
