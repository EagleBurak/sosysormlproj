(function ( $ ) {

	$.fn.eagleburak = function( options ) {

		return this.each(function() {

			// Get video ID
			var getvideoid = $(this).attr("youtubeid");

			// Default options
			var settings = $.extend({
				videoID: getvideoid,
				autoPlay: true,
				theme: "dark"
			}, options );

			// Convert some values
			if(settings.autoPlay === true) { settings.autoPlay = 1 } else if(settings.autoPlay === false)  { settings.autoPlay = 0 }
			if(settings.theme === "dark") { settings.theme = "eagleburak-dark-theme" } else if(settings.theme === "light")  { settings.theme = "eagleburak-light-theme" }

			// Initialize on click
			if(getvideoid) {
				$(this).on( "click", function() {
					 $("body").append('<div class="eagleburak-popup '+settings.theme+'">'+
								'<div class="eagleburak-popup-content">'+
									'<span class="eagleburak-popup-close"></span>'+
									'<iframe class="eagleburak-iframe" src="https://www.youtube.com/embed/'+settings.videoID+'?rel=0&wmode=transparent&autoplay='+settings.autoPlay+'&iv_load_policy=3" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
							'</div>');
				});
			}

			// Close the box on click or escape
			$(this).on('click', function (event) {
				event.preventDefault();
				$(".eagleburak-popup-close, .eagleburak-popup").click(function(){
					$(".eagleburak-popup").remove();
				});
			});

			$(document).keyup(function(event) {
				if (event.keyCode == 27){
					$(".eagleburak-popup").remove();
				}
			});
		});
	};

}( jQuery ));
