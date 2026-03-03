let profile = {
    name:"praveen",
    age:24,
    role:"developer"
}

localStorage.setItem("profileDetails",JSON.stringify(profile));

let stringifiedProfileDetails = localStorage.getItem("profileDetails");
console.log(stringifiedProfileDetails);

let parseProfileDetails = JSON.parse(stringifiedProfileDetails);
console.log(parseProfileDetails);
console.log(typeof(parseProfileDetails));