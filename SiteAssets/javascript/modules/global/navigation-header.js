function NavigationHeader() {
    $('header a.nav-toggle').on("click", function () {
        $('header').toggleClass("nav-active");
        $('body').toggleClass("open-nav");
        $('html').toggleClass("open-nav");
        $('.profile:not(.not-dropdown)').removeClass("active");
        $(".mobil-online-menu").removeClass("active");
        return false;
    });

    //Notification açıldığında body e class atıyorum -BT
    // $('header .toggle-notifications > a.link').on("click", function () {
    //     $('body').toggleClass("open-notification");
    //     return false;
    // });

    $('header .nav > ul > li').find('> i').on('click', function() {
        if($(window).width() < 1200) {
            if($(this).closest('li').hasClass('active')) {
                $(this).closest('li').removeClass('active');
            } else {
                $('header .nav > ul > li').removeClass('active');
                $(this).closest('li').addClass('active');
            }
            return false;
        }
    });

    $('header .nav > ul > li').hover(function () {
        $(this).find("ul").show();
    }, function () {
        $(this).find("ul").hide();
    });


    document.querySelector('#contentRow > header > div.header-top > div > ul.type-icon > li.position-relative > div').addEventListener('click',function() {
        if($(window).width() < 1200) {
            document.querySelector('#contentRow > header > div.header-top > div > ul.type-icon > li.position-relative > div > ul').classList.toggle('active');
            document.querySelector('#contentRow > header').classList.toggle('scrolled');
        }
    })
}

NavigationHeader();
// External linklerin ayrı sekmede açılmasını sağlar
const TTGroups = ['www.turktelekom.com.tr','#','javascript','kurumsal.turktelekom.com.tr','bireysel.turktelekom.com.tr'];

let AllLinks = document.querySelectorAll('a');
AllLinks.forEach(link => {
    let isTT = false;
    TTGroups.forEach(white => {
        if (link.href.includes(white)) {
            isTT = true;
        }
    })
    if (!isTT) {
        link.setAttribute('target','_blank');
    }
})

// Nav mobile'da arrowların gözükmesinin optimize edilmesi
let navElems = document.querySelectorAll('#nav .list li');
navElems.forEach(x => {
    if (x.querySelector('.mega-menu') == null) {
        x.querySelector('.icon-chevron-down') && (x.querySelector('.icon-chevron-down').style.display = 'none');
    }
})


// header'ın eleman sayısına göre dinamik olarak düzenin değişmesi.
/*let megaMenus = document.querySelectorAll('.mega-menu');
megaMenus.forEach(x => {
    let checkImg = x.querySelector('.row > .col-3').innerHTML.includes('<img')
    if (checkImg) {
        if (x.querySelectorAll('figure').length > 6) {
            x.querySelector('.row > .col-12').setAttribute('style', 'max-width:unset !important');
            x.querySelector('.mega-menu-img').style.display = 'none';
        }
    }else {
        if (x.querySelectorAll('figure').length > 3) {
            x.querySelector('.row > .col-12').setAttribute('style', 'max-width:unset !important');
        }
    }

})*/
let megaMenus = document.querySelectorAll('.mega-menu');
megaMenus.forEach(x => {
    let checkImg = x.querySelector('.row > .col-3').innerHTML.includes('<img');
    let p = 0;
    if (checkImg) {
        if (x.querySelectorAll('figure').length > 5) {
            x.querySelectorAll('.mega-menu-list > div').forEach(i => {
                p+=1;
                if (p > 6) {
                    i.style.display = 'none';
                }

            })
        }
    }
    else {
        x.querySelector('.row > .col-12').setAttribute('style', 'max-width:unset !important');
        x.querySelectorAll('.mega-menu-list > div').forEach(i => {
            p+=1;
            if (p > 9) {
                i.style.display = 'none';
            }
        })
    }
})

