'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { fetchNoteById } from '@/lib/api';
import css from './NoteDetails.module.css';

const NoteDetailsClient = () => {
  const { id } = useParams<{ id: string }>();

  const { data: note, isLoading, isFetching, error } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  if (isLoading || isFetching) {
    return (
      <div className={css.container}>
        <p>Loading, please wait...</p>
      </div>
    );
  }

  if (error || !note) {
    return (
      <div className={css.container}>
        <p>Something went wrong.</p>
      </div>
    );
  }

  const formattedDate = note.updatedAt
    ? `Updated at: ${note.updatedAt}`
    : `Created at: ${note.createdAt}`;

  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
        </div>
        <p className={css.content}>{note.content}</p>
        <p className={css.date}>{formattedDate}</p>
      </div>
    </div>
  );
};

export default NoteDetailsClient;