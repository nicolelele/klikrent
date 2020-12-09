import React from 'react';
import  ProductsList from '../ProductsList/ProductsList';
import './Modal.css';

export default class Modal extends React.Component {
  close = e => {
    this.props.close && this.props.close(e);
  };

  render() {
    if (!this.props.open) {
      return null;
    }
    return (
      <div className="AppModal" id="modal">
        <div className="AppModalHeader d-flex justify-content-between p-2">
          <h2 className="py-2 py-md-0">Direct request</h2>
          <button type="button" className="close close-btn px-2" onClick={this.close}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="AppModalContent px-5 pt-3">
          <ProductsList />
        </div>
      </div>
    );
  }
}
