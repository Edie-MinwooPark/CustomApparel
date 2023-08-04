import React from "react";
import { MainWrap } from "../MainPage/Main.styled";
import { Route, Routes, BrowserRouter as Router, Outlet } from 'react-router-dom';
import { Custom, Photo, Signup, Login,Nav} from "../index"

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path='/custom' element={<Custom />} />
        <Route path='/photo' element={<Photo />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/nav' element={<Nav />} />
  
      </Routes>
      <Nav/>
            <MainWrap>
          <div className="mainContainer"></div>
        </MainWrap>

    </div>
  );
};

export default Main;
