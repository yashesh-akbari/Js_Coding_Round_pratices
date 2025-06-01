// 11. Find the maximum value in a 2D array.

let arr=[[1,2,8],[3,3,2],[2,1,2]]
let max=0;
for(let i=0;i<arr.length;i++){
  for(let j=0;j<arr[i].length;j++){
    if(arr[i][j]>max){
      max=arr[i][j];
    }
  }
}
console.log(max);
