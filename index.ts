import express from "express";
import {AppDataSource} from "./src/data-source";
import ProductController from "./src/controller/productController";
import bodyParser from "body-parser";
import {router} from "./src/router/router";
const app = express();



AppDataSource.initialize().then(()=>{
    console.log('Database connected')
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.json());


app.use(router);





app.listen(8000,'localhost',()=>{
    console.log(`App is running at port 8000`)
})