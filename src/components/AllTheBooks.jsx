import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import books from "../data/scifi.json";

function AllTheBooks() {
  return (
    <Container className="mt-3">
      <h2 className="h3 my-3 text-success">Science Fiction Books</h2>
      <Row>
        {books.map((book) => (
          <Col key={book.asin} md={4} className="mb-3">
            <Card className="h-100">
              <Card.Img variant="top" src={book.img} alt={"cover of ${book.title}"} />
              <Card.Body className="">
                <Card.Title>{book.title}</Card.Title>
                <Card.Text className="badge bg-success opacity-75">${book.price}</Card.Text>
                <br />
                <Button variant="info">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AllTheBooks;
