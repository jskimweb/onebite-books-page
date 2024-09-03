import SearchableLayout from "@/components/SearchableLayout";
import { ReactNode, useEffect, useState } from "react";
import BookItem from "@/components/BookItem";
import fetchBooks from "@/lib/fetch-books";
import { useRouter } from "next/router";
import type { BookData } from "@/types/index";

export default function Page() {
  const [books, setBooks] = useState<BookData[]>([]);

  const router = useRouter();
  const { q } = router.query;

  const fetchSearchResults = async () => {
    const data = await fetchBooks(q as string);
    setBooks(data);
  };

  useEffect(() => {
    if (q) {
      fetchSearchResults();
    }
  }, [q]);

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
