(function ($) {
    $.fn.onlyAllow = function (filter) {
        if (typeof filter === 'string') {
            filter = filter.split('');
        }
        this.each(function () {
            $(this).bind('keypress', function (e) {

                if (e.charCode !== 0 && !e.ctrlKey) {
                    var k = e.which || e.charCode;
                    var t = String.fromCharCode(k),
                        valid = false;
                    if (filter instanceof RegExp) {
                        if (!filter.test(t)) {
                            return false;
                        }
                    } else {
                        if ($.isArray(filter)) {
                            for (var i = 0; i < filter.length; i++) {
                                if (t === filter[i]) {
                                    valid = true;
                                }
                            }
                            if (!valid) {
                                return false;
                            }
                        }
                    }
                }
            });
        });
    };
    
    $.fn.disallow = function (filter) {
        if (typeof filter === 'string') {
            filter = filter.split('');
        }
        this.each(function () {
            $(this).bind('keypress', function (e) {
                if (e.charCode !== 0) {
                    var k = e.which || e.charCode;
                    t = String.fromCharCode(k);
                    if (filter instanceof RegExp) {
                        if (filter.test(t)) {
                            return false;
                        }
                    } else {
                        if ($.isArray(filter)) {
                            for (var i = 0; i < filter.length; i++) {
                                if (t === filter[i]) {
                                    return false;
                                }
                            }
                        }
                    }
                }
            });
        });
    };

    $.fn.onlyNumber = function () {

        this.onlyAllow(/\d/);

        $(this).bind('paste', function () {
            var maxLength = $(this).attr('maxlength');

            if (maxLength != null && maxLength > 0)
                $(this).removeAttr('maxlength');

            var element = this;
            setTimeout(function () {
                var text = $(element).val();
                var regex = /[a-zA-ZıçğüçöşİÇÖĞŞÜ.*"#,@æ$%&()=?!'^+/_é<>ß´~ï€£½{\[\]}\\\-~;:¨|\- ]/g;
                var _final = text.replace(regex, "");

                if (maxLength != null && maxLength > 0) {
                    $(element).val(_final.substring(0, maxLength));
                    $(element).attr('maxlength', maxLength);
                } else {
                    $(element).val(_final);
                }

                $(element).trigger('focus');
            }, 100);
        });
    };

    $.fn.onlyEmail = function () {
        this.disallow('şŞĞğÜüÇçÖöİı !#/*{[()]}');
    };

    $.fn.onlyLetter = function () {
        this.onlyAllow(/^[a-zA-ZıçğüçöşİÇÖĞŞÜ\s]+$/);
        this.disallow(/[1234567890.*"#,@æ$%&()=?!'^+/_é<>£½{\[\]}\\\-~;:¨|\-]/g);

        $(this).bind('paste', function () {
            var element = this;
            setTimeout(function () {
                var text = $(element).val();
                var regex = /[1234567890.*"#,@æ$%&()=?!'^+/_é<>£½{\[\]}\\\-~;:¨|\-]/g;
                var _final = text.replace(regex, "");
                $(element).val(_final);
                $(element).trigger('focus');
            }, 100);
        });
    };
    
    $(".only-number").onlyNumber();
    $(".only-email").onlyEmail();
    $(".only-letter").onlyLetter();

       
    $('.collapse').on('shown.bs.collapse', function () {
        // Eğer .tt-app-body içinde accordion-item varsa işlem yapma
        if ($(this).closest('.tt-app-body').find(".accordion-item")[0]) {
            return;
        }
    
        // Diğer koşulların kontrolü burada devam eder
        if ($(".accordion,.accordion-wrap")[0] && !$(this).parents(".card")[0] && $(this).closest('.modal').length <= 0) {
            if(!$(this).closest('.tab-content')[0] && !$(this).hasClass("active")) {
                var offsetTop = $(this).parents(".accordion-item").offset().top;
                if($(window).width() < 1200) {
                    offsetTop = offsetTop - $('header').outerHeight();
                }
                $("body,html").animate({
                    scrollTop: offsetTop
                }, 500);
            }
        }
    });
    

	var currentYear = new Date().getUTCFullYear();
    $("#generated-year").html(currentYear); 
    
    showToTopBtn();
})(jQuery);

function getParameterByName(name, url) {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function getParameterByHash(name, url) {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[#&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

function loader(el, extraClass){
	$(el).append('<div class="loader '+ extraClass +'">'+
		'<img src="/PublishingImages/loader.gif" />'+
		'<span class="text">Lütfen Bekleyiniz...</span>'+
	'</div>');
}

function removeLoader(el) {
	$(el).find('.loader').remove();
}

function showToTopBtn(){
	$(window).on("scroll", function() {
	    $(window).scrollTop() > 1000 ? $(".to-top-btn").addClass("active") : $(".to-top-btn").removeClass("active");
	})
	
	$(document).on('click', '.to-top-btn', function(e) {
		$('html,body').animate({scrollTop: 0},'smooth');
    });

}