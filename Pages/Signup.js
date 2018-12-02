var Common = require("Modules/Common");
var FileSystem = require("FuseJS/FileSystem");
var Observable = require("FuseJS/Observable");
var email = Observable("");
var nickname = Observable("");
var password = Observable("");
var password_confirm = Observable("");
var result_msg = Observable("");


function goBack(){
	router.goBack();
}

function signupCheck(){
  response = fetch(Common.url + "/user", 
                {  method: 'POST', 
                  headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
                     body: "email=" + email.value + 
                     	   "&password=" + password.value +
                           "&password_confirm=" + password_confirm.value + 
                           "&nickname=" + nickname.value 
                     })
              .then(function(response){ return response.json();})
              .then(function(data_from_server){
                  if (data_from_server.hasOwnProperty('token')){
                    FileSystem.writeTextToFile(Common.token_path, data_from_server['token'])
                    router.goto("listCalendar"); //서버 통신 이후 Router 경로
                  }else{
                    if (data_from_server == "err001"){
                      result_msg.value = "이미 가입된 회원입니다."
                    }else if (data_from_server == "err002"){
                      result_msg.value = "입력하신 비밀번호가 서로 일치하지 않습니다."
                    }else{
                      result_msg.value = data_from_server
                    }
                  }
              });
}



module.exports = {
	goBack: goBack,
	signupCheck: signupCheck,

	email: email, //TextBox
	nickname: nickname, //TextBox
	password: password, //TextBox
	password_confirm: password_confirm, //TextBox
};