import "./App.css";
import Main from "./page/MainPage/Main";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main />
      </BrowserRouter>

    </div>
  );
}

export default App;
