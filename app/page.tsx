
import React from 'react';
import './globals.css'
import { SignOutButton } from '@clerk/nextjs';

function HomePage({children,
}: {
  children: React.ReactNode
}) {
  return (

      <html lang="en">
        <body>
          
        {children}
        

        </body>
      </html>
    
  )
}
export default HomePage;




  