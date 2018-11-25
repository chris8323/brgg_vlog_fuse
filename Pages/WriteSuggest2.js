function goToCamera(arg) {
	var vlog = arg.data; 
	router.push("cameraPage", vlog)
}

function keywordSuffling(){
}

var keywordSuggested = '오늘은 국군의 날이에요'

module.exports = {
	goToCamera: goToCamera,
	keywordSuffling: keywordSuffling,
	keywordSuggested: keywordSuggested,
	goBack: function() {
					router.goBack();
				}
};