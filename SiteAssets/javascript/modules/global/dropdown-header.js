function dropdownHeader() {
  $(".dropdown-online:not(.not-dropdown) .btn").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).closest(".dropdown-online").find(".list").hide();
    } else {
      $(this).addClass("active");
      $(this).closest(".dropdown-online").find(".list").show();
    }
    return false;
  });

  $(document).on("click", function (e) {
    if (
      !$(e.target).closest(".dropdown-online:not(.not-dropdown)").length &&
      $(".dropdown-online:not(.not-dropdown)").hasClass("active")
    ) {
      $(".dropdown-online .btn").removeClass("active");
      $(".dropdown-online .list").hide();
    }
  });

  $(".profile:not(.not-dropdown)").click(function () {
    $(".mobil-online-menu").toggleClass("active");
    $(".profile:not(.not-dropdown)").toggleClass("active");
  });
  $(".mobil-online-menu .icon-close").click(function () {
    $(".mobil-online-menu").removeClass("active");
  });
  $(".mobil-online-menu .list li a").click(function () {
    $(".mobil-online-menu").removeClass("active");
    $(".mobil-online-detail").addClass("active");
  });
  $(".mobil-online-detail i.icon-close").click(function () {
    $(".mobil-online-menu").addClass("active");
    $(".mobil-online-detail").removeClass("active");
  });
}

dropdownHeader();



if (
  !(
    location.href.includes("auth") ||
    document.querySelector(".detail-page") == null ||
    document.querySelector(".accordion") == null
  ) &&
  window.innerWidth > 1200
) {
  // accordion iÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§erisinde oluÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸an boÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸luklarÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± temizler.
  try {
    document
      .querySelectorAll(".small-container div[id*=RichHtmlField] > br")
      .forEach((x) => {
        x.style.display = "none";
      });
    document
      .querySelectorAll(
        ".small-container div[id*=RichHtmlField] .accordion-header > br"
      )
      .forEach((x) => {
        x.style.display = "none";
      });
    //document.querySelector(".small-container div[id*=RichHtmlField]").innerHTML = 
    document
      .querySelector(".small-container div[id*=RichHtmlField]")
      .innerHTML.replace(/[\u200B-\u200D\uFEFF]/g, "");
  } catch { }

  let detailCard = document.querySelector(
    '.detail-page div[class*="detail-text"][class*="detail-text"]'
  ); // img div
  let detailAccordio = document.querySelectorAll(
    ".small-container .accordion .accordion-item"
  )[
    document.querySelectorAll(".small-container .accordion .accordion-item")
      .length - 1
  ]; // right content div
  if (
    (location.href.includes("kurumsal.turktelekom") ||
      location.href.includes("bi-dunya-firsat")) &&
    window.innerWidth > 1200
  ) {
    let detailRightPart = document.querySelector(
      ".detail-page > .row > div:last-child"
    );
    if (
      parseInt(getComputedStyle(detailRightPart).height) <
      parseInt(
        getComputedStyle(
          document.querySelector('.detail-page div[class*="detail-text"]')
        ).height
      )
    ) {
      detailRightPart.style.height = getComputedStyle(
        document.querySelector('.detail-page div[class*="detail-text"]')
      ).height;
    }
    document.querySelector(
      '.detail-page div[class*="detail-text"]'
    ).style.width = getComputedStyle(
      document.querySelector('.detail-page div[class*="detail-text"]')
    ).width;
  }
  if (detailAccordio == null) {
    // detaylarda akordiyon kullanmadÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±klarÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±nda ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼st saÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸ bÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¶lgeyi baz alÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±r.
    detailAccordio =
      document.querySelectorAll(".small-container")[
      document.querySelectorAll(".small-container").length - 1
      ];
  }

  let header = document.querySelector(".header"); //navigation
  let tt = 1;
  let limit = 0;

  if (limit == 0) {
    try {
      var topPX =
        header.getBoundingClientRect()["height"] +
        document.querySelector(".page-head").getBoundingClientRect()["height"];
    } catch {
      var topPX = header.getBoundingClientRect()["height"];
    }
    limit = 1;
  }

  document
    .querySelectorAll(".accordion .accordion-item .accordion-header a")
    .forEach((x) => {
      x.addEventListener("click", () => {
        $("html, body").animate(
          {
            scrollTop: $(
              '.detail-page div[class*="detail-text"][class*="detail-text"]'
            ).offset().top,
          },
          500,
          function () {
          }
        );
      });
    });
}
window.addEventListener("resize", function () {
  let detailCard2 = document.querySelector(
    '.detail-page div[class*="detail-text"][class*="detail-text"]'
  );
  if (window.innerWidth <= 1200 && detailCard2) {
    detailCard2.style.position = "relative";
    detailCard2.style.bottom = "unset";
    detailCard2.style.top = "unset";
  }
});
if (location.href.includes("kurumsal")) {
  const boxes = document.querySelectorAll(".bg-evde-internet");

  boxes.forEach((box) => {
    box.classList.remove("bg-evde-internet");
    box.classList.add("bg-is-interneti");
  });
}

