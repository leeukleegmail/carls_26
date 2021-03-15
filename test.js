 $('.checkbox').change(function() {

   if (this.checked) {
     $(this).parent().parent().css("text-decoration", "line-through");
   } else {
     $(this).parent().parent().css("text-decoration", "none");
   }
 });