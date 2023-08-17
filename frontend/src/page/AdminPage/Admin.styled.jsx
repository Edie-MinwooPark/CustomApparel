import styled from "styled-components";

export const AdminWrap = styled.div`
  max-width: 1240px;
  height: 100%;
  margin: 0 auto;
  & .AdminBody {
    margin: 0 30px;
    width: 100%;
  }
  & .AdminBody h2 {
  }
  & .AdminBody span {
  }
  & .AdminContainer {
    display: flex;
    width: 100%;
  }
  /* admin menu */
  & .AdminMenuBox {
    width: 20%;
    height: 200px;
    margin: 30px 10px 30px 0;
  }
  & .AdminMenuTitle {
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    border-top: 1px solid;
    border-bottom: 1px solid;
    display: flex;
    align-items: center;
  }
  & .AdminMenuTitle span {
    font-size: 18px;
    margin-left: 10px;
  }
  & .AdminMenuBody {
    padding: 10px;
  }
  & .AdminMenuBody span {
    font-size: 14px;
  }
  & .AdminMenuBody ul {
  }
  & .AdminMenuBody ul li {
    list-style: none;
    margin: 5px 0;
  }
  /* 유저리스트 */
  & .AdminUserList {
    margin: 30px 0;
    width: 80%;
  }

  & .AdminUserList ul {
    margin-bottom: 0;
    padding-left: 0;
    display: flex;
  }
  & .titleBox {
    border: 1px solid;
    border-right: none;
    border-left: none;
    display: flex;
    margin-bottom: 20px;
  }
  & .titleName,
  .titleState,
  .titleCreate,
  .titleManagement {
    width: 25%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
  & .titleManagement {
    justify-content: center;
  }
  & .titleName span,
  .titleState span,
  .titleCreate span,
  .titleManagement span {
    font-size: 18px;
    font-weight: 500;
  }

  & .AdminUserList ul li {
    list-style: none;
  }
  & .bodyUl {
    margin: 5px 0;
  }
  & .AdminUserList ul li img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

export const UserListWrap = styled.div`
  margin-bottom: 20px;
  display: flex;
  & .listName,
  .listState,
  .listCreate,
  .listManagement {
    width: 25%;
    height: 40px;
  }
  & .listName .profile_img {
    width: 100px;
  }
  & .listName .profile_img img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  & .listName .profile_img span {
    font-size: 18px;
    margin-left: 10px;
  }
  & .listState span,
  .listCreate span,
  .listManagement span {
    font-size: 16px;
    font-weight: 400;
  }
`;
