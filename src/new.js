function New(func, ...arg) {
  // It create a new object
  const obj = {};

  if (func.prototype !== null) {
    // It sets this new object's [[prototype]] to be this constructor function's prototype object
    Object.setPrototypeOf(obj, func.prototype);
  }

  // It makes the this variable point to the newly create object
  const result = func.apply(obj, arg);

  // It returns the newly created object, unless the constructor function return a non-null object reference. In this case, the newly object is returned instead
  if ((typeof result === 'object' || typeof result === 'function') && result !== null) {
    return result;
  }

  return obj;
}


function Test(name = '') {
  this.name = name;
}

const test = New(Test, 'hanzx');

console.log(test);