window.addEventListener('DOMContentLoaded', (event) => {
  if (location.href.includes("mobil/")) {
    const alertWarninig = document.querySelector(".alert.alert-warning");
    const cdShareSO = document.querySelector(".cd-share-section");
    const MakButton = document.querySelector(".detail-text-btns-wrap");
    if (alertWarninig) {
      if(MakButton){
        MakButton.style.display = "none";
      }
      alertWarninig.style.display = "none";
      const bant = document.createElement("div");
      bant.classList.add("bant");
      if(cdShareSO){
        cdShareSO.style.display = "none";
      }
      document
        .querySelector("main")
        .insertBefore(bant, document.querySelector("main").children[0]);

      const bantText = document.createElement("p");
      bantText.classList.add("bant-text");
      bantText.innerText =
        "Bu sayfada yeni müşteri alımına kapalı teklifler listelenmektedir. Başvurabileceğiniz yeni teklifleri incelemek için ";
      bant.appendChild(bantText);

      const bantA = document.createElement("a");
      bantA.innerText = "tıklayınız.";
      if (location.href.includes('bireysel')) {
        bantA.href = "https://bireysel.turktelekom.com.tr/mobil/yeni-musteri-tarife-ve-paketleri/faturali-tarifeler";
      }
      if (location.href.includes('kurumsal')) {
        bantA.href = "https://kurumsal.turktelekom.com.tr/mobil/ses-tarifeleri";
      }
      bantA.style.textDecorationLine = "underline";
      bantText.appendChild(bantA);
      if (location.href.includes("auth")) {
        bant.style.position = "relative";
        bant.style.top = "0px";
      }
    }
  }
});

function showHide() {
  let filterPanel = document.querySelector(
    "div.filter-wrapper.open.row > div.panel.panel-white.col-md-3"
  );
  filterPanel.classList.remove("active");
  $("body").removeClass("overflow-hidden");
}

if (document.querySelector("#filterButton")) {
  const filterButton36 = document.querySelector("#filterButton");
  const newButton = document.createElement("a");
  newButton.setAttribute("id", "filterButton2");
  newButton.setAttribute("onclick", "showHide()");
  newButton.classList.add("btn", "btn-primary");
  newButton.textContent = "Filtreleri Uygula";

  filterButton36.after(newButton);
  filterButton36.style.display = "none";
}

let formGroup = document.querySelectorAll(".form-group");
let dropdownMenu = document.querySelectorAll(
  ".filter-content .dropdown .dropdown-menu"
);
if (window.innerWidth <= 480) {
  const myInterval = setInterval(myTimer, 100);
  function myTimer() {
    let inputss = document.querySelectorAll('input[type="checkbox"]');
    inputss.forEach((input) => {
      input.checked || input.hasAttribute("checked")
        ? input.classList.add("checked")
        : input.classList.remove("checked");
      const toggleOverflowClass = () => {
        const body = document.querySelector("body");
        if (input.checked) {
          body.classList.add("overflow-hidden");

        }
      };
      input.addEventListener("click", function () {
        input.checked
          ? input.classList.add("checked")
          : input.classList.remove("checked");
        let count = input.closest(".dropdown").querySelector(".count");
        let checkedInputs = input
          .closest(".dropdown")
          .querySelectorAll("input.checked");
        count.innerText = checkedInputs.length;
        checkedInputs.length === 0
          ? (count.style.visibility = "hidden")
          : (count.style.visibility = "visible");
        toggleOverflowClass();
      });
    });

    dropdownMenu.forEach((group) => {
      let length = group.querySelectorAll("input.checked").length;
      if (group.querySelectorAll("input.checked").length === 0) {
        group.previousElementSibling.querySelector(".count").style.visibility =
          "hidden";
      } else {
        group.previousElementSibling.querySelector(".count").style.visibility =
          "visible";
        group.previousElementSibling.querySelector(".count").innerText = length;
      }
    });
    clearInterval(myInterval);
  }
} else {
  dropdownMenu.forEach((group) => {
    group.previousElementSibling.querySelector(".count").style.visibility =
      "hidden";
  });
}

// Bootstrap hafiza kontrol ***Start*** -ub

// window.onbeforeunload = function () {
//   let arr = [];

//   document.querySelectorAll('.show').forEach(elm => {
//     arr.push(elm.id)
//   })
//   let obj = JSON.parse(localStorage.getItem('_bt_memory')) || {};
//   obj[`${window.location.pathname}`] = arr;
//   localStorage.setItem('_bt_memory', JSON.stringify(obj));
// };
// window.addEventListener("pageshow", (e) => {
//   if (e.persisted || performance.getEntriesByType("navigation")[0].type === 'back_forward') {
//     const attrStartsWith = (sel, str) => [...document.querySelectorAll(sel)]
//       .filter(ele => [...ele.attributes]
//         .filter(({ name }) => name.startsWith(str))
//         .length > 0
//       )
//     let nonShowActives = attrStartsWith(".show,.active", "aria-");

