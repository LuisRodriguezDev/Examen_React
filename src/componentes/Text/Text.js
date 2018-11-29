import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIndustry } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Text.css';

library.add(faIndustry);

class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrarDiagrama: true
    };

    this.mostrarDiagrama = this.mostrarDiagrama.bind(this);
    this.mostrarMapa = this.mostrarMapa.bind(this);
  }

  mostrarDiagrama() {
    this.setState(() => ({
      mostrarDiagrama: true
    }));
  }

  mostrarMapa() {
    this.setState(() => ({
      mostrarDiagrama: false
    }));
  }

  render() {
    return (
      <div className="Text">
        <div className="container">
          <div className="btn-group btn-group-toggle switch" data-toggle="buttons">
            <label className="btn btn-light active" onClick={this.mostrarDiagrama}>
              <input
                type="radio"
                name="options"
                value="diagrama"
                autoComplete="off"
              />
              Diagram
            </label>
            <label className="btn btn-light" onClick={this.mostrarMapa}>
              <input
                type="radio"
                name="options"
                value="mapa"
                autoComplete="off"
              />
              Map
            </label>
          </div>
          <h2 className="encabezado">Text</h2>
          <div className="card">
            <div className="card-body">
              {this.state.mostrarDiagrama ? (
                <div>
                  <div className="diagrama">
                    <span className="icono">
                      <FontAwesomeIcon
                        icon="industry"
                        color="#000"
                      />
                    </span>
                    <span className="icono">
                      <FontAwesomeIcon
                        icon="industry"
                        color="#000"
                      />
                    </span>
                    <span className="icono">
                      <FontAwesomeIcon
                        icon="industry"
                        color="#000"
                      />
                    </span>
                    <span className="icono">
                      <FontAwesomeIcon
                        icon="industry"
                        color="#000"
                      />
                    </span>
                    <span className="icono">
                      <FontAwesomeIcon
                        icon="industry"
                        color="#000"
                      />
                    </span>
                    <span className="icono">
                      <FontAwesomeIcon
                        icon="industry"
                        color="#000"
                      />
                    </span>
                    <span className="icono">
                      <FontAwesomeIcon
                        icon="industry"
                        color="#000"
                      />
                    </span>
                  </div>
                  <div className="linea-horizontal">
                  </div>
                </div>
              ) : (
                <div className="mapa">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16303482.03153976!2d-71.96971475389662!3d3.9496646181906385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2853cb36cbd801%3A0xdca0f2587cd54dd3!2sVenezuela!5e0!3m2!1sen!2sve!4v1543532224136" width="800" height="600" frameBorder="0" title="mapa-venezuela"></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Text;