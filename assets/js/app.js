'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var logo = 'down';
jQuery(document).ready(function ($) {
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,

	//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
	offset_opacity = 1200,

	//duration of the top scrolling animation (in ms)
	scroll_top_duration = 700,

	//grab the "back to top" link
	$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function () {
		$(this).scrollTop() > offset ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if ($(this).scrollTop() > offset_opacity) {
			$back_to_top.addClass('cd-fade-out');
		}
		// var scroll_r = $(this).scrollTop();
		// var parallaxFix = $('.inner.with-top-padding.content');
		// parallaxFix.css('top', (- scroll_r * 0.95));
	});
	//smooth scroll to top
	$back_to_top.on('click', function (event) {
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0
		}, scroll_top_duration);
	});

	/*map*/
	var myMap2;
	ymaps.ready(init2);

	function init2() {
		myMap2 = new ymaps.Map('map', {
			center: [55.70200328, 37.76498550],
			zoom: 16,
			controls: []
		}), myMap2.behaviors.disable(['rightMouseButtonMagnifier', 'scrollZoom']);
		myPlacemark = new ymaps.Placemark([55.70200328, 37.76498550], {
			hintContent: [''].join('')
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/bitrix/templates/.default/assets/img/map-pin.png',
			iconImageSize: [47, 54],
			iconImageOffset: [-24, -54]
		});
		myMap2.geoObjects.add(myPlacemark);
	}
	/*map END*/
	/*var $threeSixty = $('.threesixty');
 $threeSixty.threeSixty({
 	dragDirection: 'horizontal', // horizontal OR vertical
 	useKeys: true, // true OR false
 	draggable: true // true OR false
 });*/
});