//     nonShowActives.forEach(active => active.classList.remove('active', 'show'));
//     Array.from(JSON.parse(localStorage.getItem('_bt_memory'))[`${window.location.pathname}`]).forEach(id => {
//       document.querySelector(`#${id}`).classList.add('show', 'active');
//     })
//   }
// })
// ***End*** 

// MegaMenu hover delay ***Start*** -ub
const hoverNavLinks = document.querySelectorAll('.header .nav ul li');
const hoverHeader = document.querySelector('header');
let navbarHoverTimeout = null;

hoverNavLinks.forEach((navLink, index) => {
  navLink.addEventListener('mouseenter', (e) => {
    if ($(window).width() > 1200) {
      let activeNavLink = document.querySelector('#nav li.active');
      if (activeNavLink) {
        navbarHoverTimeout = setTimeout(() => {
          activeNavLink?.classList.remove('active')
          navLink.classList.add('active');
        }, 400);
      }
      else {
        navLink.classList.add('active');
      }
    }
  });
  navLink.addEventListener('mouseleave', (e) => {
    if ($(window).width() > 1200) {
      clearTimeout(navbarHoverTimeout);
    }
  });
});
hoverHeader.addEventListener('mouseleave', (e) => {
  if ($(window).width() > 1200) {
    document.querySelector('#nav li.active')?.classList.remove('active');
    clearTimeout(navbarHoverTimeout);
  }
})
// ***End*** 

//Detay Sayflarında stciky card bölümünde small-container div'inin col-xs-8 alanına taşınması. ***Start*** -ub

const accParts = document.querySelectorAll('.small-container');
if (accParts.length > 0) {
  accParts.forEach(accPart => {
    const rightPanel = document.querySelector('main > div > .container > .detail-page > .row .col-xl-8.col-12 .detail-right-content')
      || document.querySelector('main > div > .container > .detail-page > .row .col-md-8 .detail-right-content')
      || document.querySelector('main > div > .container > .detail-page > .row .col-xl-7.col-12  .detail-right-content')
      || document.querySelector('main > div > .container > .detail-page > .row .col-md-7.col-sm-12  .detail-right-content');
    rightPanel.after(accPart);
  });
}

// ***End***

//mobil gorunumde filtre acikken titi'yi gizleme -od
var e;
var chatBotDisabled;
const myInterval2 = setInterval(myTimer2, 100);
function myTimer2() {
  e = document.querySelector(".panel.panel-white");
  chatBotDisabled = document.querySelector(".cbot-animation-holder");
  if (e && window.innerWidth < 768 && chatBotDisabled) {
    var observer = new MutationObserver(function (event) {
      e.classList.contains("active")
        ? (chatBotDisabled.style.display = "none")
        : (chatBotDisabled.style.display = "block");
    });
    observer.observe(e, {
      attributes: true,
      attributeFilter: ["class"],
      childList: false,
      characterData: false,
    });
    clearInterval(myInterval2);
  }
}


const HeaderUl = document.querySelector('.mobile-scroll .nav-content #nav ul.list');

if (HeaderUl) {
  var observerForMobileMenu = new MutationObserver(function (event) {
    if (event[0].target.classList.contains("nav-active")) {
      let urlBar =
        event[0].target.getBoundingClientRect().height -
        window.innerHeight;
      event[0].target.style.height = `${event[0].target.getBoundingClientRect().height - urlBar}px`;
      HeaderUl.style.paddingBottom = '125px';
    } else {
      document.querySelector("header").style.height = `unset`;
      HeaderUl.style.paddingBottom = '0px';
    }
  });

  observerForMobileMenu.observe(document.querySelector("header"), {
    attributes: true,
    attributeFilter: ["class"],
    childList: false,
    characterData: false,
  });
}


// Mobil'de hareket eden kart tagleri -od
document.addEventListener('DOMContentLoaded', function () {
  function applyCardAnimation() {
    if (window.innerWidth < 768 && location.pathname !== "/mobil/mevcut-musteri-tarife-ve-paketleri/tum-faturasiz-tarifeler") {
      const spanElements = document.querySelectorAll('.card-campaign-box-info span');

      spanElements.forEach(spanElement => {
        if (spanElement.scrollWidth > spanElement.clientWidth) {
          const textContent = spanElement.textContent;
          const movingSpan = document.createElement('span');
          movingSpan.setAttribute('data-text', textContent);
          spanElement.parentNode.replaceChild(movingSpan, spanElement);
          movingSpan.classList.remove('animate-scrollText');
          void movingSpan.offsetWidth;
          movingSpan.classList.add('animate-scrollText');
          movingSpan.style.animationDelay = '3s';

          movingSpan.addEventListener('animationiteration', () => {
            movingSpan.style.animationDelay = '3s';
          });
        }
      });
    }
  }

  applyCardAnimation();

  const cardResultsDiv = document.querySelector('.card-filter-results');
  const currentUrl = window.location.href;

  if (cardResultsDiv && !currentUrl.includes('cihazlar/')) {
    const observer = new MutationObserver(function () {
      applyCardAnimation();
    });
    observer.observe(cardResultsDiv, { childList: true });
  }
});


