const CDN = "https://patek-res.cloudinary.com/image/upload/f_auto,q_auto/dfsmedia";

export interface Collection {
  name: string;
  slug: string;
  descriptor: string;
  heroImage: string;
  cardImage: string;
  narrative: string[];
  featured?: boolean;
}

export const collections: Collection[] = [
  {
    name: "Twenty~4",
    slug: "twenty-4",
    descriptor: "Designed for the woman who shapes her own time",
    heroImage: `${CDN}/7bfbf155971a477a89e3de9ec33f1af2/24838-source/pp-twenty4-702051-banner-16-9-7300-1200r-001`,
    cardImage: `${CDN}/7bfbf155971a477a89e3de9ec33f1af2/24838-source/pp-twenty4-702051-banner-16-9-7300-1200r-001`,
    narrative: [
      "The Twenty~4 is Patek Philippe's contemporary expression of feminine elegance — a collection that refuses to confine a woman's watch to decoration.",
      "First introduced in 1999, the Twenty~4 was conceived for women who wear time actively, not passively. Its name speaks to presence at every hour — a companion through the full breadth of a day lived on one's own terms.",
    ],
    featured: true,
  },
  {
    name: "Calatrava",
    slug: "calatrava",
    descriptor: "The purest expression of round-watch classicism",
    heroImage: `${CDN}/7bfbf155971a477a89e3de9ec33f1af2/14685-source/pp-calatrava-702033-banner-16-9-5227j-001`,
    cardImage: `${CDN}/7bfbf155971a477a89e3de9ec33f1af2/14685-source/pp-calatrava-702033-banner-16-9-5227j-001`,
    narrative: [
      "Since 1932, the Calatrava has been the archetype of the round dress watch. Its design follows a philosophy of reduction: every element that does not serve legibility or beauty is removed.",
      "Named after the Calatrava cross — the emblem of Patek Philippe — the collection embodies a classicism that never becomes conservative. The proportions are recalibrated with each generation, but the principle remains: absolute purity of line.",
    ],
    featured: true,
  },
  {
    name: "Complications",
    slug: "complications",
    descriptor: "Where mechanical mastery serves daily purpose",
    heroImage: `${CDN}/7bfbf155971a477a89e3de9ec33f1af2/14717-source/pp-complications-702035-banner-16-9-5905-1a-001`,
    cardImage: `${CDN}/7bfbf155971a477a89e3de9ec33f1af2/14717-source/pp-complications-702035-banner-16-9-5905-1a-001`,
    narrative: [
      "Patek Philippe's Complications collection brings additional functions beyond hours, minutes, and seconds into watches designed for real life — not display cases.",
      "Annual calendars, world time indicators, chronographs: each complication is a mechanical solution to a practical question, executed with a refinement that makes the complexity invisible on the wrist.",
    ],
    featured: true,
  },
  {
    name: "Aquanaut",
    slug: "aquanaut",
    descriptor: "Contemporary spirit, enduring calibre",
    heroImage: `${CDN}/7bfbf155971a477a89e3de9ec33f1af2/14701-source/pp-aquanaut-702034-banner-16-9-5168g-010`,
    cardImage: `${CDN}/7bfbf155971a477a89e3de9ec33f1af2/14701-source/pp-aquanaut-702034-banner-16-9-5168g-010`,
    narrative: [
      "Born in 1997, the Aquanaut introduced a new material language to Patek Philippe: the tropical strap, the rounded octagonal bezel, and an embossed dial pattern that became an icon of contemporary watchmaking.",
      "It carries the same calibre quality and hand-finishing as every Patek Philippe, but wraps it in a form that speaks to modern movement — travel, sport, and the kind of active life that does not announce itself.",
    ],
    featured: true,
  },
  {
    name: "Nautilus",
    slug: "nautilus",
    descriptor: "Born from architecture, shaped for the wrist",
    heroImage: `${CDN}/7bfbf155971a477a89e3de9ec33f1af2/14733-source/pp-nautilus-702037-banner-16-9-5811-1g-001`,
    cardImage: `${CDN}/7bfbf155971a477a89e3de9ec33f1af2/14733-source/pp-nautilus-702037-banner-16-9-5811-1g-001`,
    narrative: [
      "Designed by Gérald Genta in 1976, the Nautilus redefined what a luxury sports watch could be. Its porthole-shaped case — inspired by a ship's window — was unlike anything the industry had seen.",
      "Nearly five decades later, the Nautilus remains one of the most recognized and desired watches in the world. Its horizontally embossed dial, integrated bracelet, and water resistance create a watch that is at once refined and resilient.",
    ],
    featured: true,
  },
  {
    name: "Grand Complications",
    slug: "grand-complications",
    descriptor: "The summit of mechanical watchmaking",
    heroImage: `${CDN}/7bfbf155971a477a89e3de9ec33f1af2/14749-source/pp-grand-complications-702036-banner-16-9-5270-1r-001`,
    cardImage: `${CDN}/7bfbf155971a477a89e3de9ec33f1af2/14749-source/pp-grand-complications-702036-banner-16-9-5270-1r-001`,
    narrative: [
      "Grand Complications represent the highest form of mechanical watchmaking — minute repeaters, perpetual calendars, split-seconds chronographs, and tourbillons, sometimes combined within a single movement.",
      "Each Grand Complication requires years of development and months of hand-assembly. These are watches that embody the full depth of Patek Philippe's technical capability — made not because they are needed, but because they are possible.",
    ],
  },
  {
    name: "Gondolo",
    slug: "gondolo",
    descriptor: "Art Deco geometry, contemporary presence",
    heroImage: `${CDN}/7bfbf155971a477a89e3de9ec33f1af2/14765-source/pp-gondolo-702040-banner-16-9-7042-100g-001`,
    cardImage: `${CDN}/7bfbf155971a477a89e3de9ec33f1af2/14765-source/pp-gondolo-702040-banner-16-9-7042-100g-001`,
    narrative: [
      "The Gondolo collection takes its name from Gondolo & Labouriau, the legendary Brazilian retailer that commissioned exclusive Patek Philippe pieces in the early twentieth century.",
      "Today's Gondolo watches retain the Art Deco spirit of those original commissions — tonneau, rectangle, and cushion-shaped cases that offer an alternative to the round watch, with the same hand-finished movements within.",
    ],
  },
  {
    name: "Golden Ellipse",
    slug: "golden-ellipse",
    descriptor: "The golden ratio, worn on the wrist",
    heroImage: `${CDN}/7bfbf155971a477a89e3de9ec33f1af2/14781-source/pp-golden-ellipse-702042-banner-16-9-5738-51g-001`,
    cardImage: `${CDN}/7bfbf155971a477a89e3de9ec33f1af2/14781-source/pp-golden-ellipse-702042-banner-16-9-5738-51g-001`,
    narrative: [
      "Introduced in 1968, the Golden Ellipse was Patek Philippe's answer to the design revolution of the late 1960s. Its case proportions follow the golden ratio — 1:1.6181 — creating a form that is mathematically harmonious.",
      "The elliptical shape sits between the formal and the casual, the classical and the modern. It is a design that has never needed updating because its proportions are, quite literally, universally balanced.",
    ],
  },
  {
    name: "Rare Handcrafts",
    slug: "rare-handcrafts",
    descriptor: "Métiers d'art preserved in mechanical time",
    heroImage: `${CDN}/7bfbf155971a477a89e3de9ec33f1af2/24854-source/pp-rare-handcrafts-702044-banner-16-9-20084m-001`,
    cardImage: `${CDN}/7bfbf155971a477a89e3de9ec33f1af2/24854-source/pp-rare-handcrafts-702044-banner-16-9-20084m-001`,
    narrative: [
      "Patek Philippe's Rare Handcrafts collection preserves artisanal techniques that are disappearing from the world — cloisonné enamel, wood micro-marquetry, hand-engraving, paillonné, and miniature painting.",
      "Each piece is unique or produced in very small series. These are watches that exist at the intersection of horology and fine art, where the dial becomes a canvas for techniques that predate the mechanical movement itself.",
    ],
  },
  {
    name: "Calatrava Pilot Travel Time",
    slug: "calatrava-pilot",
    descriptor: "Vintage aviation codes, dual time zones",
    heroImage: `${CDN}/7bfbf155971a477a89e3de9ec33f1af2/14797-source/pp-calatrava-pilot-travel-time-702038-banner-16-9-5524g-001`,
    cardImage: `${CDN}/7bfbf155971a477a89e3de9ec33f1af2/14797-source/pp-calatrava-pilot-travel-time-702038-banner-16-9-5524g-001`,
    narrative: [
      "The Calatrava Pilot Travel Time draws from the aesthetic codes of 1930s aviation instruments — large luminescent numerals, a legible dial layout, and a sense of functional clarity.",
      "Beneath the vintage-inspired surface sits a sophisticated dual time zone mechanism with a patented local/home time display and pusher-activated date adjustment. It is a travel watch that respects both origin and destination.",
    ],
  },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}
