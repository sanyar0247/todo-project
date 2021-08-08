const todoModel=require('../Model/Todo');

exports.addTodo=async(req,res)=>{
    const {title,description,time}=req.body;
    await todoModel.create({title,description,time,state:"remaining"});
    res.redirect('/')
}

exports.submit=async(req,res)=>{
    
    const id = req.params.id;
    let todos=await todoModel.find();
   for(todo of todos){
       if(todo._id==id){
           todo.state="submited";
           todo.save();
       }
   }
   res.redirect('/');

}

exports.lost=async(req,res)=>{
    
    const id = req.params.id;
    let todos=await todoModel.find();
   for(todo of todos){
       if(todo._id==id){
           todo.state="lost";
           todo.save();
       }
   }
   res.redirect('/');

}


exports.delete=async(req,res)=>{
    
    const id = req.params.id;
    await todoModel.findByIdAndRemove(id);
   
   
   res.redirect('/');

}

exports.getEdit=async(req,res)=>{
    let id=req.params.id;
    let todo = todoModel.findById(id);
    let todos=await todoModel.find();
    let remainings=todos.filter(t=>t.state=="remaining").length;
    let submiteds=todos.filter(t=>t.state=="submited").length;
    let losts=todos.length-remainings-submiteds;
    res.render("edit",{todos,remainings,losts,submiteds,todo});
}

exports.handleEdit=async(req,res)=>{
    const {title,description,time}=req.body;
    let id=req.params.id;
    let todo =await todoModel.findById(id);
    todo.title=title;
    todo.description=description;
    todo.time=time;
    todo.save();
    res.redirect('/')
}