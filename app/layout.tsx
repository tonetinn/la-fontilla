import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { INSTAGRAM, UNITS } from '@/lib/data'
import '@fontsource/cormorant-garamond/400.css'
import '@fontsource/cormorant-garamond/500.css'
import '@fontsource/cormorant-garamond/600.css'
import '@fontsource/cormorant-garamond/700.css'
import '@fontsource/manrope/400.css'
import '@fontsource/manrope/500.css'
import '@fontsource/manrope/600.css'
import '@fontsource/manrope/700.css'
import './globals.css'

const siteUrl = 'https://lafontilla.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: '/' },
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
  applicationName: 'La Fontilla',
  category: 'restaurant',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: light)' },
    ],
    apple: '/apple-icon.png',
  },
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
}

export const viewport: Viewport = {
  themeColor: '#202918',
  colorScheme: 'light',
}

const restaurantSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Restaurant',
      '@id': `${siteUrl}/#jacarezinho`,
      name: 'La Fontilla — Jacarezinho',
      image: `${siteUrl}/images/fachada-jacarezinho.png`,
      url: `${siteUrl}/#unidades`,
      menu: UNITS.jacarezinho.order,
      servesCuisine: ['Pizza', 'Esfiha'],
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rua Cel. Figueiredo, 216',
        addressLocality: 'Jacarezinho',
        addressRegion: 'PR',
        postalCode: '86400-000',
        addressCountry: 'BR',
      },
      telephone: '+5543991095947',
      sameAs: [INSTAGRAM],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.3',
        reviewCount: '78',
      },
    },
    {
      '@type': 'Restaurant',
      '@id': `${siteUrl}/#santo-antonio-da-platina`,
      name: 'La Fontilla — Santo Antônio da Platina',
      image: `${siteUrl}/images/fachada-santo-antonio.png`,
      url: `${siteUrl}/#unidades`,
      menu: UNITS['santo-antonio'].order,
      servesCuisine: ['Pizza', 'Esfiha'],
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Av. Frei Guilherme Maria, 1033',
        addressLocality: 'Santo Antônio da Platina',
        addressRegion: 'PR',
        postalCode: '86430-000',
        addressCountry: 'BR',
      },
      telephone: '+5543991095947',
      sameAs: [INSTAGRAM],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
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
