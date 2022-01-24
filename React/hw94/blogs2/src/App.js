import './App.css';
import BlogList from './BlogList';
import Header from './Header';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <BlogList />
      <Posts />
      <Comments />
      <Routes>
        <Route index element={<BlogList></BlogList>} />
        <Route path='*' element={<Navigate to='/' replace="true" />} />
      </Routes>
    </>
  );
}

export default App;
