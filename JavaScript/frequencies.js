const frequencies = (arr) => {
  arr.reduce((arr, val) => {
    arr[val] = arr[val] ? arr[val] + 1 : 1;
    return arr
  }, {})
}