//Yeni Hat tabinin altindaki baslik metni revizesi -od
var parentElement = document.getElementById('step-1b');
if (parentElement) {
  var formTitle = parentElement.querySelector('.form-title-top');
  if (formTitle) {
    formTitle.innerHTML = 'Bilgilerinizi girin, yeni hat başvurunuz için sizi arayalım.';
  }
}

// Cardların fiyatlarındaki virgülden sonra küçük yapması -bt
document.addEventListener('DOMContentLoaded', function () {
  $(document).ready(function () {
    let strongToSpan = document.querySelectorAll('.cards .card .card-body .card-info .left-side .prices strong');

    strongToSpan.forEach(strongElement => {
      let text = strongElement.textContent;
      let commaIndex = text.indexOf(',');

      if (commaIndex !== -1) {
        let mainText = text.slice(0, commaIndex + 1);
        let subText = text.slice(commaIndex + 1);

        strongElement.innerHTML = mainText + '<span>' + subText + '</span>';
      }
    });
  })
  $(document).ajaxComplete(function () {
    let strongToSpan = document.querySelectorAll('.cards .card .card-body .card-info .left-side .prices strong');

    strongToSpan.forEach(strongElement => {
      let text = strongElement.textContent;
      let commaIndex = text.indexOf(',');

      if (commaIndex !== -1) {
        let mainText = text.slice(0, commaIndex + 1);
        let subText = text.slice(commaIndex + 1);

        strongElement.innerHTML = mainText + '<span>' + subText + '</span>';
      }
    });
  });
});

// Baska tab'e gecildiginde, tab title'inin degisimi -od
document.addEventListener('DOMContentLoaded', function () {
  var initialTitle = document.title;
  var titleEmoji = String.fromCodePoint(128522);

  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === 'visible') {
      document.title = initialTitle;
    }
  });

  window.addEventListener("blur", function () {
    if (window.location.href.includes('/en/')) {
      document.title = "Don't miss the advantages! " + titleEmoji;
    } else {
      document.title = "Fırsatları Kaçırma! " + titleEmoji;
    }
  });

  window.addEventListener("focus", function () {
    document.title = initialTitle;
  });
});

// mobilde menu acildiginda main gizleme -od
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.target.classList.contains('nav-active')) {
      main.style.display = 'none';
      footer.style.display = 'none';
    } else {
      main.style.display = '';
      footer.style.display = '';
    }
  });
});

observer.observe(header, {
  attributes: true,
  attributeFilter: ['class'],
  childList: false,
  characterData: false,
});

//Evde internet filtre sayfasındaki Paket türünnde Online'a özeli en başa getirme -BT
document.addEventListener('DOMContentLoaded', function () {
  const listItems = document.querySelectorAll('#fltrPaketTuru .dropdown .dropdown-menu.show li');

  const onlineOzelItem = Array.from(listItems).find(item => item.textContent.trim() === "Online'a Özel");

  if (onlineOzelItem) {
    onlineOzelItem.parentElement.prepend(onlineOzelItem);
  }
});
//end

//filtrele butonlarinin responsive duzenlemesi -od
document.addEventListener("DOMContentLoaded", function() {
  if (document.getElementsByClassName('btn-secondary-icon').length > 0) {
    if (window.innerWidth < 768) {
      var secondButton = document.getElementsByClassName('btn-secondary-icon')[0];
      secondButton.getElementsByTagName('span')[0].textContent = 'Temizle';
    }
  }

  var styleElement = document.createElement('style');
  styleElement.innerHTML = `
    @media only screen and (max-width: 768px) {
      .btns-wrap > .col-md-5 > .btn-group-wrap {
        display: flex!important;
        flex-direction: row-reverse;
        gap: 8px;
      }
      .icon-remove {
        display: none!important;
      }
      .filter-wrapper .panel .btns-wrap {
        height: 76px!important;
        padding: 16px 0!important;
      }
      .btns-wrap > .col-md-5 > .btn-group-wrap .btn-secondary-icon {
        width: 96px!important;
        font-weight: 600;
      }
      
      .btns-wrap > .col-md-5 > .btn-group-wrap button {
        margin: 0px!important;
        border-radius: 100px!important;
      }
      .panel-white .btn-group-wrap .btn {
        flex-basis: unset;
        flex: unset;
      }
      #filterButton2 {
        margin: 0px!important;
        border-radius: 100px!important;
      }
    }
  `;

  document.head.appendChild(styleElement);
});

