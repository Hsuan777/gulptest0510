"use strict";

$(document).ready(function () {
  // 跳轉頁面時，判斷在哪一頁面並在 .navbar__menu後面的元素中 加上 .active
  // 謝謝同學作業，以供參考
  var title = $('title');

  switch (title.text()) {
    case "Assignment":
      $('a[href="index.html"]').addClass('active');
      break;

    case "Admin":
      $('a[href="admin.html"]').addClass('active');
      break;
  } // 箭頭方向改變，提醒有折疊內容


  $(".js-more").click(function () {
    if ($(this).text() != "expand_less") {
      $(this).text("expand_less");
    } else {
      $(this).text("expand_more");
    }
  }); // editAdmin modal

  $('#editAdmin').on('show.bs.modal', function (event) {
    // 事件對象
    var button = $(event.relatedTarget); // 隨著  button.data('...') 的資料填入 modal

    var recipient = button.data('whatever');
    var userMail = button.data('user_email'); // 為了方便辨識，多定義一個變數，其實直接使用 $(this)也可以

    var modal = $(this); // modal.find('.modal-title').text('New message to ' + recipient)

    modal.find('#userName').val(recipient);
    modal.find('#userEmail').val(userMail);
  }); // userInfo modal

  $('#userInfo').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var recipient = button.data('whatever');
    var serialNumber = button.data('serial_number');
    var userEmail = button.data('user_email');
    $(this).find('.card-title').text(recipient);
    $(this).find('.js-serial_number').text(serialNumber);
    $(this).find('.js-user_email').text(userEmail);
  }); // 點擊 userInfo 摺疊內容之 edit按鈕
  // 解決切換 modal頁面時， modal無法往下拉，因為 data-dismiss會造成 modal-open被取消

  $('a[data-dismiss="modal"][data-toggle="modal"],button[data-dismiss="modal"][data-toggle="modal"]').on('click', function () {
    event.preventDefault();
    var target = $(this).data('target');
    $(target).on('shown.bs.modal', function () {
      $('body').addClass('modal-open');
    });
  });
});
//# sourceMappingURL=all.js.map
