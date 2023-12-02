import type { Metadata } from 'next'
import ThemeProvider from '@/providers/Theme'

import StyledServerRegister from '../infra/StyledServerRegister'
import Layout from '../components/Layout'

export const metadata: Metadata = {
  title: 'PicsArt Admin',
  description: 'The best dashboard around the world',
}

interface IRootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <StyledServerRegister>
          <ThemeProvider>
            <Layout>{children}</Layout>
          </ThemeProvider>
        </StyledServerRegister>
      </body>
    </html>
  )
}
