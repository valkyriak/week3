var express = require('express'); 
var app = express();
var path = require('path');

var bodyParser = require('body-parser');

app.use (bodyParser.json());

app.use(express.static(__dirname + '/www'));

//Start the server listening on port 3000. Output message.
app.listen(3000, ()=>{
    var d = new Date();
    var n = d.getHours();
    var m = d.getMinutes();
    console.log('Server has been started at : ' + n + ':' +m);
});


require('./routes/homepage.js')(app,path);
require('./routes/account.js')(app,path);
require('./routes/api-login.js')(app,path)

