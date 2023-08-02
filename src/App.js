import React from 'react';
import {
 
  Route,
  Routes,
} from 'react-router-dom';
import Layout from './LandingPage/components/Layout';
import FAQ from './LandingPage/container/Faq';
import Home from './LandingPage/container/Home';
import HowWork from './LandingPage/container/HowWork';
import NotFound from './LandingPage/container/notfound';
import Pricing from './LandingPage/container/Pricing';
import DownloadBulk from './LandingPage/container/DownloadBulk';
import Contact from './LandingPage/container/Contact';
import SignUp from './LandingPage/container/SignUp';
import AdminLayout from './admin/components/AdminLayout';

const App = () => {
  return (
    <>
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/how-its-work' element={<HowWork />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/downloadbulk' element={<DownloadBulk />} />
        <Route path='/contact' element={<Contact />} />
          <Route path='/sign-up' element={<SignUp />} />   
        <Route path='/admin' element={<AdminLayout />} />     
        <Route path='*' element={<NotFound />} />
        
      </Routes>
      </Layout>
      </>
  );
};

export default App;
