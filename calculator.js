let displayValue = "0";
let storeValues = [];
let pendingValue;



//prevent code from running before doc is all loaded
$(function() {
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