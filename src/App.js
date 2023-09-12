import './App.css';

import { 
  BrowserRouter as 
  Router,
  Routes,
  Route,
} from 'react-router-dom';

import MainHome from './components/Main/MainHome'
import ShoppingList from './components/Store/List/ShoppingList';
import MainStore from './components/Store/MainStore';
import Detail from './components/Store/IndividualGoods/Detail';
import Listing from './components/Admin/Listing';
import Goods from './components/Store/IndividualGoods/Goods';
import BlockIMG from './components/Test/BlockIMG';
import ListPage from './components/Store/List/ListPage';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/store" element={<ShoppingList />} />
        <Route path="/shopping" element={<MainStore />} />
        <Route path="/login" />
        <Route path="/register" />
        <Route path="/shopcart" element={<Detail />}/>
        <Route path="/recentshop" element={<ListPage />}/>
        <Route path="/purchase" element={<Goods />}/>
        <Route path="/likeshop" element={<BlockIMG />}/>
        <Route path="/loading" />
        <Route path="/modeling" />
        <Route path="/brands" element={<Listing />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
