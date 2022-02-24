import React from "react";
import './index.css';
import { ApolloProvider } from "@apollo/react-hooks";
import { WorkoutProvider } from "./utils/GlobalState";
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import background from "./img/gym.png";

import Navigation from "./components/Nav";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
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
        <WorkoutProvider>
        <Navigation />
        <div className='container'>
          <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} /> 
        <Route exact path="/about" component={About} />
        {/* <Route exact path="/profile/:username?" component={Profile} /> */}
  
        <Route component={NoMatch} /> 
        </Switch>
        </div>
        </WorkoutProvider>
        </>
      </Router>
    </ApolloProvider>
    </div>
  );
}

export default App;
