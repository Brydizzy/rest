1) function filterOutOdds(...nums) {
    return nums.filter(num => num % 2 === 0);
  }

  2)function findMin(...args) {
   
    return Math.min(...args);
  }
  
  3)function mergeObjects(obj1, obj2) {
    return {...obj1, ...obj2};
  }

  
  4) function doubleAndReturnArgs(arr, ...args) {
    
    const doubledArr = arr.map(item => item * 2);
    
    const doubledArgs = args.map(item => item * 2);
    
    return [...doubledArr, ...doubledArgs];
  }

  5) const removeRandom = items => {
    const indexToRemove = Math.floor(Math.random() * items.length);
    return [...items.slice(0, indexToRemove), ...items.slice(indexToRemove + 1)];
  };
  const extend = (array1, array2) => {
    return [...array1, ...array2];
  };
  const addKeyVal = (obj, key, val) => {
    return {
      ...obj,
      [key]: val
    };
  };
  const removeKey = (obj, key) => {
    const {[key]: removedKey, ...rest} = obj;
    return rest;
  };
  const combine = (obj1, obj2) => {
    return {
      ...obj1,
      ...obj2
    };
  };
  const update = (obj, key, val) => {
    return {
      ...obj,
      [key]: val
    };
  };
  
  