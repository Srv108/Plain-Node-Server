const http = require('http');

const PORT = 3000;

const server = http.createServer((req,res) => {
    console.log("Request Recieved");
    console.log(req);
    console.log(res);

    if(req.url == '/'){
        res.write("You are at HOME");
    }else if(req.url == '/about'){
        res.write("My name is Saurav");
    }else{
        res.write("Hello World!");
    }

    res.end();
})


server.listen(PORT,() => {
    console.log(`server is listening on port ${PORT}`);
})