import SearchableLayout from "@/components/SearchableLayout";
import { ReactNode, useEffect, useState } from "react";
import BookItem from "@/components/BookItem";
import fetchBooks from "@/lib/fetch-books";
import { useRouter } from "next/router";
import type { BookData } from "@/types/index";
import Head from "next/head";

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
    <>
      <Head>
        <title>한입북스 - 검색결과</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="한입북스 - 검색결과" />
        <meta
          property="og:description"
          content="한입 북스에 등록된 도서들을 만나보세요."
        />
      </Head>
      <div>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </div>
    </>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
