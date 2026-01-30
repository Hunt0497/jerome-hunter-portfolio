# Jerome Hunter - Portfolio Website

A premium, modern portfolio website showcasing Jerome Hunter's work in UX/UI design, visual communication, and website development. Built with React, TypeScript, and GSAP for dynamic animations.

## Features

### Visual Design
- **Bold, Modern Aesthetic** - Dark theme with high-contrast design and sleek animations
- **Large Typography** - Confident, impactful text throughout the site
- **GSAP Animations** - Complex, dynamic animations and scroll-triggered effects
- **Smooth Transitions** - Refined interactions and parallax effects
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices

### Sections

#### 1. Navigation
- Fixed header with smooth scrolling
- Dynamic background on scroll
- Hover animations on navigation links

#### 2. Hero Section
- Full-screen hero with dramatic header image
- Large typography with staggered entrance animations
- Parallax scroll effect
- Call-to-action buttons
- Animated scroll indicator

#### 3. About Section
- Professional summary with 18+ years of experience
- Updated stats: **50+ campaigns delivered** (instead of 100)
- Animated statistics cards
- Scroll-triggered content reveals

#### 4. Brands Section
- Logo showcase featuring major clients:
  - BMA
  - Brunswick
  - Digicel
  - NCB Jamaica
  - Red Stripe
  - Tastee Cheese
  - Walkerswood
- Animated grid with hover effects
- Grayscale-to-color transitions

#### 5. Portfolio Section

**Three filterable categories:**

**A. Graphic Design**
- Clickable card that opens a full gallery modal
- Five subcategories:
  - Product Design
  - Vehicle Wrap Design
  - Billboards Design
  - Press & Poster Design
  - Other Marketing Materials
- Each subcategory displays a grid of images
- Full-screen modal with smooth animations

**B. Website Development**
- Two projects with thumbnails
- **View Website** button for each project:
  - Verdance Recipe Website: https://hunt0497.github.io/mtm6201-final/
  - My Coffee House: https://hunt0497.github.io/mtm6201-midterm/
- **View GitHub** button for each project:
  - Verdance: https://github.com/Hunt0497/mtm6201-final
  - Coffee House: https://github.com/Hunt0497/mtm6201-midterm

**C. UX/UI Design**
- Three projects with thumbnails
- **View Prototype** button for each project
- **View Figma** button for each project

Projects:
1. **J&J App Design**
   - Prototype: https://www.figma.com/slides/DrW6WyBSdeFp9rG6BUWY8P/J-J-Presentation?node-id=1-25&t=aiMZ8f0X8EGA8M3x-1
   - Figma: https://www.figma.com/design/ufdcsGBJi5ro9KVc8aJtGV/Final-Project?node-id=129-666&t=ldSpb7isjspxwhK5-1

2. **Verdance Restaurant Project**
   - Prototype: https://www.figma.com/proto/4ntnyVX3ddBszx7Zg2s03R/Verdance-Restaurant-Project?node-id=2199-3514
   - Figma: https://www.figma.com/design/4ntnyVX3ddBszx7Zg2s03R/Verdance-Restaurant-Project?node-id=2049-761

3. **Vision Signs**
   - Prototype: https://www.figma.com/proto/t7icEv6sEYu10rZhUNo8h8/VISION---A03-Website-Design-Project?page-id=0%3A1&node-id=1-7
   - Figma: https://www.figma.com/design/t7icEv6sEYu10rZhUNo8h8/VISION---A03-Website-Design-Project?node-id=0-1

#### 6. Services Section
Four service areas with detailed capabilities:
- **Visual Design** - Brand identity, marketing collateral, print design
- **UX/UI Design** - User research, wireframing, interface design
- **Web Development** - HTML/CSS/JavaScript, responsive websites (React removed as requested)
- **Creative Direction** - Campaign strategy, art direction, brand guidelines

#### 7. Contact Section
- Email: hunt0497@algonquinlive.com
- Phone: +1 (876) 363-8945
- Location: Kingston, Jamaica
- **"Contact Me"** button (changed from "Send Message")
- Portfolio website reference removed
- Footer with copyright information

## Technology Stack

- **React 19** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **GSAP 3** - Professional-grade animation library
- **CSS Modules** - Scoped component styling

## Animation Features

### GSAP Animations Include:
- Staggered element entrances
- Scroll-triggered reveals
- Parallax effects on hero section
- Scale and rotation animations
- Smooth fade-ins with easing
- Hover state transitions
- Modal entrance/exit animations

### Interaction Effects:
- Smooth scroll navigation
- Hover states on all interactive elements
- Button hover effects with overlay animations
- Image zoom on hover
- Card lift effects
- Grayscale-to-color transitions

## Local Development

The development server starts automatically. Your site is available at the local URL shown in the terminal.

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment.

## Image Structure

Place your images in the `public/images/` folder:

```
public/images/
├── header-image/
│   └── header.jpg
├── logo-brands-worked-on/
│   ├── bma.png
│   ├── brunswick.png
│   ├── digicel.png
│   ├── ncb.png
│   ├── red-stripe.png
│   ├── tastee.png
│   └── walkerswood.png
├── graphic-design/
│   ├── graphic-design-thumb.jpg
│   ├── product-design/
│   ├── vehicle-wraps/
│   ├── billboards/
│   ├── press-design/
│   └── other-marketing-materials/
├── website-development/
│   ├── verdance.jpg
│   └── coffee-house.jpg
└── ux-ui-designs/
    ├── jj-app.jpg
    ├── verdance-restaurant.jpg
    └── vision-signs.jpg
```

## Customization

### Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --color-bg: #0a0a0a;
  --color-text: #ffffff;
  --color-text-secondary: #a0a0a0;
  --color-accent: #ff6b35;
  --spacing-unit: 8px;
}
```

### Content
- **About text**: `src/components/About.tsx`
- **Services**: `src/components/Services.tsx`
- **Portfolio items**: `src/components/Portfolio.tsx`
- **Contact info**: `src/components/Contact.tsx`

## Mobile Optimization

- Responsive grid layouts
- Touch-friendly button sizes
- Optimized typography scaling
- Mobile-friendly navigation
- Overlay always visible on mobile for portfolio items
- Smooth scrolling optimized for mobile devices

## Performance

- Optimized image loading with error fallbacks
- Code splitting with Vite
- CSS Modules for efficient styling
- GSAP for hardware-accelerated animations
- Lazy loading of graphic design galleries

## Design Philosophy

This portfolio follows modern design principles:
- **Bold Typography** - Large, confident text that commands attention
- **Generous Spacing** - Clean layouts with intentional white space
- **Subtle Motion** - Animations that enhance without overwhelming
- **High Contrast** - Dark theme with clear visual hierarchy
- **Premium Feel** - Creative-director level presentation

Built with meticulous attention to detail for a professional, high-end user experience.
