const express = require('express');
const bodyParser=require('body-parser');

const path=require('path');

const adminRouter=require('./Routes/admin');
const connectDB=require('./Utils/connectDB')
const todoModel=require('./Model/Todo');


const app = express();

app.use(express.urlencoded({extended:false}));
connectDB();

app.set("view engine","ejs");
app.set("views","View")
console.log(path.join(__dirname,'public'));
app.use(express.static(path.dirname(process.mainModule.filename)))

app.use(adminRouter);

app.use('/',async(req,res)=>{
    let todos=await todoModel.find();
    let remainings=todos.filter(t=>t.state=="remaining").length;
    let submiteds=todos.filter(t=>t.state=="submited").length;
    let losts=todos.length-remainings-submiteds;
    res.render("index",{todos,remainings,losts,submiteds});
})

app.listen(3000,()=>console.log('server is running on port 3000'))