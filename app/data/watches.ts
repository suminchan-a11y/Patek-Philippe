export interface Watch {
  reference: string;
  name: string;
  collectionSlug: string;
  movement: string;
  materials: string;
  diameter: string;
  complications: string;
  image: string;
}

const CDN = "https://patek-res.cloudinary.com/image/upload/f_auto,q_auto/dfsmedia";

export const watches: Watch[] = [
  // Twenty~4
  {
    reference: "7300/1200R-001",
    name: "Twenty~4 Automatic",
    collectionSlug: "twenty-4",
    movement: "Calibre 324 S C, self-winding",
    materials: "Rose gold",
    diameter: "36mm",
    complications: "Date, sweep seconds",
    image: `${CDN}/7bfbf155971a477a89e3de9ec33f1af2/24792-source/pp-product-702049-702050-702051-702055-702057-702058-702059-702060-7300-1200r-001`,
  },
  {
    reference: "7118/1200A-001",
    name: "Twenty~4 Automatic",
    collectionSlug: "twenty-4",
    movement: "Calibre 324 S C, self-winding",
    materials: "Stainless steel",
    diameter: "36mm",
    complications: "Date, sweep seconds",
    image: `${CDN}/7bfbf155971a477a89e3de9ec33f1af2/24787-source/pp-product-702049-702050-702051-702055-702057-702058-702059-702060-7118-1200a-001`,
  },

  // Calatrava
  {
    reference: "5227J-001",
    name: "Calatrava",
    collectionSlug: "calatrava",
    movement: "Calibre 324 SC, self-winding",
    materials: "Yellow gold",
    diameter: "39mm",
    complications: "Date, sweep seconds",
    image: `${CDN}/7bfbf155971a477a89e3de9ec33f1af2/14667-source/pp-product-702031-702032-702033-5227j-001`,
  },
  {
    reference: "6119R-001",
    name: "Calatrava",
    collectionSlug: "calatrava",
    movement: "Calibre 30‑255 PS, hand-wound",
    materials: "Rose gold, Clous de Paris bezel",
    diameter: "39mm",
    complications: "Small seconds",
    image: `${CDN}/7bfbf155971a477a89e3de9ec33f1af2/14664-source/pp-product-702031-702032-702033-6119r-001`,
  },

  // Complications
  {
    reference: "5905/1A-001",
    name: "Annual Calendar Flyback Chronograph",
    collectionSlug: "complications",
    movement: "Calibre CH 28-520 QA 24H, self-winding",
    materials: "Stainless steel",
    diameter: "42mm",
    complications: "Annual calendar, flyback chronograph, day-night",
    image: `${CDN}/7bfbf155971a477a89e3de9ec33f1af2/14707-source/pp-product-702035-5905-1a-001`,
  },
  {
    reference: "5230R-001",
    name: "World Time",
    collectionSlug: "complications",
    movement: "Calibre 240 HU, self-winding",
    materials: "Rose gold",
    diameter: "38.5mm",
    complications: "World time, 24 cities",
    image: `${CDN}/7bfbf155971a477a89e3de9ec33f1af2/14709-source/pp-product-702035-5230r-001`,
  },

  // Aquanaut
  {
    reference: "5168G-010",
    name: "Aquanaut",
    collectionSlug: "aquanaut",
    movement: "Calibre 324 S C, self-winding",
    materials: "White gold",
    diameter: "42.2mm",
    complications: "Date, sweep seconds",
    image: `${CDN}/7bfbf155971a477a89e3de9ec33f1af2/14690-source/pp-product-702034-5168g-010`,
  },
  {
    reference: "5267/200A-001",
    name: "Aquanaut Luce",
    collectionSlug: "aquanaut",
    movement: "Calibre 324 S C, self-winding",
    materials: "Stainless steel, diamond bezel",
    diameter: "35.6mm",
    complications: "Date, sweep seconds",
    image: `${CDN}/7bfbf155971a477a89e3de9ec33f1af2/14695-source/pp-product-702034-5267-200a-001`,
  },

  // Nautilus
  {
    reference: "5811/1G-001",
    name: "Nautilus",
    collectionSlug: "nautilus",
    movement: "Calibre 26-330 S C, self-winding",
    materials: "White gold",
    diameter: "41mm",
    complications: "Date, sweep seconds",
    image: `${CDN}/7bfbf155971a477a89e3de9ec33f1af2/14725-source/pp-product-702037-5811-1g-001`,
  },
  {
    reference: "5980/1AR-001",
    name: "Nautilus Chronograph",
    collectionSlug: "nautilus",
    movement: "Calibre CH 28-520 C, self-winding",
    materials: "Steel and rose gold",
    diameter: "40.5mm",
    complications: "Chronograph, date",
    image: `${CDN}/7bfbf155971a477a89e3de9ec33f1af2/14727-source/pp-product-702037-5980-1ar-001`,
  },

  // Grand Complications
  {
    reference: "5270/1R-001",
    name: "Perpetual Calendar Chronograph",
    collectionSlug: "grand-complications",
    movement: "Calibre CH 29-535 PS Q, hand-wound",
    materials: "Rose gold",
    diameter: "41mm",
    complications: "Perpetual calendar, chronograph, moon phase, day-night",
    image: `${CDN}/7bfbf155971a477a89e3de9ec33f1af2/14741-source/pp-product-702036-5270-1r-001`,
  },
  {
    reference: "5204R-011",
    name: "Split-Seconds Chronograph Perpetual Calendar",
    collectionSlug: "grand-complications",
    movement: "Calibre CHR 29-535 PS Q, hand-wound",
    materials: "Rose gold",
    diameter: "40mm",
    complications: "Split-seconds chronograph, perpetual calendar, moon phase",
    image: `${CDN}/7bfbf155971a477a89e3de9ec33f1af2/14743-source/pp-product-702036-5204r-011`,
  },

  // Gondolo
  {
    reference: "7042/100G-001",
    name: "Gondolo",
    collectionSlug: "gondolo",
    movement: "Calibre 215 PS, hand-wound",
    materials: "White gold, diamond set",
    diameter: "29.6 × 38.9mm",
    complications: "Small seconds",
    image: `${CDN}/7bfbf155971a477a89e3de9ec33f1af2/14758-source/pp-product-702040-7042-100g-001`,
  },

  // Golden Ellipse
  {
    reference: "5738/51G-001",
    name: "Golden Ellipse",
    collectionSlug: "golden-ellipse",
    movement: "Calibre 240, self-winding, micro-rotor",
    materials: "White gold",
    diameter: "34.5 × 39.5mm",
    complications: "Hours, minutes",
    image: `${CDN}/7bfbf155971a477a89e3de9ec33f1af2/14776-source/pp-product-702042-5738-51g-001`,
  },

  // Rare Handcrafts
  {
    reference: "20084M-001",
    name: "Dome Table Clock — Lavaux",
    collectionSlug: "rare-handcrafts",
    movement: "Calibre 17'''LEP PS IRM, hand-wound",
    materials: "Cloisonné enamel, gilt brass",
    diameter: "Dome 110mm",
    complications: "Alarm, power reserve, date",
    image: `${CDN}/7bfbf155971a477a89e3de9ec33f1af2/24849-source/pp-product-702044-20084m-001`,
  },

  // Calatrava Pilot
  {
    reference: "5524G-001",
    name: "Calatrava Pilot Travel Time",
    collectionSlug: "calatrava-pilot",
    movement: "Calibre 324 S C FUS, self-winding",
    materials: "White gold",
    diameter: "42mm",
    complications: "Dual time zone, date, day-night",
    image: `${CDN}/7bfbf155971a477a89e3de9ec33f1af2/14790-source/pp-product-702038-5524g-001`,
  },
];

export function getWatchesByCollection(slug: string): Watch[] {
  return watches.filter((w) => w.collectionSlug === slug);
}
