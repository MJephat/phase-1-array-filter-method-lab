// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(arr, key) {
    return arr.filter((el)=>
    el.toLowerCase().includes(key.toLowerCase()));
}
console.log(findMatching(drivers,"Bo"))
console.log(findMatching(drivers,"ammy"))

function fuzzyMatch(drivers, attribute) {
    return drivers.filter(function (driver) { 
        return driver.toLowerCase().substring(0, attribute.length) === attribute.toLowerCase() })
}

function matchName(drivers, argument) {
    return drivers.filter(function (driver) { return driver.name === argument })
  }