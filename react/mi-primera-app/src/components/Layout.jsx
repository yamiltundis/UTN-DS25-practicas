import { Link } from 'react-router-dom';

function Layout({ children }) {
 return (
   <div>
     <header>
       <h1>Mi Librería</h1>
       <nav>
         <Link to="/">Inicio</Link>
         <Link to="/catalog">Catálogo</Link>
         <Link to="/contact">Contacto</Link>
       </nav>
     </header>
    
     <main>
       {children}  {/* Aquí va el contenido específico */}
     </main>
    
     <footer>...</footer>
   </div>
 );
 }
export default Layout;