import express from "express";
import cors from "cors"

const app = express();


app.use(express.json());
app.use(cors)

app.get("/", (req, res) => {
    res.send("This is the home page from the backend")
})


app.listen(4040, () => {
    console.log("Server is listening on port 4040...")
})

MERN

NEXT

