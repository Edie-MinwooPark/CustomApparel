import "./App.css";
import { Route, Routes } from "react-router-dom";
import PostList from "./page/POSTLISTpage/PostList";
import PostInsert from "./page/POSTINSERTpage/PostInsert";

function App() {
  return (
    <Routes>
      <Route path="/postlist" element={<PostList />} />
      <Route path="/postinsert" element={<PostInsert />} />
    </Routes>
  );
}

export default App;
