import './styles/App.scss'
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './screens/homePage/HomePage'
import CartPage from './screens/cartPage/CartPage';
import ProductPage from './screens/productPage/ProductPage';
import NavBar from './components/Navbar';
import logo from './assets/logo2.jpg';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className="App">
      <NavBar logo={logo} />
      <div className="content-container">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route
            path="*"
            element={<Navigate to="/home" replace />}
          />
        </Routes>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
