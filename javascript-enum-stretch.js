// Question 1

var arr = ['H', {arr: ['e'], str: 'l'}, 'l', [{letter: 'o'}]]

function deepEach(arr){
  var keys = Object.keys(arr);
  keys.forEach(function(key){
    if(typeof arr[key] !== 'object'){
      console.log(arr[key]);
    } else {
      deepEach(arr[key]);
    }
  });
}

deepEach(arr);

// Question 2

// Because arrays and objects are the same type in javascript
