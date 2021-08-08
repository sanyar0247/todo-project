const mongoose=require('mongoose');

const todoScheema=mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:255
    },
    description:{
        type:String,
        required:true,
        trim:true,
    },
    time:{
        type:Date,
       
    },
    state:{
        type:String,
        defult:"remaining"
    }
});

const todoModel=mongoose.model("todo",todoScheema);

module.exports=todoModel;