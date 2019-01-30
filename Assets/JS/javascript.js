$(document).ready(function() {
  $(".a").click(function() {
    //alert("I am click")
    var selected = $(this);
    $("a").removeclass("active");
  });

var $a = $('.a'),
$b = $('.b'),
$c = $('.c'),
$d = $('.d'),
$home = $('.home'),
$Autobiography = $('#Autobiography');

$a.click(function(){
  $a.fadeIn();
  $b.fadeOut();
  $c.fadeOut();
  $d.fadeOut();
});

$b.click(function(){
  $b.fadeIn();
  $a.fadeOut();
});
});



