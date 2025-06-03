// 16. Find the sum of all even numbers in an array.
let arr=[0,1,2,3,4,5,6];
let temp=0;
for(let i=0;i<arr.length;i++){
  if(i%2==0){
    temp+=arr[i];
  }
}
console.log("sum of all even number is: "+temp);
