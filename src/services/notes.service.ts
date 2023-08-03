import { Request, Response } from "express";
import { extractDates } from "../helpers/extractDates.js";
import { getStatsData } from "../helpers/getSummaryData.js";
import notesRepository from "../repositories/notes.repository.js";

interface newNotePayload {
  name: string;
  category: "Task" | "Idea" | "Random Thought";
  content: string;
}

const getNotes = (req: Request, res: Response) => {
  try {
    const notes = notesRepository.getNotes();
    return res.status(200).json(notes);
  } catch (error: unknown) {
    if (error instanceof Error) return res.status(404).send(error.message);
    return res.sendStatus(404);
  }
};

const getNote = (req: Request, res: Response) => {
  const noteId = req.params.noteId;

  try {
    const note = notesRepository.getNote(noteId);
    return res.status(200).json(note);
  } catch (error: unknown) {
    if (error instanceof Error) return res.status(404).send(error.message);
    return res.sendStatus(404);
  }
};

const deleteNote = (req: Request, res: Response) => {
  const noteId = req.params.noteId;

  try {
    notesRepository.deleteNote(noteId);
    return res.sendStatus(200);
  } catch (error: unknown) {
    if (error instanceof Error) return res.status(404).send(error.message);
    return res.sendStatus(404);
  }
};

const getStats = (req: Request, res: Response) => {
  const notes = notesRepository.getNotes();
  const statsData = getStatsData(notes);
  return res.status(200).json(statsData);
};

const updateNote = (req: Request, res: Response) => {
  const noteId = req.params.noteId;
  const payload = req.body;

  try {
    const updatedNote = notesRepository.updateNote(noteId, payload);
    return res.status(200).json(updatedNote);
  } catch (error: unknown) {
    if (error instanceof Error) return res.status(404).send(error.message);
    return res.sendStatus(404);
  }
};

const addNote = (req: Request, res: Response) => {
  const payload: newNotePayload = req.body;

  const newNote = {
    createdOn: new Date(),
    dates: extractDates(payload.content),
    archived: false,
    ...payload,
  };

  const addedNote = notesRepository.addNote(newNote);
  return res.status(200).json(addedNote);
};

export { addNote, deleteNote, getNote, getNotes, getStats, updateNote };
