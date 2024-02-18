import * as React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {formatDateTime} from "../helpers/date";
import {Button} from "react-bootstrap";
const Details = () => {
    const { id } = useParams();
    const [data, setData] = React.useState(null);
    const navigate = useNavigate();
    React.useEffect(() => {
        fetch(`/api/v1/events/${id}`)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    const handleClick = () => {
        navigate(`/events/new/${id}`)
    }

    return (
        <div>
            <h1>{data.name}</h1>
            <textarea defaultValue={data.description}/>
            <p>Location: {data.location}</p>
            <p>Start Time: {formatDateTime(data.start_time)}</p>
            <p>End Time: {formatDateTime(data.end_time)}</p>
            <Button size={"sm"} variant="primary" onClick={handleClick} >Edit</Button>
        </div>

    );
};

export default Details;