var tbUtils={bind:function(el,ev,fn){if(window.addEventListener){el.addEventListener(ev,fn,false);}else if(window.attachEvent){el.attachEvent('on'+ev,fn);}else{el['on'+ev]=fn;}
return fn;},unbind:function(el,ev,fn){if(window.removeEventListener){el.removeEventListener(ev,fn,false);}else if(window.detachEvent){el.detachEvent('on'+ev,fn);}else{elem['on'+ev]=null;}},stop:function(ev){var e=ev||window.event;e.cancelBubble=true;if(e.stopPropagation){e.stopPropagation();}},resizeCallBacks:[],resizeContainers:[],onSizeChange:function(fn,namespace,unbind_namespace,container_id){if(typeof container_id=="undefined"||!container_id){container_id=String(Math.random());}
if(typeof unbind_namespace!="undefined"&&!unbind_namespace&&this.resizeContainers.indexOf(container_id)>=0){return;}
this.resizeContainers.push(container_id);if(typeof namespace=="undefined"||!namespace){namespace='main';}
if(typeof unbind_namespace=="undefined"){unbind_namespace=false;}
if(this.resizeCallBacks[namespace]===undefined){this.resizeCallBacks[namespace]=[];}
var eventName=window.hasOwnProperty("onorientationchange")?"orientationchange":"resize";if(unbind_namespace){var unbind=this.unbind;Array.prototype.forEach.call(this.resizeCallBacks[namespace],function(callBack){unbind(window,eventName,callBack);});this.resizeCallBacks[namespace]=[];}
this.resizeCallBacks[namespace].unshift(fn);if(window.hasOwnProperty("onorientationchange")){return this.bind(window,"orientationchange",fn);}
var currentWidth=window.outerWidth;var orientationChanged=function(callBack){var newWidth=window.outerWidth;if(newWidth!==currentWidth){currentWidth=newWidth;callBack&&callBack();}};return this.bind(window,"resize",function(){orientationChanged(fn);});},onWindowLoaded:function(win,fn){var done=false,top=true,doc=win.document,root=doc.documentElement,modern=doc.addEventListener,add=modern?'addEventListener':'attachEvent',rem=modern?'removeEventListener':'detachEvent',pre=modern?'':'on',init=function(e){if(e.type=='readystatechange'&&doc.readyState!='complete')return;(e.type=='load'?win:doc)[rem](pre+e.type,init,false);if(!done&&(done=true))fn.call(win,e.type||e);},poll=function(){try{root.doScroll('left');}catch(e){setTimeout(poll,50);return;}
init('poll');};if(doc.readyState=='complete')fn.call(win,'lazy');else{if(!modern&&root.doScroll){try{top=!win.frameElement;}catch(e){}
if(top)poll();}
doc[add](pre+'DOMContentLoaded',init,false);doc[add](pre+'readystatechange',init,false);win[add](pre+'load',init,false);}},removeClass:function(el,className){if(!el){return;}
if(el.classList){var classValues=className.trim().split(' ');for(var i=0;i<classValues.length;i++){if(el.classList.contains(classValues[i])){el.classList.remove(classValues[i]);}}}else{el.className=el.className.replace(new RegExp('(^|\\b)'+className.trim().split(' ').join('|')+'(\\b|$)','gi'),' ');}},addClass:function(el,className){if(!el){return;}
if(el.classList){var classValues=className.split(' ');for(var i=0;i<classValues.length;i++){el.classList.add(classValues[i]);}}else{el.className+=' '+className;}},hasClass:function(el,className){if(!el){return;}
if(el.classList){el.classList.contains(className);}
else{new RegExp('(^| )'+className+'( |$)','gi').test(el.className);}},globalEval:function(code){var script=document.createElement("script");script.text=code;document.head.appendChild(script).parentNode.removeChild(script);}};function adjustItemSize(container,responsive_params,namespace){var $container=typeof container=="string"?document.querySelector(container):container;if(!$container){return;}
var $el=$container.querySelector(".tb_grid_view");if(!$el){return;}
if(responsive_params===undefined){responsive_params={"1900":{"items_per_row":8,"items_spacing":30},"1600":{"items_per_row":7,"items_spacing":30},"1400":{"items_per_row":6,"items_spacing":30},"1200":{"items_per_row":5,"items_spacing":30},"1000":{"items_per_row":4,"items_spacing":30},"800":{"items_per_row":3,"items_spacing":30},"600":{"items_per_row":2,"items_spacing":30},"400":{"items_per_row":1,"items_spacing":20}};}
var responsive_keys=[],current_per_row=0;for(var k in responsive_params){responsive_keys.push(Number(k));}
responsive_keys.sort(function(a,b){return a-b});function getRestrictions(c_width){var result={};for(var i=0;i<responsive_keys.length;i++){result=responsive_params[responsive_keys[i]];if(c_width<=responsive_keys[i]){break;}}
return result;}
var total_items=$el.childElementCount;function responsive(){var computed_style=getComputedStyle($container),container_width=$container.querySelector('.tb_side_nav')?$el.clientWidth:$container.clientWidth-(parseInt(computed_style.paddingRight)+parseInt(computed_style.paddingLeft)),restrictions=getRestrictions(container_width);if(current_per_row==restrictions.items_per_row){return;}
tbUtils.removeClass($el,'tb_size_1 tb_size_2 tb_size_3 tb_size_4 tb_size_5 tb_size_6 tb_size_7 tb_size_8 tb_multiline');tbUtils.removeClass($el,'tb_gut_0 tb_gut_10 tb_gut_20 tb_gut_30 tb_gut_40 tb_gut_50');tbUtils.addClass($el,'tb_size_'+restrictions.items_per_row+' '+'tb_gut_'+restrictions.items_spacing+(restrictions.items_per_row<total_items?' tb_multiline':''));current_per_row=restrictions.items_per_row;}
responsive();if(typeof container!='string'||!container){container='';}
tbUtils.onSizeChange(responsive,namespace,false,"adjustItemSize_"+container);if(!$el.hasAttribute('data-nth_classes')){var last_item_indexes=[];if(total_items>1){[2,3,4,5,6,7,8,9,10,11,12].forEach(function(key){last_item_indexes[key]=(Math.ceil(total_items / key)-1)*key;});}
[].forEach.call($el.children,function(el,i){[2,3,4,5,6,7,8,9,10,11,12].forEach(function(key){if(((i)/key)%1===0){tbUtils.addClass(el,'clear'+key);}});i++;last_item_indexes.forEach(function(key,index){if(i>key){tbUtils.addClass(el,'tb_size_'+index+'_last');}});});$el.setAttribute('data-nth_classes','1');}}
function element_query(elements,sizes,child){Array.prototype.forEach.call(document.querySelectorAll(elements),function(el){if(sizes===undefined){sizes=el.getAttribute('data-sizes');}
if(!sizes){sizes=[1280,1040,768,480,0];}
if(typeof sizes=="string"){sizes=sizes.split(",").sort(function(a,b){return b-a;});}
var width_detect=(function($element,sizes,child){var max_w=sizes[0];var min_w=sizes[sizes.length-1];return function(){var $el=$element;if(child!==undefined){$el=document.querySelector('#'+$element.id+' '+child);}
if(!$el){return;}
var computedStyle=getComputedStyle($el);var width=$el.offsetWidth-parseInt(computedStyle.paddingRight)-parseInt(computedStyle.paddingLeft);for(var i=0;i<sizes.length;i++){if(i==0){if(width>sizes[i]){tbUtils.removeClass($el,'tb_max_w_'+max_w+' tb_min_w_'+min_w);max_w=0;min_w=sizes[i];tbUtils.addClass($el,'tb_min_w_'+min_w);break;}}else{if(width>sizes[i]&&width<=sizes[i-1]){tbUtils.removeClass($el,'tb_max_w_'+max_w+' tb_min_w_'+min_w);max_w=sizes[i-1];min_w=sizes[i];tbUtils.addClass($el,'tb_max_w_'+max_w+' tb_min_w_'+min_w);break;}}}}})(el,sizes,child);var el_id='element_query_'+String(Math.random());if(el.id!==undefined){if(el.id){el_id='#'+el.id;}else{el_id=el.nodeName+'_'+el.className.replace(" ","_")+"_"+String(Math.random());}}
width_detect();tbUtils.onSizeChange(width_detect,false,false,el_id);});}
tbUtils.is_touch='ontouchstart'in window||navigator.MaxTouchPoints||navigator.msMaxTouchPoints;(function(window){window.tbApp=window.tbApp||{};var data={"\/tb\/category_path":null,"\/tb\/route":"product\/product","\/tb\/cache_enabled":1,"\/tb\/is_customer_logged":0};for(var key in data)tbApp[key]=data[key];})(window);if(typeof window.tb_wishlist_label!='undefined'){Array.prototype.forEach.call(document.querySelectorAll('a.wishlist_total, li.wishlist_total > a > .tb_text'),function(el){var holder=document.createElement('span'),number=document.createTextNode(window.tb_wishlist_label.replace(/[^0-9]/g,''));holder.appendChild(number);holder.classList.add('tb_items');el.appendChild(holder);});}
window.tbCriticalLoaded=true;if(window.tbBoot!==undefined){window.tbBoot();}(function(window){window.tbApp=window.tbApp||{};function executeInline(tbApp){tbUtils.globalEval("\r\ntbApp.onScriptLoaded(function() {\r\n  var page_url = window.location.href; \r\n\r\n  includeSvgResource(\"system\/vendor\/BurnEngine\/themes\/kiddos\/images\/decoration.svg\", 3);\r\n\r\n  $('body')\r\n    .prepend('<div id=\"decoration_scene_top\" data-limit-x=\"0\">' + \r\n  \t\t\t '  <div class=\"tb_dec__layer\"><span class=\"tb_dec__pos1\"><span class=\"tb_dec__cloud1\"><svg viewBox=\"0 0 165 102\"><use xlink:href=\"' + page_url + '#tb_dec_cloud_1\"><\/use><\/svg><\/span><\/div>' +\r\n  \t\t\t '  <div class=\"tb_dec__layer\"><span class=\"tb_dec__pos2\"><span class=\"tb_dec__cloud1 tb_dec__flipped\"><svg viewBox=\"0 0 165 102\"><use xlink:href=\"' + page_url + '#tb_dec_cloud_1\"><\/use><\/svg><\/span><\/span><\/div>' +\r\n  \t\t\t '  <div class=\"tb_dec__layer\"><span class=\"tb_dec__pos4 tb_dec__reverse\"><span class=\"tb_dec__cloud3\"><svg viewBox=\"0 0 85 53\"><use xlink:href=\"' + page_url + '#tb_dec_cloud_3\"><\/use><\/svg><\/span><\/div>' +\r\n  \t\t\t '  <div class=\"tb_dec__layer\"><span class=\"tb_dec__pos3\"><span class=\"tb_dec__plane\"><span class=\"tb_dec__part1\"><svg viewBox=\"0 0 92 59\"><use xlink:href=\"' + page_url + '#tb_dec_plane_body\"><\/use><\/svg><\/span><span class=\"tb_dec__part2\"><svg viewBox=\"0 0 6 60\"><use xlink:href=\"' + page_url + '#tb_dec_plane_fin\"><\/use><\/svg><\/span><\/span><\/span><\/div>' +\r\n  \t\t\t '  <div class=\"tb_dec__layer\"><span class=\"tb_dec__pos5 tb_dec__reverse\"><span class=\"tb_dec__plane tb_dec__flipped\"><span class=\"tb_dec__part1\"><svg viewBox=\"0 0 92 59\"><use xlink:href=\"' + page_url + '#tb_dec_plane_body\"><\/use><\/svg><\/span><span class=\"tb_dec__part2\"><svg viewBox=\"0 0 6 60\"><use xlink:href=\"' + page_url + '#tb_dec_plane_fin\"><\/use><\/svg><\/span><\/span><\/span><\/div>' +\r\n             '<\/div>');\r\n\r\n  var w = 0,\r\n      h = 0;\r\n\r\n  tbUtils.onSizeChange(function() {\r\n    if (w != $(window).width()) {\r\n      w = $(window).width();\r\n      h = $(window).height();\r\n      \r\n      $('#decoration_animation').remove();\r\n      $('head')\r\n        .append('<style id=\"decoration_animation\" type=\"text\/css\">' +\r\n                '@keyframes move_left_to_right {' +\r\n                '  0%   { transform: translate3d(0, 0, 0);      }' +\r\n                '  100% { transform: translate3d(' + (w + 200) + 'px, 0, 0); }' +\r\n                '}' +\r\n                '@keyframes plane_move {' +\r\n                '  0%   { transform: translate3d(0, 0, 0);    }' +\r\n                '  40%  { transform: translate3d(' + (w + 200) + 'px, 0, 0); }' +\r\n                '  100% { transform: translate3d(' + (w + 200) + 'px, 0, 0); }' +\r\n                '}' +\r\n                '@keyframes fin_rotate {' +\r\n                '  0%   { transform: rotateX(0deg);    }' +\r\n                '  100% { transform: rotateX(180deg);  }' +\r\n                '}' +\r\n                '<\/style>');\r\n    }\r\n  });\r\n  \r\n  tbApp.triggerResizeCallbacks();\r\n});\r\n\n  $('.tb_wt_header_logo_system').parent().addClass('tbLogoCol');\n  \ntbApp.onScriptLoaded(function() {\n  tabbed_menu('menu_url_BwW01');\n});\n\n            tbUtils.removeClass(document.querySelector('.tb_wt_header_cart_menu_system .table-striped'), 'table-striped');\n            Array.prototype.forEach.call(document.querySelectorAll('.tb_wt_header_cart_menu_system td .btn'), function(el) {\n              tbUtils.removeClass(el, 'btn-danger btn-xs');\n              tbUtils.addClass(el, 'btn-default btn-sm tb_no_text');\n            });\n          \ntbApp.onScriptLoaded(function() {\n\n    \/\/ Gallery\n\n    var $slider = new mightySlider(\n        '#product_images .frame',\n        {\n            speed:             500,\n            easing:            'easeOutExpo',\n            viewport:          'fill',\n            autoScale:         1,\n            preloadMode:       'instant',\n            navigation: {\n                slideSize:     '100%',\n                keyboardNavBy: 'slides'\n            },\n            commands: {\n                thumbnails:    1,\n                pages:         0,\n                buttons:       0            },\n                        dragging: {\n                swingSync:     5,\n                swingSpeed:    0.2\n            },\n                        thumbnails: {\n                thumbnailsBar:     '#product_images .tb_thumbs ul',\n                thumbnailsButtons: 0,\n                horizontal:        0,\n                thumbnailNav:      'centered',\n                thumbnailSize:     '20%'\n            },\n                        classes: {\n                loaderClass:   'tb_loading_bar'\n            }\n        }\n    );\n\n        function zoom_preview() {\n        $('#ProductImagesSystem_B5FObi8G .tb_zoom_box.tb_zoom_click').removeClass('tb_zoomed');\n        $('#ProductImagesSystem_B5FObi8G .tb_zoom_box').trigger('zoom.destroy').zoom({\n            url: $slider.slides[$slider.relative.activeSlide].options.cover,\n            on:  'click'\n        });\n    }\n\n    $('#ProductImagesSystem_B5FObi8G .tb_zoom_box.tb_zoom_click').bind('click', function(){\n        if ($(this).hasClass('tb_zoomed')) {\n            $(this).removeClass('tb_zoomed');\n        } else {\n            $(this).addClass('tb_zoomed');\n        }\n    });\n\n    $slider.one('coverLoaded', function (eventName) {\n      $('#product_images .tb_thumbs ul').removeClass('tb_grid_view tb_size_1 tb_size_2 tb_size_3 tb_size_4 tb_size_5 tb_size_6 tb_size_7 tb_size_8');\n    });\n\n    $slider.on('load moveEnd', function (eventName) {\n        zoom_preview();\n    });\n    \n    $slider.init();\n    $slider.activatePage(0);\n\n    \n    \/\/ Fullscreen gallery\n\n    var fullscreen_gallery_items = [\n      {\n        src:  'http:\/\/gocdochoi.local:88\/image\/cache\/catalog\/demo\/htc_touch_hd_1-500x500.jpg',\n        w:    500,\n        h:    500,\n        msrc: 'http:\/\/gocdochoi.local:88\/image\/cache\/catalog\/demo\/htc_touch_hd_1-220x220.jpg'\n      }\n            ,{\n        src:  'http:\/\/gocdochoi.local:88\/image\/cache\/catalog\/demo\/htc_touch_hd_2-500x500.jpg',\n        w:    500,\n        h:    500,\n        msrc: 'http:\/\/gocdochoi.local:88\/image\/cache\/catalog\/demo\/htc_touch_hd_2-70x70.jpg'\n      }\n          ];\n\n    $('#ProductImagesSystem_B5FObi8G .tbGoFullscreen').bind('click', function() {\n      lightbox_gallery('ProductImagesSystem_B5FObi8G', $slider, false, fullscreen_gallery_items);\n    });\n    \n    \/\/ Gallery changes detection\n\n    var myInterval = null;\n\n    jQuery('#content').on('change', ':input', function() {\n        var callback = function() {\n\n            var gallery,\n                new_gallery = false,\n                $images_src = $('#ProductImagesSystem_B5FObi8G .thumbnails');\n\n            fullscreen_gallery_items = [];\n\n            $images_src.find('a').each(function(index) {\n                gallery += '<div data-mightyslider=\"type: \\'image\\', cover: \\'' + $(this).attr('href') + '\\', thumbnail: \\'' + $(this).find('img').attr('src') + '\\'\"><\/div>';\n\n                fullscreen_gallery_items.push({\n                  src:  $(this).attr('href'),\n                  w:    500,\n                  h:    500,\n                  msrc: $(this).find('img').attr('src')\n                })\n\n                if ($(this).attr('href') != $slider.slides[index].options.cover) {\n                    new_gallery = true;\n                }\n            });\n\n            if ($images_src.find('a').length != $slider.slides.length) {\n                new_gallery = true;\n            }\n\n            if (new_gallery) {\n                var slides_num = $slider.slides.length;\n\n                $slider.off('load');\n                for (var i = 0; i < slides_num; i++) {\n                    $slider.remove('.mSSlide');\n                };\n                $slider.add(gallery);\n                $slider.on('load', function (eventName) {\n                  zoom_preview();\n                });\n            }\n\n            return new_gallery;\n        };\n\n        clearInterval(myInterval);\n\n        if (jQuery.active) {\n            $(document).one(\"ajaxStop.product-images\", function() {\n                var i = 0;\n\n                myInterval = setInterval(function () {\n                    if (callback() || i == 5) {\n                        clearInterval(myInterval);\n                    }\n                    i++;\n                }, 150);\n            });\n        } else {\n            setTimeout(function() {\n                callback();\n            }, 100);\n        }\n    });\n\n});\n\n$(document).ready(function() {\n    $('#content').find('select[name=\"profile_id\"], :input[name^=\"option\"], :input[name^=\"quantity\"]').change(function(){\n        $.ajax({\n            type: 'post',\n            url: 'index.php?route=tb\/getProductPrice',\n            dataType: 'json',\n            data: $('#content :checked, #content select, #content :input[name^=\"quantity\"], #content :input[name^=\"product_id\"]'),\n            success: function (data) {\n                if (typeof data.error != \"undefined\") {\n                    return;\n                }\n\n                var $priceWrap = $('.tb_wt_product_price_system');\n\n                if ($priceWrap.has('.price-old').length) {\n                    $priceWrap.find('.price-old').html(data.price);\n                    $priceWrap.find('.price-new').html(data.special);\n                } else {\n                    $priceWrap.find('.price-regular').html(data.price);\n                }\n                $priceWrap.find(\".price-tax span\").html(data.subtotal);\n            },\n            error: function(xhr, ajaxOptions, thrownError) {\n                alert(thrownError + \"\\r\\n\" + xhr.statusText + \"\\r\\n\" + xhr.responseText);\n            }\n        });\n    });\n});\n\ntbApp.onScriptLoaded(function() {\n    $('#input-quantity').TouchSpin({\n        max: 1000000000,\n        verticalbuttons: true,\n        verticalupclass: 'fa fa-caret-up',\n        verticaldownclass: 'fa fa-caret-down'\n    });\n});\n\n$('#button-cart').on('click', function() {\n    var url         = window.location.href,\n        button_text = $('#button-cart').text();\n\n    $.ajax({\n        url: 'index.php?route=checkout\/cart\/add',\n        type: 'post',\n        data: $('.product-info input[type=\\'text\\'], .product-info input[type=\\'number\\'], .product-info input[type=\\'date\\'], .product-info input[type=\\'datetime\\'], .product-info input[type=\\'hidden\\'], .product-info input[type=\\'radio\\']:checked, .product-info input[type=\\'checkbox\\']:checked, .product-info select, .product-info textarea'),\n        dataType: 'json',\n        beforeSend: function() {\n            $('#button-cart').attr('disabled', true);\n            $('#button-cart').text('');\n            $('#button-cart').append('<i class=\"fa fa-circle-o-notch fa-spin\"><\/i>');\n        },\n        success: function(json) {\n            $('.alert, .text-danger').remove();\n            $('.form-group').removeClass('has-error');\n\n            setTimeout(function(){\n                $('#button-cart').next('.fa-spin').remove();\n                $('#button-cart').text(button_text);\n                $('#button-cart').attr('disabled', false);\n            },200);\n\n            if (json['error']) {\n                var errors = '';\n\n                if (json['error']['option']) {\n                    for (i in json['error']['option']) {\n                        var element = $('#input-option' + i.replace('_', '-'));\n            \n                        element.parents('.form-group').first().find('> label + div').append('<div class=\"text-danger\">' + json['error']['option'][i] + '<\/div>');\n                    }\n                }\n                if (json['error']['recurring']) {\n                    $('select[name=\"recurring_id\"]').after('<span class=\"error\">' + json['error']['recurring'] + '<\/span>');\n                }\n                \/\/ Highlight any found errors\n                $('.text-danger').each(function() {\n                    $(this).parents('.form-group').first().addClass('has-error');\n                });\n                \/\/ Popup any found errors\n                \/\/ displayNotice('product', 'failure', 'product', errors);\n            }\n            if (json['success']) {\n                $('.tb_wt_header_cart_menu_system').load('index.php?route=common\/cart\/info');\n                displayNotice('product', 'success', 'product', json['success']);\n            }\n        },\n        error: function(xhr, ajaxOptions, thrownError) {\n            alert(thrownError + \"\\r\\n\" + xhr.statusText + \"\\r\\n\" + xhr.responseText);\n        }\n    });\n});\n\ntbApp.onScriptLoaded(function() {\n\n            var loadTwitter = function () {\n        !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=\/^http:\/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+':\/\/platform.twitter.com\/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');\n    };\n    \n            var loadGplus = function () {\n        (function(){var po=document.createElement('script');po.type='text\/javascript';po.async=true;po.src='https:\/\/apis.google.com\/js\/platform.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(po,s);})();\n    };\n    \n        \n        \n        $(document).on('lazybeforeunveil', function(e) {\n        if ($(e.target).filter('#ProductShareSystem_D4JhDJm6').length) {\n\n                                    var parseFBXML = function() {\n                FB.XFBML.parse(document.getElementById('ProductShareSystem_D4JhDJm6'));\n            };\n            if (window.FB_XFBML_parsed === undefined) {\n                window.FB_XFBML_parsed = parseFBXML;\n            } else {\n                parseFBXML();\n            }\n            \n                                    loadTwitter();\n            \n                                    loadGplus();\n            \n                        \n                                }\n    });\n    });\n\ntbApp.onScriptLoaded(function() {\n    $('#review').delegate('.pagination a', 'click', function(e) {\n      e.preventDefault();\n      $('#review').fadeOut('slow');\n\n      $('#review').load(this.href);\n\n      $('#review').fadeIn('slow');\n\n    });\n\n    $('#review').load('index.php?route=product\/product\/review&product_id=84');\n\n    $('#tbReviewFormWrap').detach().appendTo('body');\n\n    $('.tbReviewForm .buttons .btn').bind('click', function() {\n        $.ajax({\n            url: 'index.php?route=product\/product\/write&product_id=84',\n            type: 'post',\n            dataType: 'json',\n                        data: $(\".tbReviewForm\").serialize(),\n                        beforeSend: function() {\n                $('.tbReviewForm').addClass('tb_blocked tb_loading');\n                $('.tbReviewForm').prepend('<i class=\"fa fa-circle-o-notch fa-spin\"><\/i>');\n                $('.tbReviewForm .buttons .tb_button').attr('disabled', true);\n            },\n            complete: function() {\n                $('#captcha').attr('src', 'index.php?route=tool\/captcha#'+new Date().getTime());\n                $('input[name=\\'captcha\\']').val('');\n            },\n            success: function(json) {\n                $('.tbReviewForm .alert').remove();\n                $('.tbReviewForm').find('> .fa-spin').remove();\n                $('.tbReviewForm').removeClass('tb_blocked tb_loading');\n                $('.tbReviewForm .tb_submit .tb_button').attr('disabled', false);\n\n                if (json['error']) {\n                    $('.tbReviewForm').prepend('<div class=\"alert alert-danger\"><i class=\"fa fa-exclamation-circle\"><\/i> ' + json['error'] + '<\/div>');\n                }\n\n                if (json['success']) {\n                    $('.tbReviewForm').before('<div class=\"alert alert-success\"><i class=\"fa fa-check-circle\"><\/i> ' + json['success'] + '<\/div>');\n                    $('.tbReviewForm').hide();\n\n                    $('input[name=\\'name\\']').val('');\n                    $('textarea[name=\\'text\\']').val('');\n                    $('input[name=\\'rating\\']:checked').prop('checked', false);\n                    $('#captcha').attr('src', 'index.php?route=tool\/captcha#'+new Date().getTime());\n                    $('input[name=\\'captcha\\']').val('');\n                    if (typeof grecaptcha != 'undefined' && grecaptcha.reset !== undefined) {\n                        grecaptcha.reset();\n                    }\n\n                    var closeDialogTimeout = setTimeout(function(){\n                        $(\"#tbReviewFormWrap\").modal('hide');\n                    }, 4000);\n\n                    $(\"#tbReviewFormWrap\").on('hidden.bs.modal', function() {\n                        $('#tbReviewFormWrap .alert').remove();\n                        $('.tbReviewForm').show();\n                        clearTimeout(closeDialogTimeout);\n                    });\n                }\n            }\n        });\n    });\n});\n\ntbApp.on(\"inlineScriptsLoaded\", function() {\n        $(document).on('lazybeforeunveil', function(e) {\n        if ($(e.target).filter('#Group_AYu75Txx').length) {\n            createGroup('Group_AYu75Txx', 'tabs');\n        }\n    });\n    });\n\r\nsticky_header (\r\n  \"minimal\",\r\n  \"full_fixed\",\r\n  \"20px 0\"\r\n);\r\n\r\nscroll_to_top ();\r\n tbApp.trigger(\"inlineScriptsLoaded\");");}
if(window.tbApp.onScriptLoaded!==undefined){window.tbApp.onScriptLoaded(function(){executeInline.call(window,window.tbApp);});}else{window.tbApp.executeInline=executeInline;}})(window);