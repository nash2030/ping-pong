var numberInput = [];

  function ping (number){
    for (var index = 1; index <= number; index+=1){
      if(index % 3 === 0){
            numbersInput.push("ping");
        }
        else if(index % 5 === 0){
            numbersInput.push("pong");
          }
        else if(index % 15 === 0){
            numberInput.push("pingpong");
        }
        else{
            numberInput.push(index);
        }
      }
  }

  $(document).ready(function(){
    $("form#ping").submit(function(){
      
    })
  })
