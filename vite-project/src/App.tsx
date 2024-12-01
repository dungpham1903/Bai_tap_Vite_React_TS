import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Home } from './pages/home/Home'
import { Product } from './pages/product/Product'
import { Cart } from './pages/cart/Cart'
import { ProductDetails } from './modules/product/ProductDetails'
import { About } from './pages/about/About'
import { Contact } from './pages/contact/Contact'
import { GalleryProvider } from './contexts/GalleryContext'
import { SearchProvider } from './contexts/SearchContext'
import ScrollToTop from './components/ScrollToTop';
import { Checkout } from './pages/cart/Checkout';
import CompleteCheckout from './pages/cart/CompleteCheckout';
function App() {
  return (<>
    <BrowserRouter>
      <ScrollToTop />
      <SearchProvider>
        <GalleryProvider>
          <Header />
          <main className=' overflow-hidden'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/product-detail/:slug" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/completeCheckout" element={<CompleteCheckout />} />

            </Routes>
          </main>
          <Footer />
        </GalleryProvider>
      </SearchProvider>
    </BrowserRouter>
  </>)
}
export default App
