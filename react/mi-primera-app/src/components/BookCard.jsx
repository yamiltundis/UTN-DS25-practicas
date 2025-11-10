
 function BookCard({ titulo, autor, imagen }) {
 return (
   <div className="book-card">
     <img src={imagen} alt={titulo} />
     <h3>{titulo}</h3>
     <p>{autor}</p>
   </div>
 );
 }
 export default BookCard; 