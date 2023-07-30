import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Menu } from './Menu'
import { getFolders } from '@/cli/sdk'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NextContentX',
  description: 'A Tailwind-Typed Content Platform',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const foldersResult = await getFolders();
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <nav className="flex items-center space-x-6 p-6 py-4 bg-gray-100 border-t-4 border-t-sky-500">
          <h1 className="font-semibold tracking-tighter text-gray-700">NextContentX</h1>
          <Menu folders={foldersResult.folders} />
        </nav>
        {children}
      </body>
    </html>
  )
}
