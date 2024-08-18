
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'

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




  