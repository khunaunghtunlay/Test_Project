// let http = require('http');
// let fs = require('fs');

// let server = http.createServer(function(req,res){
//     res.write(req.url);
//     res.end;

// });
// server.listen(3000,function(){
//     console.log("Server is running on port number 3000 :");
// })

// using express
// let express = require('express');
// let app = express();

// app.get('/',function(req,res){
// res.send("HOME PAGE");
// });

// app.get('/contact',function(req,res){
//     res.send("Contact Page");
// });
// app.listen(3000);


// let http = require('http');
// let fs = require('fs');
// let path = './view';

// let server = http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/html'});
// switch(req.url){
// case '/':
//     path+='/index.html';
//     break;

// case '/home':
//     path+='/home.html';
//     break;

// case '/about':
//     path+='/about.html';
//     break;

// case '/about-me':
//     res.statusCode = 301;
//     res.setHeader('Location','/about');
//     res.end();
//     break;

// default:
//     path+='404.html';
//     res.statusCode = 404;
//     break;    
// }


// fs.readFile(path,(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         res.write(data);
//         res.end();
//     }
// })
// });

// server.listen(3000,function(){
//     console.log("Something has Coming");
// })


// let express = require('express');
// let app = express();

// app.listen(3000,function(){
//     console.log("Something has coming here");
// });
// app.get('/',function(req,res){
//     res.sendFile('./view/home.html',{root:__dirname});
// });

// app.get('/about',(req,res)=>{
//     res.sendFile('./view/about.html',{root:__dirname});
// });

// app.get('/about-us',(req,res)=>{
//     res.redirect('./view/about.html',{root:__dirname});
// })

// app.get('/index',(req,res)=>{
//     res.sendFile('./view/index.html',{root:__dirname});
// });
// app.use((req,res)=>{
//     res.sendFile('./view/404.html',{root:__dirname});
// })

// let http = require('http');
// let url = require('url');
// let routes = {
//     "GET":{
//         "/": (req,res)=>{console.log("GET Request at /");
//         res.writeHead(200,{"Content-Type":"text/html"});
//         res.write("./view/home.html");
//         res.end();
//     },
//         "/home":(req,res)=>{console.log("GET Request at /home");},
//         "/about":(req,res)=>{console.log("GET Request at /about");},
        
//     },
//     "POST":{
//         "/":(req,res)=>{console.log("POST Request at /");},
//         "/home":(req,res)=>{console.log("POST Request at /home");},
//         "/about":(req,res)=>{console.log("POST Request at /about");},
//     }
// }

// let server = http.createServer(function(req,res){
//     let reqMethod = req.method;
//     // let urlparam = url.parse(req.url,true);
//     let url = req.url;
    
// routes[reqMethod][url](req,res);
// console.log(urlparam.pathname);
// });

// server.listen(3000,function(){
//     console.log("Something has coming here");
// })

// let http = require("http");


// let routes = {
//     "GET":{
//         "/":(req,res)=>{
//             console.log("Write something about Request");
//             res.writeHead(200,{"Content-Type":"text/plain"});
//             res.write("<h1>This is Home Page</h1>");
//             res.end();
//         },
//         "/index":(req,res)=>{
//             res.writeHead(200,{"Content-Type":"text/plain"});
//             res.write("<h1>This is Index Page</h1>");
//             res.end();
//         },
//         "/about":(req,res)=>{
//             res.writeHead(200,{"Content-Type":"text/plain"});
//             res.write("<h1>This is about Page</h1>");
//             res.end();
//         }
//     },
//     "POST":{
//         "/":(req,res)=>{
//             res.writeHead(200,{"Content-Type":"text/plain"});
//             res.write("<h1>This is Home Page</h1>");
//             res.end();
//         },
//         "/index":(req,res)=>{
//             res.writeHead(200,{"Content-Type":"text/plain"});
//             res.write("<h1>This is Index Page</h1>");
//             res.end();
//         },
//         "/about":(req,res)=>{
//             res.writeHead(200,{"Content-Type":"text/plain"});
//             res.write("<h1>This is about Page</h1>");
//             res.end();
//         }
//     },
//     "NA":(req,res)=>{
//         res.writeHead(404);
//         res.end("Page Not Found");
//     }
// }

// let start = function(req,res){
//     console.log(req.url);
//     let reqMethod = req.method;
//     let reqUrl = req.url;
//     let route = routes[reqMethod][reqUrl];
//     if(req.url != null && req.url != undefined){
//        route(req,res);
//     }else{
//        routes["NA"](req,res);
//     }
// }

// let server = http.createServer(start);

// server.listen(3000,function(){
//     console.log("Something has Coming at port 3000");
// })