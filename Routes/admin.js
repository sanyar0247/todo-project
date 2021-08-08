const express=require('express');

const adminController=require('../Controller/adminController')

const router=express.Router();

router.post('/add-todo',adminController.addTodo);

router.get('/submit/:id',adminController.submit);

router.get('/lost/:id',adminController.lost);

router.get('/edit/:id',adminController.getEdit);

 router.post('/edit/:id',adminController.handleEdit); 

router.get('/delete/:id',adminController.delete);

module.exports=router;