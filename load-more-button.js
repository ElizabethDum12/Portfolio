$( document ).ready(function () {
	  $(".gallery").slice(0, 4).show();
  $("#loadMore").on("click", function(e){
    e.preventDefault();
    $(".gallery:hidden").slice(0, 4).slideDown();
    if($(".gallery:hidden").length == 0) {
      $("#loadMore").text("No Content").addClass("noContent");
    }
  });
  
});

	//	$(".moreImg").slice(0, 3).show();
	//	if ($(".gallery:hidden").length != 0) {
	//		$("#loadMore").show();
	//	}		
	//	$("#loadMore").on('click', function (e) {
	//		e.preventDefault();
	//		$(".moreImg:hidden").slice(0, 6).slideDown();
	//		if ($(".moreImg:hidden").length == 0) {
	//			$("#loadMore").fadeOut('slow');
	//		}
	//	});
	//});


//const loadmore = document.querySelector('#loadmore');
 //   let currentItems = 2;
   // loadmore.addEventListener('click', (e) => {
     //   const elementList = [...document.querySelectorAll('.gallery .gallery img ')];
       // for (let i = currentItems; i < currentItems + 2; i++) {
         //   if (elementList[i]) {
           //     elementList[i].style.display = 'block';
            //}
     //   }
       // currentItems += 2;

        // Load more button will be hidden after list fully loaded
        //if (currentItems >= elementList.length) {
          //  event.target.style.display = "none";
          //       }
    //})
//</script>