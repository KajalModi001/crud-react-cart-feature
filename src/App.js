import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Index from './Pages/Index';
import Extra from './Components/Extra';
import Cart from './Components/Cart';
import { CartProvider } from './Components/CartContext';



function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route path='' element={<Register/>}></Route>
            <Route path='login' element={<Login/>}></Route>
            <Route path='index' element={<Index/>}></Route>
            <Route path='product/:id' element={<Extra/>}></Route>
            <Route path='cart' element={<Cart/>}></Route>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
