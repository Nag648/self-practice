var myObject = { 'a': 1, 'b': 2, 'c': 3 };

// returns a new object with the values at each key mapped using mapFn(value)
function objectMap(object, mapFn) {
  return Object.keys(object).reduce(function(result, key) {
    result[key] = mapFn(object[key])
    return result
  }, {})
}

var newObject = objectMap(myObject, function(value) {
  return value * 2
})

console.log(newObject);
// => { 'a': 2, 'b': 4, 'c': 6 }

console.log(myObject);
// => { 'a': 1, 'b': 2, 'c': 3 }
