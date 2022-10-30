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
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Tania Slotvinska | </small>{" "}
          <a href="https://github.com/Izymryda/Dictionary-Project/tree/master/dictionary-project">
            GitHub
          </a>
          <br />
          <b>
            The terrorist country Russia constantly bombards the energy
            infrastructure of my country. Sometimes we don't have electricity
            for 2-3 days. Please, I will complete my project as soon as I have
            the opportunity and electricity.
          </b>
        </footer>
      </div>
    </div>
  );
}
