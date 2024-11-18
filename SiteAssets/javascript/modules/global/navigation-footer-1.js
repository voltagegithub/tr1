
// function NavigationFooters() {
//     $('footer .nav-parent .h6rplc').on("click", function () {
//         var status = true;
//         if ($(this).closest(".nav-parent").hasClass("active")) {
//             status = false;
//         }
//         $('footer .nav-parent').removeClass("active");
//         if (status) {
//             $(this).closest(".nav-parent").addClass("active");
//         }
//     });
// }

// NavigationFooters();

function NavigationFooters() {
    $('footer .nav-parent .h6rplc').on("click", function (event) {
        if (!$(event.target).is("a")) {
            var status = true;
            if ($(this).closest(".nav-parent").hasClass("active")) {
                status = false;
            }
            $('footer .nav-parent').removeClass("active");
            if (status) {
                $(this).closest(".nav-parent").addClass("active");
            }
        }
    });

    $('footer .nav-parent .h6rplc a.link').on("click", function(event) {
        event.stopPropagation();
    });
}

NavigationFooters();