//Hakkimizda bolumu duzenlemesi 675 -mc
document.addEventListener("DOMContentLoaded", function() {
function toggleActive(event) {
  var parentElement = event.target.closest(".nav-parent");
  if (parentElement.classList.contains("active")) {
      parentElement.classList.remove("active");
  }
}
var linkElements = document.querySelectorAll(".col-lg-3.nav-parent .title-list-gruop h6 a.link");
linkElements.forEach(function (linkElement) {
  linkElement.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      var parentElement = event.target.closest(".nav-parent");
      parentElement.classList.add("active");
      toggleActive(event);
      window.location.href = linkElement.href;
  });
});
});

// Kampanya Bitiş tarihi yer değiştirme
if (document.querySelector('.detail-page .row > .col-xl-4.col-12 .remaining-time')) {
  if (window.innerWidth > 768) {
    document.querySelector('.detail-page .row > div.col-xl-8.col-12').after(document.querySelector('.detail-page .row > .col-xl-4.col-12 .remaining-time'));
  } else if (window.innerWidth < 768) {
    document.querySelector('.detail-page .row > div.col-xl-8.col-12').before(document.querySelector('.detail-page .row > .col-xl-4.col-12 .remaining-time'));
  }
}
if (document.querySelector('.container.mobile-showcase-chance .tabs .container.tabli-kartlar .tab-content .tab-pane .item .remaining-time')) {
  if (window.innerWidth < 768) {
    let itemCampaignFinishArea =  document.querySelectorAll('.container.mobile-showcase-chance .tabs .container.tabli-kartlar .tab-content .tab-pane .item')
    itemCampaignFinishArea.forEach(itemCampaignFinish=>{
      itemCampaignFinish.querySelector('.list-area .row .left-part').after(itemCampaignFinish.querySelector('.remaining-time'))
    })
  }
}
//end BT

//Detay sayfalarda ucretlendirme tablosu varsa fiyat ve buton gizleme
document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector('.mobil-detail-pricing-area')) {
    document.querySelector('.detail-text-btns').style.display = 'none';
  }
});
//end BT

//erisilebilirlik taski kapsaminda aria-hidden attributelarinin tiny slider itemlarindan kaldirilmasi -od
document.addEventListener("DOMContentLoaded", function() {
  var divs = document.querySelectorAll('div.tns-item[aria-hidden="true"]');
  
  divs.forEach(function(div) {
    div.removeAttribute("aria-hidden");
  });
});


// Menulerin resp görünümünde 799 kapsamındakı bulguların çözümü -mc
// function hideDropdowns(action) {
//   if (action === "remove") {
//       document.querySelectorAll(".device-filter .count").forEach(element => {
//           element.style.visibility = "hidden";
//       });

//       document.querySelectorAll(".panel.panel-white").forEach(element => {
//           element.style.display = "block";
//       });

//       document.querySelectorAll(".cbot-animation-holder, .cbot-bounce, .panel.panel-white").forEach(element => {
//           element.style.display = "none";
//       });
//   }
// }

// let clearButton = document.querySelector(".btn-secondary-icon");
// clearButton.addEventListener("click", function() {
//   hideDropdowns("remove");
// });

// const formGroupsClick = document.querySelectorAll(".checkbox-wrap.form-group");
// formGroupsClick.forEach(formGroupsClick => {
// formGroupsClick.addEventListener("click", function(event) {
//         event.stopPropagation();    formGroupsClick.classList.toggle("checkedbold");
//     });
// });

// Mobil görünümde filtrelerin kapalı gelmesi -mc
$(document).ready(function(){
  function adjustDropdown() {
    if($(window).width() <= 770){ 
      $('.filter-content .dropdown-menu:first').addClass('show'); 
      $('.filter-content .dropdown.multiple-select:first').addClass('show'); 
      $('.filter-content .dropdown-menu:not(:first)').removeClass('show'); 
      $('.filter-content .dropdown.multiple-select:not(:first)').removeClass('show'); 
    } else {
      $('.dropdown-menu').addClass('show');
      $('.dropdown.multiple-select').addClass('show');
    }
  }

  $(window).resize(adjustDropdown);
  
  $('.dropdown.multiple-select .dropdown-menu').on('click', function(event){
    event.stopPropagation(); 
    var parentDropdown = $(this).closest('.dropdown.multiple-select');
    $(this).toggleClass('show'); 
    parentDropdown.toggleClass('show'); 
  });

  adjustDropdown();
});

