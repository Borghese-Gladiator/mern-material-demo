import React from 'react';

// components
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}