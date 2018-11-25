function goToSuggest2(arg) {
	var vlog = arg.data; 
	router.push("writeSuggest2", vlog)
}

function goToCamera(arg) {
	var vlog = arg.data; 
	router.push("cameraPage", vlog)
}

module.exports = {
	goToSuggest2: goToSuggest2,
	goToCamera: goToCamera,
	goBack: function() {
					router.goBack();
				}
};