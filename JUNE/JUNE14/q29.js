// 29. Check if a number is within a specific range.
let readline=require("readline");
let rl=readline.createInterface({
  input:process.stdin,
  output:process.stdout
})
rl.question("Enter a number:",(num)=>{
  rl.question("Enter the range you want to check starting range number",(range1)=>{
    rl.question("Enter the range you want to check starting range number",(range2)=>{
      if(num>=range1 && num<=range2){
  console.log(num+" is range of"+range1+" between "+range2);
}
else{
  console.log(num+" is not range of "+range1+" between "+range2);
}
      rl.close();
  })
  })
})
