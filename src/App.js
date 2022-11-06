import "./App.css";
import Header from "./components/header/Header";
import Navigation from "./components/Footer/Navigation";
import { useState } from "react";
import Card from "./components/Cards/Cards";

function App() {
  const [page, setPage] = useState("");
  return (
    <div className="App">
      <Header />
      <main className="app_main">
        <Card />
        <Card />
        <Card />
      </main>
      <Navigation page={page} setPage={setPage} />
    </div>
  );
}

export default App;
