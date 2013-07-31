$(document).ready(function(){
	$("#snacks > li").find("img").click(function(){
		var snack = $(this).closest(".snack");
		var rate = snack.data("rate")
		var taste = $('<p class ="rate">review '+rate+'</p>'); 
		snack.append(rate);
		/*$(this).remove();*/
		});

	/*$("#snacks > li").find(".img").click(function(){
		var details = $('<span class="details">Get Price</span');
		snack.append(img);
	
		$(this).remove();
	});*/
});