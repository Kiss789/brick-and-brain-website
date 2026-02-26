# Brick & Brain - Website Components Backup

This folder contains the preserved components and content from the original site.

## Components (KEEP THESE)
- `src/components/Navbar.tsx` - Navigation with mobile menu, language switcher
- `src/components/Footer.tsx` - Site footer with links and contact info

## Pages (KEEP THESE)
- `src/app/[locale]/page.tsx` - Home page with hero, benefits, ROI sections
- `src/app/[locale]/a-propos/page.tsx` - About page
- `src/app/[locale]/comment-ca-marche/page.tsx` - How it works page
- `src/app/[locale]/contact/page.tsx` - Contact form page
- `src/app/[locale]/le-kit/page.tsx` - Kit details page
- `src/app/[locale]/pour-les-ecoles/page.tsx` - Schools page

## Translations (KEEP THESE)
- `messages/en.json` - English translations
- `messages/fr.json` - French translations

## Assets (KEEP THESE)
- `public/images/` - All image files (kit-overview.jpeg, logo.png, training-session.jpeg, workshop-children.png)

## Styles (KEEP THESE)
- `src/app/globals.css` - Global CSS with Tailwind imports

---

## WHAT I FIXED:
1. Image extensions: `.jpg` → `.png`/`.jpeg` to match actual files
2. `i18n.ts`: Added `locale` to return object for next-intl compatibility
3. `src/app/[locale]/layout.tsx`: Updated params type to `Promise<{locale: string}>` for Next.js 15+
4. `src/app/[locale]/test.tsx` - Added test page for debugging

## THE PROBLEM:
- Site shows blank white screen in browser preview
- Console shows 404 errors for resources (likely `/_next/static/` chunks)
- Server logs show `GET /fr 200` so page is rendering
- Issue is likely in next.config.ts or dev server/proxy configuration

## SUGGESTED CLAUDE AI SKILLS/RULES:
1. **Next.js 15+ App Router Expert** - Must understand async params in layouts
2. **next-intl Specialist** - Should know exact v4+ configuration patterns
3. **Static Export Configuration** - Must understand `output: 'export'` vs `distDir` tradeoffs
4. **IDE Browser Preview Troubleshooter** - Should test with direct browser access first, not just preview
5. **Turbopack Configuration** - May need to disable or configure for compatibility

## TASK FOR CLAUDE:
Create fresh Next.js 15+ project with:
- Proper next-intl v4+ setup
- Working dev server on localhost:3000
- Working production build
- All components/content integrated
- Clean configuration (no experimental flags unless needed)
