javascript:
if (window.location.pathname.indexOf("KeyinOver") !== -1) {
  if(window.location.pathname.indexOf("English") !== -1){
    window.location.assign(window.location.href.replace("Other/KeyinOverE.aspx", "actionE.aspx"));
  }else{
    window.location.assign(window.location.href.replace("Other/KeyinOver.aspx", "action.aspx"));
  }
} else {
  var d = document.form1;
  d.txtCosEleSeq.value = "<<The Course Code>>";
  __doPostBack("btnAdd", "");
  document.getElementById("btnAdd").click();
  document.getElementById("btnAdd").disabled = true;
}
