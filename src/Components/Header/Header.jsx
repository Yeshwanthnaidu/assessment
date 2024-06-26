import React from "react";
import './Header.css'
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Header = () => {
    const navigate = useNavigate();
    return <div className="header-container">
        <Button variant="danger" className="m-2" onClick={() => navigate('/')}>Admin Page</Button>
        <Button variant="danger" className="m-2" onClick={() => navigate('/test-page')}>Assessment Page</Button>
    </div>
}

export default Header;