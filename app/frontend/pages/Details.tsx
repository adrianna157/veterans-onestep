import * as React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {formatDateTime} from "../helpers/date";
import {Button, Modal} from "react-bootstrap";
const Details = () => {
    const { id } = useParams();
    const [data, setData] = React.useState(null);
    const [showModal, setShowModal] = React.useState(false);
    const navigate = useNavigate();
    React.useEffect(() => {
        fetch(`/api/v1/events/${id}`)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    const handleEdit = () => {
        navigate(`/events/edit/${id}`)
    }
    const handleDelete = () => {
        setShowModal(true);
    }
    const confirmDelete = async () => {
        const csrfToken = document.querySelector<HTMLMetaElement>('meta[name="csrf-token"]')?.content;
        try {
            await fetch(`/api/v1/events/${id}`, {
                method: 'DELETE',
                headers: {
                    'X-CSRF-Token': csrfToken,
                },
            });

            // After the request is complete, you can navigate or do other actions
            setShowModal(false);
            // TODO: Show a success message to the user when alert system is implemented
            navigate('/');
        } catch (error) {
            console.error('An error occurred while deleting the event:', error);
            // TODO: Show an error message to the user when alert system is implemented
        }
    }


    return (
        <div className='ms-2'>
            <h1>{data.name}</h1>
            <textarea defaultValue={data.description}/>
            <p>Location: {data.location}</p>
            <p>Start Time: {formatDateTime(data.start_time)}</p>
            <p>End Time: {formatDateTime(data.end_time)}</p>
            <Button size={"sm"} variant="primary" onClick={handleEdit} >Edit</Button>
            <Button size={"sm"} variant="danger" onClick={handleDelete} className='ms-2' >Delete</Button>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this event?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={confirmDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    );
};

export default Details;