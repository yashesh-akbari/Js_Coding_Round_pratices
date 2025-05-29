// 4. Calculate the factorial of a number.

//explain:5!=5*4*3*2*1=120
let num=3;
let temp=1;
for(let i=2;i<=num;i++){
  if(num==0 || num==1){
  console.log(num+ " factrial is 1");
  break;
}else{
  temp=temp*i;
}
}
console.log(temp);
