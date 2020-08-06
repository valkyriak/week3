var express = require('express'); 

module.exports = function(app,path) {
    app.get('/',function(req,res){
        res.sendFile(__dirname + '/www/index.html');
    });
}