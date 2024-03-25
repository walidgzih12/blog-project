const {Sequelize,DataTypes} = require("sequelize");

const connection = new Sequelize("blogsapp" , "root" , "root" , {
    host : "localhost",
    dialect : "mysql"
});

async function testConnection(){
    try{
        await connection.authenticate();
        console.log("connection is working")
    }
    catch (error){
        console.error("you have an error, you cant connect to database" , error);
    }
}
testConnection();

//   connection
//     .sync({ alter: true })
//     .then(() => {
//       console.log("Book table created successfully!");
//     })
//     .catch((error) => {
//       console.error("Unable to create table : ", error);
//     });

const db = {};
db.user = require('./user')(connection,DataTypes);
db.blog = require('./blog')(connection,DataTypes);

db.user.hasMany(db.blog);
db.blog.belongsTo(db.user);
//connection.sync({ force: true });


module.exports =db;