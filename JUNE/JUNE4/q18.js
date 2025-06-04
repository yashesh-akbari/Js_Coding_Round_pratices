// 18. Check if a number is a perfect square.
let readline=require("readline");
let rl=readline.createInterface({
  input:process.stdin,
  output:process.stdout
})
rl.question("Enter the number: ",(num)=>{
  let temp=Math.round(Math.sqrt(num))
// console.log(temp);
let num1=temp*temp;

  if(num==num1){
    console.log(num + " is perfect square");
  }
  else{
    console.log(num + " is not square");   
  }
  rl.close();
})
// let num=16;
