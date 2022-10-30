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
        <footer className="text-center">Coded by Tania Slotvinska</footer>
      </div>
    </div>
  );
}
