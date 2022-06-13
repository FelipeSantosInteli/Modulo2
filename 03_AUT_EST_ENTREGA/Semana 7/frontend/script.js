$(document).ready(function(){
    var btn = $('#toTop');
    btn.on('click', function(e) {
        $('html, body').animate({
            scrollTop: 0
        });
        e.preventDefault();
    })
});

api = 'http://127.0.0.1:3061/'


window.addEventListener("scroll", function(){
    var img = document.querySelector("img");
    img.classList.toggle("sticky", window.scrollY > 0)
})

window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("stickyNAV", window.scrollY > 0)  
})

var GETuser = {

    getUser() {
        $.ajax({
            url: api + 'users',
            type: 'GET',
            success: data => {
                var tx = ''
                tx += '<div class ="column">';
                data.forEach(element => {
                    tx += '<h5>' + element.title + '</h5>'
                });
                tx += '</div>'
                $('#getUser').html(tx);
            }
        });
    }

}
