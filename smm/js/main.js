jQuery(document).ready(function($){
    var counter1= 0;
    var counter2= 0;
    var counter3= 0;
    if($(".run1").is('h2')) {
        var scroll = $(window).scrollTop() + $(window).height();
        var offset1 = $(".run1").offset().top
        if (scroll > offset1 && counter1 == 0) {
            counter1=1;
            var numb_finish = parseInt($(".run1").text().replaceAll(' ','')); // РџРѕР»СѓС‡Р°РµРј РЅР°С‡Р°Р»СЊРЅРѕРµ С‡РёСЃР»Рѕ
            $({numberValue: 0}).animate({numberValue: numb_finish}, {
                duration: 1000, // РџСЂРѕРґРѕР»Р¶РёС‚РµР»СЊРЅРѕСЃС‚СЊ Р°РЅРёРјР°С†РёРё, РіРґРµ 500 = 0,5 РѕРґРЅРѕР№ СЃРµРєСѓРЅРґС‹, С‚Рѕ РµСЃС‚СЊ 500 РјРёР»Р»РёСЃРµРєСѓРЅРґ 
                easing: "linear",
                step: function(val) {
                    $(".run1").html(Math.ceil(val).toLocaleString()); // Р‘Р»РѕРє, РіРґРµ РЅРµРѕР±С…РѕРґРёРјРѕ СЃРґРµР»Р°С‚СЊ Р°РЅРёРјР°С†РёСЋ
                }
            });
        }
        var offset2 = $(".run2").offset().top
        if (scroll > offset2 && counter2 == 0) {
            counter2=1;
            var numb_finish = parseInt($(".run2").text().replaceAll(' ','')); // РџРѕР»СѓС‡Р°РµРј РЅР°С‡Р°Р»СЊРЅРѕРµ С‡РёСЃР»Рѕ
            $({numberValue: 0}).animate({numberValue: numb_finish}, {
                duration: 1000, // РџСЂРѕРґРѕР»Р¶РёС‚РµР»СЊРЅРѕСЃС‚СЊ Р°РЅРёРјР°С†РёРё, РіРґРµ 500 = 0,5 РѕРґРЅРѕР№ СЃРµРєСѓРЅРґС‹, С‚Рѕ РµСЃС‚СЊ 500 РјРёР»Р»РёСЃРµРєСѓРЅРґ 
                easing: "linear",
                step: function(val) {
                    $(".run2").html(Math.ceil(val).toLocaleString()); // Р‘Р»РѕРє, РіРґРµ РЅРµРѕР±С…РѕРґРёРјРѕ СЃРґРµР»Р°С‚СЊ Р°РЅРёРјР°С†РёСЋ
                }
            });
        }
        var offset3 = $(".run3").offset().top
        if (scroll > offset3 && counter3 == 0) {
            counter3=1;
            var numb_finish = parseInt($(".run3").text().replaceAll(' ','')); // РџРѕР»СѓС‡Р°РµРј РЅР°С‡Р°Р»СЊРЅРѕРµ С‡РёСЃР»Рѕ
            $({numberValue: 0}).animate({numberValue: numb_finish}, {
                duration: 1000, // РџСЂРѕРґРѕР»Р¶РёС‚РµР»СЊРЅРѕСЃС‚СЊ Р°РЅРёРјР°С†РёРё, РіРґРµ 500 = 0,5 РѕРґРЅРѕР№ СЃРµРєСѓРЅРґС‹, С‚Рѕ РµСЃС‚СЊ 500 РјРёР»Р»РёСЃРµРєСѓРЅРґ 
                easing: "linear",
                step: function(val) {
                    $(".run3").html(Math.ceil(val).toLocaleString()); // Р‘Р»РѕРє, РіРґРµ РЅРµРѕР±С…РѕРґРёРјРѕ СЃРґРµР»Р°С‚СЊ Р°РЅРёРјР°С†РёСЋ
                }
            });
        }
        $(window).scroll(function() {
            var scroll = $(window).scrollTop() + $(window).height();
            var offset1 = $(".run1").offset().top
            if (scroll > offset1 && counter1 == 0) {
                counter1=1;
                var numb_finish = parseInt($(".run1").text().replaceAll(' ','')); // РџРѕР»СѓС‡Р°РµРј РЅР°С‡Р°Р»СЊРЅРѕРµ С‡РёСЃР»Рѕ
                $({numberValue: 0}).animate({numberValue: numb_finish}, {
                    duration: 1000, // РџСЂРѕРґРѕР»Р¶РёС‚РµР»СЊРЅРѕСЃС‚СЊ Р°РЅРёРјР°С†РёРё, РіРґРµ 500 = 0,5 РѕРґРЅРѕР№ СЃРµРєСѓРЅРґС‹, С‚Рѕ РµСЃС‚СЊ 500 РјРёР»Р»РёСЃРµРєСѓРЅРґ 
                    easing: "linear",
                    step: function(val) {
                        $(".run1").html(Math.ceil(val).toLocaleString()); // Р‘Р»РѕРє, РіРґРµ РЅРµРѕР±С…РѕРґРёРјРѕ СЃРґРµР»Р°С‚СЊ Р°РЅРёРјР°С†РёСЋ
                    }
                });
            }
            var offset2 = $(".run2").offset().top
            if (scroll > offset2 && counter2 == 0) {
                counter2=1;
                var numb_finish = parseInt($(".run2").text().replaceAll(' ','')); // РџРѕР»СѓС‡Р°РµРј РЅР°С‡Р°Р»СЊРЅРѕРµ С‡РёСЃР»Рѕ
                $({numberValue: 0}).animate({numberValue: numb_finish}, {
                    duration: 1000, // РџСЂРѕРґРѕР»Р¶РёС‚РµР»СЊРЅРѕСЃС‚СЊ Р°РЅРёРјР°С†РёРё, РіРґРµ 500 = 0,5 РѕРґРЅРѕР№ СЃРµРєСѓРЅРґС‹, С‚Рѕ РµСЃС‚СЊ 500 РјРёР»Р»РёСЃРµРєСѓРЅРґ 
                    easing: "linear",
                    step: function(val) {
                        $(".run2").html(Math.ceil(val).toLocaleString()); // Р‘Р»РѕРє, РіРґРµ РЅРµРѕР±С…РѕРґРёРјРѕ СЃРґРµР»Р°С‚СЊ Р°РЅРёРјР°С†РёСЋ
                    }
                });
            }
            var offset3 = $(".run3").offset().top
            if (scroll > offset3 && counter3 == 0) {
                counter3=1;
                var numb_finish = parseInt($(".run3").text().replaceAll(' ','')); // РџРѕР»СѓС‡Р°РµРј РЅР°С‡Р°Р»СЊРЅРѕРµ С‡РёСЃР»Рѕ
                $({numberValue: 0}).animate({numberValue: numb_finish}, {
                    duration: 1000, // РџСЂРѕРґРѕР»Р¶РёС‚РµР»СЊРЅРѕСЃС‚СЊ Р°РЅРёРјР°С†РёРё, РіРґРµ 500 = 0,5 РѕРґРЅРѕР№ СЃРµРєСѓРЅРґС‹, С‚Рѕ РµСЃС‚СЊ 500 РјРёР»Р»РёСЃРµРєСѓРЅРґ 
                    easing: "linear",
                    step: function(val) {
                        $(".run3").html(Math.ceil(val).toLocaleString()); // Р‘Р»РѕРє, РіРґРµ РЅРµРѕР±С…РѕРґРёРјРѕ СЃРґРµР»Р°С‚СЊ Р°РЅРёРјР°С†РёСЋ
                    }
                });
            }
        });
    }

    $('input:checkbox').on('change',function(){
        if($('.choise-window:checked').is('input')==true) {
            $('.result').css('background','#091628');
            $('.result .container').show();
        } else {
            $('.result').css('background','none');
            $('.result .container').hide();
        }
    });
    $('.cancel').on('click',function(){
        $('.choise-window').prop('checked', true);
        $('.choise').prop('checked', true);
        $('.result').css('background','none');
        $('.result .container').hide();
    });

    $(".uk-modal").on('click', function (e) {
        if (e.target == this) $(this).fadeOut('fast');
    });

    $('.autor-button').on('click', function () {
        var width = 0;
        var intr = setInterval(function() {
            $('.autor-button').css('background', 'linear-gradient(to left, rgb(23, 51, 94) '+(width)+'%, transparent 0)');
            $('.custom-button').css('background', 'linear-gradient(to right, rgb(23, 51, 94) '+(100-width)+'%, transparent 0)');
            width=width+2;
            if (width > 100) clearInterval(intr);
        }, 1);
    });

    $('.custom-button').on('click', function () {
        var width = 0;
        var intr = setInterval(function() {
            $('.custom-button').css('background', 'linear-gradient(to right, rgb(23, 51, 94) '+(width)+'%, transparent 0)');
            $('.autor-button').css('background', 'linear-gradient(to left, rgb(23, 51, 94) '+(100-width)+'%, transparent 0)');
            width=width+2;
            if (width > 100) clearInterval(intr);
        }, 1);
    });
    $('#locale-span0').html($('.registr>span').html());
    $('.registr>span').on('click',function() {
        if($('.registr>span .dropdown-country').hasClass("dropdown-country-active")==true) {
            $('.registr>span .dropdown-country').removeClass("dropdown-country-active");
            $('.registr>span .russia-block').removeClass("russia-block-active");
        } else {
            $('.registr>span .dropdown-country').addClass("dropdown-country-active");
            $('.registr>span .russia-block').addClass("russia-block-active");
        }
    });
    $('.registr-mobile>span').on('click',function() {
        if($('.registr-mobile>span .dropdown-country').hasClass("dropdown-country-active")==true) {
            $('.registr-mobile>span .dropdown-country').removeClass("dropdown-country-active");
            $('.registr-mobile>span .russia-block').removeClass("russia-block-active");
        } else {
            $('.registr-mobile>span .dropdown-country').addClass("dropdown-country-active");
            $('.registr-mobile>span .russia-block').addClass("russia-block-active");
        }
    });
    $(document).mouseup(function (e){ // СЃРѕР±С‹С‚РёРµ РєР»РёРєР° РїРѕ РІРµР±-РґРѕРєСѓРјРµРЅС‚Сѓ
		var div = $(".registr-mobile"); // С‚СѓС‚ СѓРєР°Р·С‹РІР°РµРј ID СЌР»РµРјРµРЅС‚Р°
		if (!div.is(e.target) && div.has(e.target).length === 0) { // Рё РЅРµ РїРѕ РµРіРѕ РґРѕС‡РµСЂРЅРёРј СЌР»РµРјРµРЅС‚Р°Рј
			$('.registr-mobile>span .dropdown-country').removeClass("dropdown-country-active");
            $('.registr-mobile>span .russia-block').removeClass("russia-block-active");
        }
        var div0 = $(".registr"); // С‚СѓС‚ СѓРєР°Р·С‹РІР°РµРј ID СЌР»РµРјРµРЅС‚Р°
		if (!div0.is(e.target) && div0.has(e.target).length === 0) { // Рё РЅРµ РїРѕ РµРіРѕ РґРѕС‡РµСЂРЅРёРј СЌР»РµРјРµРЅС‚Р°Рј
			$('.registr>span .dropdown-country').removeClass("dropdown-country-active");
            $('.registr>span .russia-block').removeClass("russia-block-active");
		}
    });
    $('.registr-mobile .dropdown-country span').on('click',function() {
        $('.registr .'+$(this).find('img').attr('class')).click();
    });
});