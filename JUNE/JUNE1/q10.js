// 10. Convert a string to title case.
let str="hello world"
let ans=str.split(" ").map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(" ");
console.log(ans);
