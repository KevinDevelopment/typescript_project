import express from "express";
import { router } from "../routes/routes";
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(router);

const PORT: number = 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});