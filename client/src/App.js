import React from "react";
import './index.css';
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import background from "./img/gym.png";

import Navigation from "./components/Nav";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NoMatch from './pages/NoMatch';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },

  uri: "/graphql",
});

function App() {
  return (
<<<<<<< HEAD
    <ApolloProvider client={client}>
      <div className='flex-column justify-flex-start min-100-vh'>
      <Nav />
      <div className='container'>
        <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route component={NoMatch} />
      </Switch>
      </div>
      </div>
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
    </header>
</div>
=======
    <div class="background" style={{ backgroundImage:  `url(${background})`, height: "100vh" }}>
    <ApolloProvider client = {client}>
      <Router>
        <>
        <Navigation />
        <div className='container'>
          <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} /> 
  
        <Route component={NoMatch} /> 
        </Switch>
        </div>
        </>
      </Router>
>>>>>>> f6c7ed2d807274b4fb225e89e45dd3a1432494c0
    </ApolloProvider>
    </div>
  );
}

export default App;
