import React from "react";
// import  Alert  from 'react-bootstrap/Alert';
// import Accordion from 'react-bootstrap/Accordion';
import { useState } from "react";
import {
  Button,
  ButtonToolbar,
  ButtonGroup,
  Breadcrumb,
  Stack,
  Badge,
  Accordion,
  Alert,
  DropdownButton,
  Dropdown,
  Card,
  ToggleButton,
  ListGroup,
  Row,
  Col,
  CloseButton,
  SplitButton,
  Container,
  Image,
  Tab,
  Modal,
  Form,
  Navbar,
  Nav,
  NavDropdown,
  InputGroup,
  NavItem,
  NavLink

} from "react-bootstrap";
// import Badge from 'react-bootstrap/Badge';
// import Stack from 'react-bootstrap/Stack'
// import Breadcrumb from 'react-bootstrap/Breadcrumb';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import ToggleButton from 'react-bootstrap/ToggleButton';
import Profile_1 from "./Profile_1.jpg";

const Component = () => {
  const [show, setShow] = useState(true);

  const [shows, setShows] = useState(false);
  const [showss, setShowss] = useState(false);

  const handleClose = () => setShows(false);
  const handleShow = () => setShows(true);

  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Active", value: "1" },
    { name: "Radio", value: "2" },
    { name: "Radio", value: "3" },
  ];

  const values = [true, "sm-down", "md-down", "lg-down", "xl-down", "xxl-down"];
  const [fullscreen, setFullscreen] = useState(true);

  function handleShowss(breakpoint) {
    setFullscreen(breakpoint);
    setShowss(true);
  }
  return (
    <>
      <div className="container-xl">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <div className="container-xl">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <div className="container-xl">
        {[
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
          "info",
          "light",
          "dark",
        ].map((variant) => (
          <Alert key={variant} variant={variant}>
            This is a {variant} alert—check it out!
          </Alert>
        ))}
      </div>
      <div className="container-xl">
        {["primary", "secondary", "success", "danger", "warning", "info"].map(
          (variant) => (
            <Alert key={variant} variant={variant}>
              This is a {variant} alert with{" "}
              <Alert.Link href="#">click me</Alert.Link>. Give it a click if you
              like.
            </Alert>
          )
        )}
      </div>

      <div className="container-xl">
        <Alert show={show} variant="success">
          <Alert.Heading>My Alert</Alert.Heading>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
            amet fermentum.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Close me
            </Button>
          </div>
        </Alert>

        {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
      </div>
      <div className="container-xl">
        <Button variant="primary">
          Profile <Badge bg="secondary">9</Badge>
          <span className="visually-hidden">unread messages</span>
        </Button>
        <hr />
        <div>
          <h1>
            Example heading <Badge bg="secondary">New</Badge>
          </h1>
          <h2>
            Example heading <Badge bg="secondary">New</Badge>
          </h2>
          <h3>
            Example heading <Badge bg="secondary">New</Badge>
          </h3>
          <h4>
            Example heading <Badge bg="secondary">New</Badge>
          </h4>
          <h5>
            Example heading <Badge bg="secondary">New</Badge>
          </h5>
          <h6>
            Example heading <Badge bg="secondary">New</Badge>
          </h6>
        </div>
        <hr />
        <Stack direction="horizontal" gap={2}>
          <Badge bg="primary">Primary</Badge>
          <Badge bg="secondary">Secondary</Badge>
          <Badge bg="success">Success</Badge>
          <Badge bg="danger">Danger</Badge>
          <Badge bg="warning" text="dark">
            Warning
          </Badge>
          <Badge bg="info">Info</Badge>
          <Badge bg="light" text="dark">
            Light
          </Badge>
          <Badge bg="dark">Dark</Badge>
        </Stack>
      </div>

      <div className="container-xl">
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="https://github.com/sumit8866/react">
            Library
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className="container-xl">
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">Left</Button>
          <Button variant="secondary">Middle</Button>
          <Button variant="secondary">Right</Button>
        </ButtonGroup>

        <hr />
        <ButtonToolbar aria-label="Toolbar with button groups">
          <ButtonGroup className="me-2" aria-label="First group">
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
          </ButtonGroup>
          <ButtonGroup className="me-2" aria-label="Second group">
            <Button>5</Button>
            <Button>6</Button>
            <Button>7</Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Third group">
            <Button>8</Button>
          </ButtonGroup>
        </ButtonToolbar>

        <hr />
        <ButtonGroup>
          <Button>1</Button>
          <Button>2</Button>
          <DropdownButton
            as={ButtonGroup}
            title="Dropdown"
            id="bg-nested-dropdown"
          >
            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
          </DropdownButton>
        </ButtonGroup>

        <hr />
        <ButtonGroup vertical>
          <Button>Button</Button>
          <Button>Button</Button>

          <DropdownButton
            as={ButtonGroup}
            title="Dropdown"
            id="bg-vertical-dropdown-1"
          >
            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
          </DropdownButton>

          <Button>Button</Button>
          <Button>Button</Button>

          <DropdownButton
            as={ButtonGroup}
            title="Dropdown"
            id="bg-vertical-dropdown-2"
          >
            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
          </DropdownButton>

          <DropdownButton
            as={ButtonGroup}
            title="Dropdown"
            id="bg-vertical-dropdown-3"
          >
            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
          </DropdownButton>
        </ButtonGroup>
      </div>

      <div className="container-xl">
        <Button variant="primary">Primary</Button>
        <Button variant="outline-danger">Secondary</Button>

        <Button variant="outline-success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="outline-danger">Danger</Button>
        <Button variant="info">Info</Button>
        <Button variant="light">Light</Button>
        <Button variant="outline-dark">Dark</Button>
        <Button variant="link">Link</Button>
      </div>

      <div className="container-xl">
        <ButtonGroup className="mb-2">
          <ToggleButton
            id="toggle-check"
            type="checkbox"
            variant="secondary"
            checked={checked}
            value="1"
            onChange={(e) => setChecked(e.currentTarget.checked)}
          >
            Checked
          </ToggleButton>
        </ButtonGroup>
        <br />
        <ButtonGroup className="mb-2">
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant="secondary"
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
        <br />
        <ToggleButton
          className="mb-2"
          id="toggle-check"
          type="checkbox"
          variant="outline-primary"
          checked={checked}
          value="1"
          onChange={(e) => setChecked(e.currentTarget.checked)}
        >
          Checked
        </ToggleButton>
        <br />
        <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={idx % 2 ? "outline-success" : "outline-danger"}
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>

      <div className="container-xl">
        <Card style={{ width: "18rem" }}>
          {/* <Card.Img variant="top" src="https://png.pngtree.com/background/20230528/original/pngtree-an-animated-face-of-a-boy-with-headphones-picture-image_2781319.jpg" /> */}

          <Card.Img variant="top" src={Profile_1} alt="Profile" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Profile Card</cite>
          </footer>
        </Card>
      </div>

      <div className="container-xl">
        <Card style={{ width: "18rem" }}>
          <Card.Header>profile</Card.Header>
          <Card.Img variant="top" src={Profile_1} />

          {/* <Card.Img variant="top" src="../public/profile_1" /> */}
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
      </div>

      <div className="container-xl">
        {[
          "Primary",
          "Secondary",
          "Success",
          "Danger",
          "Warning",
          "Info",
          "Light",
          "Dark",
        ].map((variant) => (
          <Card
            border={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase()}
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>{variant} Card Title </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>

      <div className="container-xl">
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src={Profile_1} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <div className="container-xl">
        <CloseButton />
      </div>

      <div className="container-xl">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="container-xl">
        {["Primary", "Secondary", "Success", "Info", "Warning", "Danger"].map(
          (variant) => (
            <DropdownButton
              className="m-2"
              as={ButtonGroup}
              key={variant}
              id={`dropdown-variants-${variant}`}
              variant={variant.toLowerCase()}
              title={variant}
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3" active>
                Active Item
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
          )
        )}
        <hr />

        <Dropdown as={ButtonGroup}>
          <Button variant="success">Split Button</Button>

          <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="container-xl">
        {["Primary", "Secondary", "Success", "Info", "Warning", "Danger"].map(
          (variant) => (
            <SplitButton
              className="m-2"
              key={variant}
              id={`dropdown-split-variants-${variant}`}
              variant={variant.toLowerCase()}
              title={variant}
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3" active>
                Active Item
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </SplitButton>
          )
        )}
      </div>

      <div className="container-xl">
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image width={300} height={300} src={Profile_1} rounded />
            </Col>
            <Col xs={6} md={4}>
              <Image width={300} height={300} src={Profile_1} roundedCircle />
            </Col>
            <Col xs={6} md={4}>
              <Image width={300} height={300} src={Profile_1} thumbnail />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="container-xl">
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>

        <hr />
        <ListGroup as="ol" numbered>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Subheading</div>
              Cras justo odio
            </div>
            <Badge bg="primary" pill>
              14
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Subheading</div>
              Cras justo odio
            </div>
            <Badge bg="primary" pill>
              14
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Subheading</div>
              Cras justo odio
            </div>
            <Badge bg="primary" pill>
              14
            </Badge>
          </ListGroup.Item>
        </ListGroup>

        <hr />

        {["sm", "md", "lg", "xl", "xxl"].map((breakpoint) => (
          <ListGroup key={breakpoint} horizontal={breakpoint} className="my-2">
            <ListGroup.Item>This ListGroup</ListGroup.Item>
            <ListGroup.Item>renders horizontally</ListGroup.Item>
            <ListGroup.Item>on {breakpoint}</ListGroup.Item>
            <ListGroup.Item>and above!</ListGroup.Item>
          </ListGroup>
        ))}
      </div>

      <div className="container-xl">
        <ListGroup>
          <ListGroup.Item action variant="primary">
            A simple primary list group item
          </ListGroup.Item>
          <ListGroup.Item action variant="secondary">
            A simple secondary list group item
          </ListGroup.Item>
          <ListGroup.Item action variant="success">
            A simple success list group item
          </ListGroup.Item>
          <ListGroup.Item action variant="danger">
            A simple danger list group item
          </ListGroup.Item>
          <ListGroup.Item action variant="warning">
            A simple warning list group item
          </ListGroup.Item>
          <ListGroup.Item action variant="info">
            A simple info list group item
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            A simple light list group item
          </ListGroup.Item>
          <ListGroup.Item action variant="dark">
            A simple dark list group item
          </ListGroup.Item>
          <ListGroup.Item action variant="link">
            A simple link list group item
          </ListGroup.Item>
        </ListGroup>

        <ListGroup>
          {[
            "Primary",
            "Secondary",
            "Success",
            "Danger",
            "Warning",
            "Info",
            "Light",
            "Dark",
          ].map((variant) => (
            <ListGroup.Item
              key={variant}
              action
              variant={variant.toLowerCase()}
            >
              A simple {variant.toLowerCase()} list group item
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>

      <div className="container-xl">
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
          <Row>
            <Col sm={4}>
              <ListGroup>
                <ListGroup.Item action href="#link1">
                  Link 1
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                  Link 2
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="#link1">Tab pane content 1</Tab.Pane>
                <Tab.Pane eventKey="#link2">Tab pane content 2</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>

      <div className="container-xl">
        <div
          className="modal show"
          style={{ display: "block", position: "initial" }}
        >
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary">Close</Button>
              <Button variant="primary">Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      </div>
      <div className="container-xl">
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>

        <Modal show={shows} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div className="container-xl">
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>

        <Modal show={shows} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div className="container-xl">
        <Button onClick={() => setSmShow(true)} className="me-2">
          Small modal
        </Button>
        <Button onClick={() => setLgShow(true)}>Large modal</Button>
        <Modal
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Small Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>...</Modal.Body>
        </Modal>
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Large Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>...</Modal.Body>
        </Modal>
      </div>

      <div className="container-xl">
        {values.map((v, idx) => (
          <Button
            key={idx}
            className="me-2 mb-2"
            onClick={() => handleShowss(v)}
          >
            Full screen
            {typeof v === "string" && `below ${v.split("-")[0]}`}
          </Button>
        ))}
        <Modal
          show={showss}
          fullscreen={fullscreen}
          onHide={() => setShowss(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>Modal body content</Modal.Body>
        </Modal>
      </div>

      <div className="container-xl">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div className="container-xl">
        <Navbar className="bg-body-tertiary justify-content-between">
          <Form inline>
            <InputGroup>
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <Form.Control
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Form>
          <Form inline>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                />
              </Col>
              <Col xs="auto">
                <Button type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
        </Navbar>
      </div>

      <div className="container-xl">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div className="container-xl">
 <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
        </div>

        <div className="container-xl">
<Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
    </Nav>
            </div>

              <div className="container-xl">
 <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <p className="text-center mt-4 mb-4">Or right-aligned</p>
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
            </div>

              <div className="container-xl">
 <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
            </div>

              <div className="container-xl">
  <Nav variant="underline" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
            </div>


        <div className="container-xl">
   <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
            </div>

            <div className="container-xl">
<Dropdown as={NavItem}>
      <Dropdown.Toggle as={NavLink}>Click to see more…</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>Hello there!</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </div>

            <div className="container-xl">

            </div>

            <div className="container-xl">

            </div>

            <div className="container-xl">

            </div>

            <div className="container-xl">

            </div>

            <div className="container-xl">

            </div>
    </>
  );
};

export default Component;
