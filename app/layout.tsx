import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
})

const siteUrl = 'https://lafontilla.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'La Fontilla | Pizzaria & Esfiharia',
  description:
    'Conheça a La Fontilla. Pizza, esfiha e um ambiente para toda a família em Jacarezinho e Santo Antônio da Platina. Peça online ou reserve sua mesa.',
  keywords: [
    'La Fontilla',
    'Pizzaria em Jacarezinho',
    'Pizza em Jacarezinho',
    'Pizzaria em Santo Antônio da Platina',
    'Pizza em Santo Antônio da Platina',
    'Esfiharia',
    'Espaço kids',
    'Delivery de pizza',
  ],
  authors: [{ name: 'La Fontilla' }],
  openGraph: {
    title: 'La Fontilla | Pizzaria & Esfiharia',
    description:
      'Pizza, esfiha e um ambiente para toda a família em Jacarezinho e Santo Antônio da Platina. Peça online ou reserve sua mesa.',
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'La Fontilla',
    images: [{ url: '/images/hero-pizza.png', width: 1024, height: 1024, alt: 'Pizza artesanal da La Fontilla' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Fontilla | Pizzaria & Esfiharia',
    description:
      'Pizza, esfiha e um ambiente para toda a família em Jacarezinho e Santo Antônio da Platina.',
    images: ['/images/hero-pizza.png'],
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#202918',
  colorScheme: 'light',
}

const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'La Fontilla — Pizzaria & Esfiharia',
  servesCuisine: ['Pizza', 'Esfiha', 'Italiana'],
  priceRange: '$$',
  image: `${siteUrl}/images/hero-pizza.png`,
  url: siteUrl,
  department: [
    {
      '@type': 'Restaurant',
      name: 'La Fontilla — Jacarezinho',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rua Cel. Figueiredo, 216',
        addressLocality: 'Jacarezinho',
        addressRegion: 'PR',
        postalCode: '86400-000',
        addressCountry: 'BR',
      },
      telephone: '+5543991095947',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.3',
        reviewCount: '78',
      },
    },
    {
      '@type': 'Restaurant',
      name: 'La Fontilla — Santo Antônio da Platina',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Av. Frei Guilherme Maria, 1033',
        addressLocality: 'Santo Antônio da Platina',
        addressRegion: 'PR',
        postalCode: '86430-000',
        addressCountry: 'BR',
      },
      telephone: '+5543991095947',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${manrope.variable} bg-background`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
