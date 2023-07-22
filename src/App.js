
import React from 'react';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import Home from './container/Home';
import NotFound from './container/notfound';
import Layout from './components/Layout'
import HowWork from './container/HowWork';
import FAQ from './container/Faq';
import TryItFree from './container/TryItFree';
// You can create a NotFound component to handle 404 errors
const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/how-its-work">/how-its-work</Link></li>
        <li><Link to="/faq">faq</Link></li>
        <li><Link to ="/try-it-free">/try-it-free</Link></li>
      </ul>
    </nav>
  );
};


const App = () => {
  return (
    
    <Router>
      <Layout>
        <Navigation />
     <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/how-its-work" element={<HowWork />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/try-it-free" element={<TryItFree/> } />
          <Route path="*" element={<NotFound />} />
          </Routes>
      </Layout>
      </Router>
      
  );
};

export default App;
