import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NavigationBar from "../../components/NavigationBar";

export function index() {
    return (
        <div
            style={{
                backgroundColor: "green",
                color: "white",
                height: "100%",
            }}
        >
            <NavigationBar linkFontColor="black" />
            <Container>
                <div></div>
            </Container>
        </div>
    );
}

export default index;
