const submitButton = document.querySelector(".submitButton");
var allergen = "";
var auditCount = 1;

// adding function so that a new audit will appear when button is clicked
submitButton.addEventListener("click", finishAudit);
function finishAudit(){
    auditCount++;
    //getting allergen input and replacing it with the new value
    allergen = document.getElementById("allergenInput").value;
    console.log(allergen);
    document.getElementById("allergenInput").style.visibility = "hidden";
    document.getElementById("allergenReplacement").innerHTML = allergen;
    document.getElementById("allergenReplacement").style.visibility = "visible";

   
}``