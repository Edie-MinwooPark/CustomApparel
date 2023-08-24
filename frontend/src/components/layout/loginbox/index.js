import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navdiv, NavLink } from "../../../page/NavPage/Nav.styled";

import { trylogininfo } from "../../../features/mainslice";
import {
  Body,
  Wrap,
  Header,
  Container,
  Footer,
  Menutext,
} from "./Login.styled";
import { useNavigate } from "react-router-dom";

const Loginform = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user_id, setUser_id] = useState("");
  const [user_pw, setUser_pw] = useState("");
  const userdata = useSelector((state) => state.user.data);

  const handleIdInput = (e) => {
    console.log(e.target.value);

    setUser_id(e.target.value);
  };
  const handlePwInput = (e) => {
    console.log(e.target.value);
    setUser_pw(e.target.value);
  };

  const handleSubmit = async () => {
    console.log("로그인버튼");
    dispatch(trylogininfo({ user_id, user_pw }));
  };
  useEffect(() => {
    console.log("userdata", userdata);
    if (userdata == null) {
      console.log("userdata");
    } else if (userdata.message == "로그인성공") {
      navigate("/"); // Navigate to the 'Details' screen
    }
  }, [handleSubmit]);
  return (
    <Body>
      <Wrap>
        <Header>
          <div className="headerinner">
            {" "}
            <Navdiv>
              <NavLink className="logo2" to={"/"}>
                CUSTOMAPPAREL
              </NavLink>
            </Navdiv>
          </div>
        </Header>
        <Container>
          <div className="content">
            <div className="loginwrap">
              <ul className="menuwrap">
                <li className="menuitem">
                  <a className="menuidon">
                    <Menutext>
                      <span className="before"></span>
                      <span className="text">ID 로그인</span>
                    </Menutext>
                  </a>
                </li>
              </ul>
              <div className="panelwrap">
                <div className="panelitem">
                  <div className="panelinner">
                    <div className="idpwwrap">
                      <div className="inputrow">
                        <div className="iconcell">
                          <div className="iconid">
                            <span className="blind">아이디</span>
                          </div>
                          <input
                            className="inputtext"
                            onChange={handleIdInput}
                          ></input>
                        </div>
                      </div>
                      <div className="inputrow">
                        <div className="iconcell">
                          <div className="iconpw"></div>
                          <input
                            className="inputtext"
                            onChange={handlePwInput}
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div className="btnloginwrap">
                      <button
                        className="btnlogin"
                        // onClick={() => handleSubmit()}
                        onClick={handleSubmit}
                        id="uploadBtn"
                      >
                        <span className="btntext">로그인</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Footer></Footer>
        {/* <div>
          <label htmlFor="user_id">아이디</label>
          <input onChange={handleIdInput} />
          <br />
          <label htmlFor="user_pw">비밀번호</label>
          <input onChange={handlePwInput} />
          <button onClick={() => handleSubmit()} id="uploadBtn">
            {" "}
            로그인{" "}
          </button>
        </div> */}
      </Wrap>
    </Body>
  );
};

export default Loginform;
