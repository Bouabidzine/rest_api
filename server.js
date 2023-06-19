const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config();
//create an express app
const app = express();
const PORT = 27017;
//conect to database
mongoose.connect('mongodb+srv://zinelabidinebouabid:sk87107@skander.bhuqfhr.mongodb.net', {useNewUrlParser : true, useUnifiedTopology : true}).then(()=> { console.log('database is connected');

    //start sever after connect to database

    app.listen(PORT, ()=>{
        console.log(`server running on http://localohost:${PORT}`)
    });
}).catch((err)=> { console.error('failed', err)})

