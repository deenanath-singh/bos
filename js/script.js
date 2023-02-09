$(".formRanking").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 3000,
  dots: true,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});
$(".owl-carousel9").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 3000,
  dots: true,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});
$("#regularslider2").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    900: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$("#clientowls").owlCarousel({
  loop: true,
  nav: true,
  autoplay: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    900: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});
$("#cus-blogs").owlCarousel({
  loop: true,
  nav: true,
  items: 1,
  dots: false,
  autoplay: false,
  margin: 20,
  // center: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

// Open the menu.
var a = document
  .querySelector('a[href="#menu"]')

  .addEventListener("click", (evnt) => {
    evnt.preventDefault();
    drawer.open();
  });

$(".mobile_menu").click(function () {
  $("#menu").css("display", "block");
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    $(".navHeader").addClass("sticky");
  } else {
    $(".navHeader").removeClass("sticky");
  }
});

$(document).ready(function () {
  $("#bug-toggle").click(function () {
    $(".burg").fadeToggle();
  });
});

function fun1() {
  document.getElementById("mainimg-change").innerHTML =
    "<img src='img/headphone-shop1.jpg'>";
}
function fun2() {
  document.getElementById("mainimg-change").innerHTML =
    "<img src='img/hello-pro1.jpg'>";
}
function fun3() {
  document.getElementById("mainimg-change").innerHTML =
    "<img src='img/lead-head-shop1.jpg'>";
}
function fun4() {
  document.getElementById("mainimg-change").innerHTML =
    "<img src='img/17-600x600.jpg'>";
}

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 4,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 8,
    },
  },
});

var swiper = new Swiper(".HowITWorks", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".s1", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    991: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

var swiper = new Swiper(".softwareSlide", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let tabButton = [].slice.call(
  document.querySelectorAll("ul.tab-nav li a.button-tab")
);

tabButton.map((button) => {
  button.addEventListener("click", () => {
    let href = button.getAttribute("href");
    document.querySelector(".active").classList.remove("active");
    document.querySelector(href).classList.add("active");
    document.querySelector(".active-tab").classList.remove("active-tab");
    button.classList.add("active-tab");
  });
});

$(".sliderOwl").owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  dots: true,
  autoplay: true,
  responsiveClass: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$(".sliderOwl3").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  autoplay: true,
  responsiveClass: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});

$(document).ready(function () {
  $(".servicesTab").click(function () {
    $(".servicesSection").addClass("active");
    $(".hireDeveloper,.onDemandSolutions,.media_menu").removeClass("active");
    $(".hiredeveloperSection,.demandSection").removeClass("active");
  });
  $(".hireDeveloper").click(function () {
    $(".hiredeveloperSection").addClass("active");
    $(".servicesSection,.onDemandSolutions,.media_menu").removeClass("active");
    $(".servicesSection,.demandSection").removeClass("active");
  });
  $(".onDemandSolutions").click(function () {
    $(".demandSection").addClass("active");
    $(".servicesSection,.hireDeveloper,.media_menu").removeClass("active");
    $(".servicesSection,.hiredeveloperSection").removeClass("active");
  });

  $(".submenu-direction").click(function () {
    $(".media_menu").addClass("active");
    $(".servicesSection,.hireDeveloper, .demandSection").removeClass("active");
    $(".servicesSection,.hiredeveloperSection").removeClass("active");
  });

  $(".closeBTN3").click(function () {
    $(".servicesSectiontab").removeClass("active");
  });

  $(".enquirybtn").click(function () {
    $(".popupequiryform").addClass("active");
  });
  $(".removeActive").click(function () {
    $(".popupequiryform").removeClass("active");
  });

  /**ONCLICK*/
});

$(".testimonialss").owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  dots: true,
  nav: true,
  responsiveClass: true,
  autoplayHoverPause: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
$(document).ready(function () {
  $(".Li1St").click(function () {
    $(".Click1St").show();
    $(".Click2Nd").hide();
    $(".Click3Rd").hide();
    $(".Click4Th").hide();
  });
  $(".Li2Nd").click(function () {
    $(".Click1St").hide();
    $(".Click2Nd").show();
    $(".Click3Rd").hide();
    $(".Click4Th").hide();
  });
  $(".Li3Rd").click(function () {
    $(".Click1St").hide();
    $(".Click2Nd").hide();
    $(".Click3Rd").show();
    $(".Click4Th").hide();
  });
  $(".Li4Th").click(function () {
    $(".Click1St").hide();
    $(".Click2Nd").hide();
    $(".Click3Rd").hide();
    $(".Click4Th").show();
  });

  $(".industriesCenter.bannerSlider2 .col4").hover(
    function () {
      $(this).addClass("active");
    },
    function () {
      $(this).removeClass("active");
    }
  );

  $(".testislider").owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
    },
  });
});

