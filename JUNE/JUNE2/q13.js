// 13. Find the minimum value in an array.

let arr=[1,23,2,4,41,40,1];
let temp=arr[0];
// let arr1=Math.max(arr);
for(let i=1;i<arr.length;i++){
  if(temp<arr[i]){
    temp=arr[i];
  }
}
console.log(temp);
