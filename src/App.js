import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <h1 className="App">App works!</h1>
      </div>
    );
  }
}
export default App;
