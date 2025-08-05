const newAuditPress = document.querySelector(".newAuditButton:");


let auditCount = 1;

// adding function so that a new audit will appear when button is clicked
newAuditPress.addEventListener("click", addNewAudit);
function addNewAudit(){
    auditCount++;
    
}