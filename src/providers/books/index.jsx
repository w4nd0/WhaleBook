import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { useAccount } from "../accounts";
import { NotificationsContext } from "../notifications";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [selfHelpBooks, setSelfHelpBooks] = useState([]);
  const [fantasyBooks, setFantasyBooks] = useState([]);
  const [adventureBooks, setAdventureBooks] = useState([]);
  const [allBooks, setAllBooks] = useState([]);
  const [searchBooks, setSearchBooks] = useState([]);
  const [userBooks, setUserBooks] = useState([]);
  const { token } = useAccount();
  const { addBookSuccess, updateBookSuccess, deleteBookSuccess } =
    useContext(NotificationsContext);

  useEffect(() => {
    api.get(`api/books/?q=null&lang=pt&maxResults=40`).then((res) => {
      setAllBooks(res.data);
    });
    api.get("api/books/?q=fantasia&lang=pt&maxResults=20").then((res) => {
      setFantasyBooks(res.data);
    });
    api.get("api/books/?q=autoajuda&lang=pt&maxResults=20").then((res) => {
      setSelfHelpBooks(res.data);
    });
    api.get("api/books/?q=aventura&lang=pt&maxResults=20").then((res) => {
      setAdventureBooks(res.data);
    });
  }, []);

  
  const getUserBooks = () => {
    api
      .get("api/user/books/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUserBooks(res.data);
      });
  };

  useEffect(() => {
    if (token) {
      getUserBooks();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const lookBooks = (value) => {
    api.get(`api/books/?q=${value}&maxResults=20`).then((res) => {
      setSearchBooks(res.data);
    });
  };

  const getUserBooksById = (book_id) => {
    api
      .get(`api/user/books/${book_id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setSearchBooks(res.data);
      });
  };

  const updateUserBooks = (data, book_id) => {
    api
      .patch(`api/user/books/${book_id}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        updateBookSuccess();
        getUserBooks();
      });
  };

  const deleteUserBooks = (book_id) => {
    api
      .delete(`api/user/books/${book_id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        deleteBookSuccess();
        getUserBooks();
      });
  };

  const addUserBook = (book_url, image_url, title, total_pages) => {
    let data = {
      book_url: book_url,
      image_url: image_url,
      title: title,
      total_pages: total_pages,
    };
    api
      .post("api/user/books/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        addBookSuccess();
        getUserBooks();
      });
  };

  return (
    <BooksContext.Provider
      value={{
        addUserBook,
        deleteUserBooks,
        updateUserBooks,
        getUserBooksById,
        selfHelpBooks,
        fantasyBooks,
        adventureBooks,
        allBooks,
        lookBooks,
        userBooks,
        searchBooks,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export const useBooks = () => useContext(BooksContext);
