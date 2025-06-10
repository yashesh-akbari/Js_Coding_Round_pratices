// 25. Find the longest common prefix in an array of strings.

//hint:
// For the input ["flower", "flow", "flight"], the output will be:
// Longest Common Prefix: fl

let arr=["flower", "flow", "flight"];
let temp=arr[0];
let answer;
for(let i=1;i<arr.length;i++){
  answer="";
  let a=temp.split("");
  let b=arr[i].split("");
 for(let j=0;j<b.length;j++){
  if(a[j]===b[j]){
   answer=answer+b[j];
  }
  else{
    break;
  }
 }
  temp=answer;
  console.log(temp);
}
console.log(answer);

  