import SearchableLayout from "@/components/SearchableLayout";
import { type ReactNode } from "react";

export default function Home() {
  return <>Home</>;
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
