const submitButton = document.querySelector(".submitButton");
const deleteButton = document.querySelector(".deleteButton");
var allergen = "";
var product = "";
var business = "";
var date = "";
var auditCount = 1;
var imgSource;

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

    //"" date
    date = document.getElementById("dateInput").value;
    console.log(date);
    document.getElementById("dateInput").style.visibility = "hidden";
    document.getElementById("dateReplacement").innerHTML = date;
    document.getElementById("dateReplacement").style.visibility = "visible";

    imgSource = document.getElementById("productImg").source;
    document.getElementById("productImg").style.visibility = "hidden";
    document.getElementById("imageReplacement").source = imgSource;
    document.getElementById("imageReplacement").style.visibility = "visibility";
}

// adding a function that undos the text  
deleteButton.addEventListener("click", deleteAudit);
function deleteAudit(){
    auditCount--;
    //making the allergen input visible again and the text invisible
    allergen = "";
    document.getElementById("allergenInput").style.visibility = "visible";
    document.getElementById("allergenReplacement").style.visibility = "hidden";
    //making product input visible
    product = "";
    document.getElementById("productInput").style.visibility = "visible";
    document.getElementById("productReplacement").style.visibility = "hidden";
    //making business input visible
    business = "";
    document.getElementById("businessInput").style.visibility = "visible";
    document.getElementById("businessReplacement").style.visibility = "hidden";
    // making date input visible
    date = "";
    document.getElementById("dateInput").style.visibility = "visible";
    document.getElementById("dateReplacement").style.visibility = "hidden";


}