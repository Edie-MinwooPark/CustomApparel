import "./App.css";
import Main from "./page/MainPage/Main";
import { Route, Routes, BrowserRouter as Router, Outlet } from 'react-router-dom';
import { Custom, Photo, Signup, Login, Nav } from "../src/page/index"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/custom' element={<Custom />} />
        
        <Route path='/photo' element={<Photo />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/nav' element={<Nav />} />

      </Routes>
      

    </div>
  );
}

export default App;
