export type ColorName = keyof typeof COLORS_OBJECT
export type ColorGroup = keyof typeof colorGroupPublicNames
export type ColorRarityTier = keyof typeof colorRarityPublicNames

export interface Color {
  name: ColorName
  group: ColorGroup
  tier: ColorRarityTier
  code: string
}

export const COLORS_OBJECT = {
  Fortune: {
    code: '0xffc834',
    rarity: 3,
    group: 'special',
    tier: 'very_rare',
  },
  'Aggressive Azure': {
    code: '0xf0ffff',
    rarity: 5,
    group: 'blue',
    tier: 'very_rare',
  },
  Honeydew: {
    code: '0xe0eee0',
    rarity: 5,
    group: 'earthy',
    tier: 'very_rare',
  },
  Gainsboro: {
    code: '0x33cccc',
    rarity: 5,
    group: 'green',
    tier: 'very_rare',
  },
  'Slate Gray': {
    code: '0x708090',
    rarity: 4,
    group: 'gray_scale',
    tier: 'very_rare',
  },
  'Stronghold Ivory': {
    code: '0xcdcdc1',
    rarity: 4,
    group: 'gray_scale',
    tier: 'very_rare',
  },
  'Arctic Snow': {
    code: '0xfffafa',
    rarity: 6,
    group: 'gray_scale',
    tier: 'very_rare',
  },
  'Peach Puff': {
    code: '0xffdab9',
    rarity: 5,
    group: 'red_orange',
    tier: 'very_rare',
  },
  Cornsilk: {
    code: '0xfff8dc',
    rarity: 5,
    group: 'tan_yellow',
    tier: 'very_rare',
  },
  'Papaya Whip': {
    code: '0xffefd5',
    rarity: 5,
    group: 'purple_pink',
    tier: 'very_rare',
  },
  'Alice Blue': {
    code: '0xf0f8ff',
    rarity: 7,
    group: 'blue',
    tier: 'rare',
  },
  'Cadet Blue': {
    code: '0x5f9ea0',
    rarity: 7,
    group: 'blue',
    tier: 'rare',
  },
  'Powder Blue': {
    code: '0xb0e0e6',
    rarity: 7,
    group: 'blue',
    tier: 'rare',
  },
  'Royal Blue': {
    code: '0x4169e1',
    rarity: 7,
    group: 'blue',
    tier: 'rare',
  },
  'Absolute Zero': {
    code: '0x0048ba',
    rarity: 8,
    group: 'blue',
    tier: 'rare',
  },
  'Rosy Brown': {
    code: '0xbc8f8f',
    rarity: 7,
    group: 'earthy',
    tier: 'rare',
  },
  'Antique Brass': {
    code: '0xcd9575',
    rarity: 8,
    group: 'earthy',
    tier: 'rare',
  },
  Chartreuse: {
    code: '0x7fff00',
    rarity: 7,
    group: 'green',
    tier: 'rare',
  },
  'Sir Aquamarine': {
    code: '0x7fffd4',
    rarity: 7,
    group: 'green',
    tier: 'rare',
  },
  'Ghost White': {
    code: '0xffffff',
    rarity: 7,
    group: 'gray_scale',
    tier: 'rare',
  },
  'White Smoke': {
    code: '0xf5f5f5',
    rarity: 7,
    group: 'gray_scale',
    tier: 'rare',
  },
  'Coral Wave': {
    code: '0xff7f50',
    rarity: 7,
    group: 'red_orange',
    tier: 'rare',
  },
  Firebrick: {
    code: '0xb22222',
    rarity: 8,
    group: 'red_orange',
    tier: 'rare',
  },
  'Golden Rod': {
    code: '0xeee8aa',
    rarity: 7,
    group: 'tan_yellow',
    tier: 'rare',
  },
  Burlywood: {
    code: '0xdeb887',
    rarity: 8,
    group: 'tan_yellow',
    tier: 'rare',
  },
  'Misty Rose': {
    code: '0xffe4e1',
    rarity: 7,
    group: 'purple_pink',
    tier: 'rare',
  },
  'Pale Violet': {
    code: '0xdb7093',
    rarity: 8,
    group: 'purple_pink',
    tier: 'rare',
  },
  'Air Superiority Blue': {
    code: '0x72a0c1',
    rarity: 9,
    group: 'blue',
    tier: 'common',
  },
  'Azure Mist': {
    code: '0xf0ffff',
    rarity: 9,
    group: 'blue',
    tier: 'common',
  },
  'Cosmic Cobalt': {
    code: '0x2e2d88',
    rarity: 10,
    group: 'blue',
    tier: 'common',
  },
  Azure: {
    code: '0x007fff',
    rarity: 10,
    group: 'blue',
    tier: 'common',
  },
  'Bondi Blue': {
    code: '0x0095b6',
    rarity: 10,
    group: 'blue',
    tier: 'common',
  },
  'Bleu De France': {
    code: '0x318ce7',
    rarity: 10,
    group: 'blue',
    tier: 'common',
  },
  'Celestial Blue': {
    code: '0x4997d0',
    rarity: 10,
    group: 'blue',
    tier: 'common',
  },
  'Cerulean Frost': {
    code: '0x6d9bc3',
    rarity: 10,
    group: 'blue',
    tier: 'common',
  },
  'Egyptian Blue': {
    code: '0x1034a6',
    rarity: 10,
    group: 'blue',
    tier: 'common',
  },
  'Bright Cerulean': {
    code: '0x1dacd6',
    rarity: 10,
    group: 'blue',
    tier: 'common',
  },
  'Brown Sugar': {
    code: '0xaf6e4d',
    rarity: 10,
    group: 'earthy',
    tier: 'common',
  },
  'Champagne Papi': {
    code: '0xf1ddcf',
    rarity: 10,
    group: 'earthy',
    tier: 'common',
  },
  Cinereous: {
    code: '0x98817b',
    rarity: 10,
    group: 'earthy',
    tier: 'common',
  },
  'Copper Penny': {
    code: '0xad6f69',
    rarity: 10,
    group: 'earthy',
    tier: 'common',
  },
  'Coyote Brown': {
    code: '0x81613c',
    rarity: 10,
    group: 'earthy',
    tier: 'common',
  },
  'Dark Lava': {
    code: '0x483c32',
    rarity: 10,
    group: 'earthy',
    tier: 'common',
  },
  'Deep Taupe': {
    code: '0x7e5e60',
    rarity: 10,
    group: 'earthy',
    tier: 'common',
  },
  'Field Drab': {
    code: '0x6c541e',
    rarity: 10,
    group: 'earthy',
    tier: 'common',
  },
  Sienna: {
    code: '0x3c1414',
    rarity: 10,
    group: 'earthy',
    tier: 'common',
  },
  Taupe: {
    code: '0x483c32',
    rarity: 10,
    group: 'earthy',
    tier: 'common',
  },
  AO: {
    code: '0x008000',
    rarity: 9,
    group: 'green',
    tier: 'common',
  },
  Feldgrau: {
    code: '0x4d5d53',
    rarity: 10,
    group: 'green',
    tier: 'common',
  },
  'Cal Poly Pomona': {
    code: '0x1e4d2b',
    rarity: 10,
    group: 'green',
    tier: 'common',
  },
  'Caribbean Green': {
    code: '0x00cc99',
    rarity: 10,
    group: 'green',
    tier: 'common',
  },
  'Dark Moss': {
    code: '0x4a5d23',
    rarity: 10,
    group: 'green',
    tier: 'common',
  },
  'Dartmouth Green': {
    code: '0x00703c',
    rarity: 10,
    group: 'green',
    tier: 'common',
  },
  'Space Sparkle': {
    code: '0x4a646c',
    rarity: 10,
    group: 'green',
    tier: 'common',
  },
  'Anti-Flash White': {
    code: '0xf2f3f4',
    rarity: 9,
    group: 'gray_scale',
    tier: 'common',
  },
  'Antique White': {
    code: '0xfaebd7',
    rarity: 9,
    group: 'gray_scale',
    tier: 'common',
  },
  'Battle Horse Gray': {
    code: '0x848482',
    rarity: 9,
    group: 'gray_scale',
    tier: 'common',
  },
  'Midnight Black': {
    code: '0x000000',
    rarity: 9,
    group: 'gray_scale',
    tier: 'common',
  },
  Alabaster: {
    code: '0xf2f0e6',
    rarity: 10,
    group: 'gray_scale',
    tier: 'common',
  },
  'Black Chocolate': {
    code: '0x1b1811',
    rarity: 10,
    group: 'gray_scale',
    tier: 'common',
  },
  'Shadow Fighter': {
    code: '0xbfafb2',
    rarity: 10,
    group: 'gray_scale',
    tier: 'common',
  },
  'Alizarin Crimson': {
    code: '0xe32636',
    rarity: 9,
    group: 'red_orange',
    tier: 'common',
  },
  'Atomic Tangerine': {
    code: '0xff9966',
    rarity: 9,
    group: 'red_orange',
    tier: 'common',
  },
  'Big Dip O’Ruby': {
    code: '0x9c2542',
    rarity: 9,
    group: 'red_orange',
    tier: 'common',
  },
  'Bittersweet Shimmer': {
    code: '0xbf4f51',
    rarity: 9,
    group: 'red_orange',
    tier: 'common',
  },
  'Colombo Spice': {
    code: '0xff3800',
    rarity: 10,
    group: 'red_orange',
    tier: 'common',
  },
  'Burnt Umber': {
    code: '0x8a3324',
    rarity: 10,
    group: 'red_orange',
    tier: 'common',
  },
  'Crimson Tide': {
    code: '0xdc143c',
    rarity: 10,
    group: 'red_orange',
    tier: 'common',
  },
  'English Vermillion': {
    code: '0xcc474b',
    rarity: 10,
    group: 'red_orange',
    tier: 'common',
  },
  'Fuzzy Wuzzy': {
    code: '0xcc6666',
    rarity: 10,
    group: 'red_orange',
    tier: 'common',
  },
  'Burnt Sienna': {
    code: '0xe97451',
    rarity: 10,
    group: 'red_orange',
    tier: 'common',
  },
  Cinnabar: {
    code: '0xe34234',
    rarity: 10,
    group: 'red_orange',
    tier: 'common',
  },
  'Fire Opal': {
    code: '0xe95c4b',
    rarity: 10,
    group: 'red_orange',
    tier: 'common',
  },
  'Arylide Yellow': {
    code: '0xe9d66b',
    rarity: 9,
    group: 'tan_yellow',
    tier: 'common',
  },
  'Banana Mania': {
    code: '0xfae7b5',
    rarity: 9,
    group: 'tan_yellow',
    tier: 'common',
  },
  'Buff Gold': {
    code: '0xf0dc82',
    rarity: 10,
    group: 'tan_yellow',
    tier: 'common',
  },
  'Café Au Lait': {
    code: '0xa67b5b',
    rarity: 10,
    group: 'tan_yellow',
    tier: 'common',
  },
  'Chrome Yellow': {
    code: '0xffa700',
    rarity: 10,
    group: 'tan_yellow',
    tier: 'common',
  },
  'Cosmic Latte': {
    code: '0xfff8e7',
    rarity: 10,
    group: 'tan_yellow',
    tier: 'common',
  },
  'Desert Sand': {
    code: '0xedc9af',
    rarity: 10,
    group: 'tan_yellow',
    tier: 'common',
  },
  Fawn: {
    code: '0xe5aa70',
    rarity: 10,
    group: 'tan_yellow',
    tier: 'common',
  },
  Flex: {
    code: '0xeedc82',
    rarity: 10,
    group: 'tan_yellow',
    tier: 'common',
  },
  'Hairy Canary': {
    code: '0xffff99',
    rarity: 10,
    group: 'tan_yellow',
    tier: 'common',
  },
  'Mystic Maroon': {
    code: '0xb03060',
    rarity: 9,
    group: 'purple_pink',
    tier: 'common',
  },
  'Oval Orchid': {
    code: '0xda70d6',
    rarity: 9,
    group: 'purple_pink',
    tier: 'common',
  },
  Thistle: {
    code: '0xd8bfd8',
    rarity: 9,
    group: 'purple_pink',
    tier: 'common',
  },
  Amethyst: {
    code: '0x9966cc',
    rarity: 10,
    group: 'purple_pink',
    tier: 'common',
  },
  'Baker-Miller Pink': {
    code: '0xff91af',
    rarity: 10,
    group: 'purple_pink',
    tier: 'common',
  },
  Byzantine: {
    code: '0xbd33a4',
    rarity: 10,
    group: 'purple_pink',
    tier: 'common',
  },
  Byzantium: {
    code: '0x702963',
    rarity: 10,
    group: 'purple_pink',
    tier: 'common',
  },
  'China Pink': {
    code: '0xde6fa1',
    rarity: 10,
    group: 'purple_pink',
    tier: 'common',
  },
  'China Rose': {
    code: '0xa8516e',
    rarity: 10,
    group: 'purple_pink',
    tier: 'common',
  },
  'Cinnamon Satin': {
    code: '0xcd607e',
    rarity: 10,
    group: 'purple_pink',
    tier: 'common',
  },
  'Cotton Candy': {
    code: '0xffbcd9',
    rarity: 10,
    group: 'purple_pink',
    tier: 'common',
  },
  Cyclamen: {
    code: '0xf56fa1',
    rarity: 10,
    group: 'purple_pink',
    tier: 'common',
  },
  'Dark Byzantium': {
    code: '0x5d3954',
    rarity: 10,
    group: 'purple_pink',
    tier: 'common',
  },
  Destiny: {
    code: '0x872657',
    rarity: 10,
    group: 'purple_pink',
    tier: 'common',
  },
  'Electric Violet': {
    code: '0x8f00ff',
    rarity: 10,
    group: 'purple_pink',
    tier: 'common',
  },
  Eminence: {
    code: '0x6c3082',
    rarity: 10,
    group: 'purple_pink',
    tier: 'common',
  },
  Fandango: {
    code: '0xb53389',
    rarity: 10,
    group: 'purple_pink',
    tier: 'common',
  },
  'Fiery Rose': {
    code: '0xff5470',
    rarity: 10,
    group: 'purple_pink',
    tier: 'common',
  },
  'Suave Mauve': {
    code: '0xd473d4',
    rarity: 10,
    group: 'purple_pink',
    tier: 'common',
  },
}

