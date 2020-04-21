import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
var Promise = require('bluebird');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }



  render () {
    return (
    <Container>

    </Container>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));