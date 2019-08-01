const main = ($, s, tabPanel) => {
  window.addEventListener('scroll', function (){
    var navbarDefault = document.getElementsByClassName('navbar-default')[0];
    var navLink = document.getElementsByClassName('nav-link')[0];
    var iconBar = document.getElementsByClassName(`${s['icon-bar']}`)[0];
    // grab hashed elements
    var navbarAbsolute = `${s['navbar-absolute']}`;
    var navbarFixedTop = `${s['navbar-fixed-top']}`;
    var navLinkBlack = `${[s['nav-link-black']]}`;
    var navLinkWhite = `${[s['nav-link-white']]}`;
    var iconBarDark = `${[s['icon-bar-dark']]}`;
    // regex to test header elements;
    var navAbsRegex = new RegExp(navbarAbsolute,'g');
    var navFixedTopRegex = new RegExp(navbarFixedTop,'g');
    var navLinkWhiteRegex = new RegExp(navLinkWhite,'g');
    var navLinkBlackRegex = new RegExp(navLinkBlack,'g');

    if (window.scrollY > 100){
      if (navAbsRegex.test(navbarDefault.className)){
        navbarDefault.className = navbarDefault
        .className
        .replace(navAbsRegex,navbarFixedTop)

        navLink.className = navLink
        .className
        .replace(navLinkWhiteRegex, navLinkBlack)

        iconBar.className = `${iconBar.className} ${iconBarDark}`
        }
      }
      else if (navFixedTopRegex.test(navbarDefault.className)){
        navbarDefault.className = navbarDefault
        .className
        .replace(navFixedTopRegex, navbarAbsolute)

        navLink.className = navLink
        .className
        .replace(navLinkBlackRegex, navLinkWhite)

        iconBar.className = iconBar
        .className
        .replace(iconBarDark,'')
      }
  })
}
// }
//     // For the slick buttons hovering
//     var fade = false;
//     $(".home-slick").mouseenter(function() {
//       clearTimeout($(this).data('timeoutId'));
//       if (!fade) {
//         $($(this).find(".slick-button")).fadeIn("slow");
//       }
//     }).mouseleave(function() {
//       var headerSlider = $(this),
//         timeoutId = setTimeout(function() {
//           headerSlider.find(".slick-button").fadeOut("slow");
//         }, 0);
//       //set the timeoutId, allowing us to clear this trigger if the mouse comes back over
//       headerSlider.data('timeoutId', timeoutId);
//     });
//   })
// }

export default main
