const express = require("express")
const app = express();
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require('cookie-parser')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const port = 5000

const UserModel = require('./models/UserSchema')
app.use(cors({
   origin:["http://localhost:5173"],
   methods:["GET","POST"],
   credentials:true
}))
app.use(cookieParser())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/logoutlogin')
.then(()=>{
   console.log("connected sucessfully");
}).catch(()=>{
   console.log("N0 connection");
});


//register the user
app.post('/register', async (req,res) => {
    const { username,email,password } = req.body;
    if( !username,!email,!password ){
        console.log("enter data first");
        return res.json({message:"Please fill all fields"})
    }
    const user = await UserModel.findOne({email})
    if(user){
        return res.json({message:"user already exist"})
    }
    const hashPassword = await bcrypt.hash(password,10)
    const newUser = new UserModel({username,email,password:hashPassword,})
     await newUser.save();
    return res.json({message:"user register successfully"})
}) 

//login the user

app.post('/login', async(req,res) => {
    const { email,password } = req.body;
    if( !email,!password ){
        console.log("enter data first");
        return res.json({message:"Please fill all fields"})
    }
    const user = await UserModel.findOne({email});
    if(!user){
        return res.json({message:"email not found"})
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword){
        return res.json({message:"incorrect password"})
    }
    const token = jwt.sign({id: user._id},"Secret Key");
    res.cookie("token",token);
    return res.json({message:"sucessfully login", id: user._id});

})

//logout the user
app.get('/logout' , (req,res) => {
    res.clearCookie('token');
    console.log("removed cookie");
    return res.json({message:"cookie has been removed"})
})




app.listen(port, () => {
    console.log("server is running at port 5000")
})