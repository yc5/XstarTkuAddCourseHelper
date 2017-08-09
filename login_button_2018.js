javascript:
var loop, loop_img, myStuNo = "<<Student Number>>", myPsWd = "<<Password>>";
var time_start = new Date(2017, 7, 8, 17, 30, 0);
clearTimeout(loop);
clearTimeout(loop_img);

document.getElementById("txtStuNo").value = myStuNo;
document.getElementById("txtPSWD").value = myPsWd;

document.getElementById("imgCONFM").style.width = "500px";
document.getElementById("txtCONFM").value = "";
document.getElementById("txtCONFM").select();
document.getElementById("play1").click();


(function(){
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

    var now = new Date();

    if (now >= time_start) { document.getElementById("btnLogin").click(); }

    document.getElementById("showtime").innerHTML = "現在時間：" +
      new Date() +
      "<br />" +
      "開放時間：" +
      time_start;
    console.clear();
    console.log((time_start - now) / 1000 + "s");
    
  } else {
    clearTimeout(loop);
  }
  loop = setTimeout(autologin, 500);
})();

(function animate_imgcomfm() {
  document.getElementById("imgCONFM").src = "http://www.ais.tku.edu.tw/EleCos/BaseData/confirm.ashx?s=" + new Date().getTime();
  loop_img = setTimeout(animate_imgcomfm, 1000);
})();

