import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";

const UsersTable = ({ title }) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(res.data);
  };

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="users-table__container">
      <h2>USERS</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>E-mail</th>
            <th>Phone</th>
            <th>City</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address.city}</td>
                <td>{user.company.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
