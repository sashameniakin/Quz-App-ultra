import "./App.css";
import Header from "./components/header/Header";
import Navigation from "./components/Footer/Navigation";
import { useState } from "react";
import Cards from "./pages/cards";
import { cards } from "./db";
import Profile from "./pages/profile";
import Form from "./pages/form";
import Bookmark from "./pages/bookmarks";

function App() {
  const [page, setPage] = useState("home");

  function handlePage(newPage) {
    setPage(newPage);
  }

  return (
    <div className="App">
      <Header />
      <main className="app__main">
        <div className="padding-top"></div>
        {page === "home" ? (
          <Cards
            cards={cards}
            /*  toggleBookmark={() => {
              handleToggleBookmarked();
            }} */
          />
        ) : (
          ""
        )}
        {page === "bookmarks" ? <Bookmark /> : ""}
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
  );
}

export default App;
