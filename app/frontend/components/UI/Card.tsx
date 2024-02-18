import * as React from 'react';
import { Card, Button } from 'react-bootstrap';
import {formatDateTime} from "../../helpers/date";
import { useNavigate } from 'react-router-dom';
interface MyCardProps {
    eventName: string;
    eventId: number;
    imageUrl?: string;
    location: string;
    startTime: string;
    endTime: string;
}

const MyCard = ({ eventName, eventId, imageUrl, location, startTime, endTime }: MyCardProps) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/events/${eventId}`);
    }

    return (
        <Card style={{ width: '14rem', maxHeight: '20rem', overflow: 'auto' }}>
            <Card.Img variant="top" src={imageUrl || "https://images.unsplash.com/photo-1464047736614-af63643285bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGVmYXVsdCUyMGV2ZW50fGVufDB8fDB8fHww" } />
            <Card.Body>
                <Card.Title>{eventName}</Card.Title>
                <Card.Text className="small" >
                    Location: {location}
                </Card.Text>
                <Card.Text className="small">
                    Start Time: {formatDateTime(startTime)}
                </Card.Text>
                <Card.Text className="small">
                    End Time: {formatDateTime(endTime)}
                </Card.Text>
                <Button size={"sm"} variant="primary" onClick={handleClick}>Details</Button>
            </Card.Body>
        </Card>
    );
};

export default MyCard;