//Count occurrences in an Array

const frequencies = (arr) => {
  
  return arr.reduce((array, value) => {
    
    array[value] = array[value] ? array[value] + 1 : 1;
    
    return array;
    
  }, {});
  
};

frequencies([...'ball']); // {b: 1, a: 1, l: 2}
frequencies([...'2022']); // {0: 1, 2: 3}
frequencies([...'Wampamba']); //{W: 1, a: 3, m: 2, p: 1, b: 1}
/*
Version 2
*/
const frequencies2 = arr => arr.reduce((a, v) => { 
  a[v] = (a[v] || 0 ) + 1;
  return a;
},{});
