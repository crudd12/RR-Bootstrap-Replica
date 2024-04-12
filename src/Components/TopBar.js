import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function TopBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg" className="bg-body-tertiary">
                <Navbar.Brand style={{ margin: "0 30px 0 20px" }} href="#home"><img src="https://d2guulkeunn7d8.cloudfront.net/assets/beetstrap/brand/instacart-logo-color-4db9d81ca0b7638befdc4bd331f64a2633df790c0b55ef627c99b1ba77af72b7.svg" alt='Instacart Logo' /> </Navbar.Brand>
                <Nav className="mr-auto">
                    <Form inline>
                        <Row>
                            <Col xs="auto">
                                <Form.Control style={{
                                    width: "35em",
                                    paddingLeft: "15px",
                                    marginRight: "150px"
                                }}
                                    type="text"
                                    placeholder="Search"
                                    className=" mr-sm-2"
                                />
                            </Col>
                        </Row>
                    </Form>
                </Nav>
                <Nav style={{ padding: "24px 40px 20px 40px", fontSize: "18px", lineHeight: "26px", fontWeight: "bolder", display: "flex" }} >
                    <Nav.Link style={{ color: "#343538" }} href="#LogIn">Log In</Nav.Link>
                    <Button variant="success" style={{ fontSize: "18px", borderRadius: '30px' }}>Sign Up</Button>{' '}
                </Nav>
            </Navbar>
        </div>
    )
}