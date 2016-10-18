const reverse = function (n){
  const reversed_array = [];
  for (let i = 0; i < n.length; i++){
    reversed_array[i] = n[(n.length - 1) - i];
  }
  console.log (reversed_array);
}
const array = [1, 2, 3, 4, 5];
reverse(array);