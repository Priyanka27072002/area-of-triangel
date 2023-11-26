let len=prompt("Enter the length of the rectangle")
let wid=prompt("Enter the width of the rectangle")
let area
document.write("The length of the rectangle is "+len+"<br>")
document.write("The width of the rectangle is "+wid+"<br>")
let x =function(a,b){
    area=a*b
    return area
    
}
document.write(`The area of rectangle is ${x(len,wid)}`)

