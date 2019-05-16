const jr = (url, method="GET", body=null) => {
  return fetch(url, {
    headers: {
      "Content-Type": "application/json"
    },
    body: body ? JSON.stringify(body) : body,
    method: method
  });
};


export default jr;