import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
// import UploadText from "./components/Upload";
import RateText from "./components/Rating";

function App() {
 return (
  <Router>
    <Navbar />
    <Route exact path='/'>
      <RateText />
    </Route>

    {/* <Route exact path='/upload'>
      <UploadText />
    </Route> */}
    
  </Router>
 )}

export default App;
