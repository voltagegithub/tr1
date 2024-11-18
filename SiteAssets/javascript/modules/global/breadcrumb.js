$(document).ready(function() {
  // Sayfa yüklendiğinde her bir span için kontrol et ve ilgili .breadcrumb-js-module aktifse span'e active sınıfını ekle
  $('.breadcrumb-js-module span').each(function() {
      var $module = $(this).closest('.breadcrumb-js-module');
      if ($module.hasClass('active')) {
          $(this).addClass('active');
      }
  });

  // .breadcrumb-js-module içindeki bir span'e tıklandığında
  $('.breadcrumb-js-module span').on('click', function() {
      var $module = $(this).closest('.breadcrumb-js-module');
      var $mega = $module.find('.breadcrumb-mega');

      if ($module.hasClass('active')) {
          // Eğer .breadcrumb-js-module zaten aktifse, aktif sınıfını kaldır ve altındaki mega menüyü gizle
          $module.removeClass('active');
          $mega.removeClass('active').slideUp();
          $(this).removeClass('active'); // Span'den active sınıfını kaldır
      } else {
          // Aksi takdirde, diğer tüm .breadcrumb-js-module ve .breadcrumb-mega'ların aktif sınıflarını kaldır
          $('.breadcrumb-js-module').removeClass('active');
          $('.breadcrumb-mega').removeClass('active').slideUp();
          $('.breadcrumb-js-module span').removeClass('active'); // Tüm span'lerden active sınıfını kaldır

          // Şuanki .breadcrumb-js-module'ü aktif yap, altındaki mega menüyü aktif yap ve göster
          $module.addClass('active');
          $mega.addClass('active').slideDown();

          // Bu kısım: Eğer span içindeki metin ile mega-link içindeki aynı metin varsa, ilgili a'ya active sınıfı ekle
          var spanText = $(this).text().trim();
          $mega.find('.breadcrumb-mega-link a').filter(function() {
              return $(this).text().trim() === spanText;
          }).addClass('active');
          
          // Ve tıklanan span'e active sınıfını ekle
          $(this).addClass('active');
      }
  });

  // Sayfa üzerinde bir yere tıklandığında
  $(document).on('click', function (e) {
      var $target = $(e.target);
      
      // Eğer tıklanan yer .breadcrumb-js-module içinde değilse, tüm .breadcrumb-js-module ve .breadcrumb-mega'ların aktif sınıflarını kaldır
      if (!$target.closest('.breadcrumb-js-module').length) {
          $('.breadcrumb-js-module').removeClass('active');
          $('.breadcrumb-mega').removeClass('active').slideUp();
          $('.breadcrumb-js-module span').removeClass('active'); // Tüm span'lerden active sınıfını kaldır
      }
  });
});



// SayfalarÄ±n en Ã¼st badge kontrolÃ¼ iÃ§in yazÄ±lan kod bloÄŸu
try {
  let PageHead = document.querySelector('.page-head');
  let BreadcrumbContent = document.querySelector('#breadcrumb').textContent;
  let BaseBadge = document.querySelector('#base-badge');
  let DetailBaseBadge = document.querySelector('.detail-badge-boxs .detail-badge-adv .musteri-badge');
  let DetailBaseBadgeText = document.querySelector('#detail-base-badge');

  if (BreadcrumbContent.includes('Yeni Müşteri') && location.href.includes('yeni') || location.href.includes('fiber-hizla-tanisma-kampanyasi')) {
    if(BaseBadge !== null){
      BaseBadge.innerHTML = 'Yeni Müşteri';
      BaseBadge.classList.add('yeni');
      PageHead.classList.add('badge-active');
    }
    if(location.href.includes('/mobil/yeni-musteri-tarife-ve-paketleri/faturali-tarifeler') || 
      location.href.includes('/evde-internet/yeni-musteri-kampanyalari/tum-yeni-musteri-kampanyalari') || 
      location.href.includes('/evde-internet/yeni-musteri-kampanyalari') ||
      location.href.includes('/tt-evde-internet/Sayfalar/diger-teklifler/fiber-hizla-tanisma-kampanyasi')){
      DetailBaseBadge?.classList.add('yeni');
      DetailBaseBadgeText.innerHTML = 'Yeni Başvuruya Özel';
      DetailBaseBadgeText.classList.add('yeni-musteri-badge-text');
    }
      
  }else if (BreadcrumbContent.includes('Mevcut Müşteri') && location.href.includes('mevcut')) {
    if(BaseBadge !== null){
      BaseBadge.innerHTML = "Türk Telekomlulara Özel";
      BaseBadge.classList.add('mevcut');
      PageHead.classList.add('badge-active');
    }
    if(location.href.includes('/mobil/mevcut-musteri-tarife-ve-paketleri/tum-faturali-tarifeler') || location.href.includes('/evde-internet/mevcut-musteri-kampanyalari/tum-mevcut-musteri-kampanyalari') || location.href.includes('/evde-internet/mevcut-musteri-kampanyalari')){
      DetailBaseBadge.classList.add('mevcut');
      DetailBaseBadgeText.innerHTML = 'Türk Telekomlulara Özel';
      DetailBaseBadgeText.classList.add('mevcut-musteri-badge-text');
    }
      
  }else if (location.href.includes('/bolgesel-tarifeler')) {
    if(BaseBadge !== null){
      BaseBadge.innerHTML = 'Yeni Müşteri';
      BaseBadge.classList.add('yeni');
      PageHead.classList.add('badge-active');
    }
  }else {
      BaseBadge.style.display = "none";
  }
  if (location.pathname.includes('/ev-telefonu')) {
      BaseBadge.style.display = "none";
      PageHead.classList.remove('badge-active');
  }
} catch (e) {

}

