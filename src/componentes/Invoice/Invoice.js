import React, { Component } from 'react';
import $ from 'jquery';
import './Invoice.css';

class Invoice extends Component {
  // Codigo para mostrar un tooltip cuando se haga hover sobre el numero de invoice
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
          <div className="card">
            <div className="card-header encabezado-carta">
              Invoice - Revision
            </div>
            <div className="card-body">
              <div className="card-group">
                <div className="card">
                  <div className="card-body">
                    <p>Invoice # <span className="valor">33-0092kk00</span></p>
                    <p>Date <span className="valor">7/31/18</span></p>
                    <p>Due Date <span className="valor">7/31/18</span></p>
                    <p>Terms <span className="valor">Net 0</span></p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Bill To</h5>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">New Balance upon Re-booking</h5>
                    <p className="nuevo-balance">$452.45</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Invoice;