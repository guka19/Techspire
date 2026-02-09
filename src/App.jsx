import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Support from './pages/Support';
import Auth from './pages/Auth';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/NotFound'; 
import Gallery from './pages/Gallery';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="support" element={<Support />} />
          <Route path="auth" element={<Auth />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="gallery" element={<Gallery />} /> 
          
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;