import React from 'react';
import {useNavigate } from "react-router-dom";
import Container from '../components/atoms/Container';
import Button from "../components/atoms/Button";
import Text from '../components/atoms/Text';

function NotFound() {
        const navigate = useNavigate();
    return (
        <Container className="my-5">
        <Text variant='h1'>Página no encontrada</Text>
        <Button className="btn" onClick={() => navigate("/inicio")}>Volver al inicio</Button>
        </Container>
    );
}

export default NotFound;