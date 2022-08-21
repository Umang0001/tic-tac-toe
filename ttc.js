// console.log('ttc');


// function for placing the X and Ys in the input field
let decider=true

function inputFunction(id){
    if (decider===true) {
        
        document.getElementById(id).value="X";
        decider=false
        document.getElementById(id).disabled=true
        // console.log(id);
        
    }
    
    else{
        document.getElementById(id).value="O";
        decider=true
        document.getElementById(id).disabled=true
    }
}


function func1(){
    inputFunction("1");
    drawCounter++;
    check();
    setFontSize("1")


}
function func2(){
    inputFunction("2");
    drawCounter++;
    check();
    setFontSize("2")
}
function func3(){
    inputFunction("3");
    drawCounter++;
    check();
    setFontSize("3")
}
function func4(){
    inputFunction("4");
    drawCounter++;
    check();
    setFontSize("4")
}
function func5(){
    inputFunction("5");
    drawCounter++;
    check();
    setFontSize("5")
}
function func6(){
    inputFunction("6");
    drawCounter++;
    check();
    setFontSize("6")
}
function func7(){
    inputFunction("7");
    drawCounter++;
    check();
    setFontSize("7")
}
function func8(){
    inputFunction("8");
    drawCounter++;
    check();
    setFontSize("8")
}
function func9(){
    inputFunction("9");
    drawCounter++;
    check();
    setFontSize("9")
    }
    
    
    
    
    let drawCounter=0;
    let result=false;
      // if this counter reaches 9 and still no one wins then it will be resulted in draw



    // function for checking the result
    
    function check(){
        let x1=document.getElementById('1').value;
        let x2=document.getElementById('2').value;
        let x3=document.getElementById('3').value;
        let x4=document.getElementById('4').value;
        let x5=document.getElementById('5').value;
        let x6=document.getElementById('6').value;
        let x7=document.getElementById('7').value;
        let x8=document.getElementById('8').value;
        let x9=document.getElementById('9').value;

        if(x1==x4&&x1==x7){
            document.querySelector(".container").innerHTML=`<h1>${x1} is the winner </h1>`
            result=true;
        }
        if(x1==x2&&x1==x3){
            document.querySelector(".container").innerHTML=`<h1>${x1} is the winner </h1>`
            result=true;
        }
        if(x1==x5&&x1==x9){
            document.querySelector(".container").innerHTML=`<h1>${x1} is the winner </h1>`
            result=true;
        }
        if(x2==x5&&x2==x8){
            document.querySelector(".container").innerHTML=`<h1>${x2} is the winner </h1>`
            result=true;
        }
        if(x3==x5&&x3==x7){
            document.querySelector(".container").innerHTML=`<h1>${x3} is the winner </h1>`
            result=true;
        }
        if(x3==x6&&x6==x9){
            document.querySelector(".container").innerHTML=`<h1>${x3} is the winner </h1>`
            result=true;
        }
        if(x4==x5&&x4==x6){
            document.querySelector(".container").innerHTML=`<h1>${x4} is the winner </h1>`
            result=true;
        }
        if(x7==x8&&x7==x9){
            document.querySelector(".container").innerHTML=`<h1>${x7} is the winner </h1>`
            result=true;
        }
        
        
        else if (drawCounter===9&& result===false) {
            document.querySelector(".container").innerHTML=`<h1>Draw!!!</h1>`
            
        }

    
    
}

// function for setting the fontSize of the input box


// I have to initially set the font size to 0, because when I was checking for the result it was creating problem by always resulting into true. so, I give each input box a different value , (you will understand it when you see the check function) 

function setFontSize(id){
    document.getElementById(id).style.fontSize="40px";
}





// it was quite challenging for me , i know this is not the perfect solution , but i tried my best , :)  .