//kurumsaldaki nav-menulerin ilk tabini destopta gizleme -bt
if(location.href.includes("kurumsal.turktelekom")){
  if(window.innerWidth < 1200){
      document.querySelectorAll("nav .mega-menu-list div:first-child").forEach(megaMenu=>{
        megaMenu.style.display="block";
    });
  }
  else{
     document.querySelectorAll("nav .mega-menu-list div:first-child").forEach(megaMenu=>{
      megaMenu.style.display="none";
    });
  }
}
//bireyseldeki nav-menulerin ilk tabini destopta gizleme -bt
window.addEventListener("DOMContentLoaded", function() {
if (location.href.includes("bireysel.turktelekom") || location.href.includes("www.turktelekom")) {
    if (window.innerWidth < 1200) {
        const createDefaultElement = (link, text) => {
            const defaultElement = document.createElement("div");
            defaultElement.classList.add("default");
            const defaultP = document.createElement("p");
            const defaultA = document.createElement("a");
            defaultA.setAttribute("href", link);
            defaultA.innerText = text;
            defaultElement.appendChild(defaultP).appendChild(defaultA);
            return defaultElement;
        };

        const cihazlarDefault = createDefaultElement("https://bireysel.turktelekom.com.tr/cihazlar", "Cihazlar Ana Sayfa");
        document.querySelector(".nav .list li:nth-child(6) .mega-menu .container .row .col-12 .mega-menu-list").insertBefore(cihazlarDefault, document.querySelector(".nav .list li:nth-child(6) .mega-menu .container .row .col-12 .mega-menu-list div:first-child"));

        const dijitalDefault = createDefaultElement("https://bireysel.turktelekom.com.tr/dijital-servisler", "Dijital Servisler Ana Sayfa");
        document.querySelector(".nav .list li:nth-child(5) .mega-menu .container .row .col-12 .mega-menu-list").insertBefore(dijitalDefault, document.querySelector(".nav .list li:nth-child(5) .mega-menu .container .row .col-12 .mega-menu-list div:first-child"));
    } else {
        document.querySelectorAll(".mega-menu-list .default").forEach(defaultElement => {
            defaultElement.style.display = "none";
        });
    }
}
});

// Bildirim pop-up'ının local storage tarafında kontrol edilip tek sefer gösteriminin sağlanması
/*
try {
    setTimeout( function () {
        document.getElementById('btn-allow').addEventListener('click', function() {
            localStorage.setItem('isNMShown','true');
        })}, 200)
    
} catch {}

if (localStorage.getItem('isNMShown') == 'true') {
    document.querySelector('iframe[src*="netmera_worker.html"]').style.display = 'none';
}
*/

/*
if (location.href.includes('tedarikci-aday-basvuru')) {
    [].forEach.call(document.querySelectorAll('input[id*=Phone]'), function (input) {
        let keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            let pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            let matrix = " 0 (___) ___-__-__",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                newValue = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
                });
            i = newValue.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                newValue = newValue.slice(0, i);
            }
            let reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}";
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = newValue;
            if (event.type == "blur" && this.value.length < 5) this.value = "";
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false);
    });
    
}
*/

// bireysel mega menudeki dijital servislere esim ekleme bt

