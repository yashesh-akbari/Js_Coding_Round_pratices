// 35. Check if two arrays are equal.
let arr=[0,1,2,34,4];
let sort1=arr.sort();
let arr1=[0,1,2,34,4];
let sort2=arr1.sort();
let status=true;
if(arr.length===arr1.length){
  for(let i=0;i<arr.length;i++){
    if(sort2[i]===sort1[i]){
      status=true;
    }
    else{
      stutus=false;
      break;
    }
  }
}
else{
  console.log("array are not same");
}
if(status==true){
  console.log("array are same");
}
else{
  console.log("array are not same");
}