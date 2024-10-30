import axios from 'axios';
import React, { useEffect, useState } from 'react'

function DisplayUserData() {
    const[users,setUsers]=useState([]);
    const[message,setMessage]=useState('');

    useEffect(() => {
        const fetchUsers = async ()=>{
            try{
                const response = await axios.get('/api/users');
                setUsers(response.data);
            }catch(error){
                setMessage('Error fetching user data!')
            }

        }
        fetchUsers()
        },[])

    
  return (
    <div>
        <h1>Display User Data</h1>
        {message ?(
            <p>{message}</p>
        ):(
            <ul>
                {users.map((user)=>(
                    <li key={user._id}>
                        <p>Name:{user.name}</p>
                        <p>Email:{user.email}</p>
                    </li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default DisplayUserData