export const COLORS = Object.entries(COLORS_OBJECT).map(
  ([name, { code, rarity, group, tier }]) => ({
    name,
    code,
    rarity,
    group,
    tier,
  }),
)

const groupColorsByProperty = (propertyToGroupBy: keyof Color) =>
  COLORS.reduce((temp, element) => {
    if (!temp[element[propertyToGroupBy]]) {
      temp[element[propertyToGroupBy]] = []
    }
    temp[element[propertyToGroupBy]].push(element)
    return temp
  }, {})

interface ColorsCollection {
  [key: string]: ColorName[]
}

const toArrayOfColorsCollection = (colorsCollection: ColorsCollection) =>
  Object.entries(colorsCollection).map(([name, colors]) => ({
    name,
    colors,
  }))

export const COLOR_GROUPS_OBJECT = groupColorsByProperty('group')

export const COLOR_GROUPS = toArrayOfColorsCollection(COLOR_GROUPS_OBJECT)

export const COLOR_RARITY_OBJECT = groupColorsByProperty('tier')

export const COLOR_RARITY = toArrayOfColorsCollection(COLOR_RARITY_OBJECT)

export const colorGroupPublicNames = {
  blue: 'Neptune',
  earthy: 'Earth',
  special: 'Special',
  gray_scale: 'Moon',
  green: 'Wild',
  purple_pink: 'Mystical',
  red_orange: 'Fiery',
  tan_yellow: 'Classic',
}

export const colorRarityPublicNames = {
  very_rare: 'Super Rare',
  rare: 'Rare',
  common: 'Common',
}
