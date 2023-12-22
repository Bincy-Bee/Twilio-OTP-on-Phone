const express = require('express');
const { db } = require('./config/db');
const { router } = require('./routes/user.routes');
const app = express();
app.use(express.json());
app.use(router)



app.listen(8090, ()=>{
    console.log('Server is listening om http://locahost:8090');
    db();
})