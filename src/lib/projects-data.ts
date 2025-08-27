export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  imageHint: string;
  category: string;
  location: string;
  tags: string[];
  images: { url: string; hint: string }[];
};

export const projects: Project[] = [
  {
    slug: 'modern-minimalistic-house',
    title: 'Modern & Minimalistic House',
    description: 'A perfect blend of modern aesthetics and minimalistic design.',
    longDescription: 'This project focuses on clean lines, simple color palettes, and uncluttered spaces. We used natural materials and strategic lighting to create a warm, inviting, and highly functional home that embodies modern minimalism.',
    imageUrl: 'https://picsum.photos/seed/project-1/600/400',
    imageHint: 'modern living room',
    category: 'Residential',
    location: "Mumbai",
    tags: ["Residential", "Kitchen", "Modern"],
    images: [
      { url: 'https://picsum.photos/seed/project-1a/800/600', hint: 'minimalist bedroom' },
      { url: 'https://picsum.photos/seed/project-1b/800/600', hint: 'sleek kitchen' },
      { url: 'https://picsum.photos/seed/project-1c/800/600', hint: 'modern bathroom' },
    ],
  },
  {
    slug: 'luxury-budget-friendly-house',
    title: 'Luxury & Budget Friendly House',
    description: 'Achieving a luxurious look without breaking the bank.',
    longDescription: 'This project demonstrates that luxury is not always about price. Through smart material choices, clever design solutions, and a focus on key statement pieces, we created an opulent and sophisticated home that was surprisingly budget-friendly.',
    imageUrl: 'https://picsum.photos/seed/project-2/600/400',
    imageHint: 'luxury bedroom',
    category: 'Residential',
    location: 'Bengaluru',
    tags: ["Wardrobes", "Detail", "Luxury"],
    images: [
      { url: 'https://picsum.photos/seed/project-2a/800/600', hint: 'elegant dining area' },
      { url: 'https://picsum.photos/seed/project-2b/800/600', hint: 'chic living space' },
      { url: 'https://picsum.photos/seed/project-2c/800/600', hint: 'stylish entryway' },
    ],
  },
  {
    slug: 'mr-shailesh-kumar-residence',
    title: "Mr. Shailesh Kumar's Residence",
    description: "A personalized home that reflects the owner's unique style.",
    longDescription: "We worked closely with Mr. Shailesh Kumar to design a home that was a true reflection of his personality. The design incorporates his love for traditional art with modern comforts, resulting in a unique and timeless residence.",
    imageUrl: 'https://picsum.photos/seed/project-3/600/400',
    imageHint: 'residence exterior',
    category: 'Residential',
    location: "Delhi",
    tags: ["Living", "Lighting", "Traditional"],
    images: [
      { url: 'https://picsum.photos/seed/project-3a/800/600', hint: 'custom living room' },
      { url: 'https://picsum.photos/seed/project-3b/800/600', hint: 'bespoke study' },
      { url: 'https://picsum.photos/seed/project-3c/800/600', hint: 'artistic details' },
    ],
  },
  {
    slug: 'fashion-fusion',
    title: 'Fashion Fusion',
    description: 'A vibrant and chic retail space for a fashion boutique.',
    longDescription: 'The goal for Fashion Fusion was to create a retail environment that was as stylish as the clothes it housed. We used bold colors, unique fixtures, and dynamic lighting to create an immersive and memorable shopping experience.',
    imageUrl: 'https://picsum.photos/seed/fashion-fusion/600/400',
    imageHint: 'fashion boutique interior',
    category: 'Kids',
    location: "Pune",
    tags: ["Kids", "Play", "Vibrant"],
    images: [
      { url: 'https://picsum.photos/seed/fashion-fusion-a/600/400', hint: 'retail display' },
      { url: 'https://picsum.photos/seed/fashion-fusion-b/600/400', hint: 'fitting rooms' },
      { url: 'https://picsum.photos/seed/fashion-fusion-c/600/400', hint: 'storefront design' },
    ],
  },
  {
    slug: 'dental-clinic',
    title: 'Dental Clinic',
    description: 'A calming and professional environment for a modern dental clinic.',
    longDescription: 'We designed this dental clinic to be a space that is both welcoming and professional. A soothing color palette, comfortable furnishings, and state-of-the-art equipment create a relaxing atmosphere for patients and an efficient workspace for staff.',
    imageUrl: 'https://picsum.photos/seed/dental-clinic/600/400',
    imageHint: 'modern dental clinic',
    category: 'Commercial',
    location: "Chennai",
    tags: ["Commercial", "Calm"],
    images: [
      { url: 'https://picsum.photos/seed/dental-clinic-a/600/400', hint: 'reception area' },
      { url: 'https://picsum.photos/seed/dental-clinic-b/600/400', hint: 'treatment room' },
      { url: 'https://picsum.photos/seed/dental-clinic-c/600/400', hint: 'waiting lounge' },
    ],
  },
  {
    slug: 'jewellery-showroom',
    title: 'Jewellery Showroom',
    description: 'An elegant and secure showroom for a luxury jewellery brand.',
    longDescription: 'This jewellery showroom was designed to exude elegance and sophistication. We used high-end materials, custom display cases, and advanced security features to create a luxurious and secure environment for showcasing precious jewels.',
    imageUrl: 'https://picsum.photos/seed/project-4/600/400',
    imageHint: 'jewellery showroom design',
    category: 'Showroom',
    location: "Ahmedabad",
    tags: ["Art & Murals", "Feature", "Elegant"],
    images: [
      { url: 'https://picsum.photos/seed/jewellery-a/800/600', hint: 'jewellery display case' },
      { url: 'https://picsum.photos/seed/jewellery-b/600/400', hint: 'private viewing room' },
      { url: 'https://picsum.photos/seed/jewellery-c/600/400', hint: 'showroom lighting' },
    ],
  },
];
