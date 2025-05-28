// 3. Check if a number is prime.
// prime number is 
// divese only 1 and it's self only
// ex.2 3 5 7 11...

let num=6;
for(let i=2;i<num;i++){
  if(num==1){
    console.log("1 is not prime number");
    break;
  }else if(num%i==0){
    console.log(num+" is not prime number");
    break;
  }
  else{
    console.log(num+" is prime number");
    break;
  }
}