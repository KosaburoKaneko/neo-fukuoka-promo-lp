---
name: Neo-Fukuoka Father’s Day
colors:
  surface: '#fcfaeb'
  surface-dim: '#dcdbcc'
  surface-bright: '#fcfaeb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f4e5'
  surface-container: '#f0eee0'
  surface-container-high: '#eae9da'
  surface-container-highest: '#e5e3d4'
  on-surface: '#1c1c13'
  on-surface-variant: '#44464f'
  inverse-surface: '#313127'
  inverse-on-surface: '#f3f1e2'
  outline: '#757680'
  outline-variant: '#c5c6d0'
  surface-tint: '#4a5d90'
  primary: '#021b4c'
  on-primary: '#ffffff'
  primary-container: '#1d3162'
  on-primary-container: '#889ad2'
  inverse-primary: '#b2c5ff'
  secondary: '#705d00'
  on-secondary: '#ffffff'
  secondary-container: '#fbde70'
  on-secondary-container: '#756100'
  tertiary: '#460001'
  on-tertiary: '#ffffff'
  tertiary-container: '#6e0002'
  on-tertiary-container: '#ff6d5c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b2c5ff'
  on-primary-fixed: '#001849'
  on-primary-fixed-variant: '#324577'
  secondary-fixed: '#fee173'
  secondary-fixed-dim: '#e1c55a'
  on-secondary-fixed: '#221b00'
  on-secondary-fixed-variant: '#544600'
  tertiary-fixed: '#ffdad5'
  tertiary-fixed-dim: '#ffb4a9'
  on-tertiary-fixed: '#410001'
  on-tertiary-fixed-variant: '#930004'
  background: '#fcfaeb'
  on-background: '#1c1c13'
  surface-variant: '#e5e3d4'
  deep-indigo: '#1D3162'
  warm-gold: '#D7BC52'
  celebratory-red: '#C8251C'
  paper-cream: '#F9F7E8'
  charcoal-text: '#333333'
typography:
  display-lg:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.4'
  headline-lg-mobile:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.4'
  headline-md:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.5'
  body-lg:
    fontFamily: Noto Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.8'
  body-md:
    fontFamily: Noto Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Noto Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  caption:
    fontFamily: Noto Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max-width: 1200px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

The brand personality is **Clean, Trustworthy, and Sophisticated**, bridging the gap between traditional Japanese gifting and modern lifestyle aesthetics. It targets adult children seeking high-quality food gifts (mentaiko, rice-based delicacies, and sake accompaniments) for fathers who appreciate refined "bansaku" (evening drinks). 

The design style is **Corporate / Modern with a Tactile touch**. It avoids the cluttered, aggressive sales-driven layouts of typical e-commerce flyers in favor of a balanced, editorial feel. Large high-resolution photography is paired with generous whitespace and elegant Japanese typography to evoke a sense of premium quality and heartfelt gratitude. The emotional response should be one of "reliable excellence"—a gift that is both impressive and comforting.

## Colors

The palette is rooted in a sophisticated "Evening" aesthetic. 
- **Primary (Deep Indigo):** Used for headers, footers, and primary navigation to establish authority and trust. It evokes the quiet, premium atmosphere of an upscale izakaya.
- **Secondary (Warm Gold):** Reserved for accentuation, highlights, and secondary UI elements to denote "Limited Edition" or "Premium" status.
- **Background (Paper Cream):** Used as the primary canvas color to provide warmth and a traditional "washi" paper feel, which is more inviting than clinical white.
- **Accent (Celebratory Red):** Used sparingly for "Sale" badges, price points, or small decorative elements to signal Father’s Day and Fukuoka’s food heritage without dominating the visual hierarchy.

## Typography

This design system uses a dual-font approach to balance tradition and modern legibility. 
- **Noto Serif (Japanese):** Used for headlines and emotional copy. It conveys the "premium" and "sophisticated" aspects of the brand. Vertical text arrangements (tategaki) may be used for short decorative phrases or section titles to enhance the Japanese aesthetic.
- **Noto Sans (Japanese):** Used for body text, product descriptions, and functional UI. It ensures clarity and trust, particularly on smaller screens. 
- **Hierarchy:** High contrast in size between display titles and body text is encouraged to create an editorial, high-end magazine layout.

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop to maintain a curated, controlled visual experience. 
- **Rhythm:** A 12-column grid is used for desktop (1200px max width). For mobile, a single-column layout is standard with generous vertical padding to prevent "information density" fatigue.
- **Whitespace:** Large "Section Gaps" (120px) are used to separate different product categories or storytelling blocks, allowing the photography to "breathe."
- **Reflow:** On tablet, elements transition to a 2-column or 3-column grid. On mobile, margins are tightened to 20px, but internal component padding remains consistent to maintain the tactile feel.

## Elevation & Depth

Visual hierarchy is established through **Tonal Layers** and **Ambient Shadows**. 
- **Surfaces:** The primary background is `Paper Cream`. Product cards use `#FFFFFF` with extremely subtle, soft shadows to appear slightly lifted from the "table."
- **Shadows:** Use large blur radii (16px - 24px) with very low opacity (5-8%) tinted with `Deep Indigo` rather than pure black to keep the depth "warm" and natural.
- **Overlays:** Semi-transparent layers of `Deep Indigo` (80% opacity) are used for hover states on imagery or for text-over-image scenarios to ensure legibility while maintaining the evening mood.

## Shapes

The shape language is **Soft (0.25rem)**. 
While the landing page leans toward a structured and professional look, sharp corners are avoided to remain "approachable" and "warm." 
- **Cards & Buttons:** Use a 4px corner radius to provide a subtle refinement without becoming "bubbly" or juvenile. 
- **Imagery:** Product photography should use sharp corners or very large radii (rounded-xl) for specific "lifestyle" callouts, creating a mix of structured product shots and organic lifestyle scenes.

## Components

- **Buttons:** Primary CTAs (e.g., "Add to Cart") are solid `Deep Indigo` with `White` text. Secondary CTAs (e.g., "View Details") use a `Warm Gold` border with an elegant serif label. Hover states involve a subtle lift and a slight darkening of the background color.
- **Product Cards:** Featuring a clean white background, a soft shadow, and a `1px` border in a very light version of `Deep Indigo`. Product names are in Serif, while prices are in a bold Sans-serif.
- **Chips/Badges:** Used for "Limited Time" or "Fukuoka Local." These use a pill shape (rounded-full) with `Celebratory Red` text on a light red tint or a `Warm Gold` background.
- **Input Fields:** Minimalist design with a bottom border or very light outline. Focus states use a `Warm Gold` highlight.
- **Iconography:** Thin, 1.5pt stroke line icons. Icons should represent food (rice bowl, sake bottle), shipping (truck), and gift-wrapping (ribbon). Avoid complex or colorful icons that distract from the photography.
- **Gift Bundles:** Special UI containers that group multiple products using a `Warm Gold` background tint to differentiate them from individual items.