import React ,{ useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Form.css"


function Form1() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, age };
    axios.post("http://localhost:1400/api/models/user", formData)
      .then(response => {
        console.log("response:", response);
      })
      .catch(error => {
        console.log("error:", error);
      });
  };

  const handleView = () => {
    navigate("/get");
  };

  return (
    <div className='main'>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />

        <label>Email ID:</label>
        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Age:</label>
        <input type='number' value={age} onChange={(e) => setAge(e.target.value)} />
        
        <br />
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleView}>View</button>
    </div>
  );
}

export default Form1;