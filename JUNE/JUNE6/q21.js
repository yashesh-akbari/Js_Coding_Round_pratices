// 21. Check if two strings are anagrams.
// study = dusty
let str="study";
let str1="dusty";

for(let i=0;i<str.length;i++){
  if(str.length==str1.length){
    let arr1=str.split("").sort().join("");
    let arr2=str1.split("").sort().join("");
    if(arr2!=arr1){
      console.log("this is not anagrams");
      break;
    }else{
      console.log("this is anagrams");
      break;
    }
  }else{
    console.log("this is not anagrams");
  }
}