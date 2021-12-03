export const AID_PROGRAMS_COLORS = {
    moss: {
      primary: '#8E9987',
      secondary: '#E1AEFA',
      primaryText: '#FEF7F6',
      secondaryText: '#222',
    },
    orange: {
      primary: '#F46C47',
      secondary: '#23455A',
      primaryText: '#222',
      secondaryText: '#FEF7F6',
    },
    crimson: {
      primary: '#9E2E51',
      secondary: '#A6FA9F',
      primaryText: '#FEF7F6',
      secondaryText: '#222',
    },
    peach: {
      primary: '#F58E57',
      secondary: '#5A583F',
      primaryText: '#FEF7F6',
      secondaryText: '#FEF7F6',
    },
    sky: {
      primary: '#9DD3FB',
      secondary: '#F46C47',
      primaryText: '#222',
      secondaryText: '#FEF7F6',
    },
    pink: {
      primary: '#F489AA',
      secondary: '#7B3E27',
      primaryText: '#FEF7F6',
      secondaryText: '#FEF7F6',
    },
    yellow: {
      primary: '#F8DB47',
      secondary: '#8E9987',
      primaryText: '#222',
      secondaryText: '#FEF7F6',
    },
    slate: {
      primary: '#8DA0C3',
      secondary: '#9E2E51',
      primaryText: '#FEF7F6',
      secondaryText: '#FEF7F6',
    },
    mauve: {
      primary: '#E1AEFA',
      secondary: '#7B3E27',
      primaryText: '#222',
      secondaryText: '#FEF7F6',
    },
    beige: {
      primary: '#9E8163',
      secondary: '#F8DB47',
      primaryText: '#FEF7F6',
      secondaryText: '#222',
    },
    violet: {
      primary: '#572E4F',
      secondary: '#F58E57',
      primaryText: '#FEF7F6',
      secondaryText: '#222',
    },
    purple: {
      primary: '#CC77F8',
      secondary: '#5A583F',
      primaryText: '#222',
      secondaryText: '#FEF7F6',
    },
    blue: {
      primary: '#23455A',
      secondary: '#F489AA',
      primaryText: '#FEF7F6',
      secondaryText: '#222',
    },
    brown: {
      primary: '#7B3E27',
      secondary: '#F8DB47',
      primaryText: '#FEF7F6',
      secondaryText: '#222',
    },
    sand: {
      primary: '#F8EBBE',
      secondary: '#9DD3FB',
      primaryText: '#222',
      secondaryText: '#222',
    },
    forest: {
      primary: '#5A583F',
      secondary: '#F8EBBE',
      primaryText: '#FEF7F6',
      secondaryText: '#222',
    },
  }

  export const AID_PALETTE_ORDER = [
    'moss',
    'orange',
    'crimson',
    'peach',
    'sky',
    'pink',
    'yellow',
    'slate',
    'mauve',
    'beige',
    'violet',
    'purple',
    'blue',
    'brown',
    'sand',
    'forest',
  ] as const
  
  export type AidColorPaletteName = typeof AID_PALETTE_ORDER[number]
  