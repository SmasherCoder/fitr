<<<<<<< HEAD
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fadumbbell } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';

// import Auth from '../../utils/auth';
>>>>>>> f6c7ed2d807274b4fb225e89e45dd3a1432494c0

const Navigation = () => {

<<<<<<< HEAD
const Nav = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <span className='icon'><FontAwesomeIcon icon={fadumbbell}></FontAwesomeIcon></span>
          <h1>FITr</h1>
        </Link>
=======
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
            <Nav.Link as={Link} to='/'>
              What Others Are Doing
              </Nav.Link>
              <br></br>
              <Nav.Link as={Link} to='/'>
                About Fitr
              </Nav.Link>
              <br></br>
              <Nav.Link as={Link} to='/login'>
                Login
              </Nav.Link>
              <br></br>
              <Nav.Link as={Link} to='/signup'>
                Sign Up
              </Nav.Link>
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
>>>>>>> f6c7ed2d807274b4fb225e89e45dd3a1432494c0

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
          </Tab.Content>
        </Modal.Body>
      </Tab.Container>
    </Modal>
    </>
  );
};

<<<<<<< HEAD
export default Nav;
=======
export default Navigation;
>>>>>>> f6c7ed2d807274b4fb225e89e45dd3a1432494c0
