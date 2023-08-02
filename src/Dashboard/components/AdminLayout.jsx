import React from 'react';
import NavbarComponent from './Navbar';
import Sidebar from './Sidebar';

const AdminLayout = ({ children }) => {
    return (
        <>
            <NavbarComponent />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        {children}
                    </main>
                </div>
            </div> 
        </>
    );
};

export default AdminLayout;
