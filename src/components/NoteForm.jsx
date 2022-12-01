import { useContext, useState } from 'react';
import { FaBookOpen } from 'react-icons/fa';
import NoteContext from '../contexts/NoteContext';

export default function NoteForm() {
  const { addNote } = useContext(NoteContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({
      title,
      body,
    });
    setTitle('');
    setBody('');
  };

  const onTitleChange = (e) => {
    if (e.target.value.length <= 50) {
      setTitle(e.target.value);
    } else setTitle(e.target.value.slice(0, 50));
  };

  return (
    <div className="flex flex-col gap-4 px-4 z-20">
      <h3 className="uppercase text-[#BBE1FA] flex flex-row justify-between items-center">
        Create Todo
        {' '}
        <FaBookOpen />
      </h3>
      <input type="text" className="py-2 bg-[#0F4C75] hover:border-4 text-[#BBE1FA] hover:border-blue-400 duration-500 px-3 border-2 focus:outline-none placeholder:text-base text-base border-[#BBE1FA] rounded-md" placeholder="Title" value={title} onChange={onTitleChange} />
      <textarea placeholder="Take a note..." rows={6} className="py-2 text-[#BBE1FA] bg-[#0F4C75] hover:border-4 hover:border-blue-400 duration-500 px-3 border-2 focus:outline-none placeholder:text-base text-base border-[#BBE1FA] rounded-md" value={body} onChange={(e) => setBody(e.target.value)} />
      <small className="flex flex-row justify-end text-[#BBE1FA]">
        Sisa karakter:
        {' '}
        <span>{50 - title.length}</span>
      </small>
      <button
        type="button"
        onClick={handleSubmit}
        className="bg-[#3282B8] text-white py-2.5 rounded-md shadow-lg hover:py-3 hover:bg-blue-600 hover:shadow-xl duration-700"
      >
        Buat
      </button>
    </div>
  );
}
