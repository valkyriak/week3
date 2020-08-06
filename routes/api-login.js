var express = require('express'); 

module.exports = function(app,path) {
    app.post('/api/login',function(req,res){
        let users = [{'email':'abc@com.au','pwd':'123'},{'email':'abc@com.au','pwd':'123'},{'email':'abc@com.au','pwd':'123'}]

        if (!req.body) {
            return res.sendStatus(400)
        }
        var customer = {};
        customer.email = req.body.email;
        customer.upwd = req.body.upwd;
        customer.valid = false;
        for (let i=0;i<users.length;i++) {
            if(req.body.email == users[i].email && req.body.upwd == users[i].pwd){
                customer.valid = true;
            }
        }
            res.send(customer);
    });
}