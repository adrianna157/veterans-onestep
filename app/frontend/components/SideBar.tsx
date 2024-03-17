import * as React from 'react';
import {Button, Nav} from 'react-bootstrap';
import { FaHome, FaSearch, FaUserFriends, FaBuilding } from 'react-icons/fa';
import {useNavigate} from "react-router-dom";

const SideBar: React.FC = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/events/new');
    }
    return (
        <>
            <div className="d-flex flex-column align-items-start">
                <Nav className="flex-column">
                    <Nav.Link href="#action1" className="dark-blue-theme"><FaHome /> Home</Nav.Link>
                    <Nav.Link href="#action2" className="dark-blue-theme"><FaSearch /> Discover</Nav.Link>
                    <Nav.Link href="#action3" className="dark-blue-theme"><FaUserFriends /> Veterans Nearby</Nav.Link>
                    <Nav.Link href="#action4" className="dark-blue-theme"><FaBuilding /> Veterans Affairs</Nav.Link>
                </Nav>
                <Button
                    variant="primary"
                    onClick={handleClick}
                    className="btn-sm mt-2 ms-3"
                    style={{ backgroundColor: '#002366' }}
                >
                    Add Event
                </Button>
            </div>
        </>
    );
}

export default SideBar;