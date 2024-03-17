import React, { useState, FormEvent } from 'react';
import {Form, Button, Row, Col, Image} from 'react-bootstrap';
import AuthService from '../../services/AuthService';
import {useNavigate} from "react-router-dom";
import Container from "react-bootstrap/Container";

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();
    const handleLogin = (e: FormEvent) => {
        e.preventDefault();

        AuthService.login({ email, password })
            .then(
                () => {
                    navigate('/');
                },
                (error) => {
                    // TODO Show an error message to the user when alert system is implemented
                    console.error('An error occurred while logging in:', error);
                }
            );
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
            <Container className="shadow p-3 mb-5 bg-body rounded w-50">
                <Row className="justify-content-center">
                    <Image
                        src="/images/logo.png"
                        className="d-inline-block align-top" // add img-fluid class
                        height="600"
                        alt="logo"
                    />
                    <h3 className="text-center mb-4">Login</h3>
                    <Col xs={12} sm={8} md={5} lg={4}>
                        <Form onSubmit={handleLogin}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={email}
                                              onChange={e => setEmail(e.target.value)} required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={password}
                                              onChange={e => setPassword(e.target.value)} required/>
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100">
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default LoginForm;
