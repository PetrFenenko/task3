import express from "express";
import notesRouter from "./routes/notes.routes.js";

const port = 3000;
const app = express();

app.use(express.json());

app.use("/notes", notesRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app;
