import SearchableLayout from "@/components/SearchableLayout";
import { ReactNode } from "react";
import books from "@/mock/books.json";
import BookItem from "@/components/BookItem";

export default function Page() {
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
