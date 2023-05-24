import { ReactNode, createContext, useContext, useState } from "react";
import { BookDTO } from "../DTOs/bookDTO";
import Toast from "react-native-toast-message";

interface BookContextData {
  saved: BookDTO[];
  basketBooks: BookDTO[];
  handleSaveBookToggle: (book: BookDTO) => void;
  handleUnsaveBook: (key: string) => void;
  handleClearSaved: () => void;
  handleAddToBasket: (book: BookDTO) => void;
  handleRemoveFromBasket: (key: string) => void;
  handleClearBasket: () => void;
}

interface BookProviderProps {
  children: ReactNode;
}

const BookContext = createContext<BookContextData>({} as BookContextData);

function BookProvider({ children }: BookProviderProps) {
  const [saved, setSaved] = useState<BookDTO[]>([]);
  const [basketBooks, setBasketBooks] = useState<BookDTO[]>([]);

  function handleSaveBookToggle(book: BookDTO) {
    const alreadySaved = saved.find((item) => item.key === book.key);
    if (alreadySaved) {
      const newList = saved.filter((item) => item.key !== alreadySaved.key);
      setSaved(newList);
      return;
    }
    setSaved((books) => [book, ...books]);
  }

  function handleUnsaveBook(key: string) {
    const newList = saved.filter((item) => item.key !== key);
    setSaved(newList);
  }

  function handleClearSaved() {
    setSaved([]);
  }

  function handleAddToBasket(book: BookDTO) {
    const alreadySaved = basketBooks.find((item) => item.key === book.key);
    if (alreadySaved) {
      return;
    }
    setBasketBooks((books) => [book, ...books]);
    Toast.show({
      type: "success",
      text1: "Book added to your Basket.",
      position: "bottom",
    });
  }

  function handleRemoveFromBasket(key: string) {
    const newList = basketBooks.filter((item) => item.key !== key);
    setBasketBooks(newList);
  }

  function handleClearBasket() {
    setBasketBooks([]);
  }

  return (
    <BookContext.Provider
      value={{
        saved,
        basketBooks,
        handleSaveBookToggle,
        handleUnsaveBook,
        handleClearSaved,
        handleAddToBasket,
        handleRemoveFromBasket,
        handleClearBasket,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

function useBooks() {
  const context = useContext(BookContext);
  return context;
}

export { BookProvider, useBooks };
