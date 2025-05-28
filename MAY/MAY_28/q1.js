// 1. Find the maximum number in an array.
let arr=[1,2,3,486,3,2,152,2,2,4,6];
// arr.sort();
let temp=arr[0];
console.log(arr);
for(let i=1;i<arr.length;i++){
  if(temp<arr[i]){
    temp=arr[i];
  }
}
console.log(temp);