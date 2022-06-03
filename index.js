const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Loook Mama!! I can code node now!!');
})

app.listen(port,()=>{
    console.log('Listening to port',port);
})