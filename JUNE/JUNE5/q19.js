// 19. Find the maximum length of a string in an array.

let arr=["helcjhglo","loreama","worldsqw"]
let temp=arr[0].length;
let arr1=arr[0];
for(let i=1;i<arr.length;i++){
  if(arr[i].length>temp){
    temp=arr[i].length;
    arr1=arr[i];
  }
}
console.log(arr1);
