const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/category");

const Article=  connection.define('articles',{
    titlo:{
        type: Sequelize.STRING,
        allowNull:false
    },
    slug:{
        type: Sequelize.STRING,
        allowNull:false
    },
    body:{
        type: Sequelize.TEXT,
        allowNull: false
    }

})

//relacionamento: uma categoria tem muitos artigos mas um artigo pode ter apenas uma categoria
Category.hasMany(Article); // hasMany - tem muitos
Article.belongsTo(Category); // belongsTo - pertence a

Article.sync({force: true});

module.exports = Article;