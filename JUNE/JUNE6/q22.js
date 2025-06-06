// 22. Find the index of a specific element in an array.

let arr=[1,3,1,3,32];
let num=3;
let index=-Infinity;

for(let i=0;i<arr.length;i++){
  if(num===arr[i])
  {
    index=i;
    break;
  }
}
console.log(num+ " is the position number " + index);