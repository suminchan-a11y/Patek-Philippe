export interface Watch {
  reference: string;
  name: string;
  collection: string;
  family: string;
  description: string;
  tags: string[];
}

export const watches: Watch[] = [
  {
    reference: "5711/1A-010",
    name: "Nautilus",
    collection: "Nautilus",
    family: "Time-Only",
    description: "The icon that started the luxury sports watch category. 40mm steel case, blue-black gradient dial with horizontal embossing, integrated bracelet. Caliber 26-330 S C automatic movement. The most sought-after reference in modern watchmaking.",
    tags: ["sport", "iconic", "steel", "first-patek", "investment", "waitlist"],
  },
  {
    reference: "5990/1R-001",
    name: "Nautilus Travel Time Chronograph",
    collection: "Nautilus",
    family: "Chronograph",
    description: "Rose gold Nautilus combining flyback chronograph with dual time zone. Blue sunburst dial with applied gold hour markers. For the traveller who values both complication and presence.",
    tags: ["sport", "travel", "chronograph", "rose-gold", "complication", "milestone"],
  },
  {
    reference: "5980/60G-001",
    name: "Nautilus Chronograph",
    collection: "Nautilus",
    family: "Chronograph",
    description: "White gold Nautilus flyback chronograph. A more refined expression of the sports chronograph, pairing the unmistakable Nautilus silhouette with precious metal restraint.",
    tags: ["sport", "chronograph", "white-gold", "refined", "milestone"],
  },
  {
    reference: "5327R-001",
    name: "Aquanaut",
    collection: "Aquanaut",
    family: "Time-Only",
    description: "Rose gold Aquanaut with chocolate-brown embossed dial and matching composite strap. The modern traveller's watch — robust, contemporary, and unmistakably Patek.",
    tags: ["sport", "casual", "rose-gold", "travel", "first-patek", "daily-wear"],
  },
  {
    reference: "5168G-001",
    name: "Aquanaut",
    collection: "Aquanaut",
    family: "Time-Only",
    description: "White gold Aquanaut with blue-black graduated dial. 42mm case with tropical composite strap. The larger Aquanaut for those who want quiet presence.",
    tags: ["sport", "casual", "white-gold", "daily-wear", "bold"],
  },
  {
    reference: "6007/2R-001",
    name: "Cubitus",
    collection: "Cubitus",
    family: "Time-Only",
    description: "Patek Philippe's newest collection. Square case in rose gold, green sunburst dial. A departure from round cases, signaling a new chapter for the manufacture.",
    tags: ["new", "rose-gold", "modern", "collection-start", "milestone", "statement"],
  },
  {
    reference: "5196G-001",
    name: "Calatrava",
    collection: "Calatrava",
    family: "Time-Only",
    description: "The purest expression of Patek Philippe's design philosophy. 37mm white gold, silver opaline dial, Dauphine hands. Nothing more than time, rendered perfectly.",
    tags: ["dress", "classic", "white-gold", "understated", "first-patek", "gift"],
  },
  {
    reference: "5227R-001",
    name: "Calatrava",
    collection: "Calatrava",
    family: "Time-Only",
    description: "Officer's-style hinged caseback in rose gold. 39mm with lacquered ebony-black dial. The dress watch for someone who understands that restraint is confidence.",
    tags: ["dress", "classic", "rose-gold", "refined", "gift", "milestone"],
  },
  {
    reference: "5270P-001",
    name: "Grand Complications Perpetual Calendar Chronograph",
    collection: "Grand Complications",
    family: "Grand Complication",
    description: "Platinum perpetual calendar with chronograph. Displays day, date, month, moon phase, leap year, and day/night indication. Hand-wound Caliber CH 29-535 PS Q. For the collector who wants everything the manufacture can offer on a wrist.",
    tags: ["grand-complication", "perpetual-calendar", "chronograph", "platinum", "collector", "heritage"],
  },
  {
    reference: "5178G-012",
    name: "Grand Complications Minute Repeater",
    collection: "Grand Complications",
    family: "Grand Complication",
    description: "White gold minute repeater with blue enamel dial. Strikes hours, quarters, and minutes on demand with cathedral gongs. One of watchmaking's most demanding complications, requiring years of specialist assembly.",
    tags: ["grand-complication", "minute-repeater", "enamel", "white-gold", "collector", "heritage", "craft"],
  },
  {
    reference: "5236P-001",
    name: "Grand Complications In-Line Perpetual Calendar",
    collection: "Grand Complications",
    family: "Grand Complication",
    description: "Platinum in-line perpetual calendar displaying day, date, and month in a single horizontal window. A radical rethinking of perpetual calendar display — uniquely legible, unmistakably Patek.",
    tags: ["grand-complication", "perpetual-calendar", "platinum", "innovative", "collector"],
  },
  {
    reference: "7118/1200A-001",
    name: "Nautilus Ladies",
    collection: "Nautilus",
    family: "Time-Only",
    description: "35.2mm steel Nautilus for women. Blue opaline dial with the signature horizontal embossing. Diamond-set bezel. A watch that carries the same authority in a more refined proportion.",
    tags: ["feminine", "sport", "steel", "diamond", "gift", "daily-wear"],
  },
  {
    reference: "4910/1200A-010",
    name: "Twenty~4",
    collection: "Twenty~4",
    family: "Time-Only",
    description: "Steel bracelet watch with rounded square case and blue sunburst dial. Diamond hour markers. Designed for the modern woman's wrist — from the office to evening, without compromise.",
    tags: ["feminine", "daily-wear", "steel", "diamond", "elegant", "gift"],
  },
  {
    reference: "7234R-001",
    name: "Twenty~4 Automatic",
    collection: "Twenty~4",
    family: "Time-Only",
    description: "Rose gold Twenty~4 with self-winding movement. Chocolate-brown dial, interchangeable strap. Patek's commitment that a woman's watch deserves the same mechanical excellence.",
    tags: ["feminine", "rose-gold", "automatic", "elegant", "milestone", "gift"],
  },
  {
    reference: "5524G-001",
    name: "Calatrava Pilot Travel Time",
    collection: "Calatrava",
    family: "Travel Time",
    description: "White gold pilot-style Calatrava with dual time zone. Blue dial, luminous numerals, local/home time pushers. A travel watch disguised as a gentleman's Calatrava.",
    tags: ["travel", "white-gold", "pilot", "dual-timezone", "daily-wear", "adventurous"],
  },
  {
    reference: "5212A-001",
    name: "Calatrava Weekly Calendar",
    collection: "Calatrava",
    family: "Calendar",
    description: "Steel Calatrava with in-house weekly calendar complication — unique to Patek Philippe. Displays week number, day, date, and month. An understated complication for the collector who appreciates something others won't recognize.",
    tags: ["steel", "calendar", "understated", "collector", "unique", "daily-wear"],
  },
  {
    reference: "5961P-001",
    name: "Grand Complications Annual Calendar Chronograph",
    collection: "Grand Complications",
    family: "Annual Calendar",
    description: "Platinum annual calendar chronograph with pulsation scale. Only needs correction once a year on March 1st. Combines practical complication with chronograph utility.",
    tags: ["grand-complication", "annual-calendar", "chronograph", "platinum", "practical", "collector"],
  },
  {
    reference: "7130G-016",
    name: "Grand Complications World Time",
    collection: "Grand Complications",
    family: "World Time",
    description: "White gold ladies' world time with hand-guilloched dial in lavender. 36mm case displaying all 24 time zones simultaneously. A miniature map of the world on a wrist.",
    tags: ["feminine", "world-time", "white-gold", "complication", "travel", "collector", "gift"],
  },
  {
    reference: "5167A-001",
    name: "Aquanaut",
    collection: "Aquanaut",
    family: "Time-Only",
    description: "Steel Aquanaut with black embossed dial and composite strap. 40mm, 120m water resistance. The entry point to Patek's sports collection — if the wait allows it.",
    tags: ["sport", "steel", "first-patek", "daily-wear", "casual", "waitlist"],
  },
  {
    reference: "5905/1A-001",
    name: "Complications Annual Calendar Flyback Chronograph",
    collection: "Complications",
    family: "Annual Calendar",
    description: "Steel annual calendar flyback chronograph with blue sunburst dial. A modern complication watch in steel — rare from Patek, and valued for it. The everyday grand complication.",
    tags: ["steel", "annual-calendar", "chronograph", "daily-wear", "practical", "collector"],
  },
];

export const boutiqueDetails = {
  name: "Patek Philippe Boutique — The Gardens Mall",
  city: "Kuala Lumpur",
  country: "Malaysia",
  address: "The Gardens Mall, Mid Valley City, Lingkaran Syed Putra, 59200 Kuala Lumpur",
  operator: "The Hour Glass",
};

export const codesOfLuxury = `The Seven Codes of Luxury — the emotional grammar that governs every Patek Philippe experience:

I. Patience — The willingness to wait for what is worthy. Eight years for an allocation. A lifetime to understand a grand complication.
II. Craft — Centuries of finishing visible in a single beveled edge — and invisible behind every dial.
III. Intimacy — The quiet room at the back of the boutique. Your name remembered. A handwritten note after the purchase.
IV. Inheritance — You merely look after it for the next generation. The watch outlives its owner.
V. Restraint — What has been withheld says more than what is shown. No logos on the strap. No price on the dial.
VI. Substance — The weight of the case in your palm before you read the reference number. Platinum feels different from steel.
VII. Devotion — Every object earns its place. Nothing is decorative. Nothing is accidental. The collection is a portrait of the collector.`;
