// arefindrectangle 
let pRectangle = 50
let lRectangle = 20
Luas =  pRectangle * lRectangle
console.log(Luas)

// perimeterrectangle
Keliling = pRectangle + lRectangle + pRectangle + lRectangle
console.log(Keliling)

// circle
let r = 14
let d = r*2
console.log(d)

// circumference
let c = 2*3.14*r;
console.log(c)

// area
let a = 3.14*r*r;
console.log(a)

// triangle
let Angle = 180
let angleA = 35
let angleB = 45
angleC = Angle - (angleA + angleB)
console.log(angleC)

// differencedayydates
let dateL = new Date ('11/02/2022');
let dateM = new Date ('11/24/2022');
dif = (dateM.getTime() - dateL.getTime() ) / (1000 * 3600 * 24)
console.log(dif)

// convert
let mynumber = 550
let years = Math.floor(mynumber / 365)
let months = Math.floor(mynumber % 365 / 30)
let days = Math.floor(mynumber % 365 % 30)
console.log(`${years} years , ${months} months, ${days} days`)




    
