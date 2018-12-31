$(document).ready(function() {
  $(".a").click(function() {
    //alert("I am click")
    var selected = $(this);
    $("a").removeclass("active");
  });
});
