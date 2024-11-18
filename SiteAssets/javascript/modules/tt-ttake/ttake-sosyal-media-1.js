document.addEventListener("DOMContentLoaded", function () {

    let sosyalFace = document.querySelector('.ttake-sosical a.sosyal-facebook');
    let sosyalTw = document.querySelector('.ttake-sosical a.sosyal-twitter');
    let sosyalLnkdn = document.querySelector('.ttake-sosical a.sosyal-linkedn');
    let TTakeTitle = document.querySelector('.ttake-page-content h2').innerText;

    sosyalFace.href = "https://www.facebook.com/sharer/sharer.php?u=" + location.href;
    sosyalTw.href = "https://twitter.com/intent/tweet?text=" + TTakeTitle + "&url=" + location.href;
    sosyalLnkdn.href = "https://www.linkedin.com/sharing/share-offsite/?mini=true&url=" + location.href;
});


const haberlerBanner = document.querySelector('.ttake-haberler-banner');
const newsDate = document.querySelector('.ttake-news-date');

// .ttake-haberler-banner içindeki <div> sayısını kontrol etme
const divCount = haberlerBanner.querySelectorAll('div').length;

// Eğer .ttake-haberler-banner içinde <div> yoksa
if (divCount === 0) {
    // .ttake-news-date'e margin-top değeri atama
    newsDate.style.marginTop = '-35px';
}

