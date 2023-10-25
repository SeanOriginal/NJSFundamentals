// Question 5

// Rewrite the following function using: a) function expression syntax, and b) arrow function
// syntax. Test each version to make sure they work the same.

// function getGreeting(name) {
//     return 'Hello ' + name + '!';
// }

// console.log(getGreeting('Sean'));

// A
const getGreetingFun = function(name) {
    return 'Hello ' + name + '!';
}

console.log(getGreetingFun('Sean'));

//B

const getGreetingArrow = (name) =>  {
    return 'Hello ' + name + '!';
}

console.log(getGreetingArrow('Sean'))