// $(function(){
// 	var pic_X=$('.list').offset().left;
// 	var pic_Y=$('.list').offset().top;
// 	var pic_W=$('.list').width()/2;
// 	var pic_H=$('.list').height()/2;
// 	var center_X=pic_X+pic_W;
// 	var center_Y=pic_Y+pic_H;
// 	var movestop=pic_W/10;
// 	$('.list').mousemove(function(event){
// 		var mouse_X=event.pageX;
// 		var mouse_Y=event.pageY;
// 		if(mouse_X-center_X<=0){
// 			moveImg(mouse_X,mouse_Y,'left')
// 		}else{
// 			moveImg(mouse_X,mouse_Y)
// 		}
// 	});
// 	function moveImg(m_X,m_Y,dir){
// 		var index=Math.ceil(Math.abs(m_X-center_X)/movestop);
// 		if(dir){
// 			$('.list li').eq(index).show().siblings().hide();
// 		}else{
// 			$('.list li').eq(18-index).show().siblings().hide();
// 		}
// 	}
// });
/*function send() {
    var form = $('[data-form="send"]');
    form.ajaxForm(function () {
        $('#formAdvice').modal('hide');
        $('#call').modal('hide');
        $('#formAdviceItem').modal('hide');
        $('#thx').modal('show');
         $(form).clearForm();
         console.log('send funciton');
    });
}*/
$(document).ready(function () {
	/* $('#send_series').click(function(){
            var p = parseInt($(this).val());
            yaCounter937330.reachGoal('SEND_REQUEST',{price:p});
            //return true;
        });
        $('#send_item').click(function(){
            var p = parseInt($(this).val());
            yaCounter937330.reachGoal('ORDER_ITEM',{price:p});
            //return true;
        });*/
	/*Countdown main.page*/

	// var endDate = "September 27, 2015 20:00:00";
	//    $('.countdown').countdown({
	//      date: endDate,
	//      render: function(data) {
	//        $(this.el).html("<div>" + this.leadingZeros(data.days, 2) + "<span>:</span></div><div>" + this.leadingZeros(data.hours, 2) + "<span>:</span></div><div>" + this.leadingZeros(data.min, 2) + "<span>:</span></div><div>" + this.leadingZeros(data.sec, 2) + "<span></span></div>");
	//      }
	//    });
	/*Countdown END*/
	/*var form = $('[data-form="send"]');
  form.ajaxForm(function () {
        $(form).clearForm();
        $('#formAdvice').modal('hide');
        $('#call').modal('hide');
        $('#formAdviceItem').modal('hide');
        $('#thx').modal('show');
         console.log('passed initialized');
    });
    $(form).on('submit', function (e) {
        if ($(this).hasClass('disabled')) {
            // handle the invalid form...
            e.preventDefault();
        } else {
            // everything looks good!
            console.log(this);
            $('#formAdvice').modal('hide');
         $('#call').modal('hide');
         $('#formAdviceItem').modal('hide');
         $('#thx').modal('show');
            send();
        }
    });
 $('[data-item="phone"]').mask("+7 (999) 999-99-99");
 $('[data-item="shown-item"]').on('show.bs.modal', function (event) {
 	var button = $(event.relatedTarget)
 	var recipient = button.data('whatever')
 	var price = button.data('price')
 	var modal = $(this)
 	modal.find('.modal-body #recipient-name').val(recipient)
 	modal.find('.modal-body button[type=submit]').val(price)
 });*/
	/*credit form*/

	/*credit form END*/

	// function fadeIn() {
	// 	var banner = $('a[data-item="fadeOut"]');
	// 	banner
	// 		.transition({ y: 0 });
	// }
	// function fadeOut() {
	// 	var banner = $('a[data-item="fadeOut"]');
	// 	banner
	// 		.transition({ y: '105%' });
	// }
	// setTimeout(fadeIn, 1000);
	// setTimeout(fadeOut, 60000);
	/*fancybox*/
	$(".fancybox").fancybox();
	/*fancybox END*/
	$(".header input").focusin(function () {
		$(this).addClass('focusIn');
		$('.header button[type="submit"]').addClass('focusIn');
	});
	$(".header input").focusout(function () {
		$(this).removeClass('focusIn');
		$('.header button[type="submit"]').removeClass('focusIn');
	});
	/*width dropdown*/
	/*slim scroll*/
	// $('[data-item="scroll-bar"]').slimScroll({
	// 	position: 'right',
	// 	height: '200px'
	// });
	/*slim scroll END*/
	/*change img*/
	$('[data-item="chose-img"] img').on('click', function (e) {
		var $that = $(this).data('src');
		console.log($that);
		var $myTarget = $('[data-item="target"]');
		var $swap = $myTarget.attr('src', $that);
	});
	/*change img END*/
	$('[data-item="calc"] .checkbox input').change(function (e) {
		var chek = $(this).prop('checked');
		var sum = parseInt($('#allsum').attr('data-item-total'));
		var chek_val = parseInt($(this).val());
		var chek_id = $(this).attr('id');
		var chek_text = $('label[for=' + chek_id + ']').text();
		var calc = 0;
		var calc_dop = 0;
		var dop = parseInt($('#sumdop').text());

		if (chek == true) {

			calc_dop = parseInt($('#sumdop').text()) + chek_val;
			$('#sumdop').text(calc_dop);

			calc = sum + chek_val;
			$('#allsum').attr('data-item-total', calc);
			$('#allsum').text(calc);
			$('#list_bar_calc').append('<li data-val="' + chek_text + '"><p>' + chek_text + '</p></li>');
		} else {

			calc_dop = parseInt($('#sumdop').text()) - chek_val;
			$('#sumdop').text(calc_dop);

			calc = sum - chek_val;
			$('#allsum').attr('data-item-total', calc);
			$('#allsum').text(calc);
			$('li[data-val="' + chek_text + '"]').remove();
		}
	});

	/*at 112 line we use function change on select*/
	$('[data-item="select"]').change(function () {
		//call select function which we made toggle active
		select_changed();
	});

	function select_changed() {
		//get all items for toggle
		$('.currently').each(function () {
			$(this).removeClass('active');
		});
		//get all options
		$('[data-item="select"]').each(function () {
			//get val of selected option
			var $selected = $(this).val();
			//set active to target in data-item="form-1" to form-5
			$('[data-item="form-' + $selected + '"]').addClass('active');
			//condition which made if val equival to 5 we show all
			if ($selected == 5) {
				$('.currently').addClass('active');
			}
			//rolling back
			return true;
		});
	};
	$('[data-item="show-case"]').click(function () {
		$(this).toggleClass('slide-left');
		$('.dostroy-what-we-do .item-2').toggleClass('slide-left');
		$('.dostroy-what-we-do .inner').removeClass('slide-right');
		$('.dostroy-what-we-do .item-2 .hiddenEl').removeClass('slide-right');
		$('.dostroy-what-we-do .item-2 img').removeClass('slide-right');
	});
	$('[data-item="inner-1"]').click(function () {
		$('.dostroy-what-we-do .inner').addClass('slide-right');
		if ($('.dostroy-what-we-do .item-2 .hiddenEl').hasClass('slide-right')) {} else {
			$('.dostroy-what-we-do .item-2 .hiddenEl.item-11').addClass('slide-right');
			$('.dostroy-what-we-do .item-2 img').addClass('slide-right');
		}
	});

	$('[data-item="inner-2"]').click(function () {
		$('.dostroy-what-we-do .inner').addClass('slide-right');
		if ($('.dostroy-what-we-do .item-2 .hiddenEl').hasClass('slide-right')) {} else {
			$('.dostroy-what-we-do .item-2 .hiddenEl.item-21').addClass('slide-right');
			$('.dostroy-what-we-do .item-2 img').addClass('slide-right');
		}
	});
	$('[data-item="inner-3"]').click(function () {
		$('.dostroy-what-we-do .inner').addClass('slide-right');
		if ($('.dostroy-what-we-do .item-2 .hiddenEl').hasClass('slide-right')) {} else {
			$('.dostroy-what-we-do .item-2 .hiddenEl.item-31').addClass('slide-right');
			$('.dostroy-what-we-do .item-2 img').addClass('slide-right');
		}
	});$('[data-item="inner-4"]').click(function () {
		$('.dostroy-what-we-do .inner').addClass('slide-right');
		if ($('.dostroy-what-we-do .item-2 .hiddenEl').hasClass('slide-right')) {} else {
			$('.dostroy-what-we-do .item-2 .hiddenEl.item-41').addClass('slide-right');
			$('.dostroy-what-we-do .item-2 img').addClass('slide-right');
		}
	});$('[data-item="inner-5"]').click(function () {
		$('.dostroy-what-we-do .inner').addClass('slide-right');
		if ($('.dostroy-what-we-do .item-2 .hiddenEl').hasClass('slide-right')) {} else {
			$('.dostroy-what-we-do .item-2 .hiddenEl.item-51').addClass('slide-right');
			$('.dostroy-what-we-do .item-2 img').addClass('slide-right');
		}
	});$('[data-item="inner-6"]').click(function () {
		$('.dostroy-what-we-do .inner').addClass('slide-right');
		if ($('.dostroy-what-we-do .item-2 .hiddenEl').hasClass('slide-right')) {} else {
			$('.dostroy-what-we-do .item-2 .hiddenEl.item-61').addClass('slide-right');
			$('.dostroy-what-we-do .item-2 img').addClass('slide-right');
		}
	});$('[data-item="inner-7"]').click(function () {
		$('.dostroy-what-we-do .inner').addClass('slide-right');
		if ($('.dostroy-what-we-do .item-2 .hiddenEl').hasClass('slide-right')) {} else {
			$('.dostroy-what-we-do .item-2 .hiddenEl.item-71').addClass('slide-right');
			$('.dostroy-what-we-do .item-2 img').addClass('slide-right');
		}
	});

	$('.dostroy-what-we-do .close-btn').click(function () {
		$('.dostroy-what-we-do .inner').removeClass('slide-right');
		$('.dostroy-what-we-do .item-2 .hiddenEl').removeClass('slide-right');
		$('.dostroy-what-we-do .item-2 img').removeClass('slide-right');
	});
	var obj;
	$('.header .has-inner-menu > a').hover(function () {
		var status = $(this).attr('class');
		if (status != 'test') {
			var maxWidth = 0;
			var width = 0;
			var obj = $(this);
			var countli = $(this).parent().find('.dropdown-menu li').length;
			$(this).parent().find('.dropdown-menu li').each(function (i) {
				//add width
				width = this.offsetWidth;
				if (maxWidth < width) {
					maxWidth = width;
				} else {
					if (countli - 1 == i && maxWidth != 0 && i != 0) {
						var max = 0;
						var max = maxWidth;
						add_width(max, obj);
					}
				}
			});
		}
	});
});

