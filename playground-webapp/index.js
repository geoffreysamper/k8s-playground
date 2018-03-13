const express = require('express')
const app = express()
const hostname = require('os').hostname();
app.get('/', (req, res) => res.send('hello world v3 ' + hostname));
app.get('/ready', (req, res) =>
    setTimeout(function (){
        res.status(200).send('ready');
    },3000)
);

app.get("/webconfig", function(req, res){
    res.setHeader('content-type', 'text/plain');
    var s = require('fs').readFileSync("./config/web.config");
    res.send(s);
});


app.get('/env', function(req,res){
    res.json(process.env);

});

app.listen(4000, () => console.log('listening on port 4000!', hostname))


setInterval(function (){
console.log("alive ", hostname );

}, 4000);
