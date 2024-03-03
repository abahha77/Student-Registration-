const express=require('express');
const app=express();
const port=3000;
const mongoose=require('mongoose');
const cors=require('cors');
app.use(cors());
app.use(express.json());
app.use('/users',require('./API/user.api.js'));
app.use('/posts',require('./API/post.api.js'));

mongoose.connect('mongodb://localhost:27017/application').then(()=>{
    console.log("DataBase Connected");
})
.catch((err)=>{
    console.log(err);
})
app.listen(port,()=>{
    console.log("The Live Server Is Running.....");
})