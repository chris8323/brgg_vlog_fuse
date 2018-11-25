var vlogs = require("dummyVlog");

function goToDetail(arg) {
	var vlog = arg.data; //차후 특정 user_id의 vlog data만 전달하도록 수정 예정
	router.push("vlogDetail", vlog)
}

function goToWrite(arg) {
	var vlog = arg.data; //차후 특정 user_id의 vlog data만 전달하도록 수정 예정
	router.push("writeDate", vlog)
}

function logout(){
	//차후 로그인 정보만료 처리 추가 필요
	router.push("splash")
}

module.exports = {
	vlogs: vlogs,
	goToDetail: goToDetail,
	goToWrite: goToWrite,
	logout: logout
};