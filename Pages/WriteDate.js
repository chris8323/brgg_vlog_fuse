function writeYesterday(arg) {
	var vlog = arg.data; 
	//logged_at 정의: 어제
	router.push("writeSuggest1", vlog)
}

function writeToday(arg) {
	var vlog = arg.data; 
	//logged_at 정의: 오늘
	router.push("writeSuggest1", vlog)
};

module.exports = {
	writeYesterday: writeYesterday,
	writeToday: writeToday,
	goBack: function() {
					router.goBack();
				}
};