document.addEventListener("DOMContentLoaded", function () {
  var citiesCord = [
    { city: "ADANA", lat: 37.0017, long: 35.3213 },
    { city: "ADIYAMAN", lat: 37.7648, long: 38.2767 },
    { city: "AFYONKARAHİSAR", lat: 38.7638, long: 30.54 },
    { city: "AĞRI", lat: 39.7191, long: 43.051 },
    { city: "AKSARAY", lat: 38.3687, long: 34.037 },
    { city: "AMASYA", lat: 40.6521, long: 35.8335 },
    { city: "ANKARA", lat: 39.9334, long: 32.8597 },
    { city: "ANTALYA", lat: 36.8969, long: 30.7133 },
    { city: "ARDAHAN", lat: 41.109, long: 42.7023 },
    { city: "ARTVİN", lat: 41.1828, long: 41.8194 },
    { city: "AYDIN", lat: 37.8444, long: 27.8456 },
    { city: "BALIKESİR", lat: 39.6492, long: 27.8826 },
    { city: "BARTIN", lat: 41.6353, long: 32.3372 },
    { city: "BATMAN", lat: 37.8812, long: 41.1353 },
    { city: "BAYBURT", lat: 40.2603, long: 40.2261 },
    { city: "BİLECİK", lat: 40.141, long: 29.9793 },
    { city: "BİNGÖL", lat: 38.8848, long: 40.493 },
    { city: "BİTLİS", lat: 38.3938, long: 42.1232 },
    { city: "BOLU", lat: 40.735, long: 31.6061 },
    { city: "BURDUR", lat: 37.7204, long: 30.2909 },
    { city: "BURSA", lat: 40.1828, long: 29.0661 },
    { city: "ÇANAKKALE", lat: 40.1553, long: 26.4142 },
    { city: "ÇANKIRI", lat: 40.601, long: 33.6134 },
    { city: "ÇORUM", lat: 40.5489, long: 34.9533 },
    { city: "DENİZLİ", lat: 37.7833, long: 29.0953 },
    { city: "DİYARBAKIR", lat: 37.9158, long: 40.211 },
    { city: "DÜZCE", lat: 40.8438, long: 31.1565 },
    { city: "EDİRNE", lat: 41.6772, long: 26.5554 },
    { city: "ELAZIĞ", lat: 38.6755, long: 39.2222 },
    { city: "ERZİNCAN", lat: 39.7525, long: 39.492 },
    { city: "ERZURUM", lat: 39.9043, long: 41.2678 },
    { city: "ESKİŞEHİR", lat: 39.7767, long: 30.5206 },
    { city: "GAZİANTEP", lat: 37.0662, long: 37.3833 },
    { city: "GİRESUN", lat: 40.917, long: 38.3874 },
    { city: "GÜMÜŞHANE", lat: 40.46, long: 39.4814 },
    { city: "HAKKARİ", lat: 37.5833, long: 43.7333 },
    { city: "HATAY", lat: 36.4018, long: 36.3498 },
    { city: "IĞDIR", lat: 39.9237, long: 44.045 },
    { city: "ISPARTA", lat: 37.7648, long: 30.5565 },
    { city: "İSTANBUL", lat: 41.0082, long: 28.9784 },
    { city: "İZMİR", lat: 38.4237, long: 27.1428 },
    { city: "KAHRAMANMARAŞ", lat: 37.5858, long: 36.9371 },
    { city: "KARABÜK", lat: 41.2045, long: 32.6227 },
    { city: "KARAMAN", lat: 37.1815, long: 33.215 },
    { city: "KARS", lat: 40.6013, long: 43.094 },
    { city: "KASTAMONU", lat: 41.3893, long: 33.783 },
    { city: "KAYSERİ", lat: 38.7318, long: 35.4788 },
    { city: "KIRIKKALE", lat: 39.8468, long: 33.5157 },
    { city: "KIRKLARELİ", lat: 41.7353, long: 27.2167 },
    { city: "KIRŞEHİR", lat: 39.145, long: 34.1656 },
    { city: "KİLİS", lat: 36.7184, long: 37.1212 },
    { city: "KOCAELİ", lat: 40.8533, long: 29.8815 },
    { city: "KONYA", lat: 37.8746, long: 32.4932 },
    { city: "KÜTAHYA", lat: 39.4167, long: 29.9833 },
    { city: "MALATYA", lat: 38.3552, long: 38.3095 },
    { city: "MANİSA", lat: 38.6191, long: 27.4289 },
    { city: "MARDİN", lat: 37.312, long: 40.735 },
    { city: "MERSİN", lat: 36.8121, long: 34.6415 },
    { city: "MUĞLA", lat: 37.2153, long: 28.3636 },
    { city: "MUŞ", lat: 38.9473, long: 41.7539 },
    { city: "NEVŞEHİR", lat: 38.6244, long: 34.7106 },
    { city: "NİĞDE", lat: 37.9667, long: 34.6857 },
    { city: "ORDU", lat: 40.9833, long: 37.8789 },
    { city: "OSMANİYE", lat: 37.0748, long: 36.2478 },
    { city: "RİZE", lat: 41.0208, long: 40.5236 },
    { city: "SAKARYA", lat: 40.756, long: 30.3674 },
    { city: "SAMSUN", lat: 41.2867, long: 36.33 },
    { city: "SİİRT", lat: 37.9333, long: 41.9501 },
    { city: "SİNOP", lat: 42.0268, long: 35.1628 },
    { city: "SİVAS", lat: 39.75, long: 37.0166 },
    { city: "ŞANLIURFA", lat: 37.1674, long: 38.7955 },
    { city: "ŞIRNAK", lat: 37.522, long: 42.459 },
    { city: "TEKİRDAĞ", lat: 40.978, long: 27.511 },
    { city: "TOKAT", lat: 40.3169, long: 36.5542 },
    { city: "TRABZON", lat: 41.0015, long: 39.7178 },
    { city: "TUNCELİ", lat: 39.108, long: 39.5482 },
    { city: "UŞAK", lat: 38.6823, long: 29.4082 },
    { city: "VAN", lat: 38.5012, long: 43.402 },
    { city: "YALOVA", lat: 40.6561, long: 29.2747 },
    { city: "YOZGAT", lat: 39.8181, long: 34.8147 },
    { city: "ZONGULDAK", lat: 41.4556, long: 31.7931 },
  ];

  var counties = [];
  // var countyItems;
  var mymap;
  var partnersAll;
  var searchInput = document.querySelector(".searchInput");
  var selectedCity = document.querySelector(".selectedCity");
  var selectedDistrict = document.querySelector(".selectedDistrict");

  document.querySelector('button[onclick="showClosestLocations()"]').setAttribute('type', 'button');
  document.querySelector('button[onclick="showClosestLocations()"]').setAttribute('type', 'button');

  

  function replaceText(text) {
    var replaced = text
      .replace(/İ/g, "i")
      .replace(/ı/g, "i")
      .replace(/Ş/g, "s")
      .replace(/ş/g, "s")
      .replace(/Ç/g, "c")
      .replace(/ç/g, "c")
      .replace(/Ü/g, "u")
      .replace(/ü/g, "u")
      .replace(/Ö/g, "o")
      .replace(/ö/g, "o")
      .replace(/Ğ/g, "g")
      .replace(/ğ/g, "g")
      .toLowerCase();

    return replaced;
  }

  // Veriyi çek ve haritayı oluştur
  function getDataAndEditCreateMap() {
    // fetch("https://test.apps.one.net.tr/proxy", {
    // fetch("https://cl02.one.net.tr:3000/proxy", {
    fetch("https://www.turktelekom.com.tr/_layouts/15/TTWebsite/Partners/Ajax.aspx/GetPartnersAll", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        IsCorporate: false,
      }),
      // body: JSON.stringify({
      //   method: "POST",
      //   url: "https://www.turktelekom.com.tr/_layouts/15/TTWebsite/Partners/Ajax.aspx/GetPartnersAll",
      //   data: {
      //     IsCorporate: false,
      //   },
      //   headers: {},
      // }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.d.Data);

        window.closeButtonClick = function (event) {
          document.querySelector(".copyButton").innerHTML = "Bağlantıyı Kopyala";
          document.querySelector(".copyButton").style.backgroundColor = "#002855";
          document.querySelector(".copyButton").style.color = "#ffffff";
          document.querySelector(".copyButton").disabled = false;
        };

        window.shareClick = function (event) {
          // console.log(document.querySelector(".locationUrl"))
          document.querySelector(".locationUrl").value =
            "https://www.google.com/maps/place/" + event.currentTarget.getAttribute("data-lat") + "," + event.currentTarget.getAttribute("data-long");
        };

        window.addressClick = function (event) {
          window.open(
            "https://www.google.com/maps/place/" + event.currentTarget.getAttribute("data-lat") + "," + event.currentTarget.getAttribute("data-long"),
            "_blank"
          );
        };

        // Haritayı başlat
        mymap = L.map("map", {
          center: [39.925533, 32.866287],
          zoom: 6,
          minZoom: 6,
          maxZoom: 19,
          maxBounds: [
            [35.8086, 25.5377],
            [42.1078, 44.793],
          ],
          maxBoundsViscosity: 1.0,
        });

        // OpenStreetMap tabanlı harita katmanı
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          language: "tr-TR",
          maxZoom: 19,
          minZoom: 6,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(mymap);

        // MarkerClusterGroup'u oluştur
        var markerClusterGroup = L.markerClusterGroup({
          maxClusterRadius: 60, // Piksel cinsinden maksimum küme yarıçapı
          spiderfyOnMaxZoom: false, // Maksimum zoom'da kümeleri aç
          showCoverageOnHover: false, // Fare üzerine geldiğinde küme kapsamını göster
          zoomToBoundsOnClick: true, // Kümeye tıklandığında o bölgeye zoom yap
          singleMarkerMode: false, // Tek markerları da küme olarak göster
          disableClusteringAtZoom: 13, // Bu zoom seviyesinde ve üstünde kümeleme yapma
          animate: true, // Küme animasyonlarını etkinleştir

          // Özel küme ikonları oluştur
          iconCreateFunction: function (cluster) {
            var childCount = cluster.getChildCount();
            var c = " marker-cluster-";
            if (childCount < 10) {
              c += "small";
            } else if (childCount < 100) {
              c += "medium";
            } else {
              c += "large";
            }
            return new L.DivIcon({
              html: "<div><span>" + childCount + "</span></div>",
              className: "marker-cluster" + c,
              iconSize: new L.Point(40, 40),
            });
          },
        });

        mymap.addLayer(markerClusterGroup);
        markerClusterGroup.clearLayers();

        L.Marker.prototype.options.icon = L.icon({
          iconUrl: "https://asset.turktelekom.com.tr/SiteAssets/images/new_map/map-mark.webp",
          iconSize: [40, 52], // İkon boyutu
          iconAnchor: [20, 52], // İkon sabitlenme noktası
          // shadowUrl: "/path/to/markershadow.png"
        });

        partnersAll = data.d.Data;
        partnersAll.forEach(function (location) {
          function bindPopupData() {
            return `
              <div class="d-flex gap-3">
                <div class="d-flex flex-column popupTextContainer">
                  <span class="fw-bold">${location.CommercialName}</span>
                  <span>${location.District} No: ${location.HouseNo}, ${location.PostalCode} ${location.City}</span>
                  <span>İletişim Bilgisi: <a href="tel:0${location.ContactTel}">${location.ContactTel}</a></span>
                </div>
                <div class="popupButtonContainer">
                  <button type="button" class="popupButton" onclick="shareClick(event)" data-bs-toggle="modal" data-bs-target="#shareModal" data-lat="${location.CoordinateX}" data-long="${location.CoordinateY}"><img src="https://asset.turktelekom.com.tr/SiteAssets/images/new_map/share_icon.webp" width="24" height="25"></button>
                  <button type="button" class="popupButton" onclick="addressClick(event)" data-lat="${location.CoordinateX}" data-long="${location.CoordinateY}"><img src="https://asset.turktelekom.com.tr/SiteAssets/images/new_map/address_icon.webp" width="24" height="25"></button>
                </div>
              </div>
            `;
          }
          var marker = L.marker([location.CoordinateX, location.CoordinateY]).bindPopup(bindPopupData());

          marker.on("click", function () {
            mymap.flyTo([location.CoordinateX, location.CoordinateY], 18, {
              animate: true,
              duration: 3,
            });
          });

          markerClusterGroup.addLayer(marker);

          // İkon oluşturulduktan sonra sınıf eklemek için 'addLayer' sonrasına taşıdık
          marker.on("add", function () {
            if (marker._icon) {
              marker._icon.classList.add("locationMarker");
            }
          });
        });

        window.search = function () {
          var searchboxValue = searchInput.value;
          partnersAll.forEach((partner) => {
            var name = partner.CommercialName.replace(/İ/g, "i")
              .replace(/ı/g, "i")
              .replace(/Ş/g, "s")
              .replace(/ş/g, "s")
              .replace(/Ç/g, "c")
              .replace(/ç/g, "c")
              .replace(/Ü/g, "u")
              .replace(/ü/g, "u")
              .replace(/Ö/g, "o")
              .replace(/ö/g, "o")
              .replace(/Ğ/g, "g")
              .replace(/ğ/g, "g")
              .toLowerCase();

            if (name.includes(searchboxValue.toLowerCase())) {
              document.querySelector(".searchResultContainer").insertAdjacentHTML("beforeend", addResult(partner));
            }
          });
        };

        function addResult(partner) {
          return `
              <div class="d-flex gap-3 resultCard">
                <div class="d-flex flex-column popupTextContainer">
                  <span class="fw-bold">${partner.CommercialName}</span>
                  <span>${partner.Street}</span>
                  <span>No:${partner.BuildingNo}${partner.HouseNo != "UNKNOWN" && partner.HouseNo != "X" ? "/" + partner.HouseNo : ""} ${
            partner.PostalCode
          }</span>
                  <span>${partner.District}/${partner.City}</span>
                  <span>İletişim Bilgisi: <a href="tel:0${partner.ContactTel}">${partner.ContactTel}</a></span>
                </div>
                <div class="popupButtonContainer">
                  <button type="button" class="popupButton" onclick="shareClick(event)" data-bs-toggle="modal" data-bs-target="#shareModal" data-lat="${
                    partner.CoordinateX
                  }" data-long="${
            partner.CoordinateY
          }"><img src="https://asset.turktelekom.com.tr/SiteAssets/images/new_map/share_icon.webp" width="24" height="25"></button>
                  <button type="button" class="popupButton" onclick="addressClick(event)" data-lat="${partner.CoordinateX}" data-long="${
            partner.CoordinateY
          }"><img src="https://asset.turktelekom.com.tr/SiteAssets/images/new_map/address_icon.webp" width="24" height="25"></button>
                </div>
              </div>
            `;
        }

        window.showResult = function () {
          Array.from(document.querySelector(".searchResultContainer").children).forEach((element) => {
            element.remove();
          });

          // if (searchInput.value == "" && selectedCity.innerHTML == "Lütfen İl Seçiniz" && selectedCounty.innerHTML == "Lütfen İlçe Seçiniz") {
          //   document.querySelector(".searchResultContainer").insertAdjacentHTML("beforeend", addResult(partner));
          // } else if (searchInput.value != "" && selectedCity.innerHTML == "Lütfen İl Seçiniz" && selectedCounty.innerHTML == "Lütfen İlçe Seçiniz") {
          //   search();
          // } else if (searchInput.value != "" && selectedCity.innerHTML != "Lütfen İl Seçiniz" && selectedCounty.innerHTML == "Lütfen İlçe Seçiniz") {
          //   search();
          // }

          var searchCriterias = [];
          if (searchInput.value != "") {
            searchCriterias.push({
              searchboxText: searchInput.value,
            });
          }
          if (selectedCity.innerHTML != "Lütfen İl Seçiniz") {
            searchCriterias.push({
              selectedCity: selectedCity.innerHTML,
            });
          }
          if (selectedDistrict.innerHTML != "Lütfen İlçe Seçiniz") {
            searchCriterias.push({
              selectedDistrict: selectedDistrict.innerHTML,
            });
          }
          // console.log(searchCriterias);

          var filteredPartners = partnersAll.filter((partner) => {
            return searchCriterias.every((criteria) => {
              if (criteria.searchboxText) {
                return replaceText(partner.CommercialName).includes(replaceText(criteria.searchboxText));
              }
              if (criteria.selectedCity) {
                return replaceText(partner.City) === replaceText(criteria.selectedCity);
              }
              if (criteria.selectedDistrict) {
                return replaceText(partner.District) === replaceText(criteria.selectedDistrict);
              }
              return true;
            });
          });

          // console.log(filteredPartners);
        };
      })
      .catch((error) => console.error("Hata:", error));
  }

  // function shareClick() {
  //   var shareModal = new bootstrap.Modal(document.getElementById('shareModal'), {  keyboard: false });
  //   shareModal.show();
  // }

  // Şehir ve ilçe butonlarını oluştur
  var generateCityAndDistrictButtons = (city, district) => {
    if (city) {
      return `
      <li class="dropdown-item" data-lat="${city.lat}" data-long="${city.long}">${city.city}</li>
      `;
    } else {
      return `
      <li class="dropdown-item">${district}</li>
      `;
    }
  };

  // Şehirleri listeye ekle
  function addListCities() {
    citiesCord.forEach((city) => {
      document.querySelector(".cityDropdown").querySelector(".list").insertAdjacentHTML("beforeend", generateCityAndDistrictButtons(city, null));
    });

    getCountiesByCity();
  }

  // Şehirlere tıklanınca ilçelerini getir ve listele
  function getCountiesByCity() {
    document
      .querySelector(".cityDropdown")
      .querySelector(".list")
      .querySelectorAll(".dropdown-item")
      .forEach((city) => {
        city.addEventListener("click", function (e) {
          // fetch("https://test.apps.one.net.tr/proxy", {
          // fetch("https://cl02.one.net.tr:3000/proxy", {
          fetch("https://www.turktelekom.com.tr/_layouts/15/TTWebsite/Partners/Ajax.aspx/GetDistrictByCity", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              city: e.currentTarget.innerHTML,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(e.target.innerHTML);
              console.log(citiesCord.find((city) => city.city === e.target.innerHTML));
              // Seçilen şehir adını dropdown-toggle içerisine yaz
              e.target.closest(".dropdown").querySelector(".dropdown-toggle").querySelector("span").innerHTML = e.target.innerHTML;
              mymap.flyTo(
                [citiesCord.find((city) => city.city === e.target.innerHTML).lat, citiesCord.find((city) => city.city === e.target.innerHTML).long],
                10
              );

              // Şehir seçildiğinde ilçe dropdown'ını temizle
              document.querySelector(".districtDropdown").querySelector(".dropdown-toggle").querySelector("span").innerHTML = "Lütfen İlçe Seçiniz";

              // İlçe listesini temizle
              document
                .querySelector(".districtDropdown")
                .querySelector(".list")
                .querySelectorAll(".dropdown-item")
                .forEach((child) => {
                  child.remove();
                });

              counties.length = 0;

              // İlçe listesini oluştur
              data.d.Data.forEach((district) => {
                counties.push(district);
                document
                  .querySelector(".districtDropdown")
                  .querySelector(".list")
                  .insertAdjacentHTML("beforeend", generateCityAndDistrictButtons(null, district));
              });
              // districtItems = Array.from(document.querySelector(".districtDropdown").querySelector(".list").querySelectorAll(".dropdown-item"));
              // // İlçeleri seçme işlemleri
              // districtItems.forEach((item) => {
              //   item.addEventListener("click", setDistrict);
              // });
              setDistrict();
            })
            .catch((error) => console.error("Hata:", error));
        });
      });
  }

  // İlçeleri seçme işlemleri
  function setDistrict() {
    document
      .querySelector(".districtDropdown")
      .querySelector(".list")
      .querySelectorAll(".dropdown-item")
      .forEach((item) => {
        item.addEventListener("click", function (e) {
          // console.log(e.currentTarget.innerHTML);
          // Seçilen ilçe adını dropdown-toggle içerisine yaz
          e.target.closest(".dropdown").querySelector(".dropdown-toggle").querySelector("span").innerHTML = e.target.innerHTML;
          // console.log(partnersAll.find((partner) => partner.District === e.target.innerHTML));
          mymap.flyTo(
            [
              partnersAll.find(
                (partner) =>
                  partner.City === document.querySelector(".cityDropdown").querySelector(".dropdown-toggle").querySelector("span").innerHTML &&
                  partner.District === e.target.innerHTML
              ).CoordinateX,
              partnersAll.find(
                (partner) =>
                  partner.City === document.querySelector(".cityDropdown").querySelector(".dropdown-toggle").querySelector("span").innerHTML &&
                  partner.District === e.target.innerHTML
              ).CoordinateY,
            ],
            14
          );
        });
      });
  }

  // Şehirleri filtrele
  document
    .querySelector(".cityDropdown")
    .querySelector(".searchbox")
    .addEventListener("input", function (e) {
      var cityList = document.querySelector(".cityDropdown").querySelector(".list");
      cityList.querySelectorAll(".dropdown-item").forEach((item) => {
        item.remove();
      });

      var filteredCities = citiesCord;
      filteredCities = filteredCities.filter((city) => replaceText(city.city).includes(replaceText(e.currentTarget.value)));
      console.log(filteredCities);

      filteredCities.forEach((city) => {
        cityList.insertAdjacentHTML("beforeend", generateCityAndDistrictButtons(city, null));
      });

      getCountiesByCity();
    });

  // İlçeleri filtrele
  document
    .querySelector(".districtDropdown")
    .querySelector(".searchbox")
    .addEventListener("input", function (e) {
      // console.log(e.currentTarget.value)
      // console.log(counties);
      var districtList = document.querySelector(".districtDropdown").querySelector(".list");
      districtList.querySelectorAll(".dropdown-item").forEach((item) => {
        item.remove();
      });

      var filteredCounties = counties;
      filteredCounties = filteredCounties.filter((district) => district.toUpperCase().includes(e.currentTarget.value.toUpperCase()));
      console.log(filteredCounties);

      filteredCounties.forEach((district) => {
        districtList.insertAdjacentHTML("beforeend", generateCityAndDistrictButtons(null, district));
      });
    });

  // Haritayı oluştur
  getDataAndEditCreateMap();

  // Şehirleri listeye ekle
  addListCities();

  document.querySelectorAll(".dropdown-toggle").forEach((item) => {
    item.addEventListener("click", function (e) {
      e.currentTarget.closest(".dropdown").querySelector(".searchbox").focus();
    });
  });

  window.copyUrl = function (event) {
    const inputElement = document.querySelector(".locationUrl");
    navigator.clipboard
      .writeText(inputElement.value)
      .then(() => {
        event.target.innerHTML = "Bağlantı Kopyalandı!";
        event.target.style.backgroundColor = "#dee3ed";
        event.target.style.color = "#575e6f";
        event.target.disabled = true;
      })
      .catch((error) => {
        console.error("Kopyalama hatası:", error);
      });
  };

  window.showClosestLocations = function (event) {
    // event.preventDefault();
    // event.stopPropagation();
    if (!document.querySelector(".userLocationMarker")) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            const userLat = position.coords.latitude;
            const userLong = position.coords.longitude;

            // Kullanıcının konumuna bir marker ekle
            const userMarker = L.marker([userLat, userLong], {
              icon: L.icon({
                iconUrl: "https://asset.turktelekom.com.tr/SiteAssets/images/new_map/current-position.webp", // Kullanıcı konumu için özel bir ikon
                iconSize: [40, 52],
                iconAnchor: [20, 26],
              }),
            }).addTo(mymap);

            // Marker'a class ekle
            userMarker._icon.classList.add("userLocationMarker");

            // Haritayı kullanıcının konumuna yakınlaştır
            mymap.flyTo([userLat, userLong], 14, {
              animate: true,
              duration: 3, // Animasyon süresi (saniye)
            });

            // Zoom seviyesine göre kullanıcı konumunu gizle/göster
            setTimeout(() => {
              mymap.on("zoomend", function () {
                if (mymap.getZoom() <= 12) {
                  userMarker.remove(); // Marker'ı haritadan kaldır
                } else {
                  userMarker.addTo(mymap); // Marker'ı haritaya ekle
                  userMarker._icon.classList.add("userLocationMarker");
                }
              });
            }, 3000);

            // // Kullanıcı konumuna bir popup ekle
            // userMarker.bindPopup("Sizin Konumunuz").openPopup();
          },
          function (error) {
            console.error("Konum alınamadı:", error);
          }
        );
      } else {
        console.error("Tarayıcınız konum servisini desteklemiyor.");
      }
    }
  };

  const intervalId = setInterval(() => {
    const dropdownMenus = document.querySelectorAll(".dropdown-menu");
    let allCleared = true;

    dropdownMenus.forEach((element) => {
      if (element.classList.contains("show")) {
        element.classList.remove("show");
        allCleared = false;
      }
    });

    if (allCleared) {
      clearInterval(intervalId);
    }
  }, 100);
});

var type;

// var setType = (inner) => {
//     type = inner;
// }

function setType(type) {
  console.log("Seçilen tür: " + type);
  // Burada tür ile ilgili işlemleri yapabilirsiniz.
}

function selectFirstNavLink() {
  const firstNavLink = document.querySelector(".nav-link.active");
  if (firstNavLink) {
    firstNavLink.classList.add("active");
  }
}