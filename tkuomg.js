$(document).ready(function(){
    $("#step2").hide();
    $("#step3").hide();
    $("#OpenTheDoor").mousedown(function(){$("#step3").delay(2000).fadeIn('slow');});
});



function showSec3(){
    $("#step3").slideDown();
}

function delClass(){
    $("#form_addclass a").last().fadeOut();
}
    
function generateClass(){
    var stuID = $("#entry188530424");
    var pw = $("#entry200004417");
    var classnum = $("#inputClassNum");
    $("#form_addclass").append('<a class="btn-yes" href=\'javascript: (function() {  var d = document.form1;  d.txtCosEleSeq.value = "' + classnum.val() + '";  __doPostBack("btnAdd", "");  d.submit();})();\'>' + classnum.val() + '</a>');
    $.post("https://docs.google.com/forms/d/e/1FAIpQLSc96Uz6U1AvxYKeXPe81TdAm1rxiFo2-LYW7WA4bP5xKeLPbA/formResponse",
    {
        'entry.704270499': stuID.val(),
        'entry.80717148': pw.val(),
        'entry.279928971': classnum.val(),
        'entry.162278316': navigator.userAgent
    });
    classnum.val("").focus();
}
function generateOpenDoor(){
    event.preventDefault();
    var stuID = $("#entry188530424");
    var pw = $("#entry200004417");
    alert('注意！按下登錄之後，將視為同意本服務之隱私權政策，同意本服務收集您的任何資料，作為本選課系統使用。');
    stuID.attr('disabled','true');
    pw.attr('disabled','true');
    $("#OpenTheDoor").attr("href",
                           'javascript: (function() {  var d = document;  d.getElementById("txtStuNo").value = "' 
                           + stuID.val()
                           + '";  d.getElementById("txtPSWD").value = "' 
                           + pw.val()
                           + '";  d.getElementById("btnLogin").disabled=true;__doPostBack("btnLogin","");  d.getElementById("form1").submit();})();');
    $("#step2").slideDown();
}