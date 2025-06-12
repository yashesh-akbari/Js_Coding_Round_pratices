// 27. Calculate the difference between two dates.

let date1=new Date("2003-11-25");
let date=new Date("2003-11-26");

let differece=date-date1;

let answer=differece/(1000*24*60*60);

console.log('difference of date is '+answer);