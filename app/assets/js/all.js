

$(document).ready(() => {
  
  
  $(".js-more").click(function () {
    if($(this).text()!="expand_less"){
      $(this).text("expand_less");
    }else{
      $(this).text("expand_more");
    }
    $(".js-more__inner").toggle();
  });


  // editAdmin modal
  $('#editAdmin').on('show.bs.modal', function (event) {
    // 事件對象
    var button = $(event.relatedTarget) 
    // 隨著  button.data('...') 的資料填入 modal
    var recipient = button.data('whatever') ;
    var userMail = button.data('user_email'); 
    // 為了方便辨識，多定義一個變數，其實直接使用 $(this)也可以
    var modal = $(this)
    // modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('#userName').val(recipient)
    modal.find('#userEmail').val(userMail)
  })

  // userInfo modal
  $('#userInfo').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) 
    var recipient = button.data('whatever') ;
    var serialNumber = button.data('serial_number') ;
    var userEmail = button.data('user_email') ;

    $(this).find('.card-title').text(recipient);
    $(this).find('.js-serial_number').text(serialNumber);
    $(this).find('.js-user_email').text(userEmail);
  })
});
