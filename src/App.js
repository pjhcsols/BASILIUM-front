import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';
import MainHome from './components/Main/MainHome'
import Header from './components/Header/header';
import ShoppingList from './components/ShoppingList/List.jsx/ShoppingList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainHome />}/>
        <Route path="/mypage" />
        <Route path="/store" element={<ShoppingList />}/>
         <Route path="/shopping" />
        <Route path="/login" />
        <Route path="/register" />
        <Route path="/shopcart" />
        <Route path="/recentshop" />
        <Route path="/purchase" />
        <Route path="/likeshop" />
        <Route path="/loading" />
        <Route path="/modeling" />
      </Routes>
    </Router>
  );
}

export default App;
