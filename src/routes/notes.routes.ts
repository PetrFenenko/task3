import express from "express";
import createNoteSchema from "../helpers/schemas/createNote.schema.js";
import updateNoteSchema from "../helpers/schemas/updateNote.schema.js";
import {
  addNote,
  deleteNote,
  getNote,
  getNotes,
  getStats,
  updateNote,
} from "../services/notes.service.js";
import validate from "../services/validateRequest.js";

const notesRouter = express.Router();

notesRouter.get("/", getNotes);

notesRouter.get("/stats", getStats);

notesRouter.get("/:noteId", getNote);

notesRouter.delete("/:noteId", deleteNote);

notesRouter.patch("/:noteId", validate(updateNoteSchema), updateNote);

notesRouter.put("/", validate(createNoteSchema), addNote);

export default notesRouter;
