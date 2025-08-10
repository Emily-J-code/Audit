const submitButton = document.querySelector(".submitButton");
var allergen = "";
var auditCount = 1;

// adding function so that a new audit will appear when button is clicked
submitButton.addEventListener("click", finishAudit);
function finishAudit(){
    auditCount++;
    //getting allergen input and replacing it with the new value
    allergen = document.getElementById("allergen").value;
    document.getElementById("allergen").style.visibility = "hidden";
    document.getElementById("allergenReplacement").style.visibility = "visible";
    document.getElementById("allergenReplacement").value = allergen;

    console.log(allergen);
}``