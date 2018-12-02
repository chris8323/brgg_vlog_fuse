var Common = require("Modules/Common");
var FileSystem = require("FuseJS/FileSystem");
var Observable = require("FuseJS/Observable");
var is_todayLog = Observable("");
var feeling = Observable("");
var tag = Observable("");


function goBack(){
	router.goBack();
}

function vlogSave(){

}

module.exports = {
  goBacke: goBack,
  vlogSave: vlogSave,

  is_todayLog: is_todayLog,
  feeling: feeling,
  tag: tag,
};