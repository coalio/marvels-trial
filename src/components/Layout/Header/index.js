import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container,
} from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapse = () => setCollapsed(!collapsed);

    return (
        <Navbar color="dark" dark expand="md">
            <Container>
                <NavbarBrand href="/" className="Brand">
                    MARVEL TRIAL
                </NavbarBrand>
                <NavbarToggler onClick={toggleCollapse} />
                <Collapse isOpen={collapsed} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link to="/browse" className="nav-link">
                                Browse
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/favorites" className="nav-link">
                                Favorites
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
