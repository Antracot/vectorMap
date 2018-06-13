$(document).ready(function() {
	console.log("Document ready!");

 	setTimeout(function() {
        $('.main_wrap').fadeIn(300);
        $('.pre_loader').fadeOut(300);


var gdpData = {
	"element_1": 'Название: Пляж<br>Площадь: 2 200 м2<br>Общая вместимость: ок. 300<br>',
	"element_2_18_": 'Название: Беседки для отдыха<br>Площадь: 10-30 м2<br>Общая вместимость: ок. 100<br>',
	"id110": 'Название: Беседки для отдыха<br>Площадь: 10-30 м2<br>Общая вместимость: ок. 100<br>',
	"element_2_15_": 'Название: Беседки для отдыха<br>Площадь: 10-30 м2<br>Общая вместимость: ок. 100<br>',
	"element_2_22_": 'Название: Беседки для отдыха<br>Площадь: 10-30 м2<br>Общая вместимость: ок. 100<br>',
	"element_3_8_": 'Название: Беседки для отдыха<br>Площадь: 10-30 м2<br>Общая вместимость: ок. 100<br>',
	"element_2_2_": 'Название: Беседки для отдыха<br>Площадь: 10-30 м2<br>Общая вместимость: ок. 100<br>',
	"element_2_9_": 'Название: Беседки для отдыха<br>Площадь: 10-30 м2<br>Общая вместимость: ок. 100<br>',
	"element_3": 'Название: Рыбацкие места<br>Площадь: 5-10 м2<br>Общая вместимость: ок. 60.<br>',
	"element_3_7_": 'Название: Рыбацкие места<br>Площадь: 5-10 м2<br>Общая вместимость: ок. 60<br>',
	"element_4": 'Название: Палаточный городок<br>Площадь: 10500 m2<br>Общая вместимость: ок. 1000<br>',
	"id93": 'Название: Авто кемпинг<br>Площадь: 50-70 m2<br>Общая вместимость: ок. 100<br>',
	"id94": 'Название: Авто кемпинг<br>Площадь: 50-70 m2<br>Общая вместимость: ок. 100<br>',
	"element6": 'Название: Взлетно-посадочная полоса<br>Площадь: 20 000 м2<br>',
	"element_7": 'Название: Площадка для стрельбища №1 (бесшумная)<br>Площадь: 1800 м2<br>',
	"element_9": 'Название: Контактный мини-зоопарк<br>Площадь: 16 920 м2<br>',
	"id46": 'Название: Фермерское хозяйство<br>Площадь: 26 500 m2<br>',
	"element_11": 'Название: Сельскохозяйственные угодья<br>Площадь: 33 327 м2<br>',
	"element_13": 'Название: Въездная зона №2. КПП<br>Площадь: 36 м2<br>Общая вместимость: 2-4<br>',
	"element_14": 'Название: Гостиница для собак<br>Площадь: 3 000 м2<br>Общая вместимость: 10-20 собак<br>',
	"element_25_6_": 'Название: Прокат<br>Площадь: 1 000 м2<br>',
	"element_16": 'Название: Воздушный шар<br>Площадь: 5 800 м2<br>',
	"element_17": 'Название: Спортивная зона<br>Площадь: 6 000 м2<br>',
	"element_18": 'Название: Детский городок<br>Площадь: 1 150 м2<br>',
	"element_18_1_": 'Название: Детский городок<br>Площадь: 340 м2<br>',
	"id90": 'Название: Развлекательная зона<br>Площадь: 1 000 м2<br>',
	"element21": 'Название: <br>Площадь: <br>',
	"element22": 'Название: Велосипедный маршрут<br>Площадь: 4 496 м.п.<br>',
	"element_29": 'Название: Магазин<br>Площадь: 280 м2<br>',
	"id80": 'Название: Маршрут для джиппинга<br>',
	"id82": 'Название: Маршрут для квадроциклов. Зимой снегоходы<br>',
	"element_25": 'Название: Автостоянки<br>Площадь:1 540 м2<br>',
	"element_25_1_": 'Название: Автостоянки<br>Площадь:330 м2<br>',
	"element_25_2_": 'Название: Автостоянки<br>Площадь:814 м2<br>',
	"element_25_3_": 'Название: Автостоянки<br>Площадь:6 800 м2<br>',
	"element_25_4_": 'Название: Автостоянки<br>Площадь:450 м2<br>',
	"element_25_5_": 'Название: Автостоянки<br>Площадь:340 м2<br>',
	"element_25_7_": 'Название: Автостоянки<br>Площадь:1060 м2<br>',
	"element_25_8_": 'Название: Автостоянки<br>Площадь:455 м2<br>',
	"element_25_9_": 'Название: Автостоянки<br>Площадь:200 м2<br>',
	"element_25_11_": 'Название: Автостоянки<br>Площадь:113 м2<br>',
	"element_25_10_": 'Название: Автостоянки<br>Площадь:113 м2<br>',
	"element_26": 'Название: Летний душ<br>Площадь: 60 м2<br>',
	"element_27": 'Название: Летний туалет<br>',
	"element_27_1_": 'Название: Летний туалет<br>',
	"element_27_2_": 'Название: Летний туалет<br>',
	"element_27_3_": 'Название: Летний туалет<br>',
	"element_27_4_": 'Название: Летний туалет<br>',
	"element_27_5_": 'Название: Летний туалет<br>',
	"element_27_6_": 'Название: Летний туалет<br>',
	"element_27_8_": 'Название: Летний туалет<br>',
	"element_27_9_": 'Название: Летний туалет<br>',
	"element_27_7_": 'Название: Летний туалет<br>',
	"element_27_10_": 'Название: Летний туалет<br>',
	"element_30": 'Название: Септик<br>',
	"element_30_1_": 'Название: Септик<br>',
	"element_30_2_": 'Название: Септик<br>',
	"element_30_2_": 'Название: Септик<br>',
	"element_30_4_": 'Название: Септик<br>',
	"element_30_5_": 'Название: Септик<br>',
	"element_30_6_": 'Название: Септик<br>',
	"element_30_3_": 'Название: Септик<br>',
	"element_31_1_": 'Название: Площадка ТБО<br>Площадь: 1 000 м2<br>',
	"element_31_3_": 'Название: Септик<br>',
	"element_43": 'Название: Септик<br>',
	"element_31_2_": 'Название: Площадка ТБО<br>Площадь: 1 000 м2<br>',
	"element_31": 'Название: Площадка ТБО<br>Площадь: 1 000 м2<br>',
	"element_31_4_": 'Название: Площадка ТБО<br>Площадь: 1 000 м2<br>',
	"element_32": 'Название: Дорога и проезды<br>Площадь: 2600+2812 м.п.<br>',
	// "id82": 'Название: Пеший маршрут №1.<br>Площадь: 3278 м.п.<br>',id82
	"id84": 'Название: Пеший маршрут №1.<br>Площадь: 3278 м.п.<br>',
	"id83": 'Название: Пеший маршрут №2.<br>Площадь: 5036 м.п.<br>',
	"id47": 'Название: Сад<br>Площадь: 31606 м2<br>',
	"element_34_3_": 'Название: Сад<br>Площадь: 31 606 м2<br>',
	"element_35_1_": 'Название: Бани русские<br>Площадь: 36 м2<br>Общая вместимость: 6-8 чел<br>',
	"element_35": 'Название: Бани русские<br>Площадь: 48 м2<br>Общая вместимость: 6-8 чел.<br>',
	"id91": 'Название: Дома эконом<br>Площадь: 120 м2<br>Общая вместимость: 60-120<br>',
	"element_37-3": 'Название: Дома люкс<br>Площадь: 80 м2<br>Общая вместимость: 130-260<br>',
	"element-37_4": 'Название: Дома люкс<br>Площадь: 80 м2<br>Общая вместимость: 130-260<br>',
	"element_39-2": 'Название: Дома люкс<br>Площадь: 80 м2<br>Общая вместимость: 130-260<br>',
	"element_36": 'Название: Котельная<br>Площадь: 24 м2<br>',
	"id88": 'Название: Дома эконом плюс<br>Площадь: 40 м2<br>Общая вместимость: 100-130<br>',
	"id89": 'Название: Дома эконом плюс<br>Площадь: 40 м2<br>Общая вместимость: 100-130<br>',
	"element_37_3_": 'Название: Летний туалет<br>',
	"element_39": 'Название: Дома люкс<br>Площадь: 80 м2<br>Общая вместимость: 130-260<br>',
	"element_39_31_": 'Название: Дома люкс<br>Площадь: 80 м2<br>Общая вместимость: 130-260<br>',
	"id24": 'Название: Дома люкс<br>Площадь: 80 м2<br>Общая вместимость: 130-260<br>',
	"id23": 'Название: Дома люкс<br>Площадь: 80 м2<br>Общая вместимость: 130-260<br>',
	"id22": 'Название: Дома люкс<br>Площадь: 80 м2<br>Общая вместимость: 130-260<br>',
	"element_45": 'Название: Кинотеатр на улице<br>Площадь: 600-700 м2<br>Общая вместимость: 150-200<br>',
	"id25": 'Название: Дома VIP<br>Площадь: 100 м2<br>Общая вместимость: 90-180<br>',
	"id26": 'Название: Дома VIP<br>Площадь: 100 м2<br>Общая вместимость: 90-180<br>',
	"id19": 'Название: Ресепшен или администраторская<br>Площадь: 36 м2<br>',
	"id15": 'Название: Русская деревня<br>Площадь: 60 м2<br>Общая вместимость: 40-60<br>',
	"id14": 'Название: Русская деревня<br>Площадь: 60 м2<br>Общая вместимость: 40-60<br>',
	"element_42": 'Название: Ресторан-трактир<br>Площадь: 1500 м2<br>Общая вместимость: 250-300<br>',
	"element_43_1_": 'Название: СПА-комплекс<br>Площадь: 1500 м2<br>',
	"element_44": 'Название: Кафе. Развлекательный центр<br>Площадь: 1000 м2<br>Общая вместимость: 200-250<br>',
	"id20": 'Название: Персонал<br>Площадь: 300 м2<br>',
	"id81": 'Название: Ограждение<br>Площадь: 1070 м.п.<br>',
	"id92": 'Название: Землянки. (домики хоббитов, землянки военных лет)<br>Площадь: 36 м2<br>Общая вместимость: 20-40<br>',
	"id109": 'Название: Землянки. (домики хоббитов, землянки военных лет)<br>Площадь: 36 м2<br>Общая вместимость: 20-40<br>',
	"element_49": 'Название: Канатный (верёвочный) городок. Скалодром<br>Площадь: 3000 м2<br>',
	"element_50": 'Название: Зона для проведения массовых мероприятий<br>Площадь: 10 000 м2<br>',
	// "id109": 'Название: Скважина<br>',
	"id108": 'Название: Скважина<br>',
	"id107": 'Название: Скважина<br>',
	"id106": 'Название: Скважина<br>',
	"id105": 'Название: Скважина<br>',
	"id104": 'Название: Скважина<br>',
	"id103": 'Название: Скважина<br>',
	"id102": 'Название: Скважина<br>',
	"id101": 'Название: Скважина<br>',
	"id99": 'Название: Въездная зона №1. Шлагбаум<br>',
	};



	var viewportWidth = $(window).width();
    var viewportHeight = $(window).height();

    // DESKTOP DEVICES ********************
    if(viewportWidth>600){

    	console.log('desktop devices');

	$('#my_map').vectorMap({
		map: 'map',
		backgroundColor: 'transparent',
		series: {
		regions: [{
		  values: gdpData
		}]
		},
		onRegionTipShow: function(e, el, code){
			el.html(el.html()+'<p class="tip_styles">' + gdpData[code] + '<span class="click_to_order"><i>кликни что бы заказать</i></span></p>');
		},
		onRegionClick: function (event, code) {
			$('.my_popup').fadeIn(500);
        	$('.my_popup').children().children('.call_back_from').css('display', 'block');
        	$('.my_popup').children().children('.thanks').css('display', 'none');

		},

	});

		$('.close_my_popup').on('click', function(){
			$('.my_popup').fadeOut(500);
		});

	// MOBILE DEVICES ********************
    } else {
    	console.log('mobile devices');


	$('#my_map').vectorMap({
		map: 'map',
		backgroundColor: 'transparent',
		series: {
		regions: [{
		  values: gdpData
		}]
		},
		onRegionTipShow: function(e, el, code){
			el.html(el.html()+'<p class="tip_mob">' + gdpData[code] + '<span class="click_to_order_mob"><i>кликни дважды чтобы заказать</i></span></p>');
		},
	});
	
    	$('.jvectormap-zoomin').trigger('click');

    	$('.main_wrap').css('width', viewportWidth).css('height', 400);
    	// $('.map_svg').css('width', viewportWidth);
    	$('.my_popup_mob').css('width', viewportWidth);

    	$('.close_my_popup').on('click', function(){
			$('.my_popup_mob').fadeOut(500);
			// console.log('out');
		});

    }



	//Get image jpg into svg tag
	$('svg').children('g').first().attr('id', 'svg_content');
	var svgimg = document.createElementNS('http://www.w3.org/2000/svg','image');
		svgimg.setAttributeNS(null,'height','4500');
		svgimg.setAttributeNS(null,'width','8000');
		svgimg.setAttributeNS('http://www.w3.org/1999/xlink','href', '/img/genplan.jpg');
		svgimg.setAttributeNS(null,'x','');
		svgimg.setAttributeNS(null,'y','2');
		svgimg.setAttributeNS(null, 'visibility', 'visible');
		$('#svg_content').prepend(svgimg);

	// DETECT SECOND TIP AND SHOW POPUP
	document.getElementById("svg_content").addEventListener("touchstart", tapHandler);
		var tapedTwice = false;

	function tapHandler(event) {
	    if(!tapedTwice) {
	        tapedTwice = true;
	        setTimeout( function() { tapedTwice = false; }, 500 );
	        return false;
	    }
	    event.preventDefault();
	    //action on double tap goes below
	    $('.jvectormap-tip').fadeOut(500);
	    $('.my_popup_mob').fadeIn(500);
	    $('.my_popup_mob').children().children('.call_back_from').css('display', 'block');
    	$('.my_popup_mob').children().children('.thanks').css('display', 'none');
	 }
   

	}, 2500);

	//MASK for telephones
    $('input[name="телефон"]').mask('+7(999)999-99-99');

    //FORM CALLBACK
	$("form").submit(function(e) {
        e.preventDefault();
        if (!$(this).find('input[type="text"]').hasClass('error_input') && !$(this).find('textarea').hasClass('error_input')) {
            var type = $(this).attr('method');
            var url = $(this).attr('action');
            var data = $(this).serialize();
            $.ajax({
                type: type,
                url: url,
                data: data,
                success: function() {
                	$('.my_popup').children().children('.call_back_from').fadeOut(500);
                	$('.my_popup').children().children('.thanks').fadeIn(500);

                }
            });
        }
        $(this).trigger("reset");    
        setTimeout(function() {
            $('.my_popup').fadeOut(500);
        }, 5000);
    }); 



});



