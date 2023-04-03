
var loader = document.querySelector(".wrapper");

window.addEventListener("load" , () => {
    loader.style.display = "none"
})


var navigation = document.querySelector(".navbar");
var menuBtn = document.querySelector(".menu");
var menu = document.querySelector(".menu-img");
var button = document.getElementById('button');

menuBtn.onclick = function (){
    
   
    if(navigation.style.right == "0px") {
        navigation.style.right = "-1000px";
        menu.src = "images/menu.png";
    }
    else {
        navigation.style.right = "0px";
        menu.src = "images/close.png";
    }
    console.log("it works!")
  };