import "./App.css";
import Main from "./page/MainPage/Main";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Outlet,
} from "react-router-dom";
import {
  Custom,
  Photo,
  Signup,
  Login,
  Nav,
  MYpage,
  PayMent,
} from "../src/page/index";
export const PROXY = process.env.REACT_APP_PROXY;

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/custom" element={<Custom />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/mypage" element={<MYpage />} />
        <Route path="/payment" element={<PayMent />} />
      </Routes>
    </div>
  );
}

export default App;
