var screen = document.getElementById('screen');

function btnClck(value){
    screen.value += value;
}

function clrScreen(){
    screen.value ="";
}

function findResult(){
    var result = eval(screen.value)
    screen.value = result;
}
