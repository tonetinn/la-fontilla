export type UnitId = 'jacarezinho' | 'santo-antonio'

export type Unit = {
  id: UnitId
  name: string
  shortName: string
  city: string
  address: string[]
  order: string
  reserve: string
  maps: string
}

export const UNITS: Record<UnitId, Unit> = {
  jacarezinho: {
    id: 'jacarezinho',
    name: 'La Fontilla — Jacarezinho',
    shortName: 'Jacarezinho',
    city: 'Jacarezinho · PR',
    address: ['Rua Cel. Figueiredo, 216', 'Jacarezinho - PR', '86400-000'],
    order: 'https://pedido.anota.ai/loja/lafontilla-jacarezinho?f=msa',
    reserve:
      'https://wa.me/5543991095947?text=ol%C3%A1%20quero%20reservar%20uma%20mesa%20na%20pizzaria%20em%20jacarezinho%20',
    maps: 'https://www.google.com/maps/search/?api=1&query=La+Fontilla+Rua+Cel.+Figueiredo+216+Jacarezinho+PR',
  },
  'santo-antonio': {
    id: 'santo-antonio',
    name: 'La Fontilla — Santo Antônio da Platina',
    shortName: 'Santo Antônio da Platina',
    city: 'Santo Antônio da Platina · PR',
    address: ['Av. Frei Guilherme Maria, 1033', 'Centro', 'Santo Antônio da Platina - PR', '86430-000'],
    order: 'https://pedido.anota.ai/loja/LaFontilla-SantoAntoniodaPlatina?from=site',
    reserve:
      'https://wa.me/5543991095947?text=ol%C3%A1%20quero%20reservar%20uma%20mesa%20na%20pizzaria%20em%20Santo%20Antonio%20da%20Platina%20',
    maps: 'https://www.google.com/maps/search/?api=1&query=La+Fontilla+Av.+Frei+Guilherme+Maria+1033+Santo+Antonio+da+Platina+PR',
  },
}

export const UNIT_LIST: Unit[] = [UNITS.jacarezinho, UNITS['santo-antonio']]

export const PROMO_GROUP = 'https://chat.whatsapp.com/DNpyqPA5lDSCr9rCVRRM3Q'
export const INSTAGRAM = 'https://instagram.com/lafontilla_jac'
export const INSTAGRAM_HANDLE = '@lafontilla_jac'

export type ActionKind = 'order' | 'reserve' | 'maps'

export const ACTION_COPY: Record<
  ActionKind,
  { title: string; subtitle: string; cta: string }
> = {
  order: {
    title: 'Qual La Fontilla?',
    subtitle: 'Escolha sua unidade para continuar o pedido.',
    cta: 'Pedir em',
  },
  reserve: {
    title: 'Qual La Fontilla?',
    subtitle: 'Escolha a unidade onde você quer reservar sua mesa.',
    cta: 'Reservar em',
  },
  maps: {
    title: 'Onde você está?',
    subtitle: 'Escolha a unidade para traçar a rota.',
    cta: 'Como chegar —',
  },
}

export function actionUrl(kind: ActionKind, unit: Unit): string {
  if (kind === 'order') return unit.order
  if (kind === 'reserve') return unit.reserve
  return unit.maps
}
