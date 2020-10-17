import React from 'react';
import NavBar from './Components/NavBar';
import Jumbotron from './Components/ Jumbotron';
import Footer from './Components/Footer';
import "./CSS/navbar.css";
import './CSS/menuItem.css';
import './CSS/jumbotron.css';
import './CSS/footer.css';
import './CSS/socialMedia.css';

function App() {
  return (
    <div className="App">
      < NavBar />
      < Jumbotron />
      < Footer />
    </div>
  );
}

export default App;
