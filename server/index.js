import express from "express";

const app = express();

app.listen(8800, ()=> {
    console.log("Server running at http://localhost:8800");
});