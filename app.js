const express = require("express");
const axios = require("axios");
const cors = require("cors");

var app = express();

app.use(cors());
app.use(express.static("build"));

app.get("/api/get-questions", function (req, res, next) {
	axios.get("https://opentdb.com/api.php?amount=1")
		.then(function (response) {
			res.json(response.data);
			console.log(response.data);
		})
		.catch(next);
});

app.get("*", function (req, resp) {
	resp.sendFile(_dirName + "/build/index.html");
});

// app.post("/login", function (req, res) {
// 	// check username & password
// 	// generate token
// 	// res.json({jwt: token});
// });

const port = process.env.PORT || 8081;
app.listen(port);
console.log(`listening on ${port}`);