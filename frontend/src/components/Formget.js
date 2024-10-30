import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Formget.css";

function Formget() {
  const [users, setUsers] = useState([]);

  const Navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:1400/api/models/user")
      .then((Response) => {
        setUsers(Response.data);
      })
      .catch((Error) => {
        console.error("Error fetching user:", Error);
      });
  }, []);
  const handleupdate = (id) => {
    Navigate(`/updateget/${id}`);
  };


  const handleDelete = async (id) => {
    try {
      const Response = await axios.delete(`http://localhost:1400/api/models/user/${id}`);
      console.log("User deleted ", Response.data);
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
      // Navigate('/get')
    } catch (error) {
      console.error("Error deleting user", error);
    }
  };

  return (
    <div>
      <h2>User list</h2>
      {users.length > 0 ? (
        <div className="main">
          {users.map((user) => (
            <div key={user._id}>
              <ol>
                <li>
                  {" "}
                  <strong>name:</strong>
                  {user.name}
                  <br />
                </li>
                <li>
                  <strong>email:</strong>
                  {user.email}
                  <br />
                </li>
                <li>
                  {" "}
                  <strong>age:</strong>
                  {user.age}
                </li>
              </ol>
              <button onClick={() => handleupdate(user._id)}>update</button>
              <button onClick={() => handleDelete(user._id)}>Delete</button>
            </div>
          ))}
        </div>
      ) : (
        <p>no Users found.</p>
      )}
    </div>
  );
}

export default Formget;
