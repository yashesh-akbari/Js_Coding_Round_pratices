// 26. Check if a string is a valid email address.
//if string contain @ .com


let readline=require("readline");
let rl=readline.createInterface({
  input:process.stdin,
  output:process.stdout
})
rl.question("Enter the email address:",(str)=>{
 
if(str.includes("@")){
  console.log(str+` is vaild mail address`);
}
else{
   console.log(str+` is not vaild mail address`);
}
})
// let str="mynamedomain.com"
 // let answer=str.split("");
// console.log(answer);
// for(let i=0;i<answer.length;i++){
//   if(answer[i]=='@'){
//     console.log(str+` is vaild mail address`);
//     break;
//   }
//   else{
//     continue;
//   }
//   console.log(str+` is not valid mail address`);
// }