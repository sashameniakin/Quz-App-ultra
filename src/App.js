import "./App.css";
import Header from "./components/header/Header";
import Navigation from "./components/Footer/Navigation";
import { useEffect, useState } from "react";
import Cards from "./pages/cards";
import { cards } from "./db";
import Profile from "./pages/profile";
import Form from "./pages/form";
import Bookmark from "./pages/bookmarks";
import { AppContextProvider } from "./context/app-context";

function App() {
  const [newCards, setNewCards] = useState(() => {
    const localData = JSON.parse(localStorage.getItem("bookmarked"));
    console.log(localData);
    return localData ?? cards;
  });

  useEffect(() => {
    localStorage.setItem("bookmarked", JSON.stringify(newCards));
  }, [newCards]);

  const toggleBookmark = (ID) => {
    setNewCards(
      newCards.map((card) => {
        if (ID === card.id) {
          return {
            ...card,
            isBookmarked: !card.isBookmarked,
          };
        } else {
          return card;
        }
      })
    );
  };
  console.log(newCards);

  const [page, setPage] = useState("home");

  function handlePage(newPage) {
    setPage(newPage);
  }

  return (
    <AppContextProvider>
      <div className="App">
        <Header />
        <main className="app__main">
          <div className="padding-top"></div>
          {page === "home" ? (
            <Cards newCards={newCards} onToggle={toggleBookmark} />
          ) : (
            ""
          )}
          {page === "bookmarks" ? <Bookmark newCards={newCards} /> : ""}
          {page === "profil" ? <Profile /> : ""}
          {page === "forma" ? <Form /> : ""}
          <div className="padding-bottom"></div>
        </main>
        <Navigation
          page={page}
          onPage={(newPage) => {
            handlePage(newPage);
          }}
        />
      </div>
    </AppContextProvider>
  );
}

export default App;
