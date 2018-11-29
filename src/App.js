import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faQuestionCircle, faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';

library.add(faSearch, faQuestionCircle, faBell);

class App extends Component {
  render() {
    const navStyle = {
      backgroundColor: "white",
      borderBottom: "1px solid #eee"
    };

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light" style={navStyle}>
          <div className="container">
            <a className="navbar-brand" href="/">
              <img 
                src="https://www.iconsdb.com/icons/preview/blue/hexagon-xxl.png" 
                width="50" 
                height="50" 
                alt="Logo de la compañia" 
              />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Dashboard <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/">Network</a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/">Network</a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/">Network</a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/">Network</a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link billing" href="/">Billing</a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/">Network</a>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  <a className="nav-link" href="/">
                  <FontAwesomeIcon
                    icon="search"
                    size="lg"
                  />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <FontAwesomeIcon
                      icon="question-circle"
                      size="lg"
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <FontAwesomeIcon
                      icon="bell"
                      size="lg"
                      color="#000"
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Dropdown</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
