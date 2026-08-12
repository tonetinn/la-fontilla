import { UnitSelectorProvider } from '@/components/unit-selector'
import { SiteHeader } from '@/components/site-header'
import { MobileBottomNav } from '@/components/mobile-bottom-nav'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/sections/hero'
import { Marquee } from '@/components/sections/marquee'
import { Gastronomia } from '@/components/sections/gastronomia'
import { CheeseMoment } from '@/components/sections/cheese-moment'
import { Cardapio } from '@/components/sections/cardapio'
import { Experiencia } from '@/components/sections/experiencia'
import { EspacoKids } from '@/components/sections/espaco-kids'
import { AqueleTipoDeNoite } from '@/components/sections/aquele-tipo-de-noite'
import { Avaliacoes } from '@/components/sections/avaliacoes'
import { Promos } from '@/components/sections/promos'
import { Unidades } from '@/components/sections/unidades'
import { InstagramSection } from '@/components/sections/instagram'
import { CtaFinal } from '@/components/sections/cta-final'

export default function Page() {
  return (
    <UnitSelectorProvider>
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <Gastronomia />
        <CheeseMoment />
        <Cardapio />
        <Experiencia />
        <EspacoKids />
        <AqueleTipoDeNoite />
        <Avaliacoes />
        <Promos />
        <Unidades />
        <InstagramSection />
        <CtaFinal />
      </main>
      <SiteFooter />
      <MobileBottomNav />
    </UnitSelectorProvider>
  )
}
