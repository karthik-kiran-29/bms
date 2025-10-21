import express from "express";
import  client  from "@repo/db/client";

const app = express();

const prisma = new  client.PrismaClient();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("hi there");
});

app.post("/signup", async (req, res) => {
    try {
        const { username, password } = req.body;

        const data = await prisma.user.create({
            data: { username, password }
        });

        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to create user",message: error });
    }
});

app.listen(3002, () => {
    console.log("Server running on http://localhost:3000");
});