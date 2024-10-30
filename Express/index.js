const express = require("express");
const app = express();
const mongoose = require("mongoose")
const port = 1400;



const cors = require("cors");
const userModel = require("./models/user");



app.use(express.json());
app.use(cors());
//database connection
mongoose.connect("mongodb://localhost:27017/First")
    .then(() => {
        console.log("mongo db connected successfully");
    })
    .catch((error)=>{
 console.error("mongodb connection error",error);
 
    })

// app.listen(port, () => {
//     console.log(`server running on port ${port}`);

// });

// const app= require('express')();

// const PORT = 4000;

// app.listen(
//     PORT,
//     () => console.log(`server is running on ${PORT}`)
    
// );

// app.get('/getRequest', (req,res)=>{
//     res.send('Hello this is GET METHOD')
// }
// );

// app.post ('/postRequest',(req,res) =>{
//     res.send('Hello this is POST METHOD')
// });

// app.post('/userpost', async (req, res) => {
//     try{
//         const { name, email, age } = req.body;
//         const newUser = await userModel.create({ name, email, age });
//         res.status(201).json(newUser);
//     }catch (error) {
//         res.status(400).json({ error:error.message })
//     }
    
// });

// app.get('/userget', async (req, res) => {
//     try{
//         const users = await userModel.find();
//         res.json(users);
//     } catch (error) {
//         res.status(500).json({ error: error.message })
//     }
// });

// //update get

// app.get('/data/:id',async (req, res)=>{
//     try {
//         const { id } = req.params;
//         const user = await userModel.findById(id);
//         if (!user) {
//             return res.status(404).json({ message: 'User not found'})
//         }
//         res.status(200).json(user);
//     }catch (error){
//         res.status(400).json({ error: error.message})
//     }
// });

// //put request to update a user by id
// app.put('/user/:id',async (req, res)=> {
//   try {
//     const { id } = req.params;
//     const { name,email,age}= req.body;
//     const updatedUser = await userModel.findByIdAndUpdate(id,{name,email,age},{new:true})
//     if (!updatedUser){
//         return res.status(404).json({message:'User not found'});

//     }
//     res.status(200).json(updatedUser);
//   }catch (error){
//     res.status(400).json({ error:error.message})
//   };
// });

// //delete
// app.delete('/user/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deletedUser = await userModel.findByIdAndDelete(id);

//         if (!deletedUser) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         res.status(200).json({ message: 'User deleted successfully', deletedUser });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

const userRoutes= require('./Routes/userRoutes.js')
app.use('/api/models/user',userRoutes)
app.use('/api/models/user/:id',userRoutes)

app.listen(port, () => {
    console.log(`server running on port ${port}`);
    
});