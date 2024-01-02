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
import Signin from './pages/Login/Signin';
import Signup from './pages/Login/Signup';
import Login from './pages/Login/Login';

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
      },
      {
        id: "BestSellar",
        element: <BestSellar></BestSellar>,
      },
    ]
  },
  {
    path: "/login",
    id: "login",
    element: <Login></Login>,
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
    // <Provider store={configureStore}>
      <RouterProvider router={router}></RouterProvider>
    // </Provider>
  );
}

export default App;
