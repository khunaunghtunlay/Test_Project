let http = require("http");
let url = require('url');
require('dotenv').config();
let server = http.createServer(function(req,res){
    let param = url.parse(req.url,true);
    
    let name = param.query.name;
    let age = param.query.age;
    let reqMethod = req.method;
    let reqUrl = req.url;
    let routes = route[reqMethod][reqUrl];
    routes(req,res,param);
    console.log(name);
})
server.listen(proocess.env.PORT);

let route = {
    
    "GET":{
        "/":(req,res,param)=>{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(`<h2>Home page of name is ${param.name}</h2>`);
            res.end();
        },
        "/about":(req,res,param)=>{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(`<h2>Home page of name is ${param.name}</h2>`);
            res.end();
        }
    },
    "POST":{
        "/":(req,res,param)=>{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(`<h2>Home page of name is ${param.name}</h2>`);
            res.end();
        },
        "/about":(req,res,param)=>{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(`<h2>about page of name is ${param.name}</h2>`);
            res.end();
        }
    }
} 
