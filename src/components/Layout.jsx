import React from 'react';

import Header from '../container/Header';


const Layout = ({children}) => {
    return (
        <>
            <Header/>
            {children}
        </>
    );
};

export default Layout;
