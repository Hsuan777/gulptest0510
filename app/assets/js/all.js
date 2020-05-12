

$(document).ready(() => {
  // TODO:跳轉無效，待修正
  $(".js-navbar__menu__link").click(function (e) {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });
});
