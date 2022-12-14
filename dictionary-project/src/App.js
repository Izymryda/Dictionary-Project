import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} alt="logo" className="App-logo img-fluid"></img>
        </header>
        <main>
          <Dictionary defaultKeyword="Sunset" />
        </main>
        <footer className="App-footer">
          <small>
            Photos provided by <a href="https://www.pexels.com">Pexels</a>
          </small>
          <br />
          <small>Coded by Tania Slotvinska | </small>{" "}
          <a href="https://github.com/Izymryda/Dictionary-Project/tree/master/dictionary-project">
            GitHub
          </a>
          <br />
          <b>
            The terrorist country Russia constantly bombards the energy
            infrastructure of my country. Sometimes we don't have electricity
            for 2-3 days. So this project is still in development due to
            constant power outages.
          </b>
        </footer>
      </div>
    </div>
  );
}
