$(document).ready(function(){
  var keys = $("textarea");
  var bounceDiv = $("#anotherDiv");
  $(bounceDiv).click(function(){
    $(bounceDiv).addClass('animated wobble infinite')
  })
  $(keys).keypress(function(event){
    var letter = event.key;
    if(letter="e"){
      $(bounceDiv).addClass('animated jello infinite')
    }
  })
})