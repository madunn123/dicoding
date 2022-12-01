import { useState } from 'react';

const useNotes = (initialNotes = []) => {
  const [notes, setNotes] = useState(initialNotes);
  const [keyword, setKeyword] = useState('');

  const addNote = (note) => {
    const newNote = {
      id: Date.now(),
      ...note,
      createdAt: new Date().toISOString(),
      archived: false,
    };
    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const archiveNote = (id) => {
    setNotes(notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          archived: !note.archived,
        };
      }
      return note;
    }));
  };

  const searchNote = (_keyword) => {
    setKeyword(_keyword);
  };

  const filteredNotes = (archived = false) => notes.filter((note) => {
    const title = note?.title?.toLowerCase();
    const keywordLowerCase = keyword?.toLowerCase();
    return note.archived === archived
     && title.includes(keywordLowerCase);
  });

  return {
    notes,
    keyword,
    addNote,
    deleteNote,
    archiveNote,
    searchNote,
    filteredNotes,
  };
};

export default useNotes;
