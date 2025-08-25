export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  imageHint: string;
  category: string;
  images: { url: string; hint: string }[];
};

export const projects: Project[] = [
  {
    slug: 'modern-minimalistic-house',
    title: 'Modern & Minimalistic House',
    description: 'A perfect blend of modern aesthetics and minimalistic design.',
    longDescription: 'This project focuses on clean lines, simple color palettes, and uncluttered spaces. We used natural materials and strategic lighting to create a warm, inviting, and highly functional home that embodies modern minimalism.',
    imageUrl: '/assets/images/project-1.jpeg',
    imageHint: 'modern living room',
    category: 'Residential',
    images: [
      { url: '/assets/images/project-1-a.jpeg', hint: 'minimalist bedroom' },
      { url: '/assets/images/project-1-b.jpeg', hint: 'sleek kitchen' },
      { url: '/assets/images/project-1-c.jpeg', hint: 'modern bathroom' },
    ],
  },
  {
    slug: 'luxury-budget-friendly-house',
    title: 'Luxury & Budget Friendly House',
    description: 'Achieving a luxurious look without breaking the bank.',
    longDescription: 'This project demonstrates that luxury is not always about price. Through smart material choices, clever design solutions, and a focus on key statement pieces, we created an opulent and sophisticated home that was surprisingly budget-friendly.',
    imageUrl: '/assets/images/project-2.jpeg',
    imageHint: 'luxury bedroom',
    category: 'Residential',
    images: [
      { url: '/assets/images/project-2-a.jpeg', hint: 'elegant dining area' },
      { url: '/assets/images/project-2-b.jpeg', hint: 'chic living space' },
      { url: '/assets/images/project-2-c.jpeg', hint: 'stylish entryway' },
    ],
  },
  {
    slug: 'mr-shailesh-kumar-residence',
    title: "Mr. Shailesh Kumar's Residence",
    description: 'A personalized home that reflects the owner\'s unique style.',
    longDescription: 'We worked closely with Mr. Shailesh Kumar to design a home that was a true reflection of his personality. The design incorporates his love for traditional art with modern comforts, resulting in a unique and timeless residence.',
    imageUrl: '/assets/images/project-3.jpeg',
    imageHint: 'residence exterior',
    category: 'Residential',
    images: [
      { url: '/assets/images/project-3-a.jpeg', hint: 'custom living room' },
      { url: '/assets/images/project-3-b.jpeg', hint: 'bespoke study' },
      { url: '/assets/images/project-3-c.jpeg', hint: 'artistic details' },
    ],
  },
  {
    slug: 'fashion-fusion',
    title: 'Fashion Fusion',
    description: 'A vibrant and chic retail space for a fashion boutique.',
    longDescription: 'The goal for Fashion Fusion was to create a retail environment that was as stylish as the clothes it housed. We used bold colors, unique fixtures, and dynamic lighting to create an immersive and memorable shopping experience.',
    imageUrl: '/assets/images/project-4.jpeg',
    imageHint: 'fashion boutique interior',
    category: 'Commercial',
    images: [
      { url: '/assets/images/project-4-a.jpeg', hint: 'retail display' },
      { url: '/assets/images/project-4-b.jpeg', hint: 'fitting rooms' },
      { url: '/assets/images/project-4-c.jpeg', hint: 'storefront design' },
    ],
  },
  {
    slug: 'dental-clinic',
    title: 'Dental Clinic',
    description: 'A calming and professional environment for a modern dental clinic.',
    longDescription: 'We designed this dental clinic to be a space that is both welcoming and professional. A soothing color palette, comfortable furnishings, and state-of-the-art equipment create a relaxing atmosphere for patients and an efficient workspace for staff.',
    imageUrl: '/assets/images/project-5.jpeg',
    imageHint: 'modern dental clinic',
    category: 'Commercial',
    images: [
      { url: '/assets/images/project-5-a.jpeg', hint: 'reception area' },
      { url: '/assets/images/project-5-b.jpeg', hint: 'treatment room' },
      { url: '/assets/images/project-5-c.jpeg', hint: 'waiting lounge' },
    ],
  },
  {
    slug: 'jewellery-showroom',
    title: 'Jewellery Showroom',
    description: 'An elegant and secure showroom for a luxury jewellery brand.',
    longDescription: 'This jewellery showroom was designed to exude elegance and sophistication. We used high-end materials, custom display cases, and advanced security features to create a luxurious and secure environment for showcasing precious jewels.',
    imageUrl: '/assets/images/project-6.jpeg',
    imageHint: 'jewellery showroom design',
    category: 'Showroom',
    images: [
      { url: '/assets/images/project-6-a.jpeg', hint: 'jewellery display case' },
      { url: '/assets/images/project-6-b.jpeg', hint: 'private viewing room' },
      { url: '/assets/images/project-6-c.jpeg', hint: 'showroom lighting' },
    ],
  },
];
