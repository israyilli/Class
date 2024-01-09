const express = require("express");
const { createServer } = require("node:http");

const { Server } = require("socket.io");
const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  socket.on("message", (message) => {
    console.log(message, socket.id);
    io.emit("message", message);
  });
});

server.listen(5000, () => {
  console.log(`Example app listening on port`);
});
//////////////////////////////////////

// const express = require("express");
// const { createServer } = require("node:http");
// const { Server } = require("socket.io");

// const app = express();
// const server = createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: "*",
//   },
// });

// io.on("connection", (socket) => {
//   console.log("A user connected:", socket.id);
//   socket.on("message", (message, roomName) => {
//     console.log(message, roomName, socket.id);
//     io.emit("message", message);
//   });
// });

// server.listen(5000, () => {
//   console.log("server running at http://localhost:5000");
// });

// {/* <div
// style={{
//   width: "400px",
//   height: "700px",
//   border: "1px solid",
//   backgroundColor: "#FBF1E5",
// }}
// >
// <div
//   style={{
//     width: "400px",
//     // border: "1px solid ",
//     height: "100px",
//     backgroundColor: "lightblue",
//   }}
// >
//   <div
//     style={{
//       width: "70px",
//       height: "70px",
//       padding: "10px",
//       borderRadius: "50%",
//       display: "flex",
//       gap: "25px",
//     }}
//   >
//     <img
//       src="https://i0.wp.com/nenow.in/wp-content/uploads/2020/04/Pit-viper.jpg?fit=930%2C523&ssl=1"
//       alt=""
//       style={{ width: "70px", height: "70px", borderRadius: "50%" }}
//     />
//     <h3>SNAKE</h3>
//   </div>
// </div>
// <div
//   style={{
//     width: "400px",
//     height: "500px",
//     // border: "1px solid",
//     backgroundColor: "#FBF1E5",
//   }}
// >
//   <div></div>
// </div>
// {/* <div
//   style={{
//     width: "400px",
//     height: "70px",
//     border: "1px solid",
//     backgroundColor: "#lightblue",
//     // paddingBottom: "300px",
//     paddingTop: "100px",
//   }}
// >
// </div> */}
// <form action="">
//   <input
//     type="text"
//     placeholder="yazz"
//     style={{ width: "395px", height: "70px", marginTop: "27px" }}
//   />
//   {/* <button>Send</button> */}
// </form>
// </div> */}
