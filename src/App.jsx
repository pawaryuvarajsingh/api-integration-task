import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
const [users, setUsers] = useState([]);
const [error, setError] = useState("");
const [loading, setLoading] = useState(true);

useEffect(() => {
fetchUsers();
}, []);

const fetchUsers = async () => {
try {
const response = await fetch(
"https://jsonplaceholder.typicode.com/users"
);

  if (!response.ok) {
    throw new Error("Invalid Response");
  }

  const data = await response.json();

  if (data.length === 0) {
    throw new Error("No Data Found");
  }

  setUsers(data);
} catch (err) {
  setError(err.message);
} finally {
  setLoading(false);
}

};

if (loading) {
return <h2>Loading...</h2>;
}

if (error) {
return <h2>Error: {error}</h2>;
}

return ( <div className="container"> <h1>API Integration with Exception Handling</h1>

  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Website</th>
      </tr>
    </thead>

    <tbody>
      {users.map((user) => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>{user.website}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

);
}

export default App;

