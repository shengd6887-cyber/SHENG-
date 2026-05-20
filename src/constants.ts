import { Project, Award, ToolItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: '淨隅 | Minimal Luxury',
    category: 'Minimal curves, maximal calm',
    image: '/src/assets/images/regenerated_image_1778842739453.jpg',
    detailImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800',
    description: 'SPATIAL FLUIDITY - 重新定義居住的尺度與光影流動。',
    gallery: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800',
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=800'
    ]
  },
  {
    id: '2',
    title: '藏光隅 | Optical Illusion',
    category: 'Light and shadow play',
    image: 'https://res.cloudinary.com/dphzmc5xy/image/upload/v1777455774/IMG_6261_fichei.jpg',
    detailImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800',
    description: 'SHADOW NARRATIVE - 以光影作為中介，探索室內與自然的邊界。',
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=800',
      'https://images.unsplash.com/photo-1519643381401-22c77e60520e?q=80&w=800',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200'
    ]
  },
  {
    id: '3',
    title: '影之徑 | Wind & Light',
    category: 'Villa',
    image: 'https://res.cloudinary.com/dphzmc5xy/image/upload/v1775724954/LINE_ALBUM_%E4%BB%B0%E5%BE%B7%E7%81%A3%E6%9E%97%E5%AE%85_%E5%BD%B1%E7%89%87%E7%94%A8_240417_4_lciqqy.jpg',
    detailImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    description: 'DIALOGUE BETWEEN LIGHT AND SHADOW - 史詩般的劇場感，將自然元素引入居住哲學。',
    gallery: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800',
      'https://images.unsplash.com/photo-1556911220-ebd527136296?q=80&w=800',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200'
    ]
  },
  {
    id: '4',
    title: '虛空之鳴 | Void Echo',
    category: 'Masterpiece',
    image: 'https://res.cloudinary.com/dphzmc5xy/image/upload/v1777458111/IMG_0742_aqnvtb.jpg',
    detailImage: 'https://images.unsplash.com/photo-1519643225200-94e79e383724?auto=format&fit=crop&q=80&w=800',
    description: '當空間隱去，意識便開始延伸',
    gallery: [
      'https://images.unsplash.com/photo-1519643381401-22c77e60520e?q=80&w=1200',
      'https://images.unsplash.com/photo-1519643325200-94e79e383724?q=80&w=800',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800',
      'https://images.unsplash.com/photo-1581412344293-174828694497?q=80&w=800',
      'https://images.unsplash.com/photo-1519643381401-22c77e60520e?q=80&w=1200',
      'https://images.unsplash.com/photo-1519643381401-22c77e60520e?q=80&w=1200',
      'https://images.unsplash.com/photo-1519643381401-22c77e60520e?q=80&w=1200',
      'https://images.unsplash.com/photo-1519643381401-22c77e60520e?q=80&w=1200'
    ]
  },
  {
    id: '5',
    title: '歸白 | Return to White',
    category: 'Residential',
    image: 'https://res.cloudinary.com/dphzmc5xy/image/upload/v1775724926/873EE31B-FFB9-427A-9787-96E01E41D4CF_ncltcg.jpg',
    detailImage: 'https://images.unsplash.com/photo-1484154115531-8d00388d5e84?auto=format&fit=crop&q=80&w=800',
    description: '從繁華回歸簡淨，從紛雜走向留白。拔除煩瑣視覺，以白為基底，重現寧靜的空間美學。',
    gallery: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200',
      'https://images.unsplash.com/photo-1484154115531-8d00388d5e84?q=80&w=800',
      'https://images.unsplash.com/photo-1556911220-ebd527136296?q=80&w=800',
      'https://images.unsplash.com/photo-1556911220-4e3edfe00693?q=80&w=800',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200'
    ]
  },
  {
    id: '6',
    title: '數位方舟 | Digital Ark',
    category: 'Exhibition',
    image: 'https://res.cloudinary.com/dphzmc5xy/image/upload/v1774719570/IMG_1898_li27no.jpg',
    detailImage: 'https://images.unsplash.com/photo-1493809655106-963690d79d1a?auto=format&fit=crop&q=80&w=800',
    description: 'A JOURNEY INTO THE CENTER OF SELF - 未來、數位與工藝的交會。',
    gallery: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200',
      'https://images.unsplash.com/photo-1493809655106-963690d79d1a?q=80&w=800',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=800',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200'
    ]
  }
];

export const AWARDS: Award[] = [
  {
    id: 'if',
    title: 'IF DESIGN AWARD',
    year: 'GERMANY 2024',
    comment: 'iF Design Award recognizes exceptional design quality across various disciplines.',
    icon: '/src/assets/images/regenerated_image_1779092525711.png'
  },
  {
    id: 'adesign',
    title: "A' DESIGN AWARD",
    year: 'ITALY 2023',
    comment: 'A’ Design Award is the world’s largest and most influential design accolade.',
    icon: 'https://res.cloudinary.com/dphzmc5xy/image/upload/v1779277752/2025-168815-logo-big-red_imaevw.png'
  },
  {
    id: 'muse',
    title: 'MUSE DESIGN',
    year: 'GLOBAL PLATINUM',
    comment: 'MUSE Design Awards celebrates design excellence on a global scale.',
    icon: '/src/assets/images/regenerated_image_1779092691993.png'
  },
  {
    id: 'french',
    title: 'FRENCH DESIGN AWARDS',
    year: '2024 · SILVER AWARD',
    comment: 'French Design Awards recognizes innovative design solutions from around the world.',
    icon: '/src/assets/images/regenerated_image_1779092392380.png'
  }
];

export const TOOL_ITEMS: ToolItem[] = [
  { id: 'p1', name: '琴葉榕', icon: '🌿', type: 'plant' },
  { id: 'p2', name: '龜背竹', icon: '🍃', type: 'plant' },
  { id: 'w1', name: '拱形窗', icon: '🪟', type: 'window' },
  { id: 'w2', name: '圓窗', icon: '⭕', type: 'window' },
  { id: 'l1', name: '藝術吊燈', icon: '💡', type: 'light' },
  { id: 's1', name: '動態光影', icon: '✨', type: 'shadow' }
];
