import React from 'react';
import { Navbar, Footer, Modal} from '../Partials/index';

function RootLayout({ children }) {
  return (
    <div className="RootLayout">
        <Navbar />
            { children }
            <Modal />
        <Footer/>
    </div>
  )
}

export default RootLayout