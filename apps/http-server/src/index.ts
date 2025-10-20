import express from "express";
import {client} from "@repo/db/client"

const app = express();

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hi there");
})

app.post("/signup",(req,res)=>{
    const {username,password} = req.body;

    const data = client.user.create({data:{username,password}});

    res.send(data)
})

app.listen(3000);