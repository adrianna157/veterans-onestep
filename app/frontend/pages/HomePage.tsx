
import * as React from 'react';
import {Button, Col, Row} from 'react-bootstrap';
import Card from '../components/UI/Card';
import Container from "react-bootstrap/Container";
import SideBar from "../components/SideBar";

const HomePage = () => {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        fetch('/api/v1/events')
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);
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