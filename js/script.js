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
showSlides();

showSlides() {
  var i;
  var slides = document.getElementsByClassName("slideshow");
  for (i = 0,index < slides.length, i++) {
  slides[i].style.display = "none";
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}
slides[slideIndex-1].style.display = "block";
setTimeout(showSlides, 2000);
}
