import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

export default async function NotesPage() {
  const queryClient = new QueryClient();

  const params = {
    search: "",
    page: 1,
    sortBy: "created" as const,
  };

  const response = await fetchNotes(params);
console.log(response);

  queryClient.setQueryData(
    ["notes", params.search, params.sortBy, params.page],
    response
  );

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <NotesClient initialParams={params} />
    </HydrationBoundary>
  );
}