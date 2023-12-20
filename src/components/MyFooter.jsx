import React from "react";
import { Container } from "react-bootstrap";

const MyFooter = () => {
  return (
    <footer className="mt-5">
      <Container fluid className="text-center bg-dark text-light p-3">
        <p>© 2023 Copyright: EpiBooks</p>
      </Container>
    </footer>
  );
};

export default MyFooter;
