import { AuthorDTO } from "../DTOs/authorDTO";
import { BookDTO } from "../DTOs/bookDTO";

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      book: { book: BookDTO };
      basket: undefined;
      author: { author: AuthorDTO };
      explore: undefined;
      favorites: undefined;
    }
  }
}
