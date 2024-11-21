import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="text-center mt-5 p-5 bg-light rounded shadow">
      <h1>Bienvenido a Student Management App</h1>
      <p>Gestiona de manera eficiente la asistencia y valoración académica.</p>
      <Button variant="primary" href="/login">Empezar</Button>
    </Container>
  );
};

export default Home;
