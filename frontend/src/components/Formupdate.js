import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Formupdate() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:1400/api/models/user/${id}`)
        .then(response => {
          const userData = response.data;
          setName(userData.name);
          setEmail(userData.email);
          setAge(userData.age);
        })
        .catch(error => {
          console.error("Error fetching user data:", error.response ? error.response.data : error.message);
        });
    } else {
      console.error('ID is not available');
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !age) {
      alert('All fields are required!');
      return;
    }

    const formData = { name, email, age };

    axios.put(`http://localhost:1400/api/models/user/${id}`, formData) // Ensure the URL is correct
      .then(response => {
        console.log('Updated successfully', response.data);
        navigate("/get");
      })
      .catch(error => {
        console.error('Error updating user:', error.response ? error.response.data : error.message);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Email ID:</label>
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Age:</label>
        <input type='number' value={age} onChange={(e) => setAge(e.target.value)} required />
        
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Formupdate;






// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';

// function Formupdate() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [age, setAge] = useState('');
//   const { id } = useParams(); // Destructure id from useParams
//   const navigate = useNavigate();

//   useEffect(() => {
//     console.log('ID from URL:', id);
//     if (id) {
//       axios.get(`http://localhost:1400/data/${id}`)
//         .then(response => {
//           const userData = response.data;
//           setName(userData.name);
//           setEmail(userData.email);
//           setAge(userData.age);
//         })
//         .catch(error => {
//           console.log("error fetching user data:", error.response ? error.response.data : error.message);
//         });
//     } else {
//       console.error('ID is not available');
//     }
//   }, [id]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = { name, email, age };

//     axios.put(`https://localhost:1400/user/${id}`, formData) // Fixed URL
//       .then(response => {
//         console.log('Updated successfully', response.data);
//         navigate("/get");
//       })
//       .catch(error => {
//         console.error('Error updating user', error.response ? error.response.data : error.message); // Fixed error handling
//       });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>Name:</label>
//         <input type='text' value={name} onChange={(e) => setName(e.target.value)} />

//         <label>Email ID:</label>
//         <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />

//         <label>Age:</label>
//         <input type='number' value={age} onChange={(e) => setAge(e.target.value)} />
        
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Formupdate
// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import {useParams,useNavigate} from 'react-router-dom';

// function Formupdate() {
//   const [name,setName]=useState(' ');
//   const [emailid,setEmail]=useState(' ');
//   const [age,setAge]=useState(' ');
//   const{id}=useParams();  //Get the ID from the URL
//   const navigate=useNavigate();
//   useEffect(()=>{
//     console.log("ID from URL",id); //Log to the ID to ensure its correct
//     if(id){
//       axios.get(`http://localhost:1300/data${id}`)
//       .then(response=>{
//         const userData=response.data;
//         setName(userData.name);
//         setEmailid(userData.email);
//         setAge(userData.age);
//       })
//       .catch(error=>{
//         console.error('Error fetching user data',error.response?error.response.data:error.message);
//       });
//     }else{
//       console.error("ID is not available");
      
//     }
    
//   },[id]);
//   const handleSubmit=(e)=>{
//     e.preventDefault();
//     const formData={name,email,age};
//     axios.put(`http://localhost:1300/user/${id},formData`)
//     .then(response=>{
//       console.log('Updated succesfully:',response.data);
//       navigate('/get'); 
//     })
//     .catch(error=>{
//       console.error('Error updating user:',error.response ? error.response.data : error.message);
      
//     });
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>Name:</label>
//         <input 
//         type='text'
//         value={name}
//         onChange={(e)=>setName(e.target.value)}/><br/>
//         <label>Emailid:</label>
//         <input 
//         type='emailid'
//         value={email}
//         onChange={(e)=>setEmail(e.target.value)}/><br/>
//         <label>Age:</label>
//         <input 
//         type='number'
//         value={age}
//         onChange={(e)=>setAge(e.target.value)}/><br/>
//          <button>Update</button>
//       </form>
//     </div>
//   );
// }

// export default Formupdate;




