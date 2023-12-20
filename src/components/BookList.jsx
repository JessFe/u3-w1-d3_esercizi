import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";

function BookList({ books }) {
  return (
    <Container className="mt-3">
      <h2 className="h3 my-3 text-success">Book List</h2>
      <Row>
        {books.map((book) => (
          <Col key={book.asin} md={4} className="mb-3">
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default BookList;
