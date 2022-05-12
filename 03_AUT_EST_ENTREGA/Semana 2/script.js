window.addEventListener("scroll", function(){
    var img = document.querySelector("img");
    img.classList.toggle("sticky", window.scrollY > 0)
})

window.addEventListener("scroll", function(){
    var NOME = document.querySelector("NOME");
    h2.NOME.classList.toggle("stickyNOME", window.scrollY > 0)  
})

window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("stickyNAV", window.scrollY > 0)  
})  