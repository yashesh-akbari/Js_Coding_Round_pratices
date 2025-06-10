// 25. Find the longest common prefix in an array of strings.
let arr=["hellss","helloe"]
let temp=arr[0];
let arr1;
for(let i=0;i<arr.length;i++){
  arr1="";
  let a=arr[0].split("");
  let b=arr[i].split("");
  for(let j=0;j<a.length;j++){
    if(a[j]===b[j]){
      arr1=arr1+a[j];
    }else{
      break;
    }
    temp=arr1;
  }
}
console.log(temp);

