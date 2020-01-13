let displayValue = "0";
let value = "";
let storeValues = [];
let storeNumbers = [];
let pendingValue;
let result;
const operatorSignals = ["+", "*", "/", "-"];

const updateSecondDisplay = (e) => {
    let btnClicked = $(e.target).text();
    updateStore(btnClicked);
    
}

const updateDisplay = (e) => {
    let numberClicked = $(e.target).text();
    if (displayValue === "0") {
        displayValue = "";
    }
    storeNumbers.push(numberClicked);
    displayValue = storeNumbers[storeNumbers.length - 1];
    $("#display__numbers").text(displayValue);
}

const updateStore = (key) => {
    value = "";
    storeValues.push(`${key}`);
    if (value === "0") {
        value = "";
    }
    value = storeValues.join("");
    $("#pendingValue").text(value);
}

const operatorAction = (operatorText) => {
    if (displayValue === "0") {
        displayValue = "";
    }
    pendingValue = displayValue;
    displayValue = "0";
    //storeValues.push(pendingValue);
    //storeValues.push(` ${operatorText} `);
    $("#display__numbers").text(displayValue);
}

const operators = (e) => {
    let operatorBtn = $(e.target).text();

    if(checkForDoubleSignal() && operatorBtn != "-"){
        removeLastSignal();
    }
    
    if (operatorBtn !== "=") {
        operatorAction(operatorBtn)
    }else {
        //storeValues.push(displayValue);
        if (checkForDoubleSignal() && storeValues[storeValues.length - 1] == "-") {
            removeLastSignal();
        }
        result = eval(storeValues.join(" "));
        displayValue = result + "";
        $("#display__numbers").text(displayValue);
        storeValues = [];
    }
}

const checkForDoubleSignal = () =>{
    const lastSignal =  storeValues[storeValues.length - 1];
    return operatorSignals.includes(lastSignal);
}

const removeLastSignal = () =>{
    //update displayed text
    $("#pendingValue").text(storeValues.join(""))

    //remove last index in storValues
    storeValues.pop();
}

const clear = () => {
    displayValue = "0";
    value="0";
    pendingValue = undefined;
    storeValues = [];
    storeNumbers = [];
    $("#display__numbers").text(displayValue);
    $("#pendingValue").text(value);
    $(".numbers-click").removeClass("numbers-click");
    $(".operator-click").removeClass("operator-click");
}

const decimal =() => {
    if (!displayValue.includes(".")) {
        displayValue += ".";
    }
    $("#display__numbers").text(displayValue);
}

//prevent code from running before doc is all loaded
$(function() {
    $(".numbers").on("click", updateDisplay);    
    $(".operator").on("click", operators);
    $("#clear").on("click", clear);    
    $("#decimal").on("click", decimal);
    $(".btn").on("click", updateSecondDisplay);
    $(".numbers").on("click", function () {
        $(".numbers-click").removeClass("numbers-click");
        $(this).addClass("numbers-click");
    })
    $(".operator").on("click", function() {
        $(".operator-click").removeClass("operator-click");
        $(this).addClass("operator-click")
    })
})

