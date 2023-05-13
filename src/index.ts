import express from "express";
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const PORT: number = 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});