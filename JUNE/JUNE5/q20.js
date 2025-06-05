// 20. Remove falsy values from an array.

// falsy value=NAN,null,0,"",undefined,false

let arr=["NAN",null,0,"",undefined,false,12,3,1,"satisfies"]
let arr1=[];
for(let i=0;i<arr.length;i++){
  if(arr[i]=="NAN" || arr[i]==null || arr[i]==0 || arr[i]=="" || arr[i]==false || arr[i]==undefined){
    continue;
  }
  else{
    arr1.push(arr[i]);
  }
}
console.log(arr1);