import * as React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const EditEventPage = () => {
    const { id } = useParams();
    const [data, setData] = React.useState(null);
    const navigate = useNavigate();

    React.useEffect(() => {
        fetch(`/api/v1/events/${id}`)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Create a FormData instance from the form event
        const formData = new FormData(event.target);

        // Get the CSRF token
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        // Make a PUT request to the server with the form data
        const response = await fetch(`/api/v1/events/${id}`, {
            method: 'PUT',
            headers: {
                // Include the CSRF token in the 'X-CSRF-Token' header
                'X-CSRF-Token': csrfToken,
            },
            body: formData,
        });

        // Check if the request was successful
        if (!response.ok) {
            // Handle error
            console.error('Form submission failed');
            return;
        }

        // After successful form submission, navigate back to "/"
        navigate("/");
    };

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <Form method="put" action={`/events/${id}`} onSubmit={handleSubmit} className="p-5" style={{ backgroundColor: '#f8f9fa' }}>
            <Form.Group controlId="eventName" className="mb-3">
                <Form.Label style={{ color: '#6c757d' }}>Event Name</Form.Label>
                <Form.Control type="text" name="name" defaultValue={data.name} className="form-control-lg" style={{ borderColor: '#6c757d' }} />
            </Form.Group>

            <Form.Group controlId="eventDescription" className="mb-3">
                <Form.Label style={{ color: '#6c757d' }}>Description</Form.Label>
                <Form.Control as="textarea" rows={3} name="description" defaultValue={data.description} className="form-control-lg" style={{ borderColor: '#6c757d' }} />
            </Form.Group>

            <Form.Group controlId="eventLocation" className="mb-3">
                <Form.Label style={{ color: '#6c757d' }}>Location</Form.Label>
                <Form.Control type="text" name="location" defaultValue={data.location} className="form-control-lg" style={{ borderColor: '#6c757d' }} />
            </Form.Group>

            <Form.Group controlId="eventStartTime" className="mb-3">
                <Form.Label style={{ color: '#6c757d' }}>Start Time</Form.Label>
                <Form.Control type="datetime-local" name="start_time" defaultValue={new Date(data.start_time).toISOString().slice(0,16)} className="form-control-lg" style={{ borderColor: '#6c757d' }} />
            </Form.Group>

            <Form.Group controlId="eventEndTime" className="mb-3">
                <Form.Label style={{ color: '#6c757d' }}>End Time</Form.Label>
                <Form.Control type="datetime-local" name="end_time" defaultValue={new Date(data.end_time).toISOString().slice(0,16)} className="form-control-lg" style={{ borderColor: '#6c757d' }} />
            </Form.Group>

            <Button variant="primary" type="submit" className="btn-lg" style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}>
                Update
            </Button>
        </Form>
    );
};

export default EditEventPage;