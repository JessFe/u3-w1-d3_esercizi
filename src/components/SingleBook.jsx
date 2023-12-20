import React from "react";
import { Card, Button } from "react-bootstrap";
import books from "../data/scifi.json";

function SingleBook({ book }) {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={book.img} alt={`cover of ${book.title}`} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text className="badge bg-success opacity-75">${book.price}</Card.Text>
        <br />
        <Button variant="info">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default SingleBook;
