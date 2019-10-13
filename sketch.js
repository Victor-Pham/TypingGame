let rectWidth;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(11);
    rectWidth = windowWidth/27;
    textSize(windowWidth/27);
    textAlign(CENTER, CENTER);
    frameRate(30);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}


var words = ["projection",
    "lazy",
    "island",
    "greeting",
    "perceive",
    "resource",
    "knot",
    "major",
    "modest",
    "addition",
    "breeze",
    "injury",
    "enhance",
    "quit",
    "staircase",
    "drill",
    "timetable",
    "communication",
    "owner",
    "rest",
    "moment",
    "landowner",
    "nature",
    "ballet",
    "redundancy",
    "abandon",
    "dough",
    "lineage",
    "half",
    "swim"];

var index = 0;
var letter = 0;
var input = "";

var timer = 0;

function keyPressed() {
    let keyIndex = -1;
    //if (key >= 'a' && key <= 'z') {
      //keyIndex = key.charCodeAt(0) - 'a'.chsarCodeAt(0);
    //}
    fill(255);

    if(key == words[index].charAt(letter)){
        keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
        input += key;
        letter++;
        
       if(letter > words[index].length - 1){
            index++;
            letter = 0;
            background(11);
            input = "";
        }
        console.log(words[index]);
        console.log(index);
    }
    else{
        background(255,0,0);
    }
    


}

function draw() {
    background(11);
    
    if(words[index].charAt[letter] == key){
        fill(200,20,150);
    }
    else
        fill(255);
    
    text(words[index], windowWidth/2, windowHeight/3);
    text(input, windowWidth/2, windowHeight/2 + windowHeight/4);
    if(index < words.length - 1){
    for(var i = 0; i < index; i++){
        fill(255*random(), 255* random(), 255*random(), 255*random());
        ellipse(windowWidth * random(), windowHeight * random(), i * 100 + 3, i * 100 + 3);
    }
    if(index == 0 && letter >= 1 || index >= 1){
        timer++;
    }
}
else{
    background(255,0,255);
    fill(255);
    text("you win lol", windowWidth/2, windowHeight/2);
    var seconds = timer/30;
    var minutes = seconds/60;
    var wpm = words.length/minutes;
    console.log(minutes + "minutes");
    text("you typed " + wpm + " words per minute", windowWidth/2, windowHeight/2 + 300);
}



    console.log(timer);





    
    

}







