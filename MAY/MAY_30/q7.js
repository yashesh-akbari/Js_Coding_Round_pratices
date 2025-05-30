// 7. Check if a string is a palindrome.
//answer is string is revese then compare

let arr="madam";
let temp="";
for(let i=arr.length-1;i>=0;i--){
  temp=temp+arr[i];
}
if(arr===temp){
  console.log(arr+" is palindrom");
}else{
  console.log(arr+" is not palindrom");
}
