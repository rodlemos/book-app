import { BookDTO } from "../DTOs/bookDTO";

type ApiData = Pick<BookDTO, "key" | "authors" | "cover" | "title">;
type MyData = Pick<BookDTO, "resume" | "genres" | "price" | "rate">;

export function addBookData(apiData: ApiData, myData: MyData[]) {
  const bookList = Object.values(apiData);

  const formattedBooks = bookList.map((obj: Object, index) => ({
    ...obj,
    ...myData[index],
  }));

  return formattedBooks;
}
