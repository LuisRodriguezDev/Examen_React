import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Overview.css';

const Overview = () => {
  return (
    <div className="Overview">
      <div className="container">
        <div className="card">
          <div className="card-header encabezado-carta">
            Overview
          </div>
          <div className="card-body">
            <div className="card-group">
              <div className="card">
                <div className="card-body">
                  <p>
                    Status 
                    <span className="valor status">
                    <FontAwesomeIcon
                      icon="check"
                      size="sm"
                      color="#00E36A"
                    />
                    Active
                    </span>
                  </p>
                  <p>Method <span className="valor">Multimodal</span></p>
                  <p>Capacity <span className="valor">LCL</span></p>
                  <p>Drayage <span className="valor">Pickup, Delivery</span></p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <p>Incoterms <span className="valor">FOB</span></p>
                  <p>Service Options <span className="valor">Deconsolidation, Customs Clearance, </span></p>
                  <p>Hazardous or forbidden commoditties <span className="valor">Lithium Batteries, Hazmat</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;