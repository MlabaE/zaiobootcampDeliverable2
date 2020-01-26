

//change label according to selected color
function lblchange(){
   document.getElementById("sclr").innerHTML = document.getElementById("clr").innerHTML;
}

//allow button to increment or decrement value in input box
var inputNum = document.getElementById("num");
function up(max) {
    inputNum.value = parseInt(inputNum.value) + 1;
    if (inputNum.value >= parseInt(max)) {
        inputNum.value = max;
    }
}
function down(min) {
    inputNum.value = parseInt(inputNum.value) - 1;
    if (inputNum.value <= parseInt(min)) {
        inputNum.value = min;
    }
}

