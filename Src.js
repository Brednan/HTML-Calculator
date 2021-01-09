var calculateState = "none"
var prevNumber

function ButtonInput(buttonString){
    document.getElementById("ResultScreen").value += buttonString;
}
function ClearScreen(){
    document.getElementById("ResultScreen").value = " "
    calculateState = "none"
}
function AddInput(){
    prevNumber = document.getElementById("ResultScreen").value
    calculateState = "Add"
    document.getElementById("ResultScreen").value = " "
}
function SubtractInput(){
    prevNumber = document.getElementById("ResultScreen").value
    calculateState = "Subtract"
    document.getElementById("ResultScreen").value = " ";
}
function MultiplyInput(){
    prevNumber = document.getElementById("ResultScreen").value
    calculateState = "Multiply"
    document.getElementById("ResultScreen").value = " "
}
function DivideInput(){
    prevNumber = document.getElementById("ResultScreen").value
    calculateState = "Divide"
    document.getElementById("ResultScreen").value = " "
}
function GetResult(){
    if(calculateState == "Add"){
        var currentNumber = document.getElementById('ResultScreen').value
        var result_ = parseFloat(prevNumber) + parseFloat(currentNumber)
        document.getElementById("ResultScreen").value = result_
    }
    else if(calculateState == "Subtract"){
        var currentNumber = document.getElementById('ResultScreen').value
        var result_ = parseFloat(prevNumber) - parseFloat(currentNumber)
        document.getElementById("ResultScreen").value = result_
    }
    else if(calculateState == "Multiply"){
        var currentNumber = document.getElementById('ResultScreen').value
        var result_ = parseFloat(prevNumber) * parseFloat(currentNumber)
        document.getElementById("ResultScreen").value = result_
    }
    else if(calculateState == "Divide"){
        var currentNumber = document.getElementById('ResultScreen').value
        var result_ = parseFloat(prevNumber) / parseFloat(currentNumber)
        document.getElementById("ResultScreen").value = result_
    }
}