function add_width(max, obj) {
	obj.addClass('test');
	obj.parent().find('.dropdown-menu').css('width', max);
}

$(document).ready(function () {
	$('.vocabulary-menu a').click(function (e) {
		e.preventDefault();
		var that = $(this).attr('data-choice');

		$('.vocabulary-menu a').removeClass('active');
		$('.vocabulary-list .output').removeClass('active');

		$(this).addClass('active');
		$("#" + that).addClass('active');
	});
	/*comunications*/
	var $targetForm = $('.form-credit');
	$targetForm.find('input[type=text], input[type=tel], input[type=email]').attr('disabled', true);
	$('input[type="checkbox"]').click(function () {
		var $c1 = $('#checkbox1');
		var $c2 = $('#checkbox2');

		if ($c1.is(':checked')) {
			$targetForm.find('input[type=text], input[type=tel], input[type=email]').attr('disabled', false);
			$targetForm.find('[data-item="cost-house"]').attr('disabled', true);
		}

		if ($c2.is(':checked')) {
			$targetForm.find('input[type=text], input[type=tel], input[type=email]').attr('disabled', false);
			$targetForm.find('[data-item="cost-house"]').attr('disabled', false);
			$targetForm.find('[data-item="cost-credit"], [data-item="period-credit"]').attr('disabled', true);
		}

		if ($c1.is(':checked') && $c2.is(':checked')) {
			$targetForm.find('input[type=text], input[type=tel], input[type=email]').attr('disabled', false);
		}

		if ($c1.is(':checked') == false && $c2.is(':checked') == false) {
			$targetForm.find('input[type=text], input[type=tel], input[type=email]').attr('disabled', true);
		}

		$('[data-item="checked-items"]').val('');

		var chek = document.getElementsByName('chk[]');

		var check_array = new Array();

		$('input:checkbox').each(function () {
			if ($(this).is(':checked')) {
				check_array.push($(this).val());
			}
		});

		for (i = 0; i < check_array.length; i++) {
			var check_all = $('[data-item="checked-items"]').val();
			if (i > 0) {
				$('[data-item="checked-items"]').val(check_all + ', ' + check_array[i]);
			} else {
				$('[data-item="checked-items"]').val(check_all + '' + check_array[i]);
			}
		}

		console.log(check_array);
	});
	/*comunications END*/
});

