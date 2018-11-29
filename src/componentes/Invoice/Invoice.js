import React, { Component } from 'react';
import $ from 'jquery';
import './Invoice.css';

class Invoice extends Component {
  componentDidMount() {
    $('[data-toggle="tooltip"]').tooltip();
  }
  
  componentDidUpdate() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  render() {
    return (
      <div className="Invoice">
        <div className="container">
          <h2>
            Invoice 
            <span 
              className="invoice-number"
              data-toggle="tooltip" 
              data-placement="top" 
              title="Invoice Number"
            >
              S03834754
            </span>
          </h2>
        </div>
      </div>
    );
  }
}

export default Invoice;