// 39. Find the difference between two arrays.
let arr=[12,2,4,5,6];
let arr1=[12,3,2,4];
let same=[]
  for(let i=0;i<arr.length;i++){
    let temp=arr[i];
    for (let j = 0; j < arr.length; j++) {
      if(temp==arr1[j]){
        same.push(arr1[j])
      }
    }
  }
  let same1=arr.filter((val)=>arr1.includes(val))
  let diff1=arr.filter((val)=>!same.includes(val))
  let diff2=arr1.filter((val)=>!same.includes(val))
  console.log(same1);
  let answer=diff1.concat(diff2);
  console.log(answer);
  