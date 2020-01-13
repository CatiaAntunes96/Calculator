let displayValue = "0";
let value = "";
let storeValues = [];
let pendingValue;
let result; //contains the final array
let strStoreValues; //transform array storeValues to string
let resultStr; //will contain the final str to check
let withoutSubstract; //willk contain the block without subtractor if subtractor is the last operator
const operatorReg = /(\+|-|\*|\/){2,}/

const updateSecondDisplay = (e) => {
    let btnClicked = $(e.target).text();
    updateStore(btnClicked);  
}

const updateDisplay = (e) => {
    let numberClicked = $(e.target).text();
    if (displayValue === "0") {
        displayValue = "";
    }
    displayValue += numberClicked;
    $("#display").text(displayValue);
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
    console.log(pendingValue)
    displayValue = "0";
    $("#display").text(displayValue);
}

const operators = (e) => {
    let operatorBtn = $(e.target).text();
    
    if (operatorBtn !== "=") {
        operatorAction(operatorBtn)
    } else {
        checkForDoubleSignal();
        result = eval(resultStr);
        displayValue = result + "";
        $("#display").text(displayValue);
        storeValues = [];
        pendingValue = result;
        storeValues.push(pendingValue)
    }
}

const checkForDoubleSignal = () =>{
    let strStoreValues = storeValues.join("");
    let matchSignal = strStoreValues.match(operatorReg);
    if (matchSignal != null) {
        let signal = matchSignal[0].toString(); //convert the block to string
        console.log(signal)
        console.log(signal[signal.length - 1])
        if (signal[signal.length - 1] !== " - ") {
            resultStr = strStoreValues.replace(signal, matchSignal[matchSignal.length - 1])
        } 
        if (signal[signal.length - 1] === "-") {
            withoutSubstract = signal.slice(0, signal.length - 1) //remove "-" from the block
            resultStr = strStoreValues.replace(withoutSubstract, withoutSubstract[withoutSubstract.length - 1]); //replaces de the consecutive operators with the latest one
        }
        
    } else {
        resultStr = strStoreValues;
    }
}

const clear = () => {
    displayValue = "0";
    value="0";
    pendingValue = undefined;
    storeValues = [];
    $("#display").text(displayValue);
    $("#pendingValue").text(value);
    $(".numbers-click").removeClass("numbers-click");
    $(".operator-click").removeClass("operator-click");
}

const decimal =() => {
    if (!displayValue.includes(".")) {
        displayValue += ".";
    }
    $("#display").text(displayValue);
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