// Bi Dunya Firsat kampanyalarinda sms kutusunun responsive'de mesaj app'ine yonlendirmesi -od
document.addEventListener("DOMContentLoaded", function() {
  var currentUrl = window.location.href;
  if (currentUrl.includes("bi-dunya-firsat/")) {
    var maxWidth = window.matchMedia("(max-width: 768px)");
    var linkElement = null;
    var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    function createLink() {
      var smstextElement = document.querySelector(".campaign-pass + p strong:first-of-type");
      if (!smstextElement) {
        console.error("Could not find the required element.");
        return;
      }
      var smstext = smstextElement.textContent;
      var bodyValue = encodeURIComponent(smstext + " ");
      var hrefValue = isIOS ? "sms:6262&body=" + bodyValue : "sms:6262?body=" + bodyValue;

      linkElement = document.createElement("a");
      linkElement.setAttribute("href", hrefValue);
      linkElement.textContent = "";

      var detailCampaignPassElement = document.querySelector(".detail-campaign-pass");
      if (!detailCampaignPassElement) {
        console.error("Could not find the required element.");
        return;
      }
      detailCampaignPassElement.parentNode.insertBefore(linkElement, detailCampaignPassElement);
      linkElement.appendChild(detailCampaignPassElement);
    }

    function removeLink() {
      if (linkElement) {
        var detailCampaignPassElement = document.querySelector(".detail-campaign-pass");
        if (!detailCampaignPassElement) {
          console.error("Could not find the required element.");
          return;
        }
        detailCampaignPassElement.parentNode.insertBefore(detailCampaignPassElement.firstChild, linkElement);
        detailCampaignPassElement.parentNode.removeChild(linkElement);
        linkElement = null;
      }
    }

    function handleViewportChange(e) {
      if (e.matches) {
        createLink();
      } else {
        removeLink();
      }
    }

    handleViewportChange(maxWidth); // Call the function initially

    maxWidth.addEventListener("change", handleViewportChange);
  }
});

// Prime Ayricaliklari kampanyalarinda sms kutusunun responsive'de mesaj app'ine yonlendirmesi -od
document.addEventListener("DOMContentLoaded", function() {
  var currentUrl = window.location.href;
  if (currentUrl.includes("turk-telekom-prime-ayricaliklari/")) {
    var maxWidth = window.matchMedia("(max-width: 768px)");
    var linkElement = null;
    var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    function createLink() {
      var smstextElement = document.querySelector(".detail-campaign-pass p strong:first-of-type");
      if (!smstextElement) {
        console.error("Could not find the required element.");
        return;
      }
      var smstext = smstextElement.textContent;
      var bodyValue = encodeURIComponent(smstext);
      var hrefValue = isIOS ? "sms:6262&body=" + bodyValue : "sms:6262?body=" + bodyValue;

      linkElement = document.createElement("a");
      linkElement.setAttribute("href", hrefValue);
      linkElement.textContent = "";

      var benefitCampaignElement = document.querySelector(".benefit-campaign-evde-internet");
      if (!benefitCampaignElement) {
        console.error("Could not find the required element.");
        return;
      }
      benefitCampaignElement.parentNode.insertBefore(linkElement, benefitCampaignElement);
      linkElement.appendChild(benefitCampaignElement);
    }

    function removeLink() {
      if (linkElement) {
        var benefitCampaignElement = document.querySelector(".benefit-campaign-evde-internet");
        if (!benefitCampaignElement) {
          console.error("Could not find the required element.");
          return;
        }
        benefitCampaignElement.parentNode.insertBefore(benefitCampaignElement.firstChild, linkElement);
        benefitCampaignElement.parentNode.removeChild(linkElement);
        linkElement = null;
      }
    }

    function handleViewportChange(e) {
      if (e.matches) {
        createLink();
      } else {
        removeLink();
      }
    }

    handleViewportChange(maxWidth); // Call the function initially

    maxWidth.addEventListener("change", handleViewportChange);
  }
});


//"Dijital Eğlence Paketi İlginizi Çekebilir" kutucuğundaki innerText boş iken çalışması gereken kod -mc
if (document.querySelector('.detail-page .detail-right-content .promotion-box-muud .promotion-footnote')?.innerText === '') {
  document.querySelector('.detail-page .detail-right-content .promotion-box-muud .promotion-footnote').style.display = 'none';
}

//paket türü boşluk -mc
let filterDropdownMc =  document.querySelectorAll('.panel-white.col-md-3 .panel-body .filter-panel-form .filter-content > div div .dropdown .dropdown-menu .checkbox-wrap');

filterDropdownMc.forEach(filterDropdownItemMc => {
  filterDropdownItemMc.innerHTML = filterDropdownItemMc.innerHTML.replace(/\&nbsp;/g, '');
});


