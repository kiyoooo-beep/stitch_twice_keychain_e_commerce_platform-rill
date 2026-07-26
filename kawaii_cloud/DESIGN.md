---
name: Kawaii Cloud
colors:
  surface: '#fbf9f1'
  surface-dim: '#dcdad2'
  surface-bright: '#fbf9f1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f4ec'
  surface-container: '#f0eee6'
  surface-container-high: '#eae8e0'
  surface-container-highest: '#e4e3db'
  on-surface: '#1b1c17'
  on-surface-variant: '#514347'
  inverse-surface: '#30312c'
  inverse-on-surface: '#f3f1e9'
  outline: '#837377'
  outline-variant: '#d5c2c6'
  surface-tint: '#864d61'
  primary: '#864d61'
  on-primary: '#ffffff'
  primary-container: '#ffb7ce'
  on-primary-container: '#7b4458'
  inverse-primary: '#fab3ca'
  secondary: '#356572'
  on-secondary: '#ffffff'
  secondary-container: '#b7e7f7'
  on-secondary-container: '#3a6977'
  tertiary: '#41673f'
  on-tertiary: '#ffffff'
  tertiary-container: '#abd6a5'
  on-tertiary-container: '#385e37'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9e3'
  primary-fixed-dim: '#fab3ca'
  on-primary-fixed: '#360b1e'
  on-primary-fixed-variant: '#6a364a'
  secondary-fixed: '#baeafa'
  secondary-fixed-dim: '#9ecede'
  on-secondary-fixed: '#001f27'
  on-secondary-fixed-variant: '#1a4d5a'
  tertiary-fixed: '#c2eebb'
  tertiary-fixed-dim: '#a7d2a1'
  on-tertiary-fixed: '#002204'
  on-tertiary-fixed-variant: '#2a4f2a'
  background: '#fbf9f1'
  on-background: '#1b1c17'
  surface-variant: '#e4e3db'
  pastel-green: '#C1E1C1'
  pastel-yellow: '#FFF5BA'
  coral-red: '#FF9B9B'
  ink-blue: '#4A5568'
typography:
  display-hero:
    fontFamily: Quicksand
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Quicksand
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Quicksand
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Quicksand
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Nunito Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Nunito Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Quicksand
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  price-display:
    fontFamily: Quicksand
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 40px
---

## Brand & Style

The design system is centered on a **Kawaii/Y2K aesthetic** designed to evoke feelings of nostalgia, playfulness, and joy. It targets a Gen Z and collector audience who value "aesthetic" consistency as much as functional speed. 

The visual language follows a **Tactile-Soft** style—a fusion of modern minimalism and neomorphic softness. By combining a creamy, edible-feeling base with vibrant pastel accents and extreme roundedness, the UI feels like a physical object that is safe and inviting to touch. The atmosphere is energetic yet low-stress, prioritizing high-resolution imagery and a "bubbly" interface that stands out in a crowded e-commerce landscape.

## Colors

The palette is anchored by an **Off-white/Cream (`#FFFDF5`)** background, which provides a warmer, more "paper-like" feel than pure white, enhancing the Y2K stationery vibe. 

- **Primary (Pastel Pink):** Used for primary actions, price tags, and the main "Add to Cart" flow.
- **Secondary (Pastel Blue):** Used for navigation elements, category filters, and secondary buttons.
- **Named Accents:** 
    - `Pastel Green` is reserved for "New Arrival" tags and stock availability.
    - `Pastel Yellow` is for highlight banners and star ratings.
    - `Coral Red` is used sparingly for alerts or "Limited Edition" markers.
- **Ink Blue:** This is the primary text color. Avoid pure black to maintain the soft, low-contrast aesthetic.

## Typography

This design system utilizes **Quicksand** for all display and heading roles to leverage its rounded terminals and friendly character. For body copy, **Nunito Sans** provides a complementary rounded aesthetic while ensuring high legibility for product descriptions and checkout forms.

- **Headlines:** Should always use a "Bold" weight to contrast against the soft colors.
- **Price Points:** Always rendered in Quicksand Bold; they should be one of the most prominent elements on product cards.
- **Micro-copy:** Use `label-caps` for product tags (e.g., "SOLD OUT") to provide a structural contrast to the otherwise soft typography.

## Layout & Spacing

The layout is a **responsive fluid grid** that prioritizes mobile-first interactions, reflecting the Gen Z target market.

- **Mobile (Default):** A 2-column product grid to maximize image visibility while keeping the scroll length manageable.
- **Desktop:** A 12-column grid with a fixed maximum width of 1200px. Content is centered with generous side margins to maintain a boutique feel.
- **Rhythm:** Use an 8px base unit. Component padding should be "airy"—never crowd text against the edges of rounded containers. A minimum of 16px internal padding is required for all cards and buttons.

## Elevation & Depth

Depth is conveyed through **Tonal Layering** and **Soft Ambient Shadows**. 

1.  **Surfaces:** The main background is the Cream base. Product cards use a pure White background to "pop" forward.
2.  **Shadows:** Avoid harsh, black shadows. Use a "Cloud Shadow" technique: a large blur radius (20px-40px) with very low opacity (8-12%) using a tinted color (e.g., a drop of the Ink Blue or Pink mixed into the shadow color).
3.  **Active States:** When a button is pressed, it should appear to sink slightly (lower shadow Y-offset) to enhance the tactile feel.

## Shapes

The shape language is the core of the "Kawaii" identity. **Sharp corners are strictly prohibited.** 

- **Extreme Roundedness:** All primary UI components (Buttons, Inputs, Cards) utilize a pill-shaped or extreme-radius approach. 
- **Image Treatment:** Product images must have at least a 1.5rem (`rounded-xl`) corner radius. 
- **Icons:** Use thick-stroked icons (2px to 3px) with rounded caps and joins to match the stroke weight of the typography.

## Components

- **Buttons:** Large, pill-shaped, and high-contrast. The primary "Add to Cart" button should use the Pastel Pink with white bold text. Use a subtle 2px border in a slightly darker shade of the background color for a "sticker" effect.
- **Product Cards:** Use a white background, a `rounded-xl` radius, and a "Cloud Shadow." The product name is in `headline-md` and the price in `price-display`.
- **Badges/Chips:** Used for "New" or "Sale." These should be small pill shapes with a 1px border matching the text color, using the `label-caps` type scale.
- **Input Fields:** Soft cream background (slightly darker than the page background) with a 2px border that turns Pastel Blue on focus.
- **Interactive Cart:** A slide-out tray from the right. It should use backdrop-blur on the obscured page content to maintain focus on the checkout items.
- **Navigation:** A floating bottom bar on mobile with oversized rounded icons, emphasizing ease of reach for one-handed use.