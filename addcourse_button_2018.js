javascript:
if (window.location.pathname.indexOf("KeyinOver") !== -1) {
  window.location.assign("http://www.ais.tku.edu.tw/EleCos/action.aspx");
} else {
  var d = document.form1;
  d.txtCosEleSeq.value = "<<The Course Code>>";
  __doPostBack("btnAdd", "");
  document.getElementById("btnAdd").click();
  document.getElementById("btnAdd").disabled = true;
}
