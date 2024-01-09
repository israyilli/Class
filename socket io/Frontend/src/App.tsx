import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [room, setRoom] = useState(0);
  const [socket, setSocket] = useState(undefined);

  const [inbox, setInbox] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const handleSendMessage = () => {
    console.log("message", message, room);
    socket.emit("message", message, room);
  };

  useEffect(() => {
    const socket = io("http://localhost:5000/");

    socket.on("message", (message) => {
      setInbox([...inbox, message]);
    });

    setSocket(socket);
  }, [inbox]);

  return (
    <>
      <div
        style={{
          width: "400px",
          height: "700px",
          border: "1px solid black",
          backgroundColor: "lightblue",
        }}
      >
        <div
          style={{
            width: "400px",
            height: "100px",
            border: "1px solid black",
            // backgroundColor: "",
          }}
        >
          <div style={{ display: "flex", margin: "17px", gap: "10px" }}>
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              style={{ width: "70px", height: "70px", borderRadius: "50%" }}
            />
            <h2>laman</h2>
          </div>
        </div>
        <div
          style={{
            width: "400px",
            height: "595px",
            border: "1px solid black",
            backgroundColor: "lightblue",
          }}
        >
          <ul style={{ textDecoration: "none" }}>
            {inbox &&
              inbox.map((elem, i) => {
                return (
                  <li
                    className={i % 2 === 0 ? "left-element" : "right-element"}
                    key={i}
                    style={{
                      width: "200px",
                      height: "30px",
                      border: "1px solid ",
                      // listStyle: "none",
                      backgroundColor: "white",
                      margin: "20px",
                      borderRadius: "10px",
                      top: `${i * 40}px`,
                    }}
                  >
                    {elem}
                  </li>
                );
              })}
          </ul>
        </div>
        <div
          style={{
            width: "400px",
            height: "100px",
            border: "1px solid black",
            backgroundColor: "lightblue",
          }}
        >
          <div>
            <input
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              style={{ height: "40px", width: "300px", borderRadius: "10px" }}
            />
            <button onClick={handleSendMessage} style={{ width: "80px" }}>
              Send
            </button>
          </div>
          <div>
            <input
              onChange={(e) => setRoom(e.target.value)}
              type="text"
              style={{ height: "40px", width: "300px", borderRadius: "10px" }}
              
            />
            <button style={{ width: "80px" }}>Room</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
