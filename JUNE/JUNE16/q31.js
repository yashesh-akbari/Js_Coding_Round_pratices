// 31. Find the sum of all numbers in a nested array.

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7,8,9]
];

let result=0;
for(let i=0;i<arr.length;i++){
  for (let j = 0; j <=i ; j++) {
    result=result+arr[i][j];
  }
}
console.log(result);