$(document).ready(function () {
	$('.my-tab-list a').click(function (e) {
		e.preventDefault();
		var tab_id = $(this).attr('data-tab');
		$('.my-tab-list a').removeClass('active');
		$('[data-item="my-tab-btns"] > div').removeClass('active');
		$(this).addClass('active');
		$("#" + tab_id).addClass('active');
	});
	$('.my-tab-list a').click(function (e) {
		e.preventDefault();
		var tab_id = $(this).attr('data-tab');
		$('.my-tab-list a').removeClass('active');
		$('[data-item="my-tab-btns"] > div').removeClass('active');
		$(this).addClass('active');
		$("#" + tab_id).addClass('active');
	});
});

$(document).ready(function () {
	var that = $('.content.with-top-padding');
	var banner = $('body .my-item-slider .inner .baner .inner');
	var win = $(window).height() - (550 - 110 - 5);
	//var bannerOffset = $(window).height() * .1;
	var owlBack = $('[data-item="slider-back-side"]');
	var owlMain = $('[data-item="slider-item"]');
	var owlMainCatalog = $('[data-item="slider-item-inCatalog"]');
	var owlCatalog = $('[data-item="slider-item-catalog"]');
	that.css('margin-top', win);

	owlCatalog.owlCarousel(_defineProperty({
		loop: true,
		margin: 0,
		nav: true,
		dots: false,
		items: 1,
		autoplay: false,
		navText: ["<i class='my-arrow-left'></i>", "<i class='my-arrow-right'></i>"]
	}, 'dots', true));

	owlCatalog.on('changed.owl.carousel', function (e) {
		var carrentSlide = e.page.index;
		$('.left-side-trigger').removeClass('active');
		$('.left-side-trigger').each(function (carrentTarget) {
			$(this).removeClass('state_0');
			$(this).removeClass('state_1');
			$(this).removeClass('state_2');
			$(this).addClass('state_' + carrentSlide);
		});
	});

	owlMain.on('initialized.owl.carousel', function (e) {
		var carrentSlide = e.page.index;
		$('.trigger').removeClass('active');
		$('.trigger').each(function (carrentTarget) {
			if (carrentSlide == carrentTarget) {
				$(this).addClass('active');
			}
		});
	});
	owlMain.owlCarousel(_defineProperty({
		loop: true,
		margin: 0,
		nav: true,
		dots: false,
		items: 1,
		autoplay: true,
		navText: ["<i class='my-arrow-left'></i>", "<i class='my-arrow-right'></i>"]
	}, 'dots', true));
	owlMainCatalog.owlCarousel(_defineProperty({
		loop: true,
		margin: 0,
		nav: true,
		dots: false,
		items: 1,
		autoplay: true,
		smartSpeed: 0,
		fluidSpeed: 0,
		navText: ["<i class='my-arrow-left'></i>", "<i class='my-arrow-right'></i>"]
	}, 'dots', true));

	owlBack.owlCarousel(_defineProperty({
		loop: true,
		margin: 0,
		nav: true,
		dots: true,
		items: 1,
		navContainer: '.main-navigation',
		dotsContainer: '.main-dots',
		autoplayHoverPause: true,
		autoplay: false,
		navSpeed: 500,
		dotsSpeed: 500
	}, 'dots', true));

	owlMain.on('changed.owl.carousel', function (that) {
		var carrentSlide = that.page.index;
		$('.trigger').removeClass('active');
		$('.trigger').each(function (carrentTarget) {
			if (carrentSlide == carrentTarget) {
				$(this).addClass('active');
			}
		});
	});

	onStart();
});

