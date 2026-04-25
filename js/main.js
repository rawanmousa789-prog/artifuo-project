$(document).ready(function(){
    $(window).on("scroll", function () {
    let scroll = $(window).scrollTop();
    let startTop = 85;

    let newTop = startTop - scroll;

    if (newTop < 0) {
        newTop = 0;
    }

    $(".nav2").css("top", newTop + "px");
});

    $('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
}); 


    


});