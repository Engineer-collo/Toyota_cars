import React, { useEffect, useState } from "react";

const Admin = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/admin/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  return (
    <div>
      <h2>Admin Panel - Messages</h2>
      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>
              <strong>{msg.name}</strong> ({msg.email}) <br />
              {msg.message} <br />
              <small>{new Date(msg.timestamp).toLocaleString()}</small>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Admin;
