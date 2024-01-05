const express = require("express");
const app = express();
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const uploadRoute = require("./routes/upload");
const PORT = 4000;
const mongoose = require("mongoose");
require("dotenv").config();

//データベース接続
mongoose.connect(process.env.MONGOURL)
.then(() => {
	console.log("DBと接続中・・・");
})
.catch((err) => {
	console.log(err);
});

//ミドルウェアの設定
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/upload", uploadRoute);

app.get("/", (req, res) => {
	res.send("hello express");
});

// app.get("/users", (req, res) => {
// 	res.send("users express");
// });

app.listen(PORT, () => console.log("サーバーが起動しました"));

