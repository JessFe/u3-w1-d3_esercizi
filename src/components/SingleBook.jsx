import React from "react";
import { Card } from "react-bootstrap";

function SingleBook({ book }) {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={book.img} alt={`cover of ${book.title}`} />
      <Card.Body className="">
        <Card.Title>{book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default SingleBook;
