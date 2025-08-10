const submitButton = document.querySelector(".submitButton");
var allergen = "";
var product = "";
var business = "";
var date = "";
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

    //doing same thing with the product input and text
    product = document.getElementById("productInput").value;
    console.log(product);
    document.getElementById("productInput").style.visibility = "hidden";
    document.getElementById("productReplacement").innerHTML = product;
    document.getElementById("productReplacement").style.visibility = "visible";

    //"" business
    business = document.getElementById("businessInput").value;
    console.log(business);
    document.getElementById("businessInput").style.visibility = "hidden";
    document.getElementById("businessReplacement").innerHTML = product;
    document.getElementById("businessReplacement").style.visibility = "visible";

    //"" data
    date = document.getElementById("dateInput").value;
    console.log(date);
    document.getElementById("dateInput").style.visibility = "hidden";
    document.getElementById("dateReplacement").innerHTML = date;
    document.getElementById("dateReplacement").style.visibility = "visible";
    



   
}