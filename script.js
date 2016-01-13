$(document).ready(function() {
 $("form#survey").submit(function(event) {
   var environment = parseInt($("input#environment").val());
   var healthcare = parseInt($("input#health-care").val());
   var immigration = parseInt($("input#immigration").val());
   var secondAmendment = parseInt($("input#second-amendment").val());

   var result = (environment + healthcare + immigration + secondAmendment);


   if (result >= 30) {
     $("#high-score").show();
   } else if (result >= 20) {
     $("#mid-score").show();
   } else {
     $("#low-score").show();
   }

 })



});