// Kartlarin tamaminin tiklanabilir olmasi -od
document.addEventListener("DOMContentLoaded", function() {
  function navigateToUrl(url) {
      window.location.href = url;
  }

// card-campaign-box-info kartlari
  document.querySelectorAll('.card-campaign-box-info, .card-info').forEach(element => {
      element.addEventListener('click', function(event) {
          if (!event.target.closest('.accordion-wrap')) {
              const card = event.target.closest('.card');
              const url = card.querySelector('.button a').getAttribute('href');
              navigateToUrl(url);
          }
      });

      const link = element.querySelector('.button a');
      if (link) {
          link.addEventListener('click', function(event) {
              event.stopPropagation(); 
          });
      }
  });

  // dijijtal-servisler
  var cardsDS = document.querySelectorAll('.dscard');
  cardsDS.forEach(function(cardDS) {
      cardDS.addEventListener('click', function() {
          var linkDS = cardDS.querySelector('.ci-incele .button a');
          if (linkDS) {
              window.location.href = linkDS.href;
          }
      });

      const linkDS = cardDS.querySelector('.ci-incele .button a');
      if (linkDS) {
          linkDS.addEventListener('click', function(event) {
              event.stopPropagation(); 
          });
      }
  });

  // cihazlar
  if (window.location.href.includes('cihazlar')) {
      var cardsC = document.querySelectorAll('.card');
      cardsC.forEach(function(cardC) {
          cardC.addEventListener('click', function() {
              var linkC = cardC.querySelector('.btn.btn-primary');
              if (linkC) {
                  window.location.href = linkC.href;
              }
          });

          const linkC = cardC.querySelector('.btn.btn-primary');
          if (linkC) {
              linkC.addEventListener('click', function(event) {
                  event.stopPropagation(); 
              });
          }
      });
  }
});


// Cihazlar bos olan faturaya ek alani icin -BT
document.addEventListener("DOMContentLoaded", function(event) {
  $(document).ready(function() {
      document.querySelectorAll('.card-price > div:first-child strong').forEach(cardItemStrong=>{
      if(cardItemStrong.innerText === ''){
          cardItemStrong.parentElement.parentElement.parentElement.classList.add('no-installment');
      }
  });
  })
  $( document).ajaxComplete(function() {
      document.querySelectorAll('.card-price > div:first-child strong').forEach(cardItemStrong=>{
      if(cardItemStrong.innerText === ''){
          cardItemStrong.parentElement.parentElement.parentElement.classList.add('no-installment');
      }
  });
  });
});
// THE END

// Secim yap sayfalari no index -BT

document.addEventListener('DOMContentLoaded', function() {
  var currentUrl = window.location.href;
  if (currentUrl.indexOf("IsDlg=1") > -1) {
      var meta = document.createElement('meta');
      meta.name = 'robots';
      meta.content = 'noindex, nofollow';
      document.getElementsByTagName('head')[0].appendChild(meta);
  }
});

// THE END

// Kurumsal taraftaki musteri alimina kapali kart detay accordion acilmama -BT
document.addEventListener("DOMContentLoaded", function() {
  let faqItems = document.querySelectorAll('.faqItem');
  faqItems.forEach(faqItem => {
      faqItem.querySelector('.faqTitle a').addEventListener('click', function(event){
          event.preventDefault();
          faqItem.querySelector('.faqContent').classList.toggle('show');
      });
  });
});
// THE END

// Cookie'de Channel ya da Channel1 bulunmasi durumunda LPPAID value'lu Channel parametresi olusumu -BT
document.addEventListener('DOMContentLoaded', function () {
  const CHANNEL_VALUE = 'LPPAID';

  function setChannelInLocalStorage() {
    const url = document.location.search;
    const rMatch = url.match(/r=([^&]*)/);
    if (rMatch) {
      localStorage.setItem('channel', CHANNEL_VALUE);
    } 
  }

  function getChannelFromLocalStorage() {
    return localStorage.getItem('channel');
  }

  function updateChannelParameter(url) {
    const urlObj = new URL(url, window.location.origin);
    urlObj.searchParams.set('channel', CHANNEL_VALUE);
    return urlObj.toString();
  }

  function updateLinks() {
    // Belirli sayfalarda belirli linkleri güncelle
    if (window.location.href.includes('evde-internet/')) {
      updateAnchors('.detail-right-content .detail-text-btns-wrap a');
    }

    updateAnchors('a[href*="onlineislemler.turktelekom.com.tr/ttnetwsci/guest/e2eSale"]');

    // Eğer şu anki sayfa onlineislemler sayfası ise, URL'yi güncelle
    if (window.location.href.includes('onlineislemler.turktelekom.com.tr/ttnetwsci/guest/e2eSale')) {
      const updatedUrl = updateChannelParameter(window.location.href);
      window.history.replaceState(null, null, updatedUrl);
    }
  }

  function updateAnchors(selector) {
    const anchors = document.querySelectorAll(selector);
    
    anchors.forEach(anchor => {
      const href = anchor.getAttribute('href');
      if (href) {
        const updatedHref = updateChannelParameter(href);
        anchor.setAttribute('href', updatedHref);
      }
    });
  }

  // URL'de 'gclid' parametresini kontrol et (reklam trafiği için)
  const urlParams = new URLSearchParams(window.location.search);
  const gclid = urlParams.get('gclid');

  if (gclid) {
    // Reklam trafiği, localStorage'a LPPAID değerini kaydet
    setChannelInLocalStorage();
  }

  // localStorage'dan channel değerini al
  const channelValue = getChannelFromLocalStorage();
  // Eğer channel değeri LPPAID ise, linkleri güncelle
  if (channelValue === CHANNEL_VALUE) {
    updateLinks();
  }
});

