import Bigbooks from "./Books";
export default function Books({ books }) {
  return (
    <div>
      {books.map((book) => (
        <Bigbooks book={book}></Bigbooks>
      ))}
      <h1>this is my {books[0].names} books</h1>
    </div>
  );
}
