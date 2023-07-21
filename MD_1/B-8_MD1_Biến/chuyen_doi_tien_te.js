function changeMoney(){
    let inputAmount = document.getElementById("amount").value;
    let From = document.getElementById("From").value;
    let To = document.getElementById("To").value;
    let Result;
     if (From == "USD" && To == "VND") {
         Result = "Result: " + (inputAmount *23000) + "D"
     } else if (From == "VND" && To == "USD") {
         Result = "Result: " + (inputAmount /23000) + "$"
         else if (From == "VND" && To == "VND") {
             Result = "Result: " + inputAmount + "D"
             else Result = "Result: " + inputAmount + "$"
         }
     }
    document.getElementById("Result").innerHTML = Result;
}

