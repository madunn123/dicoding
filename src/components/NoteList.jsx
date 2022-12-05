import { useContext } from 'react';
import NoteContext from '../contexts/NoteContext';
import { showFormattedDate } from '../utils';

export default function NoteList({ archived = false }) {
  const {
    filteredNotes,
    deleteNote,
    archiveNote,
  } = useContext(NoteContext);

  return (
    filteredNotes(archived).length > 0
      ? (
        <div className="grid grid-cols-4 gap-10 px-4">
          {filteredNotes(archived).map((note) => (
            <div key={note.id} className="bg-[#0F4C75] relative overflow-hidden text-[#BBE1FA] shadow-2xl rounded-lg p-5 flex flex-col gap-4">
              <h4 className="uppercase text-lg font-bold text-center border-b-2 border-black pb-4">{note.title}</h4>
              <small>{showFormattedDate(note.createdAt)}</small>
              <div className="h-[200px]">
                <p className="note-body">{note.body}</p>
              </div>
              <div className="flex flex-row items-center relative z-20 justify-center gap-4">
                <button type="button" className="bg-red-800 hover:bg-red-700 duration-700 text-white py-2 capitalize font-semibold rounded-md w-[100px]" onClick={() => deleteNote(note.id)}>hapus</button>
                <button type="button" className="bg-[#1B262C] hover:bg-black duration-700 text-white py-2 capitalize font-semibold rounded-md w-[100px]" onClick={() => archiveNote(note.id)}>{archived ? 'remove' : 'simpan'}</button>
                <button type="button" className="bg-[#BBE1FA] duration-700 text-black py-2 capitalize font-semibold rounded-md w-[100px]">View</button>
              </div>

              <div className="absolute -bottom-6 -left-8">
                <div className="bg-[#BBE1FA] h-24 w-24 rounded-full" />
              </div>

              <div className="absolute -top-6 -right-8">
                <div className="bg-[#3282B8] h-24 w-24 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      )
      : (
        <p className="empty-note text-red-600 px-4">Tidak ada catatan</p>
      )
  );
}
