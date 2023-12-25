/* Main app design */
import './App.css';

/* Related to react router */
import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

/* Basilium App data Provider */
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

/* Components and Pages */
import Header from './components/Header/Header';
import Mainpage from './pages/MainPage/Mainpage';
import BestSellar from './pages/BestSellar/BestSellar';
import Errorpage from './pages/Errorpage/Errorpage';
import ShopingList from './pages/Shopping/ShopingList';
import Product from './pages/Product/Product';
import Sign_in from './pages/Login/Sign_in';
import Sign_up from './pages/Login/Sign_up';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Header></Header>,
    errorElement: <Errorpage></Errorpage>,
    id: 'root',
    children:[
      {
        id: "Mainpage",
        element: <Mainpage></Mainpage>,
        // loader 추가 예정
      },
    ]
  },
  {
    path: "/login",
    id: "login",
    element: <Sign_in></Sign_in>,
  },
  {
    path: "/signup",
    id: "signup",
    element: <Sign_up></Sign_up>,
  },
  {
    path: "/bestsellar",
    id: "bestsellar",
    element: <BestSellar></BestSellar>
  },
  {
    path: "/shop",
    id: "shop",
    element: <ShopingList></ShopingList>,
    children:[
      {
        index: true,
        path: "product/:id",
        element: <Product></Product>,
      }
    ]
  }
]);

function App() {
  return (
    <Provider store={configureStore}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;
