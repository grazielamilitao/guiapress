const express = require("express");
const app = express();
const bodyParser=require("body-parser");
const connection = require('./database/database')

const categoriesController = require('./categories/categoriesController');
const articlesController = require('./articles/articlesController');

const Article = require("./articles/article");
const Category = require("./categories/category");


//View Engine
app.set('view engine', 'ejs');

//Static
app.use(express.static('public'))

//Body Parser
app.use(bodyParser.urlencoded({extend:false}));
app.use(bodyParser.json());

//database

connection
    .authenticate()
    .then(()=>{
        console.log("Sucess!")
    }).catch((error)=>{
        console.log(error);
    });


app.use("/", categoriesController);

app.get("/", (req, res)=>{
    res.render("index");
});

app.listen(4000, ()=>{
    console.log("Servidor funcionando.");
});