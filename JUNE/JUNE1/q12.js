// 12. Calculate the area of a rectangle.
const readline=require('readline')

let rl=readline.createInterface({
  input:process.stdin,
  output:process.stdout
})

rl.question(
  "enter width: ",(widthInput)=>{
    rl.question("enter height: ",(HeightInput)=>{
      let width=parseFloat(widthInput);
      let height=parseFloat(HeightInput);
      let area=width*height;
console.log(area+" is area of a rectangle");
      rl.close();
    })
  }
)


//take user input
