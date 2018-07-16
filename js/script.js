var numberInput = [];

  function ping (number){
    for (var index = 1; index <= number; index++){
      if(index % 15 === 0){
          numberInput.push("pingpong");
      }
        else if(index % 5 === 0){
            numberInput.push("pong");
          }
        else if(index % 3 === 0){
              numberInput.push("ping");
          }
        else{
            numberInput.push(index);
        }
      }
  }

  $(document).ready(function(){
    $("form#ping").submit(function(){
      event.preventDefault();
      var number = parseInt($("input#integer").val());

     ping(number);

      numberInput.forEach(function(number){
        $("#feedback").append('<li>' + number + "</li>");
      });
    });
  });
var slideIndex = 0;
carousel();

carousel() {
  var index;
  var caption = document.getElementsByClassName("slideshow");
  for (index = 0,index < caption.length, index++) {
  caption[index].style.display = "none";
}
slideIndex++;
if (slideIndex>caption.length) {slideIndex=1}
caption[slideIndex-1].style.display = "block";
setTimeout(carousel, 2000);
}
