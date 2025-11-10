import BookCard from '../components/BookCard';

function HomePage() {
 const librosDestacados = [
    { id: 1, titulo: "1984", autor: "George Orwell", imagen: "..."},
    { id: 2, titulo: "Cien Años de Soledad", autor: "García Márquez", imagen: "..." },
 ];

 return (
     <div>
     <section className="hero">
     <h2> Bienvenido a tu Librería Digital </h2>
     <p> Descubre tu próxima gran lectura </p>
     </section>
    
     <section className="featured-books">
     <h3> Libros Destacados </h3>
     <div className="books-grid">
             {librosDestacados.map(libro => (
             <BookCard
             key={libro.id}
             titulo={libro.titulo}
             autor={libro.autor}
             imagen={libro.imagen}
             />
             ))}
     </div>
     </section>
 </div>
 );
 }
 
 
export default HomePage;