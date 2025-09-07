const submitButton = document.querySelector(".submitButton");
const deleteButton = document.querySelector(".deleteButton");
const newAuditButton = document.querySelector("#newAuditButton")
var allergen = "";
var product = "";
var business = "";
var date = "";
var auditCount = 1;
var imgSource;


// adding function so that a new audit will appear when button is clicked
submitButton.addEventListener("click", finishAudit);
function finishAudit(){
    //getting allergen input and replacing it with the new value
    allergen = document.getElementById("allergenInput").value.toUpperCase();
    console.log(allergen);
    document.getElementById("allergenInput").style.visibility = "hidden";
    document.getElementById("allergenReplacement").innerHTML = allergen;
    document.getElementById("allergenReplacement").style.visibility = "visible";

    //doing same thing with the product input and text
    product = document.getElementById("productInput").value.toUpperCase();
    console.log(product);
    document.getElementById("productInput").style.visibility = "hidden";
    document.getElementById("productReplacement").innerHTML = product;
    document.getElementById("productReplacement").style.visibility = "visible";

    //"" business
    business = document.getElementById("businessInput").value.toUpperCase();
    console.log(business);
    document.getElementById("businessInput").style.visibility = "hidden";
    document.getElementById("businessReplacement").innerHTML = product;
    document.getElementById("businessReplacement").style.visibility = "visible";

    //"" date
    date = document.getElementById("dateInput").value.toUpperCase();
    console.log(date);
    document.getElementById("dateInput").style.visibility = "hidden";
    document.getElementById("dateReplacement").innerHTML = date;
    document.getElementById("dateReplacement").style.visibility = "visible";

    imgSource = document.getElementById("productImg").source;
    document.getElementById("productImg").style.visibility = "hidden";
    document.getElementById("imageReplacement").source = imgSource;
    document.getElementById("imageReplacement").style.visibility = "visibility";
}
// for the templates
// function finishAuditDuplicate(){
//     //getting allergen input and replacing it with the new value
//     const container = submitButtonDuplicate.closest(".textInputs");
//     const allergenInput = container.querySelector(".allergenInputDuplicate");
//     const allergenReplacement = container.querySelector(".allergenReplacementDuplicate");
//     allergenInput.style.visibility = "hidden";
//     allergenReplacement.innerHTML = allergenInput.value.toUpperCase();
//     allergenReplacement.style.visibility = "visible";
//     //allergen = duplicateTemplate.querySelector(".allergenInputDuplicate").value.toUpperCase();
//     //duplicateTemplate.querySelector(".allergenInputDuplicate").style.visibility = "hidden";
//     //duplicateTemplate.querySelector(".allergenReplacementDuplicate").innerHTML = allergen;
//     //duplicateTemplate.querySelector(".allergenReplacementDuplicate").style.visibility = "visible";

//     //doing same thing with the product input and text
//     product = duplicateTemplate.querySelector(".productInputDuplicate").value.toUpperCase();
//     console.log(product);
//     duplicateTemplate.querySelector(".productInputDuplicate").style.visibility = "hidden";
//     duplicateTemplate.querySelector(".productReplacementDuplicate").innerHTML = product;
//     duplicateTemplate.querySelector(".productReplacementDuplicate").style.visibility = "visible";

//     //"" business
//     business = duplicateTemplate.querySelector(".businessInputDuplicate").value.toUpperCase();
//     console.log(business);
//     duplicateTemplate.querySelector(".businessInputDuplicate").style.visibility = "hidden";
//     duplicateTemplate.querySelector(".businessReplacementDuplicate").innerHTML = product;
//     duplicateTemplate.querySelector(".businessReplacementDuplicate").style.visibility = "visible";

//     //"" date
//     date = duplicateTemplate.querySelector(".dateInputDuplicate").value.toUpperCase();
//     console.log(date);
//     duplicateTemplate.querySelector(".dateInputDuplicate").style.visibility = "hidden";
//     duplicateTemplate.querySelector(".dateReplacementDuplicate").innerHTML = date;
//     duplicateTemplate.querySelector(".dateReplacementDuplicate").style.visibility = "visible";

