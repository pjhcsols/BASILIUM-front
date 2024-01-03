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
import Listing from './components/Admin/Listing';
import NotFound from './components/NotFound/NotFound';
import Sign_in from './pages/Sign_in';
import Sign_up from './pages/Sign_up';
import ImageAIPage from './pages/imageAIPage/ImageAIPage';
import MyPage from './pages/myPage/myPage'
import Purchase from './components/Buying/Purchase';
import Goods from './components/Store/IndividualGoods/Goods';
import PrivateGoods from './pages/PrivateGoods/PrivateGoods';
import BlockIMG from './components/Test/BlockIMG';
import Test from './pages/Test';
import Test2 from './pages/Test2';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainHome />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/store" element={<MainStore />} />
      <Route 
        exact 
        path="/shopping" 
        element={<Test2 />} 
      />
      <Route 
        exact 
        path="/Goods/:index" 
        element={<PrivateGoods />} 
      />
      <Route 
        exact
        path="/login" 
        element={<Sign_in />}
      />
      <Route 
        exact
        path="/purchase" 
        element={<Purchase />}
      />
      <Route 
        exact
        path="/register" 
        element={<Sign_up />}
      />
      <Route 
        exact
        path="/modeling" 
        element={<ImageAIPage />}
      />
      <Route 
        exact
        path="/brands" 
        element={<Test />}
      />
      <Route 
        exact
        path="/testing" 
        element={<BlockIMG />} 
      />
      <Route 
        exact
        path="*" 
        element={<NotFound />} 
      />
    </Routes>
  );
}

export default App;
