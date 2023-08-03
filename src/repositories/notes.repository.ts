import { v4 as uuidv4 } from "uuid";

export interface Note {
  id: string;
  name: string;
  createdOn: Date;
  category: "Task" | "Idea" | "Random Thought";
  content: string;
  dates: string[];
  archived: boolean;
}

interface updatePayload {
  name?: string;
  category?: "Task" | "Idea" | "Random Thought";
  content?: string;
  archived?: boolean;
}

const getNotes = (): Note[] => notes;

const getNote = (noteId: string) => {
  const noteIndex = notes.findIndex((note) => note.id === noteId);
  if (noteIndex === -1) throw new Error(`Note ${noteId} not found`);
  const note = notes[noteIndex];
  return note;
};

const deleteNote = (noteId: string): Note[] => {
  const noteIndex = notes.findIndex((note) => note.id === noteId);

  if (noteIndex === -1) throw new Error(`Note ${noteId} not found`);
  notes.splice(noteIndex);
  return notes;
};

const addNote = (note: Omit<Note, "id">): Note => {
  const newNote = { id: uuidv4(), ...note };
  notes.push(newNote);
  return newNote;
};

const updateNote = (noteId: string, payload: updatePayload): Note => {
  const noteIndex = notes.findIndex((note) => note.id === noteId);
  if (noteIndex === -1) throw new Error(`Note ${noteId} not found`);

  notes[noteIndex] = {
    ...notes[noteIndex],
    ...payload,
  };

  return notes[noteIndex];
};

export default { getNotes, addNote, deleteNote, getNote, updateNote };

const notes: Note[] = [
  {
    id: uuidv4(),
    name: "Shopping List",
    createdOn: new Date(2023, 7, 25),
    category: "Task",
    content: "Tomatoes, bread",
    dates: [],
    archived: true,
  },
  {
    id: uuidv4(),
    name: "Grocery List",
    createdOn: new Date(2023, 6, 25),
    category: "Task",
    content: "Milk, eggs, butter, 07/26/2023, 07/27/2023",
    dates: ["26/07/2023", "27/07/2023"],
    archived: false,
  },
  {
    id: uuidv4(),
    name: "Meeting Schedule",
    createdOn: new Date(2023, 6, 25),
    category: "Idea",
    content: "Team meeting, 08/02/2023, 08/16/2023, 08/30/2023",
    dates: ["02/08/2023", "16/08/2023", "30/08/2023"],
    archived: false,
  },
  {
    id: uuidv4(),
    name: "Birthday Party Planning",
    createdOn: new Date(2023, 6, 25),
    category: "Idea",
    content: "Buy decorations, cake, 09/10/2023",
    dates: ["10/09/2023"],
    archived: false,
  },
  {
    id: uuidv4(),
    name: "Project Milestones",
    createdOn: new Date(2023, 6, 25),
    category: "Idea",
    content: "Project kickoff, 11/01/2023, 11/15/2023, 11/30/2023",
    dates: ["01/11/2023", "15/11/2023", "30/11/2023"],
    archived: false,
  },
  {
    id: uuidv4(),
    name: "Vacation Planning",
    createdOn: new Date(2023, 6, 25),
    category: "Random Thought",
    content: "Book flights, 12/05/2023, 12/15/2023",
    dates: ["05/12/2023", "15/12/2023"],
    archived: false,
  },
  {
    id: uuidv4(),
    name: "Study Schedule",
    createdOn: new Date(2023, 6, 25),
    category: "Random Thought",
    content: "Study for exams, 01/20/2023, 01/25/2023",
    dates: ["20/01/2023", "25/01/2023"],
    archived: false,
  },
];
