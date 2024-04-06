var express = require("express")
const req =require("express/lib/request");
var app = express()
var port = process.env.port || 3000;

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(__dirname +'/public'));

app.listen(port,()=>{
    console.log('App listening to:' +port)
});