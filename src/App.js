import './App.css';

import { 
  BrowserRouter as 
  Routes,
  Route,
} from 'react-router-dom';
import Mainpage from './pages/MainPage/Mainpage';
import BestSellar from './pages/BestSellar/BestSellar';
import Registration from './pages/Admin/Registration';
import ShopingList from './pages/Shopping/ShopingList';
import Product from './pages/Product/Product';

function App() {
  return (
    <Routes>
      <Route 
        path="/"
        element={<Mainpage />}
      />
      <Route 
        path="/store"
        element={<BestSellar />}
      />
      <Route 
        path="/store/categoryid=?num"
        element={<ShopingList />}
      />
      <Route 
        path="/store/categoryid=?num/*"
        element={<Product />}
      />
      <Route 
        path="/Admin"
        element={<Registration />}
      />
    </Routes>
  );
}

export default App;
