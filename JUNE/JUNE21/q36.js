// 36. Find the intersection of two arrays.
// a^b,not allowed dublicate
// a={1,2,34,5,56};
// b={2,3,4,1,2,4};
// a^b={1,2,34}

a=[1,2,34,5,56]
let arr1=a.sort();
b=[1,2,3,4,5,34,56]
let arr2=b.sort();
let ans=[];
for(let i=0;i<b.length;i++){
  let temp=arr2[i];
  for(let j=0;j<b.length;j++){
      if(temp==arr1[j]){
    ans.push(temp);
  }
  else{
    continue;
  }
  }
}
console.log(ans);

