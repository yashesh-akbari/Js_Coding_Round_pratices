// 2. Reverse a string.
let str="hello world"
let temp=""
for(let i=str.length-1;i>=0;i--){
  temp=temp+str[i];
}
console.log(temp);