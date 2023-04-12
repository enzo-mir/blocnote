const express = require("express");
const cors = require("cors");

let app = express();
app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
    console.log(req.body);
})

app.listen(7000, () => {
    console.log("connected");
})
