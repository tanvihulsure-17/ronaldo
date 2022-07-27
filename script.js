var heading= document.getElementById("name").innerHTML;

console.log(heading)

var button = document.querySelector(".button button");
var body= document.querySelector("body");
var randomcolor = "#";

var hexColors = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]




function generateRandomNumber(){
    var randomNum = Math.floor(Math.random()*16);
return randomNum;
}

function randomcolorgenerator(){
    randomcolor="#"
    for(var i=0; i<6 ; i++){
        var randomnumber = generateRandomNumber()
        randomcolor= randomcolor + hexColors[randomnumber];
        console.log(randomcolor)
    }
    return randomcolor;
}

function changebackground(){
    var color = randomcolorgenerator();
    body.style.background = color;
}

