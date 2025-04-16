import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Sidebar from './Layout/Sidebar';
import Slider from './Component/Slider';
import Latest_Releases from './Component/Latest_Releases';
import Hindi_Releases from './Component/Hindi_Releases';
import Watch_Now from './Component/Watch_Now';
import Action_Extravaganza from './Component/Action_Extravaganza';

function HomePage() {
  return (
    <>
      <Slider />
      <Latest_Releases showData={7} />
      <Action_Extravaganza showData={7} />
      <Hindi_Releases showData={7} />
    </>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Sidebar />
        <div className="body_container">
          <Routes>
            {/* Home Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<HomePage />} />
            
            {/* Category Routes */}
            <Route
              path="/latest-releases"
              element={<Latest_Releases showData={0} />}
            />
            <Route
              path="/action-extravaganza"
              element={<Action_Extravaganza showData={0} />}
            />
            <Route
              path="/hindi-releases"
              element={<Hindi_Releases showData={0} />}
            />
            
            {/* Watch Route - Should be inside Routes */}
            <Route
              path="/watch/:movieId"
              element={<Watch_Now />}
            />
          </Routes>
          
        <Footer />
        </div>
      </div>
    </Router>
  );
}
export default App;