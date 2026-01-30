# Jerome Hunter - Portfolio Website

A modern, dynamic portfolio website showcasing Jerome Hunter's work in UX/UI design, visual communication, and website development.

## Features

### Visual Design
- **Bold Hero Section** - Large typography with dramatic header image
- **Dark Theme** - High-contrast design with sleek, modern aesthetic
- **Smooth Animations** - Framer Motion integration for refined transitions
- **Scroll-Triggered Effects** - Elements reveal elegantly as you scroll
- **Responsive Design** - Optimized for desktop, tablet, and mobile

### Sections

1. **Navigation** - Fixed header with smooth scroll links
2. **Hero** - Full-screen hero with large typography and call-to-action buttons
3. **About** - Professional summary with key statistics and experience highlights
4. **Brands** - Logo showcase featuring major clients worked with
5. **Portfolio** - Three filterable categories:
   - Graphic Design (full-frame gallery)
   - Website Development (with GitHub links)
   - UX/UI Design (with Figma links)
6. **Services** - Four service areas with detailed capabilities
7. **Contact** - Contact information and email CTA

## Technology Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Framer Motion** - Animation library
- **CSS Modules** - Scoped styling

## Local Development

The development server starts automatically. Your site is available at the local URL shown in the terminal.

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Content Sources

All content is pulled from the repository folders:
- Personal info: `my-information/`
- Hero image: `images/header-image/`
- Brand logos: `images/logo-brands-worked-on/`
- Portfolio work: `images/graphic-design/`, `images/website-development/`, `images/ux-ui-designs/`

## Portfolio Links

Update the GitHub and Figma URLs in `src/components/Portfolio.tsx` to link to your actual project repositories and design files.

## Customization

### Colors
Edit CSS variables in `src/index.css`:
- `--color-bg` - Background color
- `--color-text` - Primary text color
- `--color-accent` - Accent/brand color

### Content
Update content in individual component files:
- Contact info: `src/components/Contact.tsx`
- About text: `src/components/About.tsx`
- Services: `src/components/Services.tsx`
- Portfolio items: `src/components/Portfolio.tsx`

## Design Inspiration

The design follows modern portfolio best practices with:
- Large, confident typography
- Generous white space
- Subtle hover interactions
- Smooth page transitions
- Professional, high-end aesthetic

Built with attention to detail for a premium, creative-director level presentation.