//Hemen Yenile butonu üzerine geldiğinde oluşan yeni deeplink -MC
if (location.href.includes('evde-internet') && location.href.includes('mevcut-musteri')) {
  var buyButtonElement = document.querySelector('.detail-page .detail-right-content .detail-text-btns .btn.btn-primary');
  
  if (buyButtonElement) {
      var buyButton = buyButtonElement;
      var buyButtonLink = buyButton.getAttribute("href").replace(/\s/g, '');
      var currentPagePath = window.location.pathname.trim();
      var currentPageParts = currentPagePath.split('/');
      var currentPage = currentPageParts.pop().trim();
      var updatedLink = buyButtonLink + "?kampanya=" + currentPage + "&kanal=ttwebsite";
      buyButton.href = updatedLink;
  }
}

//uygulama yönlendirme de telefona uygun appsi bulma
if (document.querySelector('.apps-logo')) {
    if (window.innerWidth < 1200) {
      if (document.querySelector('.app') || document.querySelector(".small-container")) {
        let apps = document.querySelectorAll('.apps-logo');
        apps.forEach(app => {
          app.style.display = 'none';
        });
        if (/huawei/i.test(navigator.userAgent)) {
          apps[2].style.display = 'block';
        }
        else if (/iPad|iPhone|iPod/i.test(navigator.userAgent)) {
          apps[0].style.display = 'block';
        }
        else if (/Android/i.test(navigator.userAgent)) {
          apps[1].style.display = 'block';
        }
      }
    }
  
    document.querySelectorAll(".card-minute").forEach(card => {
      card.children.length === 2 ? card.classList.add("multiple") : card.classList.remove("multiple");
    });
  }
  

//evde internet kartlardan online onların detay sayfasına badge ekleme -BT
if(location.pathname.includes('online') && location.pathname.includes('yeni-musteri') && location.pathname.includes('evde-internet')){
  document.querySelector('.detail-badge-adv .period-text').style.display = 'none';
  if(window.innerWidth <= 991){
    document.querySelector('.detail-badge-adv ').style.flexDirection = 'column';
  }
  let onlineBadge = document.createElement('div');
  let onlineBadgeSpan = document.createElement('span')
  onlineBadgeSpan.innerText = "Sadece web sitesi ve mobil uygulamada geçerlidir."
  onlineBadge.classList.add('online-badge');
  onlineBadge.appendChild(onlineBadgeSpan)
  document.querySelector('.detail-badge-adv .period-text').before(onlineBadge);
}

//end -BT

//mobil yeni müsteri sayfasindaki tabbedlarda sure eklendiginde suresi olmayan tablerde null donuyordu
let TabbedCardNoTime =  document.querySelectorAll('.container.mobile-showcase-chance .tabs .container.tabli-kartlar .tab-content .tab-pane .list-area .row');

TabbedCardNoTime.forEach(TabbedCardsNoTime => {
    TabbedCardsNoTime.innerHTML = TabbedCardsNoTime.innerHTML.replace("null", '');
});
//end -BT
