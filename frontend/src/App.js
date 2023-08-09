import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import PostList from './page/postlist/PostList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/postlist' element={<PostList/>}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