// document.addEventListener("DOMContentLoaded", function () {
//     if(location.href.includes('bireysel')){
//         let eSimCreate = document.createElement("div");
//         eSimCreate.classList.add("mega-sim");
//         eSimCreate.innerHTML = '<div><a href="https://www.turktelekom.com.tr/e-sim/index.html"><figure><picture><img src="https://www.turktelekom.com.tr/SiteAssets/images/sim-card.svg" class="asdx img-fluid"></picture></figure></a><p><a href="https://www.turktelekom.com.tr/e-sim/index.html">eSIM</a></p></div>'
//         document.querySelector('li:nth-child(5) .mega-menu-list > div:nth-child(3)').after(eSimCreate);
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
    // if(location.href.includes('bireysel')){
    //     let eSimCreate = document.createElement("div");
    //     eSimCreate.classList.add("mega-sim");
    //     eSimCreate.innerHTML = '<div><a href="https://www.turktelekom.com.tr/e-sim/index.html"><figure><picture><img src="https://www.turktelekom.com.tr/SiteAssets/images/sim-card.svg" class="asdx img-fluid" data-hover-gif="https://asset.turktelekom.com.tr/SiteAssets/images/animation-icons/eSIM.gif"></picture></figure></a><p><a href="https://www.turktelekom.com.tr/e-sim/index.html">eSIM</a></p></div>';
    //     document.querySelector('li:nth-child(5) .mega-menu-list > div:nth-child(3)').after(eSimCreate);

    //     var allGifs = document.querySelectorAll('.mega-menu-list > div a figure');

    //     allGifs.forEach(function(figure) {
    //         var megaMenuImg= figure.querySelector('img');
    //         var hoverGif = megaMenuImg.getAttribute('data-hover-gif');
    //         var normalImgSrc = megaMenuImg.getAttribute('src');
    //         var isPlayingGif = false;
    //         var timeout; 

    //         figure.addEventListener('mouseenter', function() {
    //             if (hoverGif && !isPlayingGif) {
    //                 megaMenuImg.setAttribute('src', hoverGif);
    //                 isPlayingGif = true;
    //                 timeout = setTimeout(function() {
    //                     megaMenuImg.setAttribute('src', normalImgSrc);
    //                     isPlayingGif = false; 
    //                 }, 1000); 
    //             }
    //         });

    //         figure.addEventListener('mouseleave', function() {
    //             if (isPlayingGif) {
    //                 clearTimeout(timeout);
    //                 megaMenuImg.setAttribute('src', normalImgSrc);
    //                 isPlayingGif = false;
    //             }
    //         },1000);
    //     });
    // }
    let megaMenuListDS = document.querySelectorAll('.mega-menu .mega-menu-list div');
    megaMenuListDS.forEach(megaMenuList=>{
        let megaMenuListA = megaMenuList.querySelector('a');
        let megaMenuListP = megaMenuList.querySelector('p');
        if(megaMenuListP.innerText ===  'Bilgi Servisleri'){
            megaMenuListA.href = 'https://bireysel.turktelekom.com.tr/dijital-servisler/tum-hizmet-servisleri?category=bilgi-servisleri';
        }
        if(megaMenuListP.innerText ===  'Arama Servisleri'){
            megaMenuListA.href = 'https://bireysel.turktelekom.com.tr/dijital-servisler/tum-hizmet-servisleri?category=arama-servisleri';
        }
    });
    let breadCrumbListDS = document.querySelectorAll('.breadcrumb li .breadcrumb-mega .breadcrumb-mega-link a');
    breadCrumbListDS.forEach(breadCrumbListA=>{
        if(breadCrumbListA.innerText === 'Bilgi Servisleri'){
            breadCrumbListA.href = '/dijital-servisler/tum-hizmet-servisleri?category=bilgi-servisleri';
        }
        if(breadCrumbListA.innerText === 'Arama Servisleri'){
            breadCrumbListA.href = '/dijital-servisler/tum-hizmet-servisleri?category=arama-servisleri';
        }
    });
});
// end

// bi dunya firsat slider button yer degistirme
window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.box-opportunity.bi-dunya .left-area')?.appendChild(document.querySelector('.box-opportunity .tns-controls'));
    document.querySelector('.box-opportunity.prime .left-area')?.appendChild(document.querySelector('.box-opportunity.prime .tns-controls'));
    document.querySelector('.box-opportunity.selfy .left-area')?.appendChild(document.querySelector('.box-opportunity.selfy .tns-controls'));
});
// end BT
// bi dunya firsat detay sayfalardaki app butonlari icin
document.addEventListener("DOMContentLoaded", function () {
    var apps = document.querySelectorAll(".detail-area-apps");
    apps.forEach(appsbrow => {
        if (/iPad|iPhone|iPod/i.test(navigator.userAgent)) {
            appsbrow.querySelectorAll("a")[0].style.display = 'flex';
            appsbrow.style.display = 'flex';
        } else if (/Android/i.test(navigator.userAgent)) {
            appsbrow.querySelectorAll("a")[1].style.display = 'flex';
            appsbrow.style.display = 'flex';
        } else if (/huawei/i.test(navigator.userAgent)) {
            apps[2].style.display = 'flex';
          }
    });
});

