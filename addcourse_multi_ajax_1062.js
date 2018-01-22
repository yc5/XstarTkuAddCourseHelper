var classCode = ["0242", "0276", "0265", "1834"]; //Put your class codes in this array.
var ms_VS = $("#__VIEWSTATE").val(),
  ms_VSG = "2E66DAD8",
  ms_EV = $("#__EVENTVALIDATION").val();

$.each(classCode, function(k, v) {
  console.log(k);
  $.ajax({
    type: "POST",
    url: "action.aspx",
    data: {
      __EVENTTARGET: "btnAdd",
      __EVENTARGUMENT: "",
      __VIEWSTATE: ms_VS,
      __VIEWSTATEGENERATOR: ms_VSG,
      __EVENTVALIDATION: ms_EV,
      txtCosEleSeq: v
    },
    success: function(data) {
      var el = $("<div></div>");
      el.html(data);
      var msg1 = v + $("#GridView2>tbody>tr:nth-child(2)>td:nth-child(5)",el).text();
      console.log(msg1);
      var msg2 = $("#form1>div:nth-child(4)>table>tbody>tr:nth-child(2)>td:nth-child(3)",el).text();
      msg2 = msg2.replace("\n", "");
      msg2 = msg2.replace(".... 請輸入開課序號後, 再按功能鍵...", "");
      msg2 = msg2.replace(/\s/g, "");
      console.log("加選狀態：" + msg2);
    }
  });
});
