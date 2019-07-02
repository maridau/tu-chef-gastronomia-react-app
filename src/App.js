import React from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Register from './Register.js';

class App extends React.Component {
  render() {

      return (
        <main>
          <Header/>
          <Register/>
          <Footer/>
        </main>
      );
    }
  }

export default App;
