import React from 'react';
import '../Style/adminLayout.css';
import NavbarComponent from './Navbar';
import Sidebar from './Sidebar';

const AdminLayout = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <NavbarComponent />
      <div className='container-fluid' style={{ height: '100%' }}>
        <div className='row' style={{ height: '100%' }}>
          <div className='dashboard-layout'>
            <Sidebar />
            <main
              className='col-md-9 ms-sm-auto col-lg-10'
              style={{ padding: '20px' }}
            >
              {children}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
