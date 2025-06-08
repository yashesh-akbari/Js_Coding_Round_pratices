// 24. Check if a number is a power of 2.
let num=24;
let power=Math.round(Math.sqrt(num));
if(num==Math.pow(power,2)){
  console.log(num+" is the power of 2");
}
else{
  console.log(num+" is not the power of 2");
}