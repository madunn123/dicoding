import useNotes from './hooks/useNotes';
import { getInitialData } from './utils';
import { NoteProvider } from './contexts/NoteContext';
import NoteList from './components/NoteList';
import Header from './components/Header';
import NoteForm from './components/NoteForm';

function App() {
  const notesValue = useNotes(getInitialData());

  return (
    <NoteProvider value={notesValue}>
      <div className="flex flex-col">
        <Header />
        <main className="flex pt-20 flex-col gap-20 relative overflow-hidden px-10">
          <div className="absolute -top-10 left-0">
            <div className="bg-[#3282B8] w-24 h-24 rounded-full" />
          </div>

          <div className="absolute top-20 left-20">
            <div className="bg-[#3282B8] w-24 h-24 rounded-full" />
          </div>

          <div className="absolute -top-10 right-0">
            <div className="bg-[#3282B8] w-24 h-24 rounded-full" />
          </div>

          <div className="absolute top-20 right-20">
            <div className="bg-[#3282B8] w-24 h-24 rounded-full" />
          </div>

          <NoteForm />
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold px-4 text-[#BBE1FA] uppercase font-semibold">News Todo</h3>
            <NoteList />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold px-4 text-[#BBE1FA] uppercase font-semibold">todo yang telah di simpan</h3>
            <NoteList archived />
          </div>
        </main>
      </div>
    </NoteProvider>
  );
}

export default App;
