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
        <Form method="put" action={`/events/${id}`} onSubmit={handleSubmit}>
            <Form.Group controlId="eventName">
                <Form.Label>Event Name</Form.Label>
                <Form.Control type="text" name="name" defaultValue={data.name} />
            </Form.Group>

            <Form.Group controlId="eventDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} name="description" defaultValue={data.description} />
            </Form.Group>

            <Form.Group controlId="eventLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" name="location" defaultValue={data.location} />
            </Form.Group>

            <Form.Group controlId="eventStartTime">
                <Form.Label>Start Time</Form.Label>
                <Form.Control type="text" name="start_time" defaultValue={data.start_time} />
            </Form.Group>

            <Form.Group controlId="eventEndTime">
                <Form.Label>End Time</Form.Label>
                <Form.Control type="text" name="end_time" defaultValue={data.end_time} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Update
            </Button>
        </Form>
    );
};

export default EditEventPage;