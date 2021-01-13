import React from 'react';

export default function NoLayout({ children }) {
  return (
    <>
      <main style={{minHeight: '85vh'}}>
        {children}
      </main>
    </>
  )
}