$("#shop-bg").owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  dots: true,
  nav: true,
  responsiveClass: true,
  autoplayHoverPause: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$("#owl-carousel6").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 3000,
  dots: true,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$("#oel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  center: true,
  items: 2,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 5,
    },
    1000: {
      items: 7,
    },
  },
});

$("#phpowl").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  center: true,
  items: 2,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$("#client-logo").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  center: true,
  items: 7,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 5,
    },
    1000: {
      items: 7,
    },
  },
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    $(".navHeader").addClass("sticky");
  } else {
    $(".navHeader").removeClass("sticky");
  }
});

$("#banner-owl").owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  responsiveClass: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    992: {
      items: 4,
    },
    1000: {
      items: 4,
    },
  },
});

$(document).ready(function () {
  $(".servicesTab").click(function () {
    $(".servicesSection").addClass("active");
    $(".hireDeveloper,.onDemandSolutions,.media_menu").removeClass("active");
    $(".hiredeveloperSection,.demandSection").removeClass("active");
  });
  $(".hireDeveloper").click(function () {
    $(".hiredeveloperSection").addClass("active");
    $(".servicesSection,.onDemandSolutions,.media_menu").removeClass("active");
    $(".servicesSection,.demandSection").removeClass("active");
  });
  $(".onDemandSolutions").click(function () {
    $(".demandSection").addClass("active");
    $(".servicesSection,.hireDeveloper,.media_menu").removeClass("active");
    $(".servicesSection,.hiredeveloperSection").removeClass("active");
  });

  $(".submenu-direction").click(function () {
    $(".media_menu").addClass("active");
    $(".servicesSection,.hireDeveloper, .demandSection").removeClass("active");
    $(".servicesSection,.hiredeveloperSection").removeClass("active");
  });

  $(".closeBTN3").click(function () {
    $(".servicesSectiontab").removeClass("active");
  });

  $(".enquirybtn").click(function () {
    $(".popupequiryform").addClass("active");
  });
  $(".removeActive").click(function () {
    $(".popupequiryform").removeClass("active");
  });

  /**ONCLICK*/
});

$(".testimonialss").owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  dots: true,
  nav: true,
  responsiveClass: true,
  autoplayHoverPause: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
$(document).ready(function () {
  $(".Li1St").click(function () {
    $(".Click1St").show();
    $(".Click2Nd").hide();
    $(".Click3Rd").hide();
    $(".Click4Th").hide();
  });
  $(".Li2Nd").click(function () {
    $(".Click1St").hide();
    $(".Click2Nd").show();
    $(".Click3Rd").hide();
    $(".Click4Th").hide();
  });
  $(".Li3Rd").click(function () {
    $(".Click1St").hide();
    $(".Click2Nd").hide();
    $(".Click3Rd").show();
    $(".Click4Th").hide();
  });
  $(".Li4Th").click(function () {
    $(".Click1St").hide();
    $(".Click2Nd").hide();
    $(".Click3Rd").hide();
    $(".Click4Th").show();
  });

  $(".industriesCenter.bannerSlider2 .col4").hover(
    function () {
      $(this).addClass("active");
    },
    function () {
      $(this).removeClass("active");
    }
  );
});

$(".sliderOwl").owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  dots: true,
  autoplay: true,
  responsiveClass: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

var swiper = new Swiper(".softwareSlide", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".s1", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    991: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

var swiper = new Swiper(".HowITWorks", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 4,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 8,
    },
  },
});

$("#clientowls").owlCarousel({
  loop: true,
  nav: true,
  autoplay: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});
$("#cus-blogs").owlCarousel({
  loop: true,
  nav: true,
  items: 1,
  dots: false,
  autoplay: false,
  margin: 20,
  // center: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

$(document).on("ready", function () {
  $(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  });
});

// Open the menu.
var a = document
  .querySelector('a[href="#menu"]')

  .addEventListener("click", (evnt) => {
    evnt.preventDefault();
    drawer.open();
  });

$(".mobile_menu").click(function () {
  $("#menu").css("display", "block");
});

$(document).ready(function () {
  $(".menu_icon").click(function () {
    $(this).toggleClass("menu_cl_add");
    $("body").toggleClass("js--mobile-menu-active");
  });
});

$(".increment-quantity,.decrement-quantity").on("click", function (ev) {
  var currentQty = $('input[name="quantity"]').val();
  var qtyDirection = $(this).data("direction");
  var newQty = 0;

  if (qtyDirection == "1") {
    newQty = parseInt(currentQty) + 1;
  } else if (qtyDirection == "-1") {
    newQty = parseInt(currentQty) - 1;
  }

  // make decrement disabled at 1
  if (newQty == 1) {
    $(".decrement-quantity").attr("disabled", "disabled");
  }

  // remove disabled attribute on subtract
  if (newQty > 1) {
    $(".decrement-quantity").removeAttr("disabled");
  }

  if (newQty > 0) {
    newQty = newQty.toString();
    $('input[name="quantity"]').val(newQty);
  } else {
    $('input[name="quantity"]').val("1");
  }
});
