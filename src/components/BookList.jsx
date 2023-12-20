import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    searchQuery: "",
  };

  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    const { books } = this.props;
    const { searchQuery } = this.state;

    // libri filtrati
    const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
      <Container className="mt-3">
        <h2 className="h3 my-3 text-success">Book List</h2>

        {/* input */}
        <Form.Group controlId="formBasicSearch" className="my-3">
          <Form.Control
            type="text"
            placeholder="Search by title"
            value={searchQuery}
            onChange={this.handleSearchChange}
          />
        </Form.Group>

        <Row>
          {filteredBooks.map((book) => (
            <Col key={book.asin} md={4} lg={3} className="mb-3">
              <SingleBook book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