//end BT

//bi dunya slider icin loop seklinde donmesi icin 

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        let BiDunyaNextButton = document.querySelector('.box-opportunity.bi-dunya .container .left-area .tns-controls button[data-controls="next"]');
        let BiDunyaPrevButton = document.querySelector('.box-opportunity.bi-dunya .container .left-area .tns-controls button[data-controls="prev"]');
        let BiDunyaNavButtonLast = document.querySelector('.box-opportunity .tns-outer .tns-nav button:last-child');
        let BiDunyaNavButtonFirst = document.querySelector('.box-opportunity .tns-outer .tns-nav button:first-child');

        BiDunyaNextButton?.addEventListener('click', function(e) {
            if (BiDunyaNavButtonLast.classList.contains('tns-nav-active')) {
                e.stopPropagation();
                BiDunyaNavButtonFirst.click();
            }
        });
        BiDunyaPrevButton?.addEventListener('click', function(e) {
            if (BiDunyaNavButtonFirst.classList.contains('tns-nav-active')) {
                e.stopPropagation();
                BiDunyaNavButtonLast.click();
            }
        });
    }, 2000);
    
 });
 //end BT

//Mega-menu gif hareketlendirmesi -MC
var allGifs = document.querySelectorAll('.mega-menu-list > div a figure');

allGifs.forEach(function(figure) {
    var megaMenuImg= figure.querySelector('img');
    var hoverGif = megaMenuImg.getAttribute('data-hover-gif');
    var normalImgSrc = megaMenuImg.getAttribute('src');
    var isPlayingGif = false;
    var timeout; 

    figure.addEventListener('mouseenter', function() {
        if (hoverGif && !isPlayingGif) {
            megaMenuImg.setAttribute('src', hoverGif);
            isPlayingGif = true;
            timeout = setTimeout(function() {
            megaMenuImg.setAttribute('src', normalImgSrc);
            isPlayingGif = false; 
            }, 1000); 
        }
    });

    figure.addEventListener('mouseleave', function() {
        if (isPlayingGif) {
            clearTimeout(timeout);
            megaMenuImg.setAttribute('src', normalImgSrc);
            isPlayingGif = false;
        }
    },1000);
});

//Popüler kartların gif hareketlendirmesi -MC
var allItems = document.querySelectorAll('.box-news-item');

allItems.forEach(function(item) {
    var popularImg = item.querySelector('.img-fluid');
    if (popularImg) {
        var hoverGif = popularImg.getAttribute('data-hover-gif');
        var normalImgSrc = popularImg.getAttribute('src');
        var isPlayingGif = false;
        var timeout;

        item.addEventListener('mouseenter', function() {
            if (hoverGif && !isPlayingGif) {
                popularImg.setAttribute('src', hoverGif);
                isPlayingGif = true;
                timeout = setTimeout(function() {
                    popularImg.classList.add('fade-out');
                    setTimeout(function() {
                        popularImg.setAttribute('src', normalImgSrc);
                        popularImg.classList.remove('fade-out');
                        popularImg.classList.add('fade-in');
                        isPlayingGif = false;
                    }, 500); 
                }, 400); 
            }
        });

        item.addEventListener('mouseleave', function() {
            if (isPlayingGif) {
                clearTimeout(timeout);
                popularImg.classList.add('fade-out');
                setTimeout(function() {
                    popularImg.setAttribute('src', normalImgSrc);
                    popularImg.classList.remove('fade-out');
                    popularImg.classList.add('fade-in');
                    isPlayingGif = false;
                }, 1000); 
            }
        });
    }
});