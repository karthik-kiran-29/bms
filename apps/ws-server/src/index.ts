import {WebSocketServer} from "ws";
import client from "@repo/db/client"

const prisma = new client.PrismaClient();

const server = new WebSocketServer({
    port:3001
});

server.on("connection",async (socket)=>{
    await prisma.user.create({data:{username:Math.random().toString(),password:Math.random().toString()}});

    socket.send("created new data")
})