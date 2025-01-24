import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Log In - Hoshizora',
  description: 'LOGIn to Hoshizora'
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}