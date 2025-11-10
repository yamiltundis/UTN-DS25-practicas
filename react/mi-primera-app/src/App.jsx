
 import { BrowserRouter, Routes, Route } from 'react-router-dom';
 import Layout from './components/Layout';
 import HomePage from './pages/HomePage';
 import CatalogPage from './pages/CatalogPage';
 import ContactPage from './pages/ContactPage';
 
 function App() {
 return (
   <BrowserRouter>
     <Layout>
       <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/catalog" element={<CatalogPage />} />
         <Route path="/contact" element={<ContactPage />} />
       </Routes>
     </Layout>
   </BrowserRouter>
 );
 }
 export default App;