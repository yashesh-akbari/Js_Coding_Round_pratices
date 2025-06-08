// 23. Calculate the sum of all digits in a number.
let num=12345;
let temp=0;
  for(let i=0;i<num;i++){
  temp=temp+num%10;
  num=Math.floor(num/10);
}
console.log(temp+1);
