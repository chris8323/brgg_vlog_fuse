var Common = require("Modules/Common");
var FileSystem = require("FuseJS/FileSystem");
var Observable = require("FuseJS/Observable");
var email = Observable("");
var password = Observable("");
var result_msg = Observable("");


function loginCheck(){
  response = fetch(Common.url + "/device", 
                {  method: 'POST', 
                  headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
                     body: "email=" + email.value + "&password=" + password.value})
              .then(function(response){ return response.json();})
              .then(function(data_from_server){


                console
                  if (data_from_server.hasOwnProperty('token')){
                    FileSystem.writeTextToFile(Common.token_path, data_from_server['token'])
                    router.goto("listCalendar");
                  }else{
                    if (data_from_server == "error003"){
                      result_msg.value = "가입되어 있지 않은 아이디입니다."
                    }else{
                      result_msg.value = data_from_server
                    }
                  }
              });
}

function goToSignup() {
	router.push("signup");
}

module.exports = {
	goToSignup: goToSignup,
	loginCheck: loginCheck,

	email: email,
	password: password,
	result_msg: result_msg, 
};
