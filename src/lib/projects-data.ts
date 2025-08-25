export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  imageHint: string;
  images: { url: string; hint: string }[];
};

export const projects: Project[] = [
  {
    slug: 'neon-dreams',
    title: 'Neon Dreams',
    description: 'A vibrant branding identity for a futuristic tech startup.',
    longDescription: 'Neon Dreams required a brand that was both futuristic and approachable. We developed a visual language using vibrant color palettes, sleek typography, and dynamic motion graphics. The project included a complete brand guide, a stunning website, and marketing collateral that set them apart in a competitive market.',
    imageUrl: 'https://picsum.photos/600/400?random=1',
    imageHint: 'digital art',
    images: [
      { url: 'https://picsum.photos/1200/800?random=11', hint: 'portfolio detail' },
      { url: 'https://picsum.photos/1200/800?random=12', hint: 'abstract illustration' },
      { url: 'https://picsum.photos/1200/800?random=13', hint: 'logo design' },
    ],
  },
  {
    slug: 'urban-oasis',
    title: 'Urban Oasis',
    description: 'Architectural visualization for a sustainable living complex.',
    longDescription: 'For Urban Oasis, we created a series of photorealistic architectural visualizations that brought their vision of sustainable urban living to life. Our renders highlighted the integration of nature, community spaces, and eco-friendly materials, helping them secure funding and generate public interest.',
    imageUrl: 'https://picsum.photos/600/400?random=2',
    imageHint: 'architecture',
    images: [
      { url: 'https://picsum.photos/1200/800?random=21', hint: 'building render' },
      { url: 'https://picsum.photos/1200/800?random=22', hint: 'interior design' },
      { url: 'https://picsum.photos/1200/800?random=23', hint: 'community space' },
    ],
  },
  {
    slug: 'heritage-reimagined',
    title: 'Heritage Reimagined',
    description: 'A modern take on a classic brand, blending tradition with contemporary design.',
    longDescription: 'This project involved revitalizing a legacy brand for a new generation. We conducted deep market research to understand their heritage and audience. The result was a respectful yet modern brand identity that resonated with both loyal customers and new demographics, implemented across packaging, digital platforms, and print.',
    imageUrl: 'https://picsum.photos/600/400?random=3',
    imageHint: 'branding',
    images: [
      { url: 'https://picsum.photos/1200/800?random=31', hint: 'packaging design' },
      { url: 'https://picsum.photos/1200/800?random=32', hint: 'vintage typography' },
      { url: 'https://picsum.photos/1200/800?random=33', hint: 'modern brand' },
    ],
  },
  {
    slug: 'echoes-of-etheria',
    title: 'Echoes of Etheria',
    description: 'Conceptual art and world-building for a next-generation video game.',
    longDescription: 'We collaborated with a game studio to build the world of Etheria from the ground up. Our team created vast landscapes, unique character designs, and architectural concepts that defined the game\'s visual style. The work served as a foundational art bible for the development team.',
    imageUrl: 'https://picsum.photos/600/400?random=4',
    imageHint: 'fantasy art',
    images: [
      { url: 'https://picsum.photos/1200/800?random=41', hint: 'character design' },
      { url: 'https://picsum.photos/1200/800?random=42', hint: 'fantasy landscape' },
      { url: 'https://picsum.photos/1200/800?random=43', hint: 'concept art' },
    ],
  },
  {
    slug: 'the-sculptors-hand',
    title: 'The Sculptor\'s Hand',
    description: 'An immersive digital gallery for a renowned sculptor.',
    longDescription: 'To showcase the intricate details of the artist\'s work, we designed and built an immersive 3D virtual gallery. Users can explore the sculptures from any angle, with integrated videos and text providing context. The platform increased global reach and online sales significantly.',
    imageUrl: 'https://picsum.photos/600/400?random=5',
    imageHint: 'sculpture',
    images: [
      { url: 'https://picsum.photos/1200/800?random=51', hint: 'art gallery' },
      { url: 'https://picsum.photos/1200/800?random=52', hint: 'bronze statue' },
      { url: 'https://picsum.photos/1200/800?random=53', hint: 'marble detail' },
    ],
  },
  {
    slug: 'inkwell-journal',
    title: 'Inkwell Journal',
    description: 'Editorial design and illustration for a quarterly literary magazine.',
    longDescription: 'Inkwell Journal is a celebration of the written word. We created a sophisticated layout system and a series of evocative illustrations for each issue. Our design work enhanced the reading experience, balancing classic typography with modern visual storytelling to bring the authors\' stories to life.',
    imageUrl: 'https://picsum.photos/600/400?random=6',
    imageHint: 'illustration',
    images: [
      { url: 'https://picsum.photos/1200/800?random=61', hint: 'magazine layout' },
      { url: 'https://picsum.photos/1200/800?random=62', hint: 'editorial illustration' },
      { url: 'https://picsum.photos/1200/800?random=63', hint: 'book cover' },
    ],
  },
];
