javascript:
var d = document, myStuNo, myPsWd;
if(!d.getElementById("txtCONFM").value || !d.getElementById("txtPSWD").value){
	/*Copy your password to the variables.*/
	setMyPrivateInfo();

	/*Copy your password to the input fields.*/
	d.getElementById("txtStuNo").value = myStuNo;
	d.getElementById("txtPSWD").value = myPsWd;

	/*Clear the confirm number input textbox if you've submitted wrong confirm numbers.*/
	d.getElementById("txtCONFM").value = "";

	/*Give back your "Enter" key the right to submit the login form.*/
	d.getElementById("bn_new_confirm").type = "button";
	d.getElementById("_btnLogin").type = "submit";

	/*You could enter confirm numbers without clicking the textbox. How user-friendly this smart button is.*/
	d.getElementById("txtCONFM").select();
}else {
	/*Submit the login form when you've filled it.*/
	d.form1.submit();
}

/*This function is to protect your password from displaying on the link pop-up hint.*/
function setMyPrivateInfo(){ 
	myStuNo = "<<Your Student Number>>", myPsWd = "<<Your Password>>"; 
}