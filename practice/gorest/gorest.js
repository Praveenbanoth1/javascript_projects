let data = {
  name: "praveen banoth",
  gender: "Male",
  email: "praveenbanoth785@gmail.com",
  status: "Active"
};

let options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer efc576bc866b9a547a88cf1bbcde5c0803897ae04d8645674278222808c1"
  },
  body: JSON.stringify(data)
};

fetch("https://gorest.co.in/public-api/users", options)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonData) {
    console.log(jsonData);
  });

/* let options = {
  method: "GET"
};

fetch("https://gorest.co.in/public-api/users", options)
    .then(function(response) {
    return response.status;
  })
  .then(function(status) {
    console.log(status);
  }); */