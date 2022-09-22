const express = require('express');
const app = express()

const middleware1 = function(req,res, next){
    console.log("this is middleware one")
    next()
}

const middleware2 = function(req,res, next){
    console.log("this is middleware two used globaly")
    next()
}

app.use(middleware2) 


app.get('/',middleware1,function(req,res){
    res.send("<h1>This is the main page with middleware 1 and middleware2 <h1>")
})
app.get('/two',middleware1,function(req,res){
    res.send("<h1>This is the second page with middeware 1 and middleware 2 <h1>")
})


app.get('/three',function(req,res){
    res.send("<h1>This is the third page with middeware 2 <h1>")
})
app.get('/four',function(req,res){
    res.send("<h1>This is the fourth page with middeware 2 <h1>")
})
app.get('/five',function(req,res){
    res.send("<h1>This is the fivth page with middeware 2 <h1>")
})

app.listen(4000)
