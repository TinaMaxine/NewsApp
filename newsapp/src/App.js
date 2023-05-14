import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [next, setNext] = useState(false);

  useEffect(() => {
    axios.get("https://randomuser.me/api/").then((res) => {
      console.log(res.data.results);
      setUsers(res.data.results);
    });
  }, [next]);

  const handleNext = () => {
    setNext(!next);
  };

  return (
    <div>
      <header>
        <h1>User Data</h1>
      </header>
      <main>
        <div className="card-container">
          {users.map((user, index) => (
            <div key={index} className="card">
              <h2>{user.name.first} {user.name.last}</h2>
              <p>{user.email}</p>
              <p>{user.gender}</p>
              <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
            </div>
          ))}
        </div>
        <button onClick={handleNext}>Next</button>
      </main>
      <footer>
        <p>created by Anjani</p>
      </footer>
    </div>
  );
}

export default App;
