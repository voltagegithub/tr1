/*
// Tabbed kartlarda kampampanyalar kartlarının optimize eder.
let fromCards = document.querySelectorAll('.tab-content > div[id*="evTelefonu"] .card.v2');

fromCards.forEach(card => {
    card.classList.add('v2-campaignCard');
    let fromTitle = card.querySelector('.card-campaign-box-info h4');

    card.querySelector('.card-info > div:first-child').innerHTML = '<h4>' + fromTitle.textContent + '</h4>';
    
    fromTitle.remove();

    card.querySelector('.card-campaign-box-info').innerHTML = '<img src="https://bireysel.turktelekom.com.tr/tt-ev-telefonu/PublishingImages/kampanya-gorseller/bireysel-genel-liste.jpg" class="img-fluid" alt="" data-themekey="#">';
})
*/
/*
// 4'lü special programs bölümündeki linkleri ayrı sekmede açılmasını sağlar.
let specialPropgramsLinks = document.querySelectorAll('.box-news-item .text > div a.btn');
specialPropgramsLinks.forEach(link => {
    link.setAttribute('target','_blank');
})

*/