$(window).scroll(function () {
	var scroll_r = $(this).scrollTop();
	var parallaxUp = $('[data-parallax="up"]');
	var parallaxFix = $('inner.with-top-padding.content');
	var parallaxDown = $('[data-parallax="down"]');
	var opacity = $('[data-opacity="true"]');
	var opacityMain = $('[data-opacity-main="true"]');
	var transform = scroll_r * .05;
	var options = ($(window).height() - scroll_r - $(window).height()) / 1000 + 0.5 < 0.2 ? 0.2 : ($(window).height() - scroll_r - $(window).height()) / 1000 + 0.5;
	//var options2 = (((($(window).height() - scroll_r) - $(window).height()) / 1000) + 0.5) < 0.2 ? 0.2 : (((($(window).height() - scroll_r) - $(window).height()) / 1000) + 0.5);
	var optionsMain = ($(window).height() - scroll_r - $(window).height()) / 1000 + 1 < 0.2 ? 0.2 : ($(window).height() - scroll_r - $(window).height()) / 1000 + 1;

	opacityMain.css('opacity', optionsMain);
	opacity.css('opacity', options);
	parallaxDown.css('top', scroll_r * .08);

	menuTop();
	logos();
	bgUP();
	bgDown();
});

function opacityBg() {
	var parallaxUp = $('[data-parallax="up"]');
	var scroll_r = $(this).scrollTop();
	if ($(this).scrollTop() < 800) {
		parallaxUp.css('top', scroll_r * .035);
	} else if ($(this).scrollTop() <= 800) {
		parallaxUp.css('top', scroll_r * 0);
	}
}
function bgUP() {
	var parallaxUp = $('[data-parallax="up"]');
	var scroll_r = $(this).scrollTop();
	if ($(this).scrollTop() < 800) {
		parallaxUp.css('top', scroll_r * .035);
	} else if ($(this).scrollTop() <= 800) {
		parallaxUp.css('top', scroll_r * 0);
	}
}
function bgDown() {
	var parallaxDown = $('[data-parallax="down"]');
	var scroll_r = $(this).scrollTop();
	if ($(this).scrollTop() < 800) {
		parallaxDown.css('top', scroll_r * .08);
	} else if ($(this).scrollTop() <= 800) {
		parallaxDown.css('top', scroll_r * .08);
	}
}

