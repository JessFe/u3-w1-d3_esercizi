import React, { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  handleToggleSelected = () => {
    this.setState((prevState) => ({ selected: !prevState.selected }));
  };

  render() {
    const { book } = this.props;
    const { selected } = this.state;

    return (
      <Card
        className={`h-100 ${
          selected
            ? "border border-success border-opacity-50 border-1 rounded-2 shadow-lg bg-success bg-opacity-10"
            : ""
        }`}
        onClick={this.handleToggleSelected}
      >
        <Card.Img variant="top" src={book.img} alt={`cover of ${book.title}`} style={{ height: "80%" }} />
        <Card.Body className="d-flex justify-content-center align-items-center">
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
