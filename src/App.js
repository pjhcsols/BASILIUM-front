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
import Goods from './components/Store/IndividualGoods/Goods';
import NotFound from './components/NotFound/NotFound';
import Purchase from './components/Buying/Purchase';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/store" element={<MainStore />} />
        <Route path="/shopping/*" element={<ShoppingList />}>
          <Route path=":itemid" element={<Goods />} />
        </Route>
        <Route path="/login" />
        <Route path="/register" />
        <Route path="/shopcart" element={} />
        <Route path="/purchase/:userid" element={<Purchase />}/>
        <Route path="/mypage" element={} />
        <Route path="/modeling" element={} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;