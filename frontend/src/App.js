import "./App.css";
import Main from "./page/MainPage/Main";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Outlet,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query"; //axios react query 쓸때 사용
import Canvas from "./Canvas";
import {
  Custom,
  Photo,
  Signup,
  Login,
  Nav,
  MYpage,
  PostList,
  PostInsert,
  PayMent,
  PostDetail,
  TestComponent,
  Cartp,
  PayMentDetail,
} from "../src/page/index";

export const PROXY = process.env.REACT_APP_PROXY;
const queryClient = new QueryClient(); //axios react query 쓸때 사용

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/custom" element={<Custom />} />
          <Route path="/photo" element={<PostList />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/nav" element={<Nav />} />
          <Route path="/mypage" element={<MYpage />} />
          <Route path="/payment" element={<PayMent />} />
          <Route path="/canvas" element={<Canvas />} />
          <Route path="/cartp" element={<Cartp />} />
          <Route path="/paymentdetail" element={<PayMentDetail />} />
          <Route path="/postinsert" element={<PostInsert />} />
          <Route path="/posts/:postId" element={<PostDetail />} />
          <Route path="/test" element={<TestComponent />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
};

export default App;
