// 14. Reverse an array.
let readline=require("readline");

let rl=readline.createInterface({
  input:process.stdin,
  output:process.stdout
})

rl.question("Enter the array:",(arr)=>{
  let temp=""
for(let i=arr.length-1;i>=0;i--){
  temp=temp+arr[i];
}
  console.log(temp);
  rl.close();
})
// let arr="hello world"

