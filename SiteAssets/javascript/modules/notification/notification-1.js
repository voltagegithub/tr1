document.addEventListener('DOMContentLoaded', function () {
    var toggleNotifications = document.querySelector('.toggle-notifications');
    toggleNotifications.classList.add('active');
    var notificationMenu = document.querySelector('.notification-menu');
    var tpBg = document.querySelector('.tp-bg');
    var notificationFade = document.querySelector('.notification-fade');
    var header = document.querySelector('.header');
    var isNotificationActive = false;
    var isFirstClick = true;
    var isContentClicked = false;
//    setCookie('notificationSeen', 'true', 90);
//   document.cookie = "notificationSeen=true; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/;";
//   localStorage.removeItem('notificationContentClicked');

    const seenNotification = getCookie('notificationSeen');

    // if (seenNotification == null) {
    //     setCookie('notificationSeen', 'true', 999);
    // } else if (seenNotification === 'true' && isFirstClick) {
    //         toggleNotifications.classList.remove('active');
    //         isFirstClick = false; 
    // }
    // if (seenNotification === 'false') {
    //     toggleNotifications.classList.remove('active');
    // }
    toggleNotifications.addEventListener('click', function (event) {
        toggleNotifications.classList.remove('active');

        // if (seenNotification === 'true' && isFirstClick) {
        //     toggleNotifications.classList.remove('active');
        //     isFirstClick = false; 
        // }
        if (isNotificationActive) {
            notificationMenu.classList.remove('active');
            tpBg.classList.remove('active');
            notificationFade.classList.remove('active');
            if(window.innerWidth < 768){
                header.style.background = '#FFF';
            }
            else{
                header.style.background = 'transparent';
            }
            document.querySelector('body').style.overflow = 'auto';
            document.querySelector('html').style.overflow = 'unset';
            document.querySelector('body').style.marginRight = 'unset';
            if(document.querySelector('.cbot-animation-holder')){
                document.querySelector('.cbot-animation-holder').style.marginRight = 'unset';
            }
            isNotificationActive = false;
        } else {
            isNotificationActive = true;
            notificationMenu.classList.add('active');
            tpBg.classList.add('active');
            notificationFade.classList.add('active');
            document.querySelector('body').style.overflow = 'scroll';
            document.querySelector('html').style.overflow = 'hidden';
            if(document.querySelector('.cbot-animation-holder')){
                document.querySelector('.cbot-animation-holder').style.marginRight = '20px';
            }

            if (isFirstClick)
                document.querySelector('body').style.overflow = 'scroll';
                document.querySelector('html').style.overflow = 'hidden';
                if(document.querySelector('.cbot-animation-holder')){
                    document.querySelector('.cbot-animation-holder').style.marginRight = '20px';
                }

                if(window.innerWidth < 768){
                    header.style.background = '#FFF';
                }
                else{
                    header.style.background = 'transparent';
                }
        }

        event.stopPropagation();
    });

    window.addEventListener('beforeunload', function () {
        const currentSeenNotification = getCookie('notificationSeen');
        if (currentSeenNotification === 'true' && isFirstClick) {
            // toggleNotifications.classList.remove('active');
            isFirstClick = false;
        }
    });

    document.addEventListener('click', function (event) {
        if (!notificationMenu.contains(event.target) && isNotificationActive) {
            notificationMenu.classList.remove('active');
            // toggleNotifications.classList.remove('active');
            tpBg.classList.remove('active');
            notificationFade.classList.remove('active');
            header.style.background = 'transparent';
            document.querySelector('body').style.overflow = 'auto';
            document.querySelector('html').style.overflow = 'unset';
            if(document.querySelector('.cbot-animation-holder')){
                document.querySelector('.cbot-animation-holder').style.marginRight = 'unset';
            }
            isNotificationActive = false;
        }
    });

    const notificationContentLists = document.querySelectorAll('.notification-content-list');
    const notificationContentIcons = document.querySelectorAll('.notification-content-icon');

    notificationContentLists.forEach((contentList, index) => {
        contentList.addEventListener('click', function (event) {

            isContentClicked = true;

            contentList.style.backgroundColor = 'transparent';
            const icon = contentList.querySelector('.notification-content-icon');
            if (icon) {
                icon.style.display = 'none';
            }

            localStorage.setItem('notificationContentClicked', 'true');
            setCookie('notificationSeen', 'false', 999);
            event.stopPropagation();
        });
    });

    const notificationEpisodes = document.querySelectorAll('.notification-episode');
    const maxWidth = 990;
    notificationEpisodes.forEach((episode) => {
        episode.addEventListener('click', function (event) {
            // toggleNotifications.classList.remove('active');
            if (window.innerWidth > maxWidth) {
                event.stopPropagation();
            }
        });
    });

    const isContentClickedStored = localStorage.getItem('notificationContentClicked');
    if (isContentClickedStored === 'true') {
        notificationContentLists.forEach((contentList) => {
            contentList.style.backgroundColor = 'transparent';
            const icon = contentList.querySelector('.notification-content-icon');
            if (icon) {
                icon.style.display = 'none';
            }
        });
    }

    function getCookie(name) {
        const value = "; " + document.cookie;
        const parts = value.split("; " + name + "=");
        if (parts.length === 2) return parts.pop().split(";").shift();
    }

    function setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + value + "; expires=" + expires.toUTCString() + "; path=/";
    }
});

// E-dergi bildirimi icin mobil link degistirme

if(window.innerWidth < 768){
    document.querySelector('.header .header-top .container ul li:first-child a[aria-label*="e- dergi"]').href = "https://app.adjust.com/1itiu1ak";
}

// THE END -BT

// var notificationSayac = document.querySelectorAll('.header .header-top ul.type-icon li .notification-menu li.notification-content-list');
// var notificationLength = notificationSayac.length;
// document.querySelector('.toggle-notifications > a > p').innerText= notificationLength;