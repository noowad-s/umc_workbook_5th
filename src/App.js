import React from 'react';
import Header from './Components/Header'; // Header 컴포넌트 import
import TV from './pages/TV'; 
import Celebrity from './pages/Celebrity'; 
import Movies from './pages/Movies'; 
import Home from './pages/Home'; 
import NotFound from './pages/NotFound';
import Login from './pages/Login';
// import Login2 from './pages/Login2'
import MovieDetail from './pages/MovieDetail';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Movies" element={<Movies/>} />
          <Route path="/TV" element={<TV/>} />
          <Route path="/Celebrity" element={<Celebrity/>} />
          <Route path="/Login" element={<Login/>} />
          {/* <Route path="/Login2" element={<Login2/>} /> */}
          <Route path="/*" element={<NotFound/>} />
          <Route path="/movie/:title" element={<MovieDetail/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
