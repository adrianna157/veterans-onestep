
import * as React from 'react';
import {Button } from 'react-bootstrap';
import Card from '../components/UI/Card';

const HomePage = () => {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        fetch('/api/v1/events')
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);
    return (
        <div>
            {
                data.map(({ id, name, location, start_time, end_time }, index) => (
                    <Card
                        key={index}
                        eventName={name}
                        eventId={id}
                        location={location}
                        startTime={start_time}
                        endTime={end_time}
                    />
                ))
            }
        </div>
    );
};

export default HomePage;