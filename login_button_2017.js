javascript: 
var d = document, myStuNo, myPsWd;
if (!d.getElementById("txtCONFM").value || !d.getElementById("txtPSWD").value) { 
	/*Copy your password to the variables.*/
    setMyPrivateInfo(); 

    /*Copy your password to the input fields.*/
    d.getElementById("txtStuNo").value = myStuNo;
    d.getElementById("txtPSWD").value = myPsWd; 

    /*Clear the confirm number input textbox if you've submitted wrong confirm numbers.*/
    d.getElementById("txtCONFM").autocomplete = "off";
    d.getElementById("txtCONFM").value = ""; 

    /*Give back your "Enter" key the right to submit the login form.*/ /*When you unfocus the comfirm textbox*/
    if (d.getElementById("bn_new_confirm")) {
        d.getElementById("bn_new_confirm").remove();
    }
    d.getElementById("_btnLogin").type = "submit"; 

    /*Scale up the comfirm img.*/
    d.getElementById("imgCONFM").style.width = "500px"; 

    /*d.form1.onkeyup = function(){submit_on_4()};*/ 
    /*You could enter confirm numbers without clicking the textbox. 
      How user-friendly this smart button is.*/
    d.getElementById("txtCONFM").select();

} else { 
	/*Submit the login form when you've filled it.*/
    d.form1.submit();
} 

/*Add a refresh button.*/
if (!newRefreshButton) {
    var newRefreshButton = document.createElement("input");
    newRefreshButton.type = "submit";
    newRefreshButton.name = "bn_new_confirm";
    newRefreshButton.id = "bn_new_confirm_";
    newRefreshButton.value = "%E9%87%8D%E6%96%B0%E6%95%B4%E7%90%86";
    newRefreshButton.style = "color:DarkMagenta;font-size:Medium;font-weight:bold;width:5em; margin-left:20px";
    insertAfter(d.getElementById("_btnLogin"), newRefreshButton);
} 

/*To protect your password from displaying on the link pop-up hint.*/
function setMyPrivateInfo() {
    myStuNo = "<<Your Student Number>>", myPsWd = "<<Your Password>>";
}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
} 
/*Bug: Type too fast will cause "worng comfirm number"*/ 
/*Before the system opening, you wouldn't like to log in and retype the comfirm number*/ 
/*function submit_on_4(){ if(document.getElementById("txtCONFM").value.length == 4){ d.form1.submit(); } }*/