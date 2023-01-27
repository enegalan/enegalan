/// Carrusel
window.onload = function () {
    var slider = document.getElementsByClassName("sliderBlock_items");
    var slides = document.getElementsByClassName("sliderBlock_items__itemPhoto");
    var next = document.getElementsByClassName("sliderBlock_controls__arrowForward")[0];
    var previous = document.getElementsByClassName("sliderBlock_controls__arrowBackward")[0];
    var items = document.getElementsByClassName("sliderBlock_positionControls")[0];
    var currentSlideItem = document.getElementsByClassName("sliderBlock_positionControls__paginatorItem");
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide, 5000);  /// Tiempo de delay de cada slide
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }
    function previousSlide() {
        goToSlide(currentSlide - 1);
    }
    function goToSlide(n) {
        slides[currentSlide].className = 'sliderBlock_items__itemPhoto';
        items.children[currentSlide].className = 'sliderBlock_positionControls__paginatorItem';
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].className = 'sliderBlock_items__itemPhoto sliderBlock_items__showing';
        items.children[currentSlide].className = 'sliderBlock_positionControls__paginatorItem sliderBlock_positionControls__active';
    }
    next.onclick = function () {
        nextSlide();
    };
    previous.onclick = function () {
        previousSlide();
    };
    function goToSlideAfterPushTheMiniBlock() {
        for (var i = 0; i < currentSlideItem.length; i++) {
            currentSlideItem[i].onclick = function (i) {
                var index = Array.prototype.indexOf.call(currentSlideItem, this);
                goToSlide(index);
            }
        }
    }
    goToSlideAfterPushTheMiniBlock();
    /// Especificaciones
    var buttonFullSpecification = document.getElementsByClassName("block_specification")[0];
    var buttonSpecification = document.getElementsByClassName("block_specification__specificationShow")[0];
    var buttonInformation = document.getElementsByClassName("block_specification__informationShow")[0];
    var blockCharacteristiic = document.querySelector(".block_descriptionCharacteristic");
    var activeCharacteristic = document.querySelector(".block_descriptionCharacteristic__active");
    buttonFullSpecification.onclick = function () {
        buttonSpecification.classList.toggle("hide");
        buttonInformation.classList.toggle("hide");
        blockCharacteristiic.classList.toggle("block_descriptionCharacteristic__active");
    };
    /// Cantidad para compra
    var up = document.getElementsByClassName('block_quantity__up')[0],
    down = document.getElementsByClassName('block_quantity__down')[0],
    input = document.getElementsByClassName('block_quantity__number')[0];
    function getValue() {
        return parseInt(input.value);
    }
    up.onclick = function (event) {
        input.value = getValue() + 1;
    };
    down.onclick = function (event) {
        if (input.value <= 1) {
            return 1;
        } else {
            input.value = getValue() - 1;
        }
    }
};
/// Navegador minimizado al hacer scroll
$(document).ready(function(){
	var altura = $('.right').offset().top;
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.right').addClass('menu-min');}
		else{
			$('.right').removeClass('menu-min');
			}
		});

});
/// Colores de cada producto
$(document).ready(function () {
    var black = $('.block_goodColor__black');
    var red = $('.block_goodColor__red');
    var yellow = $('.block_goodColor__yellow');
    var green = $('.block_goodColor__green');
    var purple = $('.block_goodColor__purple');
    var white = $('.block_goodColor__white');
    var silver = $('.block_goodColor__silver');
    var gold = $('.block_goodColor__gold');
    var rosegold = $('.block_goodColor__rosegold');
    var blue = $('.block_goodColor__blue');
    var grey = $('.block_goodColor__grey');
    var spacegrey = $('.block_goodColor__spacegrey');
    var orange = $('.block_goodColor__orange');
    var page = $('#articulo');
    black.click(function () {
        if (page.hasClass('iphone11')) {
            document.getElementById("1_1").src = "img/producto/11/black/1.png";
            document.getElementById("1_2").src = "img/producto/11/black/2.png";
            document.getElementById("1_3").src = "img/producto/11/black/3.png";
            document.getElementById("1_4").src = "img/producto/11/black/4.png";
            document.getElementById("1_5").src = "img/producto/11/black/5.png";
            $(".block_price__currency").text("489,99\u20ac");
        }
        if (page.hasClass('s10')) {
            document.getElementById("3_1").src = "img/producto/S10/black/1.png";
            document.getElementById("3_2").src = "img/producto/S10/black/2.png";
            document.getElementById("3_3").src = "img/producto/S10/black/3.png";
            $(".block_price__currency").text("309,99\u20ac");
        } 
        if (page.hasClass('reno4z')) {
            document.getElementById("6_1").src = "img/producto/Reno4 Z/black/1.png";
            document.getElementById("6_2").src = "img/producto/Reno4 Z/black/2.png";
            document.getElementById("6_3").src = "img/producto/Reno4 Z/black/3.png";
            $(".block_price__currency").text("363,99\u20ac");
        }
        if (page.hasClass('mi11')) {
            document.getElementById("7_1").src = "img/producto/Mi11/black/1.png";
            document.getElementById("7_2").src = "img/producto/Mi11/black/2.png";
            document.getElementById("7_3").src = "img/producto/Mi11/black/3.png";
            document.getElementById("7_4").src = "img/producto/Reno4 Z/black/4.png";
            $(".block_price__currency").text("530,99\u20ac");
        }
        if (page.hasClass('note9')) {
            document.getElementById("8_1").src = "img/producto/Note9/black/1.png";
            document.getElementById("8_2").src = "img/producto/Note9/black/2.png";
            document.getElementById("8_3").src = "img/producto/Note9/black/3.png";
            $(".block_price__currency").text("194,99\u20ac");
        }
        if (page.hasClass('p30pro')) {
            document.getElementById("11_1").src = "img/producto/P30 pro/black/1.png";
            document.getElementById("11_2").src = "img/producto/P30 pro/black/2.png";
            document.getElementById("11_3").src = "img/producto/P30 pro/black/3.png";
            $(".block_price__currency").text("301,99\u20ac");
        }
        if (page.hasClass('p40pro')) {
            document.getElementById("12_1").src = "img/producto/P40 pro/black/1.png";
            document.getElementById("12_2").src = "img/producto/P40 pro/black/2.png";
            document.getElementById("12_3").src = "img/producto/P40 pro/black/3.png";
            $(".block_price__currency").text("550,99\u20ac");
        }
    });
    red.click(function () {
        document.getElementById("1_1").src = "img/producto/11/red/1.png";
        document.getElementById("1_2").src = "img/producto/11/red/2.png";
        document.getElementById("1_3").src = "img/producto/11/red/3.png";
        document.getElementById("1_4").src = "img/producto/11/red/4.png";
        document.getElementById("1_5").src = "img/producto/11/red/5.png";
        $(".block_price__currency").text("403,99\u20ac");
    });
    yellow.click(function () {
        document.getElementById("1_1").src = "img/producto/11/yellow/1.png";
        document.getElementById("1_2").src = "img/producto/11/yellow/2.png";
        document.getElementById("1_3").src = "img/producto/11/yellow/3.png";
        document.getElementById("1_4").src = "img/producto/11/yellow/4.png";
        document.getElementById("1_5").src = "img/producto/11/yellow/5.png";
        $(".block_price__currency").text("425,99\u20ac");
    });
    green.click(function () {
        if (page.hasClass('iphone11')) {
            document.getElementById("1_1").src = "img/producto/11/green/1.png";
            document.getElementById("1_2").src = "img/producto/11/green/2.png";
            document.getElementById("1_3").src = "img/producto/11/green/3.png";
            document.getElementById("1_4").src = "img/producto/11/green/4.png";
            document.getElementById("1_5").src = "img/producto/11/green/5.png";
            $(".block_price__currency").text("435,99\u20ac");
        }
        if (page.hasClass('note9')) {
            document.getElementById("8_1").src = "img/producto/Note9/green/1.png";
            document.getElementById("8_2").src = "img/producto/Note9/green/2.png";
            document.getElementById("8_3").src = "img/producto/Note9/green/3.png";
            $(".block_price__currency").text("169,99\u20ac");
        }
    });
    purple.click(function () {
        if (page.hasClass('iphone11')) {
            document.getElementById("1_1").src = "img/producto/11/purple/1.png";
            document.getElementById("1_2").src = "img/producto/11/purple/2.png";
            document.getElementById("1_3").src = "img/producto/11/purple/3.png";
            document.getElementById("1_4").src = "img/producto/11/purple/4.png";
            document.getElementById("1_5").src = "img/producto/11/purple/5.png";
            $(".block_price__currency").text("439,99\u20ac");
        }
        if (page.hasClass('p30pro')) {
            document.getElementById("11_1").src = "img/producto/P30 pro/purple/1.png";
            document.getElementById("11_2").src = "img/producto/P30 pro/purple/2.png";
            document.getElementById("11_3").src = "img/producto/P30 pro/purple/3.png";
            $(".block_price__currency").text("381,99\u20ac");
    }
    });
    white.click(function () {
        if (page.hasClass('iphone11')) {
            document.getElementById("1_1").src = "img/producto/11/white/1.png";
            document.getElementById("1_2").src = "img/producto/11/white/2.png";
            document.getElementById("1_3").src = "img/producto/11/white/3.png";
            document.getElementById("1_4").src = "img/producto/11/white/4.png";
            document.getElementById("1_5").src = "img/producto/11/white/5.png";
            $(".block_price__currency").text("440,99\u20ac");
        }
        if (page.hasClass('reno4z')) {
            document.getElementById("6_1").src = "img/producto/Reno4 Z/white/1.png";
            document.getElementById("6_2").src = "img/producto/Reno4 Z/white/2.png";
            document.getElementById("6_3").src = "img/producto/Reno4 Z/white/3.png";
            $(".block_price__currency").text("271,99\u20ac");
        }
        if (page.hasClass('note9')) {
            document.getElementById("8_1").src = "img/producto/Note9/white/1.png";
            document.getElementById("8_2").src = "img/producto/Note9/white/2.png";
            document.getElementById("8_3").src = "img/producto/Note9/white/3.png";
            $(".block_price__currency").text("175,99\u20ac");
        }
        if (page.hasClass('p40pro')) {
            document.getElementById("12_1").src = "img/producto/P40 pro/white/1.png";
            document.getElementById("12_2").src = "img/producto/P40 pro/white/2.png";
            document.getElementById("12_3").src = "img/producto/P40 pro/white/3.png";
            $(".block_price__currency").text("431,99\u20ac");
        }
        if (page.hasClass('mi11')) {
            document.getElementById("7_1").src = "img/producto/Mi11/white/1.png";
            document.getElementById("7_2").src = "img/producto/Mi11/white/2.png";
            document.getElementById("7_3").src = "img/producto/Mi11/white/3.png";
            document.getElementById("7_4").src = "img/producto/Mi11/white/4.png";
            $(".block_price__currency").text("550,99\u20ac");
        }
    });
    silver.click(function () {
        if (page.hasClass('6s')) {
            document.getElementById("2_1").src = "img/producto/6S/silver/1.png";
            document.getElementById("2_2").src = "img/producto/6S/silver/2.png";
            document.getElementById("2_3").src = "img/producto/6S/silver/3.png";
            document.getElementById("2_4").src = "img/producto/6S/silver/4.png";
            document.getElementById("2_5").src = "img/producto/6S/silver/5.png";
            $(".block_price__currency").text("297,99\u20ac");
        }
        if (page.hasClass('s10')) {
            document.getElementById("3_1").src = "img/producto/S10/silver/1.png";
            document.getElementById("3_2").src = "img/producto/S10/silver/2.png";
            document.getElementById("3_3").src = "img/producto/S10/silver/3.png";
            document.getElementById("3_4").src = "img/producto/S10/silver/4.png";
            $(".block_price__currency").text("319,99\u20ac");
        }
        if (page.hasClass('p30pro')) {
            document.getElementById("11_1").src = "img/producto/P30 pro/silver/1.png";
            document.getElementById("11_2").src = "img/producto/P30 pro/silver/2.png";
            document.getElementById("11_3").src = "img/producto/P30 pro/silver/3.png";
            $(".block_price__currency").text("297,99\u20ac");
        }
    });
    gold.click(function () {
        if (page.hasClass('6s')) {
            document.getElementById("2_1").src = "img/producto/6S/gold/1.png";
            document.getElementById("2_2").src = "img/producto/6S/gold/2.png";
            document.getElementById("2_3").src = "img/producto/6S/gold/3.png";
            document.getElementById("2_4").src = "img/producto/6S/gold/4.png";
            document.getElementById("2_5").src = "img/producto/6S/gold/5.png";
            $(".block_price__currency").text("109,99\u20ac");
        }
        if (page.hasClass('s10')) {
            document.getElementById("3_1").src = "img/producto/S10/gold/1.png";
            document.getElementById("3_2").src = "img/producto/S10/gold/2.png";
            document.getElementById("3_3").src = "img/producto/S10/gold/3.png";
            document.getElementById("3_4").src = "img/producto/S10/gold/4.png";
            $(".block_price__currency").text("305,99\u20ac");
        }
        if (page.hasClass('p40pro')) {
            document.getElementById("12_1").src = "img/producto/P40 pro/gold/1.png";
            document.getElementById("12_2").src = "img/producto/P40 pro/gold/2.png";
            document.getElementById("12_3").src = "img/producto/P40 pro/gold/3.png";
            $(".block_price__currency").text("470,99\u20ac");
        }
    });
    blue.click(function () {
        if (page.hasClass('reno4z')) {
            document.getElementById("6_1").src = "img/producto/Reno4 Z/blue/1.png";
            document.getElementById("6_2").src = "img/producto/Reno4 Z/blue/2.png";
            document.getElementById("6_3").src = "img/producto/Reno4 Z/blue/3.png";
            $(".block_price__currency").text("232,99\u20ac");
        }
        if (page.hasClass('mi11')) {
            document.getElementById("7_1").src = "img/producto/Mi11/blue/1.png";
            document.getElementById("7_2").src = "img/producto/Mi11/blue/2.png";
            document.getElementById("7_3").src = "img/producto/Mi11/blue/3.png";
            document.getElementById("7_4").src = "img/producto/Mi11/blue/4.png";
            $(".block_price__currency").text("509,99\u20ac");
        }
        if (page.hasClass('p30pro')) {
            document.getElementById("11_1").src = "img/producto/P30 pro/blue/1.png";
            document.getElementById("11_2").src = "img/producto/P30 pro/blue/2.png";
            document.getElementById("11_3").src = "img/producto/P30 pro/blue/3.png";
            $(".block_price__currency").text("335,99\u20ac");
        }
    });
    grey.click(function () {
        if (page.hasClass('mi11')) {
            document.getElementById("7_1").src = "img/producto/Mi11/grey/1.png";
            document.getElementById("7_2").src = "img/producto/Mi11/grey/2.png";
            document.getElementById("7_3").src = "img/producto/Mi11/grey/3.png";
            document.getElementById("7_4").src = "img/producto/Mi11/grey/4.png";
            $(".block_price__currency").text("638,99\u20ac");
        }
        if (page.hasClass('note9')) {
            document.getElementById("8_1").src = "img/producto/Note9/grey/1.png";
            document.getElementById("8_2").src = "img/producto/Note9/grey/2.png";
            document.getElementById("8_3").src = "img/producto/Note9/grey/3.png";
            $(".block_price__currency").text("163,99\u20ac");
        }
        if (page.hasClass('p40pro')) {
            document.getElementById("12_1").src = "img/producto/P40 pro/grey/1.png";
            document.getElementById("12_2").src = "img/producto/P40 pro/grey/2.png";
            document.getElementById("12_3").src = "img/producto/P40 pro/grey/3.png";
            $(".block_price__currency").text("559,99\u20ac");
        }
    });
    orange.click(function () {
        document.getElementById("11_1").src = "img/producto/P30 pro/orange/1.png";
        document.getElementById("11_2").src = "img/producto/P30 pro/orange/2.png";
        document.getElementById("11_3").src = "img/producto/P30 pro/orange/3.png";
        $(".block_price__currency").text("340,99\u20ac");
    });
    spacegrey.click(function () {
        if (page.hasClass('6s')) {
            document.getElementById("2_1").src = "img/producto/6S/grey/1.png";
            document.getElementById("2_2").src = "img/producto/6S/grey/2.png";
            document.getElementById("2_3").src = "img/producto/6S/grey/3.png";
            document.getElementById("2_4").src = "img/producto/6S/grey/4.png";
            document.getElementById("2_5").src = "img/producto/6S/grey/5.png";
            $(".block_price__currency").text("92,99\u20ac");
        }
    });
    rosegold.click(function () {
        document.getElementById("2_1").src = "img/producto/6S/rosegold/1.png";
        document.getElementById("2_2").src = "img/producto/6S/rosegold/2.png";
        document.getElementById("2_3").src = "img/producto/6S/rosegold/3.png";
        document.getElementById("2_4").src = "img/producto/6S/rosegold/4.png";
        document.getElementById("2_5").src = "img/producto/6S/rosegold/5.png";
        $(".block_price__currency").text("114,99\u20ac");
    });
});