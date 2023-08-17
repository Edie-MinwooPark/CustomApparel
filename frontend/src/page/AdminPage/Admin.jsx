import React from "react";
import { AdminWrap, UserListWrap } from "./Admin.styled";
import { Nav } from "../../page";
import { useQuery } from "react-query";
import axios from "axios";

const PROXY = process.env.REACT_APP_PROXY;

const Admin = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      return await axios.get(`${PROXY}/admin`);
    },
  });

  if (isLoading) return <div>Loading ...</div>;
  // console.log(data.data);
  return (
    <div>
      <Nav />
      <AdminWrap>
        <div className="AdminBody">
          <div>
            <h2>User Management ({data.data.length})</h2>
          </div>
          <div className="AdminContainer">
            {/*  */}
            <div className="AdminMenuBox">
              <div className="AdminMenuTitle">
                <span>Menu</span>
              </div>
              <div className="AdminMenuBody">
                <span>UserInfo</span>
                <ul>
                  <li>View All Users</li>
                  <li>Unsubscribed</li>
                  <li>subscribers</li>
                </ul>
              </div>
            </div>

            {/*  */}
            <div className="AdminUserList">
              <div className="titleBox">
                <div className="titleName">
                  <span>아이디(닉네임)</span>
                </div>
                <div className="titleState">
                  <span>상태</span>
                </div>
                <div className="titleCreate">
                  <span>가입일</span>
                </div>
                <div className="titleManagement">
                  <span>관리</span>
                </div>
              </div>
              {data &&
                data.data.map((e, index) => (
                  <UserListWrap key={index}>
                    <div className="listName">
                      <div className="profile_img">
                        <img src={`${PROXY}/` + e.profile_img} alt="" />
                        <span>{e.user_id}</span>
                        <span>{`(${e.Nick})`}</span>
                      </div>
                    </div>
                    <div className="listState">
                      <span>{e.Accept ? "가입승인" : "가입대기"}</span>
                    </div>
                    <div className="listCreate">
                      <span>{e.createdAt}</span>
                    </div>
                    <div className="listManagement">
                      <span>Accept</span>
                    </div>
                  </UserListWrap>
                ))}
            </div>
          </div>
        </div>
      </AdminWrap>
    </div>
  );
};

export default Admin;
