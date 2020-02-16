const express = require('express');

const app = express();

app.use((req: any, res: any, next: any)=>{
    res.header('Access-Control-Allow-Orign', '*');
    res.header('Access-Control-Allow-Headers', 'Origin , X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS. GET,POST,PUT,DELETE,PATCH');
    if('OPTIONS' == req.method){
        res.sendStatus(200);
    }else{
        console.log(`req.ip`);
        next();
    }
})

app.get("/", (req: any, res: any)=>{
    res.send({hello:"hi"});
})

app.listen(4100,'127.0.0.1', ()=>{
    console.log('Server is running on port 4100');
})
