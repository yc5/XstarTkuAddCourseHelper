javascript:
var loop, loop_img, myStuNo = "StudentNumber", myPsWd = "Password";
clearTimeout(loop);
clearTimeout(loop_img);

document.getElementById("txtStuNo").type = "password";
document.getElementById("txtStuNo").value = myStuNo;
document.getElementById("txtPSWD").value = myPsWd;

document.getElementById("imgCONFM").style.width = "500px";
document.getElementById("txtCONFM").value = "";
document.getElementById("txtCONFM").autocomplete = "off";
document.getElementById("txtCONFM").select();
document.getElementById("play1").click();

document.getElementById("txtCONFM").addEventListener("keyup", function() {
  if (event.charCode < 48 || event.charCode > 57) {
    document.getElementById("txtCONFM").type = "number";
    document.getElementById("txtCONFM").type = "text";
  }
});

(function() {
  document.getElementsByTagName("p")[1].innerHTML =
    '<p id="showtime">請輸入驗證碼</p><p>分流伺服器清單： ' +
    '<a href="http://www.ais.tku.edu.tw/elecos/login.aspx">中文</a>、' +
    '<a href="http://www.ais.tku.edu.tw/EleCos_English/loginE.aspx">英文</a>、' +
    '<a href="http://163.13.121.35/elecos/Login.aspx">.35</a>、' +
    '<a href="http://163.13.121.36/elecos/Login.aspx">.36</a>、' +
    '<a href="http://163.13.121.37/elecos/Login.aspx">.37</a>、' +
    '<a href="http://163.13.121.38/elecos/Login.aspx">.38</a>、' +
    '<a href="http://163.13.121.40/elecos/Login.aspx">.40(預設)</a>' +
    '</p>';
})();

(function autologin() {
  if (document.getElementById("txtCONFM").value.length == 6) {
    document.getElementById("btnLogin").click();
    clearTimeout(loop);
  } else {
    clearTimeout(loop);
  }
  loop = setTimeout(autologin, 100);
})();

(function animate_imgcomfm() {
  document.getElementById("imgCONFM").src = window.location.href.replace(/[Ll]ogin.*/g, "BaseData/confirm.ashx?s=" + new Date().getTime());
  loop_img = setTimeout(animate_imgcomfm, 1000);
})();
