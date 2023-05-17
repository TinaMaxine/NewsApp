import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [next, setNext] = useState(false);
  const [loading, setLoading] = useState(false); // for New loading state

  useEffect(() => {
    setLoading(true); // Set loading to true before making the API call
    axios.get("https://randomuser.me/api/").then((res) => {
      console.log(res.data.results);
      setUsers(res.data.results);
      setLoading(false); // Set loading to false after receiving the data
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
        {loading ? (
          <p className="loading">Loading...</p> // Render the loading message when data is being fetched
        ) : (
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
              </div>
            ))}
          </div>
        )}
        <button onClick={handleNext}>Next</button>
      </main>
      <footer>
        <p>created by Anjani</p>
      </footer>
    </div>
  );
}

export default App;
