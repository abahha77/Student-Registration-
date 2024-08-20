const { addPost, updatePost, getAllPosts, getUserPosts, deletePosts } = require('../services/posts.model');
const { auth } = require('../validation/authentication/auth');

const route=require('express').Router();

route.post('/addPost',auth,addPost);
route.put('/updatePost',auth,updatePost);
route.get('/getAllPosts',auth,getAllPosts);
route.get('/getUserPost',getUserPosts);
route.delete('/deletePosts',deletePosts);
module.exports=route;