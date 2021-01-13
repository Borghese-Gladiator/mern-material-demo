import React from 'react';

// components
import Navbar from './Navbar';
import Footer from '../../Footer';

export default function AuthLayout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{minHeight: '85vh'}}>
        {children}
      </main>
      <Footer />
    </>
  )
}