//<![CDATA[
    $("#List1").each(function () {
        var a = "<ul class='navbar-nav m-auto clearfix'><li><ul class='dropdown-menu'>";
        $("#List1 li").each(function () {
            var b = $(this).text(),
                c = b.substr(0, 1),
                d = b.substr(1);
            "_" === c ? (c = $(this).find("a").attr("href"), a += '<li><a href="' + c + '">' + d + "</a></li>") : (c = $(this).find("a").attr("href"), a += '</ul></li><li><a href="' + c + '">' + b + "</a><ul class='dropdown-menu'>")
        }), a += "</ul></li></ul>", $(this).html(a), $("#List1 ul").each(function () {
            var a = $(this);
            0 === a.html().replace(/\s|&nbsp;/g, "").length && a.remove()
        }), $("#List1 li").each(function () {
            var a = $(this);
            0 === a.html().replace(/\s|&nbsp;/g, "").length && a.remove()
        })
    });
//]]>

//<![CDATA[
$(function () {
  "use strict";
  var minimumWidth;
  if (Modernizr.mq("(min-width: 0px)")) {
    minimumWidth = function (width) {
      return Modernizr.mq("(min-width: " + width + "px)");
    };
  } else {
    minWidth = function (width) {
      return $window.width() >= width;
    };
  }
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if ((scroll > 300) & minimumWidth(1200)) {
      $(".fbt_sticky_nav").addClass("sticky__nav");
    } else {
      $(".fbt_sticky_nav").removeClass("sticky__nav");
    }
    if ((scroll > 400) & minimumWidth(1200)) {
      $(".fbt_sticky_nav").addClass("nav_offset");
    } else {
      $(".fbt_sticky_nav").removeClass("nav_offset");
    }
    if ((scroll > 500) & minimumWidth(1200)) {
      $(".fbt_sticky_nav").addClass("scrolling_nav");
    } else {
      $(".fbt_sticky_nav").removeClass("scrolling_nav");
    }
  });
  $(".post-body").each(function () {
    $(this)
      .find('iframe[src*="youtube.com"]')
      .removeAttr("width")
      .removeAttr("height")
      .removeAttr("data-thumbnail-src")
      .removeAttr("frameborder")
      .removeClass("YOUTUBE-iframe-video");
    $(this)
      .find(
        'iframe[src*="youtube.com"], iframe[src*="player.vimeo.com"], iframe[src*="facebook.com/plugins/video"]'
      )
      .addClass("embed-responsive-item")
      .wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
  });
  $(".item-view .post-body img")
    .first()
    .each(function () {
      $(this).parent().parent().remove();
    });
  $("#navbar.navbar-collapse").each(function () {
    $(this).find("#List1 ul li").css("cssText", "display: block");
    $(this).find(".navbar-nav li").addClass("nav-item");
    $(this).find(".navbar-nav li a").addClass("nav-link");
    $(this).find(".dropdown-menu").parent("li").addClass("dropdown");
    $(this)
      .find(".dropdown-menu a")
      .removeClass("nav-link")
      .addClass("dropdown-item")
      .unwrap();
    $(this)
      .find(".dropdown ul")
      .replaceWith(function () {
        return "<div class='dropdown-menu'>" + this.innerHTML + "</div>";
      });
    $(this)
      .find(".dropdown .nav-link")
      .addClass("dropdown-toggle")
      .attr("aria-haspopup", "true")
      .attr("aria-expanded", "false")
      .attr("data-toggle", "dropdown");
    $(this).find(".navbar-nav").unwrap();
  });
  $(".carousel-inner .carousel-item:first-child").addClass("active");
});
(function ($) {
  "use strict";
  SearchFormInit();

  function SearchFormInit() {
    $(".search-trigger").on("click", function () {
      $("#search").addClass("active").find(".search").focus();
    });
    $("#search").on("click", function () {
      $(this).find(".search").focus();
    });
    $("#close").on("click", function () {
      $("#search").removeClass("active");
    });
  }
  $().UItoTop({
    easingType: "easeOutQuart",
  });
  $(".lazyloaded").lazy();
})(jQuery);
if (
  $(
    ".archive-view .queryMessage .card, .label-view .queryMessage .card"
  ).hasClass("fbt-query-error-mode")
) {
  $("#blog-pager").addClass("d-none");
}

function openNav() {
  var el = document.getElementById("sidebar-wrapper"),
    $contentOverlay = document.getElementById("fbt-content-overlay"),
    bodyClass = document.querySelector("body");
  el.classList.add("openSidebar");
  $contentOverlay.classList.add("activeOverlay");
  el.classList.remove("closeSidebar");
  bodyClass.classList.add("sidebar-visible");
}

