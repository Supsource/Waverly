import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config({ path: "./.env" });
const app = express();


app.use(cors({
    origin: [process.env.CLIENT_URL],
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});