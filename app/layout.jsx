import "./globals.css"

export const metadata = {
  title: "Frameblox - The Ultimate Framer UI Kit",
  description: "Build and launch your website faster with Frameblox",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}



import './globals.css'