var Observable = require("FuseJS/Observable");

var vlog = this.Parameter;
var vlog_id = vlog.map(function(x) { return x.vlog_id; });
var user_id = vlog.map(function(x) { return x.user_id; });
var create_date = vlog.map(function(x) { return x.create_date; });
var log_date = vlog.map(function(x) { return x.log_date; });
var feeling = vlog.map(function(x) { return x.feeling; });
var tag = vlog.map(function(x) { return x.tag; });			
var video_link = vlog.map(function(x) { return x.video_link; });
var thumbnail_link = vlog.map(function(x) { return x.thumbnail_link; });
var video_ptime = vlog.map(function(x) { return x.video_ptime; });

function goToVlogDetail(){
	router.push("vlogDetail");
}

function goBack(){
	router.goBack();
}


//function save 추가 예정

module.exports = {
	vlog_id: vlog_id,
	user_id: user_id,
	create_date: create_date,
	log_date: log_date,
	feeling: feeling,
	tag: tag,
	video_link: video_link,
	thumbnail_link: thumbnail_link,
	video_ptime: video_ptime,
	goToVlogDetail: goToVlogDetail,
	goBack: goBack
};