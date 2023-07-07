import logo from './logo.svg';
import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import Products from './component/Products';
import ProductGet from './component/ProductGet';
import ProductAdd from './component/ProductAdd';
import ProductUpdate from './component/ProductUpdate';


function App() {
  return (
   <>
   <Router>
   <Products/>
   <Routes>
   <Route path="/products/get" element={<ProductGet/>} />
   <Route path='/product/add' element={<ProductAdd/>} />
   <Route path='/product/update' element={<ProductUpdate/>} />
   </Routes>
   </Router>
   </>
  );
}

export default App;
