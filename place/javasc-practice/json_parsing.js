// used API caliing and database call
// stringify() - to parsing JSON data to string
// parse() - to convert string to JSON data

let stduent = {
    name: "John",
    age: 20,
    city: "New York"
};
// stringifying JSON data to string
let jsonString = JSON.stringify(stduent);
console.log(jsonString);

// parsing string to JSON data
let jsonData = JSON.parse(jsonString);
console.log(jsonData);