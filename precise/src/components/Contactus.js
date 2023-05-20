import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import './contactus.css';

export default function Contactus() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://randomuser.me/api/").then((res) => {
          console.log(res.data.results);
          setUsers(res.data.results);
          
        });
      },[]);
    return (
      <div>
          <div className="card-container">
              {users.map((user, index) => (
              <div key={index} className="card">
                  <h2>
                      {user.name.first} {user.name.last}
                  </h2>
                  <p>{user.email}</p>
                  <p>{user.gender}</p>
                  <p>{user.phone}</p>
                  <p>{user.location.city}</p>
                  <p>{user.location.state}</p>
                  <p>{user.location.country}</p>
                  <img
                  src={user.picture.large}
                  alt={`${user.name.first} ${user.name.last}`}
                  />
              </div>))}
          </div>  
      </div>
    )
}
