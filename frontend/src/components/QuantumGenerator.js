import React, { useState, useEffect } from "react";
import axios from "axios";

const QuantumGenerator = ({ setUser }) => {
  const [count, setCount] = useState(10);
  const [bits, setBits] = useState([]);
  const [stats, setStats] = useState({});
  const [history, setHistory] = useState([]);

  const backendUrl = "http://localhost:4000/api/quantum";

  const generateBits = async () => {
    try {
      const res = await axios.post(`${backendUrl}/generate`, { count });
      const data = res.data.data;
      setBits(data.bits);
      setStats({ zeros: data.zeros, ones: data.ones, total: data.total });
      fetchHistory();
    } catch (err) {
      console.error(err);
    }
  };

  const fetchHistory = async () => {
    try {
      const res = await axios.get(`${backendUrl}/history`);
      setHistory(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteHistoryItem = async (id) => {
    try {
      await axios.delete(`${backendUrl}/delete/${id}`);
      fetchHistory();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div className="app">
      <h1>🧠 Quantum Random Number Generator</h1>
      <button className="logout" onClick={() => { localStorage.removeItem("token"); setUser(false); }}>Logout</button>

      <div className="card">
        <label>Number of bits to generate:</label>
        <input type="number" value={count} onChange={(e) => setCount(e.target.value)} min="1" max="1000" />
        <button onClick={generateBits}>Generate</button>

        {bits.length > 0 && (
          <div className="output">
            <h3>Generated Bits:</h3>
            <p>{bits.join(" ")}</p>
            <h4>Statistics:</h4>
            <p>Zeros: {stats.zeros} | Ones: {stats.ones}</p>
          </div>
        )}
      </div>

      <div className="card">
        <h3>🕒 Recent History</h3>
        {history.map((h, i) => (
          <div key={i} className="history-item">
            <p>
              <strong>{new Date(h.createdAt).toLocaleTimeString()}</strong> — {h.total} bits | 0s: {h.zeros}, 1s: {h.ones}
            </p>
            <button onClick={() => deleteHistoryItem(h._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuantumGenerator;
