import React from 'react';
import './App.css'; // Importing the CSS file

// Importing components
import Navbar from './components/Navbar';
import LeftContainer from './components/LeftContainer';
import RightContainer from './components/RightContainer';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="progress d-flex flex-column" style={{ backgroundColor: 'gainsboro', height: '100%' }}>
          <div className="row">
            <div className="col-md-7">
              <LeftContainer />
            </div>
            <div className="col-md-4">
              <RightContainer />
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </div>
  );
}

export default App;
