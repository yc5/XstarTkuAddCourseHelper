javascript:
if (window.location.pathname.indexOf("KeyinOver") !== -1) {
  document.getElementById("btnReLogin").click();
} else {
  var d = document.form1;
  d.txtCosEleSeq.value = "<<The Course Code>>";
  __doPostBack("btnAdd", "");
  document.getElementById("btnAdd").click();
  document.getElementById("btnAdd").disabled = true;
}
