<<<<<<< HEAD
let displayValue = "0";
let storeValues = [];
let pendingValue;

=======
<<<<<<< Updated upstream
=======
let displayValue = "0";
let storeValues = [];
let pendingValue;
let result;

const updateDisplay = (e) => {
    let btnClicked = $(e.target).text();
        if (displayValue === "0") {
            displayValue = "";
        }
        displayValue += btnClicked;
        $("#display__numbers").text(displayValue);
        console.log(btnClicked)
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
   pendingValue = undefined;
   storeValues = [];
   $("#display__numbers").text(displayValue);
    }

    const decimal =() => {
        if (!displayValue.includes(".")) {
            displayValue += ".";
        }
        $("#display__numbers").text(displayValue);
    }
>>>>>>> Jquery


//prevent code from running before doc is all loaded
$(function() {
<<<<<<< HEAD
    let numberBtn = $(".numbers");
    for (let i = 0; i < numberBtn.length; i++) {
        numberBtn[i].click((event) => {
            let btnClicked = numberBtn..event.target.text();
            if (displayValue === "0") {
                displayValue = "";
            }
            displayValue += btnClicked;
            $("#display__numbers").innerText = displayValue;
            console.log(btnClicked);
            console.log(displayValue)
        })
    }

    $("#decimal").click(function () { 
        alert("Hello");
        console.log("hello")
        
    });
    
})
=======
    $(".numbers").on("click", updateDisplay);    
    $(".operator").on("click", operators);
    $("#clear").on("click", clear);    
    $("#decimal").on("click", decimal);

})
>>>>>>> Stashed changes
>>>>>>> Jquery
