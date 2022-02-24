import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';
import About from '../../pages/About';

// import Auth from '../../utils/auth';

const Navigation = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <Navbar bg="light" variant="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to='/'>
          Fitr
        </Navbar.Brand>
        <Navbar.Collapse id='navbar'>
          <Nav className='ml-auto'>
            <NavLink as={Link} to='/'>
              What Others Are Doing
              </NavLink>
              <br></br>
              <NavLink as={Link} to='/about'>
                About Fitr
              </NavLink>
              <br></br>
              <NavLink as={Link} to='/login'>
                Login
              </NavLink>
              <br></br>
              <NavLink as={Link} to='/signup'>
                Sign Up
              </NavLink>
               <br></br>
              {/* {Auth.loggedIn() ? (
                <>
                <Nav.Link as={Link} to='/follow'>
                  View Followed Friends
                </Nav.Link>
                <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) :(
                <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
              )} */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Modal
    size='lg'
    show={showModal}
    onHide={() => setShowModal(false)}
    aria-labelledby='signup-modal'>
      <Tab.Container defaultActiveKey='login'>
        <Modal.Body>
          <Tab.Content>
          <Tab.Pane eventKey='login'>
                <Login handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <Signup handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='about'>
                <About handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
          </Tab.Content>
        </Modal.Body>
      </Tab.Container>
    </Modal>
    </>
  );
};

export default Navigation;
