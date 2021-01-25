import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NavigationBar from "../../components/NavigationBar";

export default function index() {
    return (
        <div style={{ backgroundColor: "#D3143A", color: "white" }}>
            <NavigationBar linkFontColor="white" />
            <Container>
                <div
                    className="m-4"
                    style={{ fontSize: "48px", margin: "5px" }}
                >
                    CALENDAR
                </div>
                <div style={{ fontSize: "24px", marginBottom: "15px" }}>
                    Our upcoming event information can be found below:
                </div>
                <Row
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingBottom: "64px",
                    }}
                >
                    <iframe
                        src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=YnJvd24uZWR1X2owNjhuOGJxMzZtNG5vcTY0OG9yN2J0MzJnQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%237986CB&amp;mode=WEEK"
                        title="calendar"
                        className="mb-4"
                        style={{
                            border: "solid 1px #777",
                            width: "1400px",
                            maxWidth: "100%",
                            height: "600px",
                            maxHeight: "70%",
                            frameBorder: "0",
                            scrolling: "no",
                        }}
                    ></iframe>
                </Row>
            </Container>
        </div>
    );
}
