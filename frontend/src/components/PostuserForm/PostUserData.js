import React, { useState } from 'react'

function PostUserData() {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[message,setMessage]=useState("");

    const handleSubmit =async(e)=>{
        e.preventDefault();
        try{
            const response = await axios.post('',{
                name,email,

            });
            setMessage('User data posted sucessfully!');
        }catch(error){
            setMessage('Error posting user data!');
        }
    }
  return (
    <div>
        <h1>Post User Data</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type='text' value={name}
                onChange={(e)=>setName(e.target.value)}/>
            </label>
            <br/>
            <label>
                Email:
                <input type='email' value={name}
                onChange={(e)=>setEmail(e.target.value)}/>
                </label>
                <br/>
                <button type='submit'>Post Data</button>
        </form>
        <p>{message}</p>
    </div>
  )
}

export default PostUserData