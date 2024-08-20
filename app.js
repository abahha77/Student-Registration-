const express=require('express');
const app=express();
const port=3001;
const mongoose=require('mongoose');
app.use(express.json());
app.use('/users',require('./API/user.api.js'));
app.use('/posts',require('./API/post.api'));

mongoose.connect('mongodb://localhost:27017/Exam').then(()=>{
    console.log("Database Connected");
})
app.listen(port,()=>{
    console.log(`The Web Server Is Running On Port ${port}`);
})