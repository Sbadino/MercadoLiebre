const express = require("express");
const app = express();
const path = require("path");

app.use('/css',express.static(path.resolve(__dirname, './node_modules/bootstrap/dist/css')))
app.use('/js',express.static(path.resolve(__dirname, './node_modules/bootstrap/dist/js')))
app.use('/js',express.static(path.resolve(__dirname, './node_modules/jquery/dist')))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
});

app.use(express.static(path.resolve(__dirname, './public')));

app.listen(process.env.PORT || 3050, () =>{
    console.log("Servidor corriendo");
});