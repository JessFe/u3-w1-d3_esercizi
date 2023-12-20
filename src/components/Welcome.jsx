import Alert from "react-bootstrap/Alert";

function Welcome() {
  return (
    <Alert variant="success">
      <Alert.Heading>Welcome to EpiBooks!</Alert.Heading>
      <hr />
      <p className="mb-0">Your next favorite book is waiting for you!</p>
    </Alert>
  );
}

export default Welcome;
