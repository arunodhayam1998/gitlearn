const express = require('express')

const app = express();

app.get('/', (req,res) => {
     res.end('hello world')
})

app.listen(3000,() => {
    console.log(`server listen on port 3000`)
})
console.log("hello junior hello ")