import './App.css';

import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Header from './components/Header/Header';
import Mainpage from './pages/MainPage/Mainpage';
import BestSellar from './pages/BestSellar/BestSellar';
import Registration from './pages/Registration/Registration';
import ShopingList from './pages/Shopping/ShopingList';
import Product from './pages/Product/Product';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Header></Header>,
    errorElement: <Errorpage></Errorpage>,
    id: 'root',
    children:[
      {
        index: true,
        id: "Mainpage",
        element: <Mainpage></Mainpage>,
        // loader 추가 예정
      },
      {
        path: "login",
        id: "Login",
        element: <Sign_in></Sign_in>,
      },
      {
        path: "signup",
        id: "signup",
        element: <Sign_up></Sign_up>,
      }
    ]
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route 
          path="/"
          element={<Mainpage />}
        />
        <Route 
          path="/bestsellar"
          element={<BestSellar />}
        />
        <Route 
          path="/store/ct/:num"
          element={<ShopingList />}
        />
        <Route 
          path="/store/ct/:num/pd/:value"
          element={<Product />}
        />
        <Route 
          path="/admin/:num"
          element={<Registration />}
        />
      </Routes>
    </div>
  );
}

export default App;
