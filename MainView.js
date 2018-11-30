var Common = require("Modules/Common");
var FileSystem = require("FuseJS/FileSystem");
var Observable = require("FuseJS/Observable");
var hasProfile = Observable(false);

FileSystem.readTextFromFile(Common.token_path)
    .then(function(text) {
      router.goto("listCalendar");
    })
    .catch(function(error) {
      router.goto("splash");
    });

module.exports = {
	hasProfile: hasProfile
};
