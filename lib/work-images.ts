export type WorkImageNote = {
  k: string
  t: string
  body: string
}

export type WorkImage = {
  slug: string
  title: string
  meta: string
  src: string
  alt: string
  section: "tiles" | "render-index" | "case-study-grid"
  span?: string
  size?: "sm" | "md" | "lg"
  position?: string
  body: {
    lede: string
    notes: WorkImageNote[]
  }
}

export const WORK_IMAGES: WorkImage[] = [
  {
    slug: "tie-front",
    title: "Imperial TIE-Fighter",
    meta: "Personal · Film",
    src: "/media/tie-fighter/front.webp",
    alt: "Imperial TIE-fighter, frontal hero render, shallow key light on the cockpit",
    section: "tiles",
    span: "col-span-6 row-span-3 md:col-span-4",
    size: "lg",
    position: "center 40%",
    body: {
      lede: "The frontal hero — the frame the whole study was built to deliver. A void backdrop, one key, and the silhouette doing the acting.",
      notes: [
        {
          k: "Framing",
          t: "Symmetry, just barely",
          body: "The cockpit is centered to the millimeter, but the wing pylons land a hair off-axis. Read as iconic at a glance, restless on the second look.",
        },
        {
          k: "Key light",
          t: "Soft top-left, hard fill",
          body: "A 3-by-3 source above-left of camera, fill from a black bounce. The chip in the cockpit glass is a single specular kick, not a rim.",
        },
        {
          k: "Detail",
          t: "Panel breaks earn their keep",
          body: "Every louver and panel join is referenced from the surviving 1977 ILM model — no procedural noise, no greeble pads. The geometry is the texture.",
        },
      ],
    },
  },
  {
    slug: "piper-reveal",
    title: "Piper Archer TX",
    meta: "Brand Film · Piper",
    src: "/media/aviation/piper-reveal.webp",
    alt: "Piper Archer TX — nose badge lit by a single slash of studio light",
    section: "tiles",
    span: "col-span-3 row-span-2 md:col-span-2",
    size: "md",
    body: {
      lede: "Opening frame from the Archer TX brand reveal. A blade of studio light across the nose badge, the rest of the airframe in a soft drop to black.",
      notes: [
        {
          k: "Brief",
          t: "Sell the badge",
          body: "Piper marketing wanted the wordmark to be the first thing the eye locks to. The light shape was designed around the badge first, the body second.",
        },
        {
          k: "Light shape",
          t: "Single slashed source",
          body: "A 12-by-2 strip rigged at a steep raking angle. Length picked so the falloff lands exactly at the prop hub, not past it.",
        },
        {
          k: "Color",
          t: "Warm metal, cool air",
          body: "The aluminum reads warm under the key; the negative space holds a 5800K cool to keep the badge feeling like the center of the temperature.",
        },
      ],
    },
  },
  {
    slug: "opus-perfume",
    title: "Opus — Eau de Parfum",
    meta: "Product · Render",
    src: "/media/products/perfume-frame.webp",
    alt: "Amber perfume bottle suspended in amber liquid beads",
    section: "tiles",
    span: "col-span-3 row-span-2 md:col-span-2",
    size: "md",
    body: {
      lede: "Hero frame for Opus — a still that had to read as both the bottle and the scent. Liquid suspended like the note itself.",
      notes: [
        {
          k: "Sim",
          t: "Beads, not splash",
          body: "Splashes felt aggressive for the brand. The droplets were meshed and re-spaced by hand so each cluster reads as composed, not captured.",
        },
        {
          k: "Glass",
          t: "Two-bounce caustic",
          body: "The amber plays through the bottle glass, off the back wall, and back through the liquid. The result is a glow that looks lit from inside.",
        },
        {
          k: "Composition",
          t: "Cap as the period",
          body: "The cap sits exactly on the rule-of-thirds intersection; everything else floats around it. Once you see it, the eye stops moving.",
        },
      ],
    },
  },
  {
    slug: "monitor-01",
    title: "Monitor 01 — Colorway",
    meta: "Product · Look-dev",
    src: "/media/products/headphones.webp",
    alt: "Over-ear headphones in four colorways, studio grey sweep",
    section: "tiles",
    span: "col-span-3 row-span-1 md:col-span-2",
    size: "sm",
    position: "center 45%",
    body: {
      lede: "A four-up colorway look-dev for Monitor 01. One model, one light rig, four shaders — the studio grey sweep glued the set together.",
      notes: [
        {
          k: "Look-dev",
          t: "One shader, four parameters",
          body: "Albedo, anisotropy, fuzz, and edge wear were the only knobs. Everything else stayed locked so the colorways could be judged against each other, not against four different lighting reads.",
        },
        {
          k: "Sweep",
          t: "Paper, not cyc",
          body: "A real seamless instead of a plate cyc. The paper texture catches a fraction of bounce and gives the cans something to sit on instead of float.",
        },
      ],
    },
  },
  {
    slug: "writing-set",
    title: "Writing Set",
    meta: "Product · R&D",
    src: "/media/products/pens.webp",
    alt: "Ring of pens converging, one central stylus in hero light",
    section: "tiles",
    span: "col-span-3 row-span-1 md:col-span-2",
    size: "sm",
    body: {
      lede: "An R&D study for a writing-instrument lineup. Five pens converge on a central stylus that gets the hero light — the rest read as the set.",
      notes: [
        {
          k: "Composition",
          t: "Radial, not symmetrical",
          body: "The convergence point is offset from optical center by a few percent. Symmetry felt like a chart; offset felt like a photograph.",
        },
        {
          k: "Lighting",
          t: "One hero, four supporting",
          body: "Center stylus on a hard rim from above. The four supporting pens get a softer, broader fill so they read as a chorus, not a copy of the lead.",
        },
      ],
    },
  },
  {
    slug: "archer-hangar",
    title: "Archer TX — Hangar",
    meta: "Aviation · Editorial",
    src: "/media/aviation/field-0003.webp",
    alt: "Piper Archer TX fuselage detail with the Archer TX wordmark",
    section: "tiles",
    span: "col-span-6 row-span-2 md:col-span-3",
    size: "md",
    position: "center 55%",
    body: {
      lede: "Editorial detail from the hangar shoot. Wordmark, livery seam, the way the fuselage curve catches the overhead bay lights.",
      notes: [
        {
          k: "Reference",
          t: "Hangar bay, not seamless",
          body: "Built off a real hangar plate so the overhead lights, floor seal, and cable catwalks all show up in the reflections. The airframe sits in a place, not in a void.",
        },
        {
          k: "Type",
          t: "Wordmark in-camera",
          body: "The Archer TX wordmark is mapped as a real decal layer with edge wear baked in — no compositing trick. The light has to roll over it the same as the metal does.",
        },
      ],
    },
  },
  {
    slug: "tie-wing",
    title: "TIE · Wing Detail",
    meta: "Study · Personal",
    src: "/media/tie-fighter/wing.webp",
    alt: "TIE-fighter wing hub from behind, solar panel geometry",
    section: "tiles",
    span: "col-span-6 row-span-1 md:col-span-3",
    size: "sm",
    position: "center 40%",
    body: {
      lede: "The wing hub from behind. The solar-array geometry is the entire frame — louver pattern, panel break, and the join where the pylon meets the cell.",
      notes: [
        {
          k: "Geometry",
          t: "Louvers as repeated unit",
          body: "Each louver is a single instance, hand-rotated through the array. Not a procedural pattern — the small variations are intentional, traced from the on-set hero model.",
        },
        {
          k: "Lighting",
          t: "Grazing, not flat",
          body: "Light comes across the panel, not into it. That's what makes the louver edges throw shadows the way they do; head-on, the panel goes flat.",
        },
      ],
    },
  },
  {
    slug: "splash-bottle",
    title: "Splash Bottle",
    meta: "a · Sim",
    src: "/media/products/bottle.webp",
    alt: "Insulated bottle suspended in frozen water splash",
    section: "render-index",
    body: {
      lede: "An insulated bottle, frozen mid-impact in a water column. The simulation was solved at frame 0 — every other frame is just camera.",
      notes: [
        {
          k: "Sim",
          t: "One pose, many cuts",
          body: "The fluid was simmed once, meshed, then sliced. The crown of droplets behind the bottle is the original splash; the foreground spray is the same sim, masked forward.",
        },
        {
          k: "Bottle",
          t: "Brushed, not chrome",
          body: "A brushed-aluminum shader — a 14-degree anisotropic streak. Chrome read as toy. The brush direction follows the long axis so the highlight rolls vertically.",
        },
      ],
    },
  },
  {
    slug: "berry-cola",
    title: "Berry Cola",
    meta: "b · Product",
    src: "/media/products/can.webp",
    alt: "Energy drink can with berries in mid-air",
    section: "render-index",
    body: {
      lede: "Hero shot for a berry cola. Two blueberries and a raspberry caught mid-flight, with a single condensation pull on the can to plant it as cold.",
      notes: [
        {
          k: "Berries",
          t: "Three, not five",
          body: "Five felt like an ad. Three reads as a moment. The raspberry is the visual lead and gets the front placement; the blueberries support behind and to the side.",
        },
        {
          k: "Can",
          t: "Condensation as a story",
          body: "The droplets aren't uniform — they cluster where a hand would have just been. The label panel is dry; the back face is wet. Reads as picked-up, not staged.",
        },
      ],
    },
  },
  {
    slug: "noir-lipstick",
    title: "Noir Lipstick",
    meta: "c · Beauty",
    src: "/media/products/lipstick.webp",
    alt: "Deep red lipstick, angled bevel, water beads",
    section: "render-index",
    body: {
      lede: "A deep red lipstick on the bevel, with a soft scatter of water beads. The bevel is the brand silhouette; everything else is restraint.",
      notes: [
        {
          k: "Bevel",
          t: "The angle is the logo",
          body: "The bevel angle is the brand's silhouette mark. It had to read as a clean diagonal at any size — the geometry is exact, not eyeballed.",
        },
        {
          k: "Pigment",
          t: "Wax under the red",
          body: "The pigment shader has a faint subsurface wax pass underneath. It only shows in the brightest 5% of the highlight, but without it the surface read as plastic.",
        },
      ],
    },
  },
  {
    slug: "keycap-01",
    title: "Keycap · 01",
    meta: "d · Product",
    src: "/media/products/keypop.webp",
    alt: "Mechanical keycap lifted out of a keyboard in a purple halo",
    section: "render-index",
    body: {
      lede: "A keycap lifted out of a keyboard, framed in a soft purple halo. A small object given the treatment of a much larger one.",
      notes: [
        {
          k: "Scale",
          t: "Treated like a building",
          body: "The light setup was scaled up by 4x relative to the cap and then filmed long-lens. A small object lit at small scale always reads as a small object — the trick is to lie about the room.",
        },
        {
          k: "Halo",
          t: "Off-screen, not added",
          body: "The halo is a real bounce off a coloured card placed behind the keyboard. Comp-added halos always look comp-added.",
        },
      ],
    },
  },
  {
    slug: "resin-figure",
    title: "Resin Figure",
    meta: "e · Study",
    src: "/media/products/other-card.webp",
    alt: "Translucent blue resin figurine on stone",
    section: "render-index",
    body: {
      lede: "A translucent blue resin figurine on weathered stone. A look-dev exercise on volumetric absorption inside a saturated medium.",
      notes: [
        {
          k: "Resin",
          t: "Tinted glass, not plastic",
          body: "The shader is a thin glass with a coloured volume inside, not a translucent plastic. The blue darkens with thickness — exactly what real cast resin does, and what acrylic doesn't.",
        },
        {
          k: "Stone",
          t: "Single source, soft fill",
          body: "The stone is a real photogrammetry scan. One overhead source, a 60% bounce off the ground plane, no third light. Anything more and the stone took the frame.",
        },
      ],
    },
  },
  {
    slug: "tie-wide",
    title: "TIE · Wide",
    meta: "Study · Wide",
    src: "/media/tie-fighter/wide.webp",
    alt: "TIE-fighter — classic wide establishing shot",
    section: "case-study-grid",
    body: {
      lede: "The classic wide establishing shot. The frame the silhouette was designed to live in.",
      notes: [
        {
          k: "Composition",
          t: "Centered, with air",
          body: "Dead center, with deliberate negative space above and below. The headroom is the menace. Crop tighter and it becomes a vehicle photograph.",
        },
        {
          k: "Scale cue",
          t: "Cockpit at 4%",
          body: "The cockpit window measures roughly 4% of the frame width. Below that, the ship reads as a model on a plate; above, as a closeup. Four percent is the establishing-shot sweet spot.",
        },
      ],
    },
  },
  {
    slug: "tie-back-high",
    title: "TIE · Back-High",
    meta: "Study · Angle",
    src: "/media/tie-fighter/back-high.webp",
    alt: "TIE-fighter — three-quarter rear, high angle",
    section: "case-study-grid",
    body: {
      lede: "Three-quarter rear, a high-angle pass. The wing-hub geometry runs the diagonal, the cockpit anchors the lower third.",
      notes: [
        {
          k: "Angle",
          t: "Above and behind",
          body: "Roughly 18 degrees above horizon, 22 off the rear. Steeper and the louvers crush; flatter and the silhouette flattens. This narrow window is where the ship reads.",
        },
        {
          k: "Running lights",
          t: "Practicals, not glow",
          body: "The cockpit glow is a real practical inside the geometry, not a bloom pass. It throws a faint internal bounce on the side panels — that's what sells it.",
        },
      ],
    },
  },
  {
    slug: "tie-front-alt",
    title: "TIE · Cockpit Profile",
    meta: "Study · Detail",
    src: "/media/tie-fighter/front-alt.webp",
    alt: "TIE-fighter — cockpit detail, profile",
    section: "case-study-grid",
    body: {
      lede: "Profile detail of the cockpit. Lens-flare-free, panel-detail-first — the look-dev pass disguised as a beauty.",
      notes: [
        {
          k: "Lens",
          t: "85mm, not anamorphic",
          body: "Tested at 35mm, 50mm, and 85mm. The 85 was the only one where the panel reads honestly without the cockpit glass distorting. Modern lens, classic subject.",
        },
        {
          k: "Glass",
          t: "Smudge layer, not clean",
          body: "A faint smudge map on the cockpit glass — the geometry of fingerprint smear from a pilot leaning on it. Dirty glass is what separates a render from a photograph.",
        },
      ],
    },
  },
]

export function getWorkImageBySlug(slug: string): WorkImage | undefined {
  return WORK_IMAGES.find((img) => img.slug === slug)
}

export function getWorkImageNeighbors(slug: string): {
  prev: WorkImage
  next: WorkImage
} | null {
  const index = WORK_IMAGES.findIndex((img) => img.slug === slug)
  if (index === -1) return null
  const prev = WORK_IMAGES[(index - 1 + WORK_IMAGES.length) % WORK_IMAGES.length]
  const next = WORK_IMAGES[(index + 1) % WORK_IMAGES.length]
  return { prev, next }
}
