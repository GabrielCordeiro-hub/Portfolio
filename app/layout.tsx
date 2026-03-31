import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-poppins',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Gabriel Cordeiro | Front-end Developer',
  description: 'Front-end Developer specializing in React, Next.js, Tailwind CSS and modern JavaScript. Trained through Alura since 2023. Building responsive, fast and beautiful web experiences.',
  keywords: ['Front-end Developer', 'React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Git'],
  authors: [{ name: 'Gabriel Cordeiro', url: 'https://github.com/' }],
  openGraph: {
    title: 'Gabriel Cordeiro | Front-end Developer',
    description: 'Front-end Developer specializing in React, Next.js, Tailwind CSS and modern JavaScript.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gabriel Cordeiro | Front-end Developer',
    description: 'Front-end Developer specializing in React, Next.js, Tailwind CSS and modern JavaScript.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
