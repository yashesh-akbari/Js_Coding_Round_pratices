// 38. Check if a string is a valid URL.
let url="https://fitness-hub-production.up.railway.app/"
let demo=url.slice(0,4);
if(demo==="http"){
  console.log(url+`this url is valid`);
}else{
  console.log(url+`this url is not vaild`);
}
// console.log(demo);