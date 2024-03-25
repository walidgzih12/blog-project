const cors = require('cors');
const express = require('express');
let app = express();
app.use(express.json());
app.use(cors());

app.use(express.static(__dirname + "/../client/dist"))
///
require('./model/index');

const userRoutes = require('./router/pathUser');
const blogRoutes = require('./router/pathBlogs');

////
app.use("/api/user",userRoutes);
app.use("/api/blog",blogRoutes);



////

let port = 3001;
app.listen(port,function(){
    console.log(`listening on port ${port}`);
})


