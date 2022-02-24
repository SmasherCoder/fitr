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
    <div className="background" style={{ backgroundImage:  `url(${background})`, height: "100vh" }}>
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
    </ApolloProvider>
    </div>
  );
}

export default App;