function menuTop() {
	var pushLeft = $('[data-item="push-left"]');
	if ($(this).scrollTop() > 10) {
		$('[data-item="header"]').addClass('fix-header');
		$('[data-item="header"] .navbar-header .logo a').addClass('active');
		pushLeft.addClass('top-bar-left-offset');
		logo = 'down';
		logos();
	} else if ($(this).scrollTop() <= 10) {
		$('[data-item="header"]').removeClass('fix-header');
		$('[data-item="header"] .navbar-header .logo a').removeClass('active');
		pushLeft.removeClass('top-bar-left-offset');
		logo = 'up';
		logos();
	}
}

function onStart() {
	var scroll_r = $(this).scrollTop();
	var parallaxUp = $('[data-parallax="up"]');
	var parallaxDown = $('[data-parallax="down"]');
	var opacity = $('[data-opacity="true"]');
	var opacityMain = $('[data-opacity-main="true"]');
	var transform = scroll_r * .05;
	var winHeight = $(this).height();
	//var options = (((( winHeight - scroll_r) - winHeight) / 1000) + 1) < 0.3 ? 0.3 : ((((winHeight - scroll_r) - winHeight) / 1000) + 1);
	var options = (winHeight - scroll_r - winHeight) / 1000 + 0.5 < 0.3 ? 0.3 : (winHeight - scroll_r - winHeight) / 1000 + 0.5;
	var optionsMain = (winHeight - scroll_r - winHeight) / 1000 + 1 < 0.3 ? 0.3 : (winHeight - scroll_r - winHeight) / 1000 + 1;
	opacity.css('opacity', options);
	opacityMain.css('opacity', optionsMain);
	parallaxDown.css('top', scroll_r * .08);
	menuTop();
	bgUP();
	bgDown();
	logos();
}

function logos() {
	if (logo == 'down') {
		$('.header .has-inner-menu .dropdown-menu').each(function (i) {
			var s = $(this).attr('class');
			var r = $(this).css('width');
			$(this).css('width', r);

			if (s == 'dropdown-menu up-logo' || s == 'dropdown-menu') {
				var w = $(this).css('width').substr(0, $(this).css('width').length - 2);
				$(this).css('width', parseInt(w) + 10);
				$(this).addClass('down-logo');
				$(this).removeClass('up-logo');
			}
		});
	} else {
		$('.header .has-inner-menu .dropdown-menu').each(function (i) {
			var s = $(this).attr('class');
			var r = $(this).css('width');
			$(this).css('width', r);

			if (s == 'dropdown-menu down-logo') {
				var w = $(this).css('width').substr(0, $(this).css('width').length - 2);
				$(this).css('width', parseInt(w) - 10);
				$(this).addClass('up-logo');
				$(this).removeClass('down-logo');
			}
		});
	}
}

