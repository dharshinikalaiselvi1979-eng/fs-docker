import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = async () => {
    await fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "Test User",
        email: "test@mail.com"
      })
    });
    fetchUsers();
  };

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:5000/users");
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>MERN dfgrtyhjklDocker App</h1>
      <button onClick={addUser}>Add User</button>
      <ul>
        {users.map((u, i) => (
          <li key={i}>{u.name} - {u.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;