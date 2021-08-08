const mongoose=require('mongoose');


const connectDB=async()=>{
    try {
        URI="mongodb://localhost:27017/todos_db";

        //NOTE try to connect mongoDB
        const con=await mongoose.connect(URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            useFindAndModify:true
        });
        console.log(`connected to database:MongoDB ${con.connection.host}`);
        
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
module.exports=connectDB;