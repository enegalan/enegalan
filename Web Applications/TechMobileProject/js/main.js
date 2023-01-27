 //Contacto
(function ($) {
    "use strict";
    /*[ Validamos información ]*/
    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var subject = $('.validate-input input[name="subject"]');
    var message = $('.validate-input textarea[name="message"]');
    $('.validate-form').on('submit',function(){
        var check = true;
        if($(name).val().trim() == ''){
            showValidate(name);
            check=false;
        }
        if($(subject).val().trim() == ''){
            showValidate(subject);
            check=false;
        }
        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check=false;
        }
        if($(message).val().trim() == ''){
            showValidate(message);
            check=false;
        }
        return check;
    });
    $('.validate-form .input1').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });
    function showValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).addClass('alert-validate');
    }
    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
});
//Navegador minimizado
$(document).ready(function(){
	var altura = $('.right').offset().top;
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
            $('.right').addClass('menu-min');
        }
		else{
			$('.right').removeClass('menu-min');
		}
	});
});
//Esqueleto img Producto en Catálogo
$(document).ready(function () {
    $(".loading").css('visibility', 'hidden');
    $(".esqueleto").delay("300").fadeIn("1000");
    $(".esqueleto").delay("200").fadeOut("100");
    $(".loading").delay("1000").addClass("loaded2").css('visibility', 'visible');
});
var imgs = document.getElementsByClassName('loading');
let esqueleto = imgs.nextElementSibling;
for (i in imgs) {
    imgs[i].onload = function () {
        this.className = 'loaded';
        esqueleto = this.nextElementSibling;
        esqueleto.className = 'deleted';
    }
}

$(document).ready(function () {
    $('html,body').scrollTop(0);
});