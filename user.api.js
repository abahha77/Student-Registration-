const { signup, changePassword, signin, updateAccount, deleteAccount } = require('../services/user.services');
const { auth } = require('../validation/authentication/auth');
const { validatetion, signInValidation } = require('../validation/valid/validation');

const route=require('express').Router();

route.post('/signin/:id',signInValidation,signin);
route.post('/signup/:id',validatetion,signup);
route.patch('/changePassword',auth,changePassword);
route.put('/updateAccount',auth,updateAccount);
route.delete('/deleteAccount',auth,deleteAccount);
module.exports=route;