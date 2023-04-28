require("dotenv").config();
var path = require("path");
var express = require("express");
var fileupload = require("express-fileupload");

const app = express();
app.use(express.json());
app.use(fileupload());
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// const mongoose = require("mongoose");
// mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`);

// const userRoute = require("./routes/userRoute");
// const tagRoute = require("./routes/tagRoute");
// const categoryRoute = require("./routes/categoryRoute");
// const postRoute = require("./routes/postRoute");
// const commentRouter = require("./routes/commentRoute");

app.get("/",(req,res,next)=>{
  res.json({msg:"hello world"})
})
// app.use("/users", userRoute);
// app.use("/tags",tagRoute);
// app.use("/category", categoryRoute);
// app.use("/posts", postRoute);
// app.use("/comments",commentRouter);

// app.use((err, req, res, next) => {
//   err.status = err.status || 200;
//   res.status(err.status).json({
//     cons: false,
//     msg: err.message,
//   });
// });
// app.get("*", (req, res, next) => {
//   res.send({ msg: "404 not found" });
// });

app.listen(
  process.env.PORT,
  console.log(`server is running at port ${process.env.PORT}`)
);
