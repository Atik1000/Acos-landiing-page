import React from 'react';
import Navbar from './components/Navbar';
import LeftSidebar from './components/LeftSidebar';

const AdminLayout = ({children}) => {
    return (
        <div>
            <Navbar />
            {children}
            <LeftSidebar />
            
        </div>
    );
};

export default AdminLayout;