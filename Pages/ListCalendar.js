var vlogs = require("dummyVlog");
var Common = require("Modules/Common");
var FileSystem = require("FuseJS/FileSystem");
var Observable = require("FuseJS/Observable");


function goToDetail(arg) {
	var vlog = arg.data; //차후 특정 user_id의 vlog data만 전달하도록 수정 예정
	router.push("vlogDetail", vlog)
}

function goToWrite(arg) {
	var vlog = arg.data; //차후 특정 user_id의 vlog data만 전달하도록 수정 예정
	router.push("vlogTest", vlog)
}

function logout(){	
	  FileSystem.deleteSync(Common.token_path)
	  router.push("splash");
}	

module.exports = {
	vlogs: vlogs,
	goToDetail: goToDetail,
	goToWrite: goToWrite,
	logout: logout
};