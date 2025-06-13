// 28. Find the maximum value in an object.

let obj=[{name:"yashesh",amount:20330},
 {name:"yasheshs",amount:2032}]
let s1=Math.max(...obj.map(val=>val.amount))
console.log(s1);
