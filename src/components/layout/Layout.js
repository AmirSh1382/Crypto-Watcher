import React from 'react';

// Components
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            { children }
            <Footer />
        </div>
    );
};

export default Layout;