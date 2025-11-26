
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notes page",
};

import { getNotes } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";


const Notes = async () => {
  const response = await getNotes();
 console.log(response);
 
  return <div>
    <section>
      <h1>Notes List</h1>
      {response?.notes?.length > 0 && <NoteList notes={response.notes} />}
    </section></div>;
}

export default Notes;