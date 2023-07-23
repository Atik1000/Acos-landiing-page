import React from 'react';
import {
  // BrowserRouter as Router,
  Link,
  Route,
  Routes,
} from 'react-router-dom';
import Layout from './components/Layout';
import FAQ from './container/Faq';
import Home from './container/Home';
import HowWork from './container/HowWork';
import NotFound from './container/notfound';
import TryItFree from './container/TryItFree';
// You can create a NotFound component to handle 404 errors
const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/how-its-work'>/how-its-work</Link>
        </li>
        <li>
          <Link to='/faq'>faq</Link>
        </li>
        <li>
          <Link to='/try-it-free'>/try-it-free</Link>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <Layout>
      {/* <Navigation /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/how-its-work' element={<HowWork />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/try-it-free' element={<TryItFree />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
