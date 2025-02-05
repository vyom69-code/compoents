import './globals.css'
import type { Metadata } from 'next'
import React from 'react'; // Import React

export const metadata: Metadata = {
  title: 'WildMind',
  description: 'A beautiful sign up page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}