function closeNav() {
  var el = document.getElementById("sidebar-wrapper"),
    $contentOverlay = document.getElementById("fbt-content-overlay"),
    bodyClass = document.querySelector("body");
  el.classList.remove("openSidebar");
  $contentOverlay.classList.remove("activeOverlay");
  bodyClass.classList.remove("sidebar-visible");
}
var ppCarousel = $(".carousel");
ppCarousel.append("<ol class='carousel-indicators'></ol>");
var indicators = $(".carousel-indicators");
ppCarousel
  .find(".carousel-inner")
  .children(".carousel-item")
  .each(function (index) {
    index === 0
      ? indicators.append(
          "<li data-target='#carouselPopularPosts' data-slide-to='" +
            index +
            "' class='active'></li>"
        )
      : indicators.append(
          "<li data-target='#carouselPopularPosts' data-slide-to='" +
            index +
            "'></li>"
        );
  });
$(".fbt-sidenav").each(function () {
  var searchWidth = $(".sidebar-wrapper").width();
  if (searchWidth > 0) {
    $(".fbt-sidenav").addClass("active");
  } else {
    $(".fbt-sidenav").removeClass("active");
  }
});
$(function ($) {
  "use strict";
  var c_form = "[contact_Form]";
  var hide_text = "[hide_Text]";
  var full_page = "[full_Page]";
  var primary_button = "[button_primary]";
  var secondary_button = "[button_secondary]";
  var success_button = "[button_success]";
  var danger_button = "[button_danger]";
  var warning_button = "[button_warning]";
  var info_button = "[button_info]";
  var dark_button = "[button_dark]";
  var grid_five = "[full_Screen]";
  var grid_four = "[four_Columns]";
  var grid_wide = "[layout_Wide]";
  var hide_author = "[hide_Author]";
  var hide_date = "[hide_Date]";
  var hide_post_meta = "[hide_PostMeta]";
  var carousel_fade = "[carousel_Fade]";
  var show_snippets = "[show_Snippets]";
  var no_image = "[hide_FeaturedImage]";
  $(".post-body *").replaceText(
    primary_button,
    "<span class='post-button-primary d-none'></span>"
  );
  $(".post-body *").replaceText(
    secondary_button,
    "<span class='post-button-secondary d-none'></span>"
  );
  $(".post-body *").replaceText(
    success_button,
    "<span class='post-button-success d-none'></span>"
  );
  $(".post-body *").replaceText(
    danger_button,
    "<span class='post-button-danger d-none'></span>"
  );
  $(".post-body *").replaceText(
    warning_button,
    "<span class='post-button-warning d-none'></span>"
  );
  $(".post-body *").replaceText(
    info_button,
    "<span class='post-button-info d-none'></span>"
  );
  $(".post-body *").replaceText(
    dark_button,
    "<span class='post-button-dark d-none'></span>"
  );
  $(".post-button-primary")
    .parent()
    .wrapInner('<button class="btn btn-primary" type="button"></button>');
  $(".post-button-secondary")
    .parent()
    .wrapInner('<button class="btn btn-secondary" type="button"></button>');
  $(".post-button-success")
    .parent()
    .wrapInner('<button class="btn btn-success" type="button"></button>');
  $(".post-button-danger")
    .parent()
    .wrapInner('<button class="btn btn-danger" type="button"></button>');
  $(".post-button-warning")
    .parent()
    .wrapInner('<button class="btn btn-warning" type="button"></button>');
  $(".post-button-info")
    .parent()
    .wrapInner('<button class="btn btn-info" type="button"></button>');
  $(".post-button-dark")
    .parent()
    .wrapInner('<button class="btn btn-dark" type="button"></button>');
  $(".fbt-item-post *").replaceText(
    full_page,
    "<style>.blog-posts .col-xl-8.col-lg-9 {-ms-flex: 0 0 100%;flex: 0 0 100%;max-width: 100%;}.fbt-page-shape-title {text-align: center;}</style>"
  );
  $(".fbt-item-post *").replaceText(
    c_form,
    "<div class='page-contact'/><style>#page_widgets .ContactForm,.sidebar .ContactForm,.ContactForm .fbt-sep-title {display: none!important;}</style>"
  );
  $("#Short_Code_Options .html-widget-content").replaceText(
    grid_five,
    "<style>.feed-view .fbt-elastic-container {max-width: 100%;}@media (min-width: 1200px) {.card-columns {-webkit-column-count: 5;-moz-column-count: 5;column-count: 5;}}.navbar {padding-left: 0;padding-right: 0;}@media (min-width: 768px) {.navbar {padding-left: 1.9rem;padding-right: 1.9rem;}}.navbar .container {max-width: 100%;}@media (max-width: 575.98px) {.navbar {padding-left: 1rem;padding-right: 1rem;}}.blog-post:nth-child(2n+2) .card-body .post-excerpt {display: none;}@media (max-width: 1601.98px) {.fbt-index-post .post-title.h4 {font-size: 1rem;line-height: calc(1rem + 4px);}}@media (min-width: 768px) {.feed-view .fbt-elastic-container {padding: 0 3rem;}}</style>"
  );
  $("#Short_Code_Options .html-widget-content").replaceText(
    hide_author,
    "<style>#carouselPopularPosts .post-meta .post-author, .FeaturedPost .post-meta .post-author {display: none;}</style>"
  );
  $("#Short_Code_Options .html-widget-content").replaceText(
    hide_date,
    "<style>#carouselPopularPosts .post-meta .post-date, .FeaturedPost .post-meta .post-date, .post-meta span:not(:last-child):after {display: none;}</style>"
  );
  $("#Short_Code_Options .html-widget-content").replaceText(
    hide_post_meta,
    "<style>#carouselPopularPosts .post-meta, .FeaturedPost .post-meta {display: none;}.fbt_read_more {margin-top: 2.5rem!important;}</style>"
  );
  $("#Short_Code_Options .html-widget-content").replaceText(
    grid_four,
    "<style>@media (min-width: 1200px) {.card-columns {-webkit-column-count: 4;-moz-column-count: 4;column-count: 4;}}.fbt-index-post .post-title.h4 {font-size: 1rem;line-height: calc(1rem + 4px);}.blog-post:nth-child(2n+2) .card-body .post-excerpt {display: none;}</style>"
  );
  $("#Short_Code_Options .html-widget-content").replaceText(
    grid_wide,
    "<span class='fbt-wide-content'></span>"
  );
  if (
    $("#Short_Code_Options .html-widget-content span").hasClass(
      "fbt-wide-content"
    )
  ) {
    $(".fbt-index-post-wrap").wrap(
      '<div class="fbt-display-grids container-fluid p-0 fbt-four-grids"><div class="row justify-content-center slider-width"/><div class="fbt-main-wrapper col-xl-12"/>'
    );
  }
  $("#Short_Code_Options .html-widget-content").replaceText(
    carousel_fade,
    "<span class='carousel-settings'></span>"
  );
  if (
    $("#Short_Code_Options .html-widget-content span").hasClass(
      "carousel-settings"
    )
  ) {
    $("#carouselPopularPosts").addClass("carousel-fade");
  }
  $("#Short_Code_Options .html-widget-content").replaceText(
    show_snippets,
    "<style>.blog-post:nth-child(2n+2) .card-body .post-excerpt {display: block;}</style>"
  );
  $(".fbt-item-post *").replaceText(
    no_image,
    "<div class='fbt-post-settings no-img'/><style>.page-view .fbt-shape-container .fbt-page-shape-title {height: auto;}.slider-container {padding: 0;}.fbt-shape-container:before {top: -30px;} .fbt-shape-container:after {display: none;}</style>"
  );
  if ($(".post-body .fbt-post-settings").hasClass("no-img")) {
    $(".fbt-page-shape-title").appendTo(".fbt-shape-container");
    $(".fbt-item-thumbnail img").prependTo(".post-body");
    $(".post-title").removeClass("text-white");
    $(".fbt-item-thumbnail, .card-img-overlay").remove();
  }
  $(".fbt-item-post *").replaceText(
    hide_text,
    "<div class='hidden-text d-none'></div>"
  );
  $("strike").appendTo(".hidden-text");
  $("#page_widgets .ContactForm").appendTo(".page-contact");
  $(".fbt-big-title-text").each(function () {
    var n = "[";
    var r = "]";
    $(".fbt-big-title-text *").replaceText(n, '<span class="title-sec-text">');
    $(".fbt-big-title-text *").replaceText(r, "</span>");
  });
  $(".post-body").each(function () {
    $(this)
      .find("blockquote")
      .addClass("fbt-shape-container")
      .wrapInner(
        '<div class="card shadow-lg radius-10 px-5 pt-5 pb-4"><p class="pl-5"/></div>'
      );
  });
  $(".Blog, .navbar-brand, .header-buttons").show();
  $(".cookie-choices-button").addClass(
    "btn btn-warning btn-sm text-dark py-1 px-4 radius-25 font-weight-light"
  );
});
if (document.documentMode || /Edge/.test(navigator.userAgent)) {
  jQuery(".fbt-post-thumbnail a img, .PopularPosts a img")
    .addClass("d-none")
    .each(function () {
      var t = jQuery(this),
        s = "url(" + t.attr("data-src") + ")",
        p = t.parent(),
        d = jQuery('<div class="fbt-resize"></div>');
      p.append(d);
      d.css({
        "background-image": s,
      });
      t.hide();
    });
}
//]]>
