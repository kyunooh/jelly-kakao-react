const jr = (url, method="GET", body={}) => {
  return fetch(url, {
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body),
    method: method
  });
};


export default jr;