import './App.css';

import { 
  BrowserRouter as 
  Router,
  Routes,
  Route,
  BrowserRouter,
  useLocation
} from 'react-router-dom';

import MainHome from './components/Main/MainHome'
import ShoppingList from './components/Store/List/ShoppingList';
import MainStore from './components/Store/MainStore';
import CategorySlide from './components/Store/Category/CategorySlide';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/store" element={<ShoppingList />} />
        <Route path="/shopping" element={<MainStore />} />
        <Route path="/login" element={<CategorySlide />}/>
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
