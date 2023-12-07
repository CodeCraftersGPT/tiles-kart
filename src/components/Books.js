import { useState } from "react";

export function Books() {
 // define books array with id, name, author, price, rating
    // use the map function to iterate over the array
    // display the books in the form of table
    // use the useState hook to maintain the state of the books array
    // use the useState hook to maintain the state of the book object

    const booksArray = [
        {
            id: 1,
            name: 'The Alchemist',
            author: 'Paulo Coelho',
            price: 200,
            rating: 4.5
        },
        {
            id: 2,
            name: 'The Monk who sold his Ferrari',
            author: 'Robin Sharma',
            price: 300,
            rating: 4.0
        },
        {
            id: 3,
            name: 'The Secret', 
            author: 'Rhonda Byrne',
            price: 400,
            rating: 4.8
        }];

        const [books,setBooks] = useState(booksArray);

        return(
            <div>
                <h1>Books</h1>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Author</th>
                            <th>Price</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* render the books */}
                        {books.map((book) => {
                            return(
                                <tr key={book.id}>
                                    <td>{book.id}</td>
                                    <td>{book.name}</td>
                                    <td>{book.author}</td>
                                    <td>{book.price}</td>
                                    <td>{book.rating}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )


}
