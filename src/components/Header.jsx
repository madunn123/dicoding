import { useContext } from 'react';
import NoteContext from '../contexts/NoteContext';

export default function Header() {
  const { searchNote, keyword } = useContext(NoteContext);
  return (
    <header className="bg-[#0F4C75] flex flex-row py-5 sticky top-0 z-50 shadow-lg text-white px-4 justify-between items-center w-full">
      <h1 className="text-xl uppercase font-semibold">
        <a href="/">
          simple todolist
        </a>
      </h1>
      <div className="">
        <input type="text" className="bg-[#3282B8] py-2 placeholder:text-white hover:border-2 hover:border-gray-600 duration-500 px-3 focus:outline-none rounded-md" placeholder="Search" value={keyword} onChange={(e) => searchNote(e.target.value)} />
      </div>
    </header>
  );
}
