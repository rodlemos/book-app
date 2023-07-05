import { BookDTO } from "../DTOs/bookDTO";

type ApiData = Pick<BookDTO, "key" | "authors" | "cover" | "title">;
type MyData = Pick<BookDTO, "resume" | "genres" | "price" | "rate">;

export function mergeBooksData(apiData: ApiData, myData: MyData[]) {
  const apiBookList = extractObjectValues(apiData);

  const mergedBooksData = apiBookList.map((obj: ApiData, index) => ({
    key: obj.key,
    title: obj.title,
    authors: obj.authors,
    cover: obj.cover,
    ...myData[index],
  }));

  return mergedBooksData;
}

function extractObjectValues(obj: Object) {
  return Object.values(obj);
}
