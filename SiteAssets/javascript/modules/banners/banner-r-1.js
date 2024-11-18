function homeSlider(id, navid, option) {
  if(location.href.includes('?r=')){
      
    var params = [
      { key: "7aa379a4-97b3-4ad9-8ef2-1239f215e87e", hrefPart: "evde-internet" },
      { key: "7aa379a4-9345hg-4ad9-8ef2-1239f215e87e", hrefPart: "mobil" },
      { key: "test", hrefPart: "ozel-servis-numaralari" }
      // Daha fazla parametre ekleyebilirsiniz
    ];
    
    var currentParam = new URL(location.href).searchParams.get('r');
    var bannerInserted = false;
    for (var i = 0; i < params.length; i++) {
      if (currentParam === params[i].key) {
  
        var bannerBtn = document?.querySelector('.banner-wrap .banner-item .banner-text a[href*=' + params[i].hrefPart + ']');
        var banner = bannerBtn?.closest('.banner-item');
        var sliderBanner = banner?.closest('.banner-slider');

        // sliderBanner içindeki tum banner-item elementlerini aliyoruz
        var banners = Array.from(document.querySelectorAll('.banner-slider .banner-item'));
        // banner'in kacinci sırada olduğunu buluyoruz
        var bannerIndex = banners.indexOf(banner);
        if (banner) {
          // Banner'i slider'a ekle
          var sliderContainer = document.querySelector(id);
          sliderContainer.insertBefore(banner, sliderContainer.firstChild);
          
          // Slider'i yeniden baslat
          _option = {
            "container": id,
            "items": 1,
            "slideBy": "page",
            "loop": true,
            "mouseDrag": true,
            "gutter": 1,
            "speed": 400,
            "controlsText": ['<i class="icon-left-arrow"></i>', '<i class="icon-right-arrow"></i>'],
            "nav": true,
    
            "autoplay": true, // Autoplay
            "autoplayButtonOutput": false,
            "autoplayTimeout": 7000,
            "autoplayHoverPause": false, // Mouse banner uzerine geldiginde banner hareketine devam edecek. 
            "navPosition": "bottom",
            "onInit": function (info, eventName) {
              if ($(id).find('.tns-slide-active').find('.banner-text').hasClass('text-white')) {
                $(id).closest('.banner-wrap').addClass('dark-mode');
              }
            }
          };
          let bannerNavList = document.querySelector('.banner-nav ul.list');
          if(bannerNavList){
              // sliderBanner içindeki tum banner-item elementlerini alıyoruz
              var navbars = Array.from(bannerNavList.querySelectorAll('li'));
              // banner'in kacinci sirada olduğunu buluyoruz

              bannerNavList.insertBefore(navbars[bannerIndex], bannerNavList.firstChild);
          }
          
          bannerInserted = true;

          setTimeout(function() {
            // Nav-link'leri guncelle
            var navList = document.querySelector('.banner-nav .list');
            if(navList){
              var navItems = Array.from(navList.children);
              var bannerIndex = Array.from(sliderContainer.children).indexOf(banner);  
            } 
          }, 100);
          break;
        }
      }
    }
  }
      
  var _option = {
    "container": id,
    "items": 1,
    "slideBy": "page",
    "loop": true,
    "mouseDrag": true,
    "gutter": 1,
    "speed": 400,
    "controlsText": ['<i class="icon-left-arrow"></i>', '<i class="icon-right-arrow"></i>'],
    "nav": true,

    "autoplay": true, //Autoplay
    "autoplayButtonOutput": false,
    "autoplayTimeout": 7000,
    "autoplayHoverPause": false, //mause banner üzerine geldiğinde banner hareketine devam edecek. 

    "navPosition": "bottom",
    "onInit": function (info, eventName) {
      if ($(id).find('.tns-slide-active').find('.banner-text').hasClass('text-white')) {
        $(id).closest('.banner-wrap').addClass('dark-mode');
      }
      
    }
  }

  if (!$(id).closest('.banner-wrap').hasClass('arrows-banner')) {
    _option.controls = false;
  }

  if (navid != null && !$('html').hasClass('ipad') && $(window).width() > 1024) {
    _option.navContainer = navid;
  }

  if (typeof option === 'object' && option !== null) {
    Object.assign(option, _option);
  }

  var slider = tns(_option);

  var customizedFunction = function (info, eventName) {
    var info = slider.getInfo(),
      indexPrev = info.indexCached,
      indexCurrent = info.index;

    if ($(info.slideItems[indexCurrent]).find('.banner-text').hasClass('text-white')) {
      $(id).closest('.banner-wrap').addClass('dark-mode');
    } else {
      $(id).closest('.banner-wrap').removeClass('dark-mode');
    }
  }

  slider.events.on('indexChanged', customizedFunction);
}

