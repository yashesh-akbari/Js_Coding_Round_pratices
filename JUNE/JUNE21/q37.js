//37. Calculate the union of two arrays.
a=[1,2,34,5,56]
b=[1,2,3,4,5,34,56]
  for(let i=0;i<b.length;i++){
    a.push(b[i]);
  }
  a.sort();
  // console.log(a);
  let arr1=[];
  for(let i=0;i<a.length;i++){
    let temp=a[i];
      if(temp!==a[i+1]){
        arr1.push(a[i]);
      }
    }
  console.log(arr1);