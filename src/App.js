import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard/index';
// import Dashboard from './Dashboard/components/AdminLayout';
import Layout from './LandingPage/components/Layout';
import Contact from './LandingPage/container/Contact';
import FAQ from './LandingPage/container/Faq';
import HowWork from './LandingPage/container/HowWork';
import Pricing from './LandingPage/container/Pricing';
import SignUp from './LandingPage/container/SignUp';
import UploadBulk from './LandingPage/container/UploadBulk';
import NotFound from './LandingPage/container/notfound';
import { HomePage } from './LandingPage/pages/HomePage';

const App = () => {
  return (
    <>
      {/* <Layout> */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/how-its-work'
          element={
            <Layout>
              <HowWork />
            </Layout>
          }
        />
        <Route
          path='/faq'
          element={
            <Layout>
              <FAQ />
            </Layout>
          }
        />
        <Route
          path='/pricing'
          element={
            <Layout>
              <Pricing />
            </Layout>
          }
        />
        <Route
          path='/contact'
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path='/upload-file'
          element={
            <Layout>
              <UploadBulk />
            </Layout>
          }
        />
        <Route
          path='/sign-up'
          element={
            <Layout>
              <SignUp />
            </Layout>
          }
        />
        <Route path='/admin' element={<Dashboard />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {/* </Layout> */}
    </>
  );
};

export default App;
