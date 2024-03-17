import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const AddEventPage = () => {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        const response = await fetch('/api/v1/events', {
            method: 'POST',
            headers: {
                'X-CSRF-Token': csrfToken,
            },
            body: formData,
        });

        if (!response.ok) {
            console.error('Form submission failed');
            return;
        } else {
            navigate("/");
        }

    };

    return (
        <Form method="post" action={'/api/v1/events'} onSubmit={handleSubmit} className="p-5" style={{ backgroundColor: '#f8f9fa' }}>
            <Form.Group controlId="eventName" className="mb-3">
                <Form.Label style={{ color: '#6c757d' }}>Event Name</Form.Label>
                <Form.Control type="text" name="name" className="form-control-lg" style={{ borderColor: '#6c757d' }} />
            </Form.Group>

            <Form.Group controlId="eventDescription" className="mb-3">
                <Form.Label style={{ color: '#6c757d' }}>Description</Form.Label>
                <Form.Control as="textarea" rows={3} name="description" className="form-control-lg" style={{ borderColor: '#6c757d' }} />
            </Form.Group>

            <Form.Group controlId="eventLocation" className="mb-3">
                <Form.Label style={{ color: '#6c757d' }}>Location</Form.Label>
                <Form.Control type="text" name="location" className="form-control-lg" style={{ borderColor: '#6c757d' }} />
            </Form.Group>

            <Form.Group controlId="eventStartTime" className="mb-3">
                <Form.Label style={{ color: '#6c757d' }}>Start Time</Form.Label>
                <Form.Control type="datetime-local" name="start_time" className="form-control-lg" style={{ borderColor: '#6c757d' }} />
            </Form.Group>

            <Form.Group controlId="eventEndTime" className="mb-3">
                <Form.Label style={{ color: '#6c757d' }}>End Time</Form.Label>
                <Form.Control type="datetime-local" name="end_time" className="form-control-lg" style={{ borderColor: '#6c757d' }} />
            </Form.Group>

            <Button variant="primary" type="submit" className="btn-lg" style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}>
                Add
            </Button>
        </Form>
    );
};

export default AddEventPage;