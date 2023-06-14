const express = require('express')
const bodyParser =require("body-parser") ;

const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', './views');
app.get('/',(req, res)=>{
        res.render('create')
})


app.listen(8000,'localhost' , ()=>{
    console.log('Server is running')
})