//     imgSource = duplicateTemplate.querySelector(".productImgDuplicate").source;
//     duplicateTemplate.querySelector(".productImgDuplicate").style.visibility = "hidden";
//     duplicateTemplate.querySelector(".imageReplacementDuplicate").source = imgSource;
//     duplicateTemplate.querySelector(".imageReplacementDuplicate").style.visibility = "visibility"    
//}
// adding a function that undos the text  
deleteButton.addEventListener("click", deleteAudit);
function deleteAudit(){
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

// for the templates
// function deleteAuditDuplicate(){
// //making the allergen input visible again and the text invisible
//     allergen = "";
//     duplicateTemplate.querySelector(".allergenInputDuplicate").style.visibility = "visible";
//     duplicateTemplate.querySelector(".allergenReplacementDuplicate").style.visibility = "hidden";
//     //making product input visible
//     product = "";
//     duplicateTemplate.querySelector(".productInputDuplicate").style.visibility = "visible";
//     duplicateTemplate.querySelector(".productReplacementDuplicate").style.visibility = "hidden";
//     //making business input visible
//     business = "";
//     duplicateTemplate.querySelector(".businessInputDuplicate").style.visibility = "visible";
//     duplicateTemplate.querySelector(".businessReplacementDuplicate").style.visibility = "hidden";
//     // making date input visible
//     date = "";
//     duplicateTemplate.querySelector(".dateInputDuplicate").style.visibility = "visible";
//     duplicateTemplate.querySelector(".dateReplacementDuplicate").style.visibility = "hidden";

// }
newAuditButton.addEventListener("click", addAudit);
//create a new audit by adding an identical template
function addAudit(){
    auditCount += 1;
    const auditTemplate = document.querySelector("#auditTemplates");
    const duplicateTemplate = auditTemplate.content.cloneNode(true);
    duplicateTemplate.querySelector(".auditNumber").innerHTML = "Audit " + auditCount;
    document.getElementById("innerDiv").appendChild(duplicateTemplate);

    const submitButtonDuplicate = duplicate.querySelector(".submitButtonDuplicate");
    const deleteButtonDuplicate = duplicate.querySelector(".deleteButtonDuplicate");

    submitButtonDuplicate.addEventListener("click", function(){
            //getting allergen input and replacing it with the new value
        const container = this.closest(".textInputs");
        const allergenInput = container.querySelector(".allergenInputDuplicate");
        const allergenReplacement = container.querySelector(".allergenReplacementDuplicate");
        allergenInput.style.visibility = "hidden";
        allergenReplacement.innerHTML = allergenInput.value.toUpperCase();
        allergenReplacement.style.visibility = "visible";
        //allergen = duplicateTemplate.querySelector(".allergenInputDuplicate").value.toUpperCase();
        //duplicateTemplate.querySelector(".allergenInputDuplicate").style.visibility = "hidden";
        //duplicateTemplate.querySelector(".allergenReplacementDuplicate").innerHTML = allergen;
        //duplicateTemplate.querySelector(".allergenReplacementDuplicate").style.visibility = "visible";

        //doing same thing with the product input and text
        product = container.querySelector(".productInputDuplicate").value.toUpperCase();
        console.log(product);
        container.querySelector(".productInputDuplicate").style.visibility = "hidden";
        container.querySelector(".productReplacementDuplicate").innerHTML = product;
        container.querySelector(".productReplacementDuplicate").style.visibility = "visible";

        //"" business
        business = container.querySelector(".businessInputDuplicate").value.toUpperCase();
        console.log(business);
        container.querySelector(".businessInputDuplicate").style.visibility = "hidden";
        container.querySelector(".businessReplacementDuplicate").innerHTML = product;
        container.querySelector(".businessReplacementDuplicate").style.visibility = "visible";

        //"" date
        date = container.querySelector(".dateInputDuplicate").value.toUpperCase();
        console.log(date);
        container.querySelector(".dateInputDuplicate").style.visibility = "hidden";
        container.querySelector(".dateReplacementDuplicate").innerHTML = date;
        container.querySelector(".dateReplacementDuplicate").style.visibility = "visible";

        imgSource = container.querySelector(".productImgDuplicate").source;
        container.querySelector(".productImgDuplicate").style.visibility = "hidden";
        container.querySelector(".imageReplacementDuplicate").source = imgSource;
        container.querySelector(".imageReplacementDuplicate").style.visibility = "visibility"    

    });
    deleteButtonDuplicate.addEventListener("click", function(){
            allergen = "";
        const container = this.closest()
        container.querySelector(".allergenInputDuplicate").style.visibility = "visible";
        container.querySelector(".allergenReplacementDuplicate").style.visibility = "hidden";
        //making product input visible
        product = "";
        container.querySelector(".productInputDuplicate").style.visibility = "visible";
        container.querySelector(".productReplacementDuplicate").style.visibility = "hidden";
        //making business input visible
        business = "";
        container.querySelector(".businessInputDuplicate").style.visibility = "visible";
        container.querySelector(".businessReplacementDuplicate").style.visibility = "hidden";
        // making date input visible
        date = "";
        container.querySelector(".dateInputDuplicate").style.visibility = "visible";
        container.querySelector(".dateReplacementDuplicate").style.visibility = "hidden";

    });



}