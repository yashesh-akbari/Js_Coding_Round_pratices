// 23. Calculate the sum of all digits in a number.

let num=123;
let arr=[];
// let sum=num.split("");
for(let i=0;i<3;i++){
  arr.push(num.slice(i,1));
}
console.log(arr);
let temp=0;
for(let i=0;i<arr.length;i++){
  temp=temp+arr[i];
}
console.log(temp);
