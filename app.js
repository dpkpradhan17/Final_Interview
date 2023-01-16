var input=document.querySelector("#input");
var clickbtn = document.querySelector("#btn");
var output = document.querySelector("#output");
var lengthh =document.querySelector("#length");

clickbtn.addEventListener("click", clickHandler);

function clickHandler(){
    var content= input.value;
    var len = content.length;
    output.innerText= content + len;
    //lengthh.innerText =len;

}