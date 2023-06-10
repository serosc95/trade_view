// document.addEventListener("DOMContentLoaded", ready);
// function ready() {}
function frameLoaded(){
    var iframe =  document.getElementById('graph');
    var frameContent = iframe.contentWindow.document.body.innerHTML;
    console.log("VALOR", frameContent);
}