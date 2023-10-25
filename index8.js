// Question 8
// The object below represents a single city.
// a) Write a function that takes an object as an argument and uses a for...in loop to access
// and print to the console each of those object properties and their values. Test it using
// the sydney object below.
// b) Create a new object for a different city with different properties and call your function
// again with the new object.

const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
    }

// a) Write a function that takes an object as an argument and uses a for...in loop to access
 // and print to the console each of those object properties and their values. Test it using
// the sydney object below.
function theCity(city) { // part a: adding a function that runs through the properties of each object
        for (let key in city) {
          console.log(key + " = " + city[key]);
        }
      }
 
 
//   b) Create a new object for a different city with different properties and call your function
 //   again with the new object.    
const lakecharles = {
        name: "Lake Charles",
        originalName: "Charleston",
        population: 81_097,
        state: "Louisiana",
        founded: "1857 by early settle, Charles Sallier",
        timezone: "Central",
      };

theCity(sydney);
theCity(lakecharles);
