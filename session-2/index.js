const express = require('express')
const app = express()
const hostname = require('os').hostname();
app.get('/', (req, res) => res.status(500).send('custom error'));
app.get('/ready', (req, res) =>
    setTimeout(function (){
        res.status(200).send('ready');
    },3000)
);

app.listen(4000, () => console.log('listening on port 4000!', hostname))


setInterval(function (){
console.log("alive ", hostname );

}, 4000);
