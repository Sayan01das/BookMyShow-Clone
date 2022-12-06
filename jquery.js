$(document).ready(function () {
  $(".nav-effect").hover(
    function () {
      $(this).css("color", "yellow");
    },
    function () {
      $(this).css("color", "white");
    }
  );
});

// $(document).ready(function () {
//   $(".social-effect").hover(
//     function () {
//     $(this).css("background-color","white");
//     },
//     function() {
//        $(this).css("background-color", "rgb(49, 48, 53)");
//     }
//   );
// });

$(document).ready(function(){
    $('.logo1-effect').click(
       function() {
        alert("Let's Book Tickets");
       }
    )
});



