import './App.css';

import { 
  BrowserRouter as 
  Routes,
  Route,
} from 'react-router-dom';
import Mainpage from './pages/MainPage/Mainpage';

function App() {
  return (
    <Routes>
      <Route 
        path="/"
        element={<Mainpage />}
      />
      <Route 
        path="/store"
        element={<Mainpage />}
      />
    </Routes>
  );
}

export default App;
