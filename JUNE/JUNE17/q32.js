// 32. Check if a string contains only digits.
// let str="0123e"
let readline=require("readline");

let rl=readline.createInterface({
  input:process.stdin,
  output:process.stdout
})

rl.question("enter the string: ",(str)=>{
  let num=true;
let arr=str.split("");
for(let i=0;i<arr.length;i++){
  if(arr[i]=="0" || arr[i]=="1" || arr[i]=="2" || arr[i]=="3" || arr[i]=="4" || arr[i]=="5" || arr[i]=="6" || arr[i]=="7" || arr[i]=="8" || arr[i]=="9"){
    num=true;
  }
  else{
    // console.log(`string contains digits and more...`);
    num=false;
    break;
  }
}
if(num==true){
  console.log(`string is only contain the digits`);
}
else{
  console.log(`string is contain digits and something else`);
}
rl.close();
})

// let str="012"
