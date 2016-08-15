var ajaxPostURL = '../mail_scripts/mail.php';

$(document).ready(function () {

	$('a[href=#]').on({
		click: function (e) {
				e.preventDefault();

				console.log('Click on a[href=#]');
			}
	});

	$('.main-slider--in').slick({
		dots: true,
		arrows: false
	});

	$('.main-choose--tabs-item').on({
		click: function (e) {
				e.preventDefault();

				var _id = $(this).data('id');

				$(this).addClass('active').parent().find('.active').not(this).removeClass('active');
				$('.main-choose--tabs-box').removeClass('shown');
				$('.main-choose--tabs-box[data-id=' + _id + ']').addClass('shown');
			}
	});

	$('.scrollAndSelect').on({
		click: function (e) {
				e.preventDefault ();

				var _id = $(this).data('select-id'),
					_select = $('.main-form select[name="service"]');

				_select.find('option').prop('selected', false);
				_select.find('option:nth-child(' + _id + ')').prop('selected', true);

				_select.closest('.main-form--field').removeClass('hidden');
				_select.closest('.main-form--box').removeClass('hidden-select');

				$('body, html').animate({ scrollTop: $('.main-form').offset().top }, 1000);
			}
	});
	$('.justScroll').on({
		click: function (e) {
				e.preventDefault ();
				$('body, html').animate({ scrollTop: $('.main-form').offset().top }, 1000);
			}
	});

	$('.scrollTo').on({
		click: function (e) {
				e.preventDefault ();

				var _id = $(this).attr('href');

				$('body, html').animate({ scrollTop: $(_id).offset().top - 20 }, 500);
			}
	});

	var _s = $('.fixedScroll');
	if (_s.length > 0) {
		_s.css({
			'position': 'absolute',
			'left': '0',
			'z-index': '10'
		});

		$(window).on('load resize scroll', function () {
			var _t = $(this),
				_wT = _t.scrollTop(),
				_sT = _s.parent().offset().top;

			if (_sT - _wT < 50) {
				var _top = 50
					_fixLine = $('.fixedScroll__redline:visible').first();

				if (_fixLine.length > 0) {
					_rl = _fixLine.offset().top;

					if (_top + _s.outerHeight() + _wT >= _rl - 60)
						_top = _top + ((_rl - 60) - (_top + _s.outerHeight() + _wT));
				}

				_s.css({
					'position': 'fixed',
					'top': _top,
					'left': _s.closest('.main-faq--box').offset().left
				});
			} else {
				_s.css({
					'position': 'absolute',
					'top': '0',
					'left': '0'
				});
			}
		});
	}

	$(window).on('load resize scroll', function () {
		var _window = $(this),
			_nav = $('.main-faq--nav');

		_nav.find('li').removeClass('active');

		$('.main-faq--item').each(function () {
			var _item = $(this);

			if (_item.attr('id'))
				if (_item.offset().top - 20 <= _window.scrollTop()) {
					var _id = _item.attr('id');

					_nav.find('li').removeClass('active');
					_nav.find('li a[href=#' + _id + ']').parent().addClass('active');
				}
		});
	});

	$('input.phoneMask').mask('+7 (999) 999-99-99');

	$('.fancybox').fancybox();
	$('.fancybox-p').fancybox({ padding: 0 });

	$('.ajax-form input, .ajax-form textarea').on({
		keydown: function () {
				var _field = $(this);

				_field.removeClass('error');
			}
	});

	$('.ajax-form').on({
		submit: function () {
				var _form = $(this),
					_valide = true,
					_fields = _form.find('input, textarea');

				_fields.removeClass('error');

				$(_fields.get().reverse()).each(function () {
					var _field = $(this);

					if (_field.val() == '') {
						_valide = false;
						_field.addClass('error').focus();
					}
				});

				if (_valide)
					$.post(ajaxPostURL, _form.serialize (), function () {
						_form.removeClass('hidden-select').addClass('success');
					});

				return false;
			}
	});
	
	var d = new Date();
	var month = d.getMonth()+1;
	var day = d.getDate();
	var output = d.getFullYear() + '/' +
    (month<10 ? '0' : '') + month + '/' +
    (day<10 ? '0' : '') + day;

	var prices = {
		'2016/07/25':'990',
		'2016/07/26':'1095',
		'2016/07/27':'1200',
		'2016/07/28':'1305',
		'2016/07/29':'1410',
		'2016/07/30':'1515',
		'2016/07/31':'1620',
		'2016/08/01':'1725',
		'2016/08/02':'1830',
		'2016/08/03':'1935',
		'2016/08/04':'2040',
		'2016/08/05':'2145',
		'2016/08/06':'2250',
		'2016/08/07':'2355',
		'2016/08/08':'2460',
		'2016/08/09':'2565',
		'2016/08/10':'2670',
		'2016/08/11':'2775',
		'2016/08/12':'2880',
		'2016/08/13':'2985',
		'2016/08/14':'3090',
		'2016/08/15':'3200',
		'2016/08/16':'3243',
		'2016/08/17':'3285',
		'2016/08/18':'3328',
		'2016/08/19':'3370',
		'2016/08/20':'3413',
		'2016/08/21':'3456',
		'2016/08/22':'3498',
		'2016/08/23':'3541',
		'2016/08/24':'3584',
		'2016/08/25':'3626',
		'2016/08/26':'3669',
		'2016/08/27':'3711',
		'2016/08/28':'3754',
		'2016/08/29':'3797',
		'2016/08/30':'3839',
		'2016/08/31':'3882',
		'2016/09/01':'3925',
		'2016/09/02':'3967',
		'2016/09/03':'4010',
		'2016/09/04':'4052',
		'2016/09/05':'4095',
		'2016/09/06':'4138',
		'2016/09/07':'4180',
		'2016/09/08':'4223',
		'2016/09/09':'4266',
		'2016/09/10':'4308',
		'2016/09/11':'4351',
		'2016/09/12':'4393',
		'2016/09/13':'4436',
		'2016/09/14':'4479',
		'2016/09/15':'4521',
		'2016/09/16':'4564',
		'2016/09/17':'4607',
		'2016/09/18':'4649',
		'2016/09/19':'4692',
		'2016/09/20':'4734',
		'2016/09/21':'4777',
		'2016/09/22':'4820',
		'2016/09/23':'4862',
		'2016/09/24':'4905',
		'2016/09/25':'4948',
		'2016/09/26':'4990',
		'2016/09/27':'5033',
		'2016/09/28':'5075',
		'2016/09/29':'5118',
		'2016/09/30':'5161',
		'2016/10/01':'5203',
		'2016/10/02':'5246',
		'2016/10/03':'5289',
		'2016/10/04':'5331',
		'2016/10/05':'5374',
		'2016/10/06':'5416',
		'2016/10/07':'5459',
		'2016/10/08':'5502',
		'2016/10/09':'5544',
		'2016/10/10':'5587',
		'2016/10/11':'5630',
		'2016/10/12':'5672',
		'2016/10/13':'5715',
		'2016/10/14':'5757',
		'2016/10/15':'5800'
	};
  
  $('.c3 span').html(prices[output] + " &#8381;");
  $('#today-price1').val("Цена на день заявки: " + prices[output] + " руб.");
  $('#today-price2').val("Цена на день заявки: " + prices[output] + " руб.");


  	$('.fancybox-gallery').fancybox({
  		helpers	: {
			thumbs	: {
				width	: 100,
				height	: 100
			}
		}
  	});
  	
	$('.items-list li').click(function(event) {
		if (!$(this).hasClass('active')) {
			$('.items-list li').removeClass('active');
			$(this).addClass('active');
			$('.program-box').removeClass('active');
			$('.program-box[data-title="' + $(this).attr('data-title') + '"]').addClass('active');
		}
	});

	$('.discount-box input[type="radio"], .discount-box input[type="checkbox"]').click(function(event) {
		var price = parseInt($('.discount-price').attr('data-price')),
			//totalPrice = parseInt($('.discount-price').text().replace(/\s+/g, '')),
			group = $(this).attr('name'),
			discount = $(this).val(),
			discount_1 = 0,
			discount_2 = 0,
			discount_3 = 0,
			result = 0,
			total = $('.discount-price');
			if ($('input[name="radio_group_1"]').is(':checked')) {
				discount_1 = parseInt($('input[name="radio_group_1"]:checked').val());
			}
			if ($('input[name="radio_group_2"]').is(':checked')) {
				discount_2 = parseInt($('input[name="radio_group_2"]:checked').val());
			}
			if ($('input[name="check_group_1"]').is(':checked')) {
				discount_3 = parseInt($('input[name="check_group_1"]:checked').val());
			}

			result = (price - (price * (discount_1 + discount_2 + discount_3))/100).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
			total.text(result + ' ₽')
	});


	$('.airSticky').airStickyBlock({
	    debug: false, // Режим отладки, по умолчанию false
	    stopBlock: '.airSticky-stop' // Класса контейнера, в котором находится сетка, по умолчанию .airSticky_stop-block
	});

	function services(){

		$('.services-sidebar li').on('click',function(){
			$('html,body').animate({scrollTop:$('.services-box[data-title="' + $(this).attr('data-title') + '"]').offset().top-20},800);
			/*$('.services-sidebar li').removeClass('active');
			$(this).addClass('active');*/
			return false;
		});

		/*$(window).scroll(function(event) {
			$('.services-box').each(function() {
				if (top > $(this).offset().top) {
					$('.services-sidebar li[data-title="' + $(this).attr('data-title') + '"]');
				}
			});
		});*/

	};
	services();

	$('.reclame-close').click(function(event) {
		$(this).parents('.reclame').animate({'right': '-1000px'}, 500);
	});
	

});


/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.1
*/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});
