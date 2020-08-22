import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import Col from "react-bootstrap/Col";
// import Arrow from "../../assets/arrow.png";
import NavigationBar from "../../components/NavigationBar";

export default function index() {
  return (
    <div style={{ backgroundColor: "#D3143A", color: "white" }}>
      <NavigationBar linkFontColor="white" />
      <Container>
        <div className="m-4" style={{ fontSize: "48px" , margin: "10px"}}>
          CALENDAR
        </div>
        <Row>
          <Col xs={6}>
            <div className="p-4" style={{ textAlign: "left", borderStyle: "dashed", height: "600px", marginLeft: "-120px", marginRight: "20px", scrolling: "yes", overflow: "scroll" }}>
              <h4>Fall 2020 Workshops</h4>
              <br/>
              <h5>9/22: Ideation 7-8PM EST</h5>
              <p style={{fontSize: "18px"}}>I'm baby schlitz street art ugh typewriter hot chicken meditation. Vape trust fund vinyl next level forage scenester typewriter bespoke edison bulb chartreuse kitsch cloud bread. Pok pok selfies you probably haven't heard of them squid. </p>
              <br/>
              <h5>9/22: Social Innovation and Methods of Change 7-8PM EST</h5>
              <p style={{fontSize: "18px"}}>I'm baby schlitz street art ugh typewriter hot chicken meditation. Vape trust fund vinyl next level forage scenester typewriter bespoke edison bulb chartreuse kitsch cloud bread. Pok pok selfies you probably haven't heard of them squid. </p>
              <br/>
              <h5>9/29: Data Analysis and Visualization (Coding) 7-8PM EST</h5>
              <p style={{fontSize: "18px"}}>I'm baby schlitz street art ugh typewriter hot chicken meditation. Vape trust fund vinyl next level forage scenester typewriter bespoke edison bulb chartreuse kitsch cloud bread. Pok pok selfies you probably haven't heard of them squid. </p>
              <br/>
              <h5>9/29: Data Analysis and Visualization (non-coding) 7-8PM EST</h5>
              <p style={{fontSize: "18px"}}>I'm baby schlitz street art ugh typewriter hot chicken meditation. Vape trust fund vinyl next level forage scenester typewriter bespoke edison bulb chartreuse kitsch cloud bread. Pok pok selfies you probably haven't heard of them squid. </p>
              <br/>
              <h5>10/6: UI Design 7-8PM EST</h5>
              <p style={{fontSize: "18px"}}>Figma baby schlitz street art ugh typewriter hot chicken meditation. Vape trust fund vinyl next level forage scenester typewriter bespoke edison bulb chartreuse kitsch cloud bread. Pok pok selfies you probably haven't heard of them squid. </p>
              <br/>
              <h5>10/6: Branding and Packaging 7-8PM EST</h5>
              <p style={{fontSize: "18px"}}>Figma baby schlitz street art ugh typewriter hot chicken meditation. Vape trust fund vinyl next level forage scenester typewriter bespoke edison bulb chartreuse kitsch cloud bread. Pok pok selfies you probably haven't heard of them squid. </p>
              <br/>
              <h5>10/13: Urban Art Installations 7-8PM EST</h5>
              <p style={{fontSize: "18px"}}>Figma baby schlitz street art ugh typewriter hot chicken meditation. Vape trust fund vinyl next level forage scenester typewriter bespoke edison bulb chartreuse kitsch cloud bread. Pok pok selfies you probably haven't heard of them squid. </p>
              <br/>
              <h5>10/13: Urban Planning 7-8PM EST</h5>
              <p style={{fontSize: "18px"}}>Figma baby schlitz street art ugh typewriter hot chicken meditation. Vape trust fund vinyl next level forage scenester typewriter bespoke edison bulb chartreuse kitsch cloud bread. Pok pok selfies you probably haven't heard of them squid. </p>
              </div>
          </Col>
          <Col xs={6}>
            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=YnJvd24uZWR1X2owNjhuOGJxMzZtNG5vcTY0OG9yN2J0MzJnQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%237986CB"
              title="calendar"
              className="mb-4"
              style={{
                border: "solid 1px #777",
                width: "700px",
                height: "600px",
                frameBorder: "0",
                scrolling: "no",
              }}
            ></iframe>
          </Col>
        </Row>
      </Container>
      <Container className="pb-5">
        <Row
          className="m-4"
          style={{ fontSize: "48px", textDecoration: "underline" }}
        >
          Upcoming Events
        </Row>
        <Row className="ml-4" style={{fontSize:"18px"}}>
          None for now, stay tuned though!
          {/* Take the events and map it to an event with a flex justification of space around */}
        </Row>
      </Container>
    </div>
  );
}
