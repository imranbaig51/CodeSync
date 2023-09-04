const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.static(__dirname));
app.use(express.static("Fonts"));
app.use(express.static("imgs"));

app.listen(PORT);
