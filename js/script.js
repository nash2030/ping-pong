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