document.addEventListener('DOMContentLoaded', function () {
  // Function to handle promotion boxes
  function handlePromotionBoxes() {
    // Handle the original promotion-box-muud structure
    const pbmuud = document.querySelector('.promotion-box-muud:not(.triple-promotion-section)');
    if (pbmuud) {
      const button = pbmuud.querySelector('.prm-info-button a');
      const promotionIcon = pbmuud.querySelector('.promotion-icon');
      
      if (button && promotionIcon) {
        const url = button.getAttribute('href');
        promotionIcon.style.cursor = 'pointer';
        promotionIcon.addEventListener('click', function () {
          if (url) {
            window.location.href = url;
          }
        });
      }
    }

    // Handle the triple-promotion-section structure
    var triplePromotionSection = document.querySelector('.triple-promotion-section');
    
    if (triplePromotionSection) {
      const promotionBodies = triplePromotionSection.querySelectorAll('.promotion-body');
      
      promotionBodies.forEach(function(promotionBody) {
        const pmbutton = promotionBody.querySelector('.prm-info-button a');
        const promotionIcon = promotionBody.querySelector('.promotion-icon');
        
        if (pmbutton && promotionIcon) {
          const PMurl = pmbutton.getAttribute('href'); // Corrected to use pmbutton instead of button
          promotionIcon.style.cursor = 'pointer';
          promotionIcon.addEventListener('click', function () {
            if (PMurl) {
              window.location.href = PMurl;
            }
          });
        }
      });
    }
  }

  // Call handlePromotionBoxes immediately
  handlePromotionBoxes();

  // Call handlePromotionBoxes after specified intervals
  setTimeout(handlePromotionBoxes, 500);  // 0.5 seconds
  setTimeout(handlePromotionBoxes, 1000); // 1 second
  setTimeout(handlePromotionBoxes, 2000); // 2 seconds
});



// THE END


// Dijital eglence paketi slider yapılı düzenlemesi hk. -mc
document.addEventListener('DOMContentLoaded', function() {
  // Üçlü promosyon alanı varsa çalıştır
  const promotionSection = document.querySelector('[id$="promotionBoxTrio"]');
  if (!promotionSection) {
    return;
  }
  promotionSection.classList.add('triple-promotion-section');

  const script = document.createElement('script');
  script.src = 'https://unpkg.com/swiper/swiper-bundle.min.js';
  document.head.appendChild(script);

  const swiperStyle = document.createElement('link');
  swiperStyle.rel = 'stylesheet';
  swiperStyle.href = 'https://unpkg.com/swiper/swiper-bundle.min.css';
  document.head.appendChild(swiperStyle);
  
  const ttStyle = document.createElement('link');
  ttStyle.rel = 'stylesheet';
  ttStyle.href = 'https://asset.turktelekom.com.tr/SiteAssets/css/dijital-eglence-tabs.css';
  document.head.appendChild(ttStyle);

  script.onload = function() {
    const promotionHead = promotionSection.querySelector('.promotion-head').cloneNode(true);
    const promotionBodies = promotionSection.querySelectorAll('.promotion-body');
    
    // Üçlü promosyon bölümünü seç ve class ekle
    const swiperContainer = document.createElement('div');
    swiperContainer.className = 'swiper-container mySwiper';
    const swiperWrapper = document.createElement('div');
    swiperWrapper.className = 'swiper-wrapper';
    // Swiper yapısını oluştur
    promotionBodies.forEach(body => {
      const slide = document.createElement('div');
      slide.className = 'swiper-slide';
      slide.appendChild(body.cloneNode(true));
      swiperWrapper.appendChild(slide);
    });
    // Navigasyon butonları ve pagination ekle
    swiperContainer.appendChild(swiperWrapper);
    
    const nextButton = document.createElement('div');
    nextButton.className = 'swiper-button-next';
    const prevButton = document.createElement('div');
    prevButton.className = 'swiper-button-prev';
    const pagination = document.createElement('div');
    pagination.className = 'swiper-pagination';
    
    swiperContainer.appendChild(nextButton);
    swiperContainer.appendChild(prevButton);
    swiperContainer.appendChild(pagination);
    
    promotionSection.innerHTML = '';
    promotionSection.appendChild(promotionHead);
    promotionSection.appendChild(swiperContainer);
    
    const swiper = new Swiper('.mySwiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      width: window.innerWidth >= 770 ? 529 : 300,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        init: function() {
          updateVisibility(this);
        },
        slideChange: function() {
          updateVisibility(this);
        }
      }
    });

    function updateVisibility(swiper) {
      const slides = swiper.slides;
      slides.forEach((slide, index) => {
        const body = slide.querySelector('.promotion-body');
        if (body) {
          if (index === swiper.activeIndex || index === swiper.activeIndex + 1 || index === swiper.activeIndex - 1) {
            body.classList.add('visible');
          } else {
            body.classList.remove('visible');
          }
        }
      });
    }
  };
});
//End