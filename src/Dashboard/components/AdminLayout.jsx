import '../Style/adminLayout.css';

import NavbarComponent from './Navbar';
import React from 'react';
import Sidebar from './Sidebar';

const AdminLayout = ({ children }) => {
    return (
        <div style={{ minHeight: '100vh' }}>
            <NavbarComponent />
            <div className="container-fluid" style={{ height: '100%' }}>
                <div className="row" style={{ height: '100%' }}>
                    <div className="dashboard-layout">
                        <div className="col-md-4">
                            <Sidebar />
                        </div>
                        <div className="col-md-8">
                            <main className="" style={{ paddingTop: '25px' }}>
                                {children}
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
