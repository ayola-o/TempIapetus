
var person;
var picture;
var reccurent = "<h1 class = 'satisfied'>Not Satisfied?</h1>"+"<input type='button' id='restart' value = 'Try again'><br>"+
"<h3 class = 'logo'>Geek<span id = 'dot'>.</span>Inc</h3>";

$('#Q1').hide();
$('#Q2').hide();
$('#Q3').hide();
$('#Q4').hide();
$('#Q5').hide();
$('#Q6').hide();
$('#Q7').hide();
$('#Answer').hide();

$('#start').click(function () {
  $('.Page1').hide();
  $('#Q1').fadeIn(1200);
});
$('#next1').click(function (){
  var form1 = $('#nem').val();
  if (form1=='') {
    alert ('FUCKING FILL IT IN');
  } else {
  $('#Q1').hide();
  $('#Q2').fadeIn(1200);
  var Name = document.getElementById('nem')
  function newName (){
    alert("Welcome " + Name.value);
  }
  newName();
}
});
$('#prev1').click(function (){
  $('#Q2').hide();
  $('#Q1').fadeIn(1200);
});
$('#next2').click(function (){
  $('#Q2').hide();
  $('#Q3').fadeIn(1200);
});
$('#prev2').click(function (){
  $('#Q3').hide();
  $('#Q2').fadeIn(1200);
});
$('#next3').click(function (){
  $('#Q3').hide();
  $('#Q4').fadeIn(1200);
});
$('#prev3').click(function (){
  $('#Q4').hide();
  $('#Q3').fadeIn(1200);
});
$('#next4').click(function (){
  $('#Q4').hide();
  $('#Q5').fadeIn(1200);
});
$('#prev4').click(function (){
  $('#Q5').hide();
  $('#Q4').fadeIn(1200);
});
$('#next5').click(function (){
  $('#Q5').hide();
  $('#Q6').fadeIn(1200);
});
$('#prev5').click(function (){
  $('#Q6').hide();
  $('#Q5').fadeIn(1200);
});
$('#next6').click(function (){
  $('#Q6').hide();
  $('#Q7').fadeIn(1200);
});
$('#prev6').click(function (){
  $('#Q7').hide();
  $('#Q6').fadeIn(1200);
});
$('#finish').click(function (){
  $('#Q7').hide();
  $('#Answer').show(slow);
  $('#Answer').fadeIn(1200);
  $("#twitter").show("slow");
  $("#twitter").fadeIn(1200);

var selectedOption2 = $("input:radio[name='Q2']:checked").val();
var selectedOption3 = $("input:radio[name='Q3']:checked").val();
var selectedOption4 = $("input:radio[name='Q4']:checked").val();
var selectedOption5 = $("input:radio[name='Q5']:checked").val();
var selectedOption6 = $("input:radio[name='Q6']:checked").val();
var selectedOption7 = $("input:radio[name='Q7']:checked").val();

if (selectedOption2 == 'bobrisky') {

} else {

}

});
