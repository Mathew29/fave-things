$(document).ready(function() {
  $("#user").submit(function(event) {
  event.preventDefault();
  var faveOne = $("input#favoriteThing1").val();
  var faveTwo = $("input#favoriteThing2").val();
  var faveThree = $("input#favoriteThing3").val();
  var faveFour = $("input#favoriteThing4").val();
  var faveFive = $("input#favoriteThing5").val();

  var faveThings = [faveOne, faveTwo, faveThree, faveFour, faveFive];
  // faveThings.forEach(function(faveThing) {
  //
  // });
  for (var i = 0; i <= 4; i ++){
    $(".newFaveThings").append("<li>" + faveThings[i] + "</li>");
  }


  });
});
