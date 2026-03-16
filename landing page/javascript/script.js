$(document).ready(function() {
    // Menu Mobile
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').slideToggle();
        $(this).find('i').toggleClass('fa-bars fa-xmark');
    });

    // Fechar menu ao clicar no link
    $('#mobile_nav_list a').on('click', function() {
        $('#mobile_menu').hide();
        $('#mobile_btn').find('i').addClass('fa-bars').removeClass('fa-xmark');
    });

    // Sombra no header ao rolar
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#header').addClass('shadow');
        } else {
            $('#header').removeClass('shadow');
        }
    });
});

const frases = [
"Criamos sites que vendem.",
"Transformamos visitantes em clientes.",
"Ajudamos pequenas empresas a crescer no digital."
];

let index = 0;

setInterval(() => {

const titulo = document.getElementById("changing-title");

titulo.style.opacity = 0;

setTimeout(() => {

index = (index + 1) % frases.length;
titulo.textContent = frases[index];

titulo.style.opacity = 1;

}, 400);

}, 3000);