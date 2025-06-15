// 30. Remove whitespace from a string.

let str="hello world dud  duifdfhkiefq efhdkde"
let str1="";
let remove=str.split("");
for(let i=0;i<remove.length;i++){
  if(remove[i]!==" "){
    str1=str1+remove[i];
  }
  else{
    continue;
  }
}
console.log(str1);
