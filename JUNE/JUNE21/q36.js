// 36. Find the intersection of two arrays.
// a^b,not allowed dublicate
//a={1,2,34,5,56};
//b={2,3,4,1,2,4};
//a^b={1,2,3,4,5,34,56}

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
  