//homeSlider('#home-banner');

//patlamalar olursa path'e göre kullan

//Sadece Anasayfada ve Kurumsal için özelleştirmeler

let kurumsalPathStatus = (document.location.origin.includes('kurumsal.turktelekom.com.tr') && document.location.pathname == "/") || (document.location.origin.includes('kurumsal.turktelekom.com.tr') && document.location.pathname.toLowerCase() == "/sayfalar/default.aspx");

let ENPathStatus = document.location.href.includes('turktelekom.com.tr/en');


if (kurumsalPathStatus || (document.location.origin.includes('www.turktelekom.com.tr') && document.location.pathname == "/") || (document.location.origin.includes('www.turktelekom.com.tr') && document.location.pathname.toLowerCase() == "/sayfalar/default.aspx") || ENPathStatus) {
  document.querySelector('.banner-wrap').classList.add('homepageslider');
  let bannerContainer2 = document.querySelector(".banner-wrap.arrows-banner");
  let bannerButtons2 = bannerContainer2.querySelectorAll('button');
  let headerMaster2 = document.querySelector('header')
  // MutationObserver ile DOM değişikliklerini izlemek
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (!bannerContainer2.classList.contains('dark-mode')) {
        headerMaster2.classList.remove('dark-bg');
        headerMaster2.classList.add('light-bg');
      } else {
        headerMaster2.classList.add('dark-bg');
        headerMaster2.classList.remove('light-bg');
      }
    });
  });

// İzlemek istediğiniz DOM elemanı ve seçenekleri belirleyin
var config = { childList: true, subtree: true };

// Gözlemlemeye başlayın
observer.observe(bannerContainer2, config);
  let mobileBannerHeight = document.querySelector('.banner-item .background-layer.d-md-none').getBoundingClientRect()['height'];
  document.addEventListener('scroll', function () {
    if (window.scrollY > (mobileBannerHeight - 108)) {
      headerMaster2.classList.add('scrolled');
    } else {
      headerMaster2.classList.remove('scrolled');
    }
  })

}


// Banner linklerinin sayfa içerisinde scroll ile yönlendirme yapılasını sağlar.
function scrolldiv(object) {
  window.scroll({
    top: findPosition(object),
    left: 0,
    behavior: "smooth",
  });
}

function findPosition(obj) {
  var currenttop = 0;
  if (obj.offsetParent) {
    do {
      currenttop += obj.offsetTop;
    } while ((obj = obj.offsetParent));
    return [currenttop];
  }
}

try {
  document.querySelectorAll('.banner-item a').forEach(x => {

    if (x.href.includes('?scroll=')) {
      let targetIndex = x.href.indexOf('?scroll=') + 8;
      let targetText = decodeURI(x.href.substring(targetIndex));
      targetText = targetText.toLowerCase().replaceAll(' ', '');
      specific_divs = document.querySelectorAll(".info-box-recipe");
      specific_divs.forEach(j => {
        if (j.classList.length < 2) {
          j.querySelectorAll('h4').forEach(header => {
            if (targetText == header.innerText.toLowerCase().replaceAll(' ', '')) {
              x.setAttribute("href", "javascript:void(0);");
              x.addEventListener("click", function () {
                scrolldiv(j);
                let tabIndex = Array.from(j.querySelectorAll('.tab-pane')).indexOf(header.closest('.tab-pane'));
                j.closest('.container').querySelectorAll('.nav-link')[tabIndex].click();
                return false;
              })
            }
          })
        }
      })
    }
  });
} catch (error) {

}


// Old
// document.querySelectorAll('.banner-item a').forEach(x => {

//   if (x.href.includes('?scroll=')) {
//     let targetIndex = x.href.indexOf('?scroll=') + 8;
//     let targetText = decodeURI(x.href.substring(targetIndex));
//     let targetDiv = {};
//     specific_divs = document.querySelectorAll(".info-box-recipe");
//     specific_divs.forEach(j => {
//       if (j.classList.length < 2) {
//         let H3 = j.querySelector('h3').innerHTML;
//         if (targetText == H3) {
//           targetDiv = j;
//         }
//       }
//     })
//     x.setAttribute("href", "javascript:void(0);");
//     x.addEventListener("click", function () {
//       scrolldiv(targetDiv);
//     })

//   }
// });


/* Bannerların tamamen mobilde tıklanabilir olmasını sağlar */
document.querySelectorAll('.banner-item').forEach(x => {
  x.addEventListener('click', function () {
    if (window.innerWidth < 768 && x.querySelector('a').innerText !== "") {
      location.assign(x.querySelector('a').href);
    }
  })
});
