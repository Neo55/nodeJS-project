var http = require('http');
var os = require("os");
var greet = require("./greeting");
var User = require("./user")
var welcome = require("./welcome")

var userName = os.userInfo().username; 
var mainUser = new User("MAinPC", 77);

mainUser.sayHi();

welcome.getEveningMessage();
welcome.getMorningMessage();

http.createServer(function(request, response) {
    response.end("Hello node JSSS");

}).listen(3000, "127.0.0.1", function() {
  //  console.log(`Дата запроса: ${greet.date}`);
  //  console.log(greet.getMessage(userName));

    //console.log(userName + ' Сервер начал работы на порту 3000');
    //greet;
})