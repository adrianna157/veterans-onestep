
import * as React from 'react';
import {Button, Col, Row} from 'react-bootstrap';
import Card from '../components/UI/Card';
import Container from "react-bootstrap/Container";
import SideBar from "../components/SideBar";
import AuthService from "../services/AuthService";
import {useNavigate} from "react-router-dom";

const HomePage = () => {
    const [data, setData] = React.useState([]);
    const [loggedIn, setLoggedIn] = React.useState(false); // add a new state variable for the login status
    const navigate = useNavigate();

    React.useEffect(() => {
        const user = AuthService.getCurrentUser(); // check if a user is logged in when the component mounts
        setLoggedIn(!!AuthService.getCurrentUser());

        if (!user) {
            navigate('/login'); // if the user is not logged in, navigate to the login form
        } else {
            fetch('/api/v1/events')
                .then((res) => res.json())
                .then((data) => setData(data));
        }
    }, []);

    if (!loggedIn) {
        return <div>Please log in to view this page.</div>; // show a message if the user is not logged in
    }

    return (
        <div className='d-flex'>
            <SideBar/>
            <Container>
                <Row className="justify-content-center">
                    {
                        data.map(({ id, name, location, start_time, end_time }, index) => (
                            <Col xs={12} className="my-3 px-3 d-flex justify-content-center">
                                <Card
                                    key={index}
                                    eventName={name}
                                    eventId={id}
                                    location={location}
                                    startTime={start_time}
                                    endTime={end_time}
                                />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    );
};

export default HomePage;