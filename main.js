// debugger

// addition code
$("#add").on('click',function (){
  event.preventDefault();
  var addAnswer = Number($('#num_one').val()) + Number($('#num_two').val());
  $('#answer').val(addAnswer);

})

// subtraction code
$("#subtract").on('click',function (){
  event.preventDefault();
  var answer = Number($('#num_one').val()) - Number($('#num_two').val());
  $('#answer').val(answer);

})

// multiply code
$("#multiply").on('click',function (){
  event.preventDefault();
  var answer = Number($('#num_one').val()) * Number($('#num_two').val());
  $('#answer').val(answer);

})

// division code
$("#divide").on('click',function (){
  event.preventDefault();
  var answer = Number($('#num_one').val()) / Number($('#num_two').val());
  $('#answer').val(answer);

})
