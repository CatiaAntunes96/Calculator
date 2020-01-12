let displayValue = "0";
let value = "";
let storeValues = [];
let pendingValue;
let result;

const updateSecondDisplay = (e) => {
    let btnClicked = $(e.target).text();
    if (value === "0") {
        value = "";
    }
    value += btnClicked;
    $("#pendingValue").text(value);
}

const updateDisplay = (e) => {
    let numberClicked = $(e.target).text();
    if (displayValue === "0") {
        displayValue = "";
    }
    displayValue += numberClicked;
    $("#display__numbers").text(displayValue);
    console.log(numberClicked)
    
}

const operators = (e) => {
    let operatorBtn = $(e.target).text();
    console.log(operatorBtn);
    switch(operatorBtn) {
        case ("+"):
        pendingValue = displayValue;
        displayValue = "0";
        storeValues.push(pendingValue);
        storeValues.push(" + ");
        $("#display__numbers").text(displayValue);
        break;
        case ("-"):
        pendingValue = displayValue;
        displayValue = "0";
        storeValues.push(pendingValue);
        storeValues.push(" - ");
        $("#display__numbers").text(displayValue);
        break;
        case ("*"):
        pendingValue = displayValue;
        displayValue = "0";
        storeValues.push(pendingValue);
        storeValues.push(" * ");
        $("#display__numbers").text(displayValue);
        break;
        case ("/"):
        pendingValue = displayValue;
        displayValue = "0";
        storeValues.push(pendingValue);
        storeValues.push(" / ");
        $("#display__numbers").text(displayValue);
        break;
        case ("="):
        storeValues.push(displayValue);
        result = eval(storeValues.join(" "));
        displayValue = result + "";
        $("#display__numbers").text(displayValue);
        storeValues = [];
        default:
        break;
    }
}

const clear = () => {
    displayValue = "0";
    value="0";
    pendingValue = undefined;
    storeValues = [];
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

