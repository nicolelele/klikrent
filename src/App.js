import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Modal from './components/Modal/Modal';
import './App.css';

class App extends React.Component {
  state = {
    open: false
  };

  toggleModal = e => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Modal close={this.toggleModal} open={this.state.open}></Modal>
        <div className="AppContent container d-flex align-items-center justify-content-center">
          <button type="button" className="btn btn-light btn-inquiry py-md-3 px-md-4" onClick={e => { this.toggleModal() }}>Start inquiry</button>
        </div>
      </div>
    );
  }
}
export default App;
