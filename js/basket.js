  sbjs.init();


function ie_load_bug_fix(script, callback) {
    if (script.readyState == 'loaded' || script.readyState == 'completed') {
    callback();
    } else {
    setTimeout(function() { ie_load_bug_fix(script, callback); }, 100);
    }
    }


function place_data() {
	var srcs = {
		'yandex':'301',
		'google' : '302',
		'vk' : '303',
		'mytarget' : '304'
	};
	
	/*if ( srcs && srcs[sbjs.get.current.src] ){
		document.getElementById('basket-utm-source').innerHTML = srcs[sbjs.get.current.src];
	}*/
	
	
	var cmps = {
		'vk_spb_post-july':'1',
		'mt_spb_main' : '2'	};
	
	/*if ( cmps && cmps[sbjs.get.current.cmp] ){
		document.getElementById('basket-utm-campaign').innerHTML = cmps[sbjs.get.current.cmp];
	}*/
   

    

    /*var e = document.getElementById("basket-kontakty");
    if (window.location.href.indexOf("contact") > -1){
        document.getElementById('basket-kontakty').value = document.getElementById('basket-utm-source').innerHTML +"-"+ basket.innerHTML +"---"+ sbjs.get.current.src +"---"+ sbjs.get.current.cmp +"---"+ sbjs.get.current.trm;
    }
 
    var r = document.getElementById("basket-saidbar");
    if (window.location.href.indexOf("ege-2015-courses") > -1 || window.location.href.indexOf("oge-gia-2015-courses") > -1){
        document.getElementById('basket-saidbar').value = document.getElementById('basket-utm-source').innerHTML +"-"+ document.getElementById('basket-utm-campaign').innerHTML +"---"+ sbjs.get.current.src +"---"+ sbjs.get.current.cmp +"---"+ sbjs.get.current.trm;
    }*/
	
	var b1 = document.getElementById("basket1");
	if (b1){
		document.getElementById('basket1').value = srcs[sbjs.get.current.src] +"-"+ cmps[sbjs.get.current.cmp] +"---"+ sbjs.get.current.src +"---"+ sbjs.get.current.cmp +"---"+ sbjs.get.current.trm;
	}
	
	var b2 = document.getElementById("basket2");
	if (b2){
		document.getElementById('basket2').value = srcs[sbjs.get.current.src] +"-"+ cmps[sbjs.get.current.cmp] +"---"+ sbjs.get.current.src +"---"+ sbjs.get.current.cmp +"---"+ sbjs.get.current.trm;
	}
}

window.onload = function()
{
if (typeof sbjs.get !== 'undefined') {
    place_data();
    } else {
        if (window.addEventListener) {
        sbjs.addEventListener('load', place_data, false);
        } else if (window.attachEvent) {
        ie_load_bug_fix(sbjs, place_data);
        }
    }

}

