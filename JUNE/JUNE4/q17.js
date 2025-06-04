// 17. Calculate the circumference of a circle.
let readline=require("readline");
let rl=readline.createInterface({
  input:process.stdin,
  output:process.stdout
})

rl.question("Enter the radius: ",(r)=>{
  let answer=2*3.14*r;
  console.log('the circumference of a circle ' + answer);
  rl.close()
})