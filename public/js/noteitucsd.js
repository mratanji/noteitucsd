'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
	$(".version_a").click(function(){
		woopra.track("version_a_submit");
	})

	$(".version_b").click(function(){
		woopra.track("version_b_submit");
	})
}