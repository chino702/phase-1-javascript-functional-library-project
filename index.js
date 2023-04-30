function updateArray(arr) {
    return arr.map(num => num * 2)
  }
  
  function updateObject(obj) {
    let updatedObj = {}
    for (let key in obj) {
      updatedObj[key] = obj[key] * 2
    }
    return updatedObj
  }
  
  module.exports = { updateArray, updateObject }
  
  function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i])
      }
    } else {
      for (const key in collection) {
        callback(collection[key])
      }
    }
    return collection
  }

  function myMap(collection, callback) {
    const newArray = [];
    for (let item in collection) {
      newArray.push(callback(collection[item], item, collection));
    }
    return newArray;
  }
  
  
  function myReduce(collection, callback, accumulator) {
    let keys = myKeys(collection)
    let length = keys.length
    let index = 0
  
    if (accumulator === undefined) {
      accumulator = collection[keys[index]]
      index++
    }
  
    for (index; index < length; index++) {
      let key = keys[index]
      accumulator = callback(accumulator, collection[key], key, collection)
    }
    return accumulator
  }
  


  // myFind
function myFind(collection, predicate) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
  }
  
  // myFilter
  function myFilter(collection, predicate) {
    const result = [];
  
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        result.push(collection[i]);
      }
    }
  
    return result;
  }
  
  // mySize
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  function myFirst(collection, n) {
    if (!Array.isArray(collection)) {
      collection = Object.values(collection);
    }
    if (!n) {
      return collection[0];
    } else {
      return collection.slice(0, n);
    }
  }
  
  
  function myLast(collection, n) {
    if (!Array.isArray(collection)) {
      collection = Object.values(collection);
    }
    if (!n) {
      return collection[collection.length - 1];
    } else {
      return collection.slice(-n);
    }
  }
  
  function myKeys(obj) {
    const keys = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
  }
  
  function myValues(obj) {
    const values = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        values.push(obj[key]);
      }
    }
    return values;
  }
  