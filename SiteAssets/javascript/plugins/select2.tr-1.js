    /*! Select2 4.0.3 | https://github.com/select2/select2/blob/master/LICENSE.md */

(function () { if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd; return e.define("select2/i18n/tr", [], function () { return { inputTooLong: function (e) { var t = e.input.length - e.maximum, n = t + " karakter daha girmelisiniz"; return n }, inputTooShort: function (e) { var t = e.minimum - e.input.length, n = "En az " + t + " karakter daha girmelisiniz"; return n }, loadingMore: function () { return "Daha fazla…" }, maximumSelected: function (e) { var t = "Sadece " + e.maximum + " seçim yapabilirsiniz"; return t }, noResults: function () { return "Sonuç bulunamadı" }, searching: function () { return "Aranıyor…" } } }), { define: e.define, require: e.require } })();


(function (factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery", "../jquery.validate"], factory);
    } else if (typeof module === "object" && module.exports) {
        module.exports = factory(require("jquery"));
    } else {
        factory(jQuery);
    }
}(function ($) {

    /*
     * Translated default messages for the jQuery validation plugin.
     * Locale: TR (Turkish; Türkçe)
     */

    if ($.validator) {
        $.extend($.validator.messages, {
            required: "Bu alanın doldurulması zorunludur.",
            remote: "Lütfen bu alanı düzeltin.",
            email: "Lütfen geçerli bir e-posta adresi giriniz.",
            url: "Lütfen geçerli bir web adresi (URL) giriniz.",
            date: "Lütfen geçerli bir tarih giriniz.",
            dateISO: "Lütfen geçerli bir tarih giriniz(ISO formatında)",
            number: "Lütfen geçerli bir sayı giriniz.",
            digits: "Lütfen sadece sayısal karakterler giriniz.",
            creditcard: "Lütfen geçerli bir kredi kartı giriniz.",
            equalTo: "Lütfen aynı değeri tekrar giriniz.",
            extension: "Lütfen geçerli uzantıya sahip bir değer giriniz.",
            maxlength: $.validator.format("Lütfen en fazla {0} karakter uzunluğunda bir değer giriniz."),
            minlength: $.validator.format("Lütfen en az {0} karakter uzunluğunda bir değer giriniz."),
            rangelength: $.validator.format("Lütfen en az {0} ve en fazla {1} uzunluğunda bir değer giriniz."),
            range: $.validator.format("Lütfen {0} ile {1} arasında bir değer giriniz."),
            max: $.validator.format("Lütfen {0} değerine eşit ya da daha küçük bir değer giriniz."),
            min: $.validator.format("Lütfen {0} değerine eşit ya da daha büyük bir değer giriniz."),
            step: $.validator.format("Lütfen {0} değerinin katı sayı giriniz."),
            require_from_group: "Lütfen bu alanların en az {0} tanesini doldurunuz.",
            txttckn: "Lütfen geçerli bir TCKN giriniz.",
            txtvkn: "Lütfen geçerli bir VKN giriniz.",
            phone: "Lütfen geçerli bir Telefon No giriniz.",
            birthday: "Lütfen geçerli bir tarih giriniz.",
            creditcard: 'Lütfen geçerli bir Kredi Kartı giriniz.',
            filesize: 'Maksimum 3 Mb dosya eklenebilir.',
            emailconfirm: "Lütfen aynı değeri tekrar giriniz."
        });
    }
}));