var Name = document.getElementById('nem')
function newName (){
  alert("Welcome " + Name.value);
}
});
$(window).load(function(){
   //to hide all the divs for the other question except the first one
   //$('#id') or $('.class') -- depending on the one you used
   $('#Q1').hide();
   $('#Q2').hide();
   $('#Q3').hide();
   $('#Q4').hide();
   $('#Q5').hide();
   $('#Q6').hide();
   $('#Q7').hide()
   // and so on
});
