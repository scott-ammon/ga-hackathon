
$(document).ready(function() {

    // Initialize Materialize components
    M.AutoInit();

    // shade clicked tags
    $(".tag").on("click", function() {
      $(this).toggleClass("shaded") 
    })

    // Fake login code
  	// $(".login").on('submit', function(e) {
	  //   var userName = $("input:text").val();
	  //   // var userEmail = $("[name='email']").val();
   //    e.preventDefault();
  	// });

    $('#select-committee').change(function(e) {
      if(e.target.value === 'allCommittees') {
        $('.hide').removeClass('hide');
      }
      else {
        $('.hide').removeClass('hide');
        $('.collapsible-header').not('.' + e.target.value).addClass('hide');
      }
    });
});


