var Observable = require("FuseJS/Observable");
var FileSystem = require("FuseJS/FileSystem");
// var url = "https://chrishwang90.herokuapp.com"
var url = "http://localhost:9292"
var token_path = FileSystem.dataDirectory + "/" + "token.txt";

module.exports = {
  url: url,
  token_path: token_path
};
