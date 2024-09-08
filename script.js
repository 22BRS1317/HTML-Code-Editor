function run(){
    let htmlCode =document.getElementById("html-code");
    let cssCode =document.getElementById("css-code");
    let jsCode =document.getElementById("js-code");
    let Output = document.getElementById("output");
    Output.contentDocument.body.innerHTML=htmlCode.value+"<style>"+cssCode.value+"</style>";
    Output.contentWindow.eval(jsCode.value);
}