/*
(function() {
	var support = { animations : Modernizr.cssanimations },
		container = document.getElementById( 'ip-container' ),
		header = container.querySelector( '.ip-header' ),
		loader = new PathLoader( document.getElementById( 'ip-loader-circle' ) ),
		animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
		// animation end event name
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];
	function init() {
		var onEndInitialAnimation = function() {
			if( support.animations ) {
				this.removeEventListener( animEndEventName, onEndInitialAnimation );
			}
			startLoading();
		};
		// initial animation
		classie.add( container, 'loading' );
		
		
		if( support.animations ) {
			container.addEventListener( animEndEventName, onEndInitialAnimation );
		}
		else {
			onEndInitialAnimation();
		}
	}
	function startLoading() {
		// simulate loading something..
		var simulationFn = function(instance) {
			var progress = 0,
				interval = setInterval( function() {
					progress = Math.min( progress + Math.random() * 0.1, 1 );
					instance.setProgress( progress );
					// reached the end
					if( progress === 1 ) {
						
					
						classie.remove( container, 'loading' );
						classie.add( container, 'loaded' );
						clearInterval( interval );
						var onEndHeaderAnimation = function(ev) {
							if( support.animations ) {
								if( ev.target !== header ) return;
								this.removeEventListener( animEndEventName, onEndHeaderAnimation );
							}
							//window.removeEventListener( 'scroll', noscroll );
						};
						if( support.animations ) {
							//header.addEventListener( animEndEventName, onEndHeaderAnimation );
						}
						else {
							onEndHeaderAnimation();
						}
					}
				}, 80 );
		};
		loader.setProgressFn( simulationFn );
	}
	init();
})();*/
/*(function(){
	

	
		var container = document.getElementById('zoom-map');
		var map = container.children[0];
		map.style.position = "relative";
		var mapHeight = map.offsetHeight;
		var mapWidth = map.offsetWidth;
		console.log(mapHeight,mapWidth);

		container.style.height = mapHeight + 'px';
		container.style.cursor = 'move';
		container.style.width = mapWidth + 'px';
		map.onmousedown = function(e) {
	      var mapCoords = getCoords(map);
	      var shiftX = e.pageX - mapCoords.left;
	      var shiftY = e.pageY - mapCoords.top;
	      var containerCoords = getCoords(container);
	      document.onmousemove = function(e) {
	        var newLeft = e.pageX - shiftX - containerCoords.left;
	        var newTop = e.pageY - shiftY - containerCoords.top;
	        var rightEdge = map.offsetWidth - container.offsetWidth;
	        var bottomEdge = map.offsetHeight - container.offsetHeight;

	        if (newLeft > 0) {
	          newLeft = 0;
	        }
	        if(newTop > 0){
	        	newTop = 0;
	        }

	        if (newLeft < -rightEdge) {
	          newLeft = -rightEdge;
	         
	        }
	        if(newTop < -bottomEdge){
	        	newTop = -bottomEdge;
	        }
	        map.style.left = newLeft + 'px';
	        map.style.top = newTop + 'px';
	      }

	      document.onmouseup = function() {
	        document.onmousemove = document.onmouseup = null;
	      };

	       return false;
	    };
	    var zoomInBtn = document.getElementsByClassName('btn-zoom-in');
	    var zoomOutBtn = document.getElementsByClassName('btn-zoom-out');
		map.oncontextmenu = function () {
			map.style.left =  '0px';
			map.style.top =  '0px';
			map.style.height = '100%';
			map.style.width = '100%';
			return false;
		}
		
	    map.ondragstart = function() {
	      return false;
	    };
	    map.addEventListener('dblclick', function(e){
	    	map.style.height = 'auto';
	    	map.style.width = 'auto';
	    });
	    $(zoomInBtn).on('click', function(){
			map.style.height = 'auto';
	    	map.style.width = 'auto';
	    });
	    $(zoomOutBtn).on('click', function(){
	    	map.style.left =  '0px';
			map.style.top =  '0px';
			map.style.height = '100%';
			map.style.width = '100%';
	    });

	    function getCoords(elem) {
	      var box = elem.getBoundingClientRect();

	      return {
	        top: box.top + pageYOffset,
	        left: box.left + pageXOffset,
	        right: box.right - pageXOffset,
	        bottom: box.bottom - pageYOffset
	      };

	    }
	
})();*/