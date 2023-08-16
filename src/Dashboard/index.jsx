import React from 'react';
import AdminLayout from './components/AdminLayout';
import DashbordHome from './container/Home';

const index = () => {
  return (
    <div>
      <AdminLayout>
        <DashbordHome/>
      </AdminLayout>
    </div>
  );
};

export default index;
