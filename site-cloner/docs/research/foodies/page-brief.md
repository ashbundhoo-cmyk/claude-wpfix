# Foodies — page brief

Source: https://wowtheme7.com/tf/foodies/ (commercial HTML template demo — "tf" = ThemeForest).
**Cloned for design/typography/layout reference only.** Real photography, copy, and brand
assets from the source were intentionally NOT downloaded or embedded — every image slot is a
labeled `<Placeholder>` component for the owner to replace before deploying.

## Section order (top to bottom)

1. Header — announcement bar + nav (`Home, Menu, Pages, About, Shop, Blog, Contact`)
2. Hero — dark bg, big heading, CTA, slider dots
3. Shop banner — 3 category cards (Burger / Quesadilla / Italian)
4. Shop category — "Our Delicious Fast Foods", 5-product row
5. Discount food — 3 colorful promo cards
6. Food menu — tabs + 2-column menu list
7. Combo banner — dark green stats banner
8. Feature — 4-column icon features (2nd card highlighted white w/ CTA)
9. Testimonial — 3 speech-bubble review cards
10. Support banners — 24/7 support / special offer / special menu (3 cards)
11. Best delivery — 3-col "choose pickup time" / illustration / "earn points"
12. Discount banner — "HAPPY SUNDAY" dark banner
13. Contact — contact info + headquarters/email cards
14. News — 3 blog post cards
15. Footer — newsletter bar + 4 columns + bottom bar

## Typography

- Body: **Nunito** (400–800), base 18px, color `#76756D`
- Headings: **Signika** (500–700)
- Loaded via `next/font/google` in `src/app/layout.tsx` (source loads self-hosted equivalents)

## Color tokens (`globals.css` `@theme`, prefixed `foodies-*`)

| Token | Hex | Use |
|---|---|---|
| `theme` | `#FFC222` | primary yellow/orange accent, CTAs |
| `theme2` | `#00833E` | brand green — header accents, footer, section titles |
| `theme3` | `#ED1C27` | red accent (quesadilla card, star badges) |
| `theme4` | `#C9AB81` | tan, used at low opacity for feature section bg |
| `theme5` | `#D96B1A` | secondary orange |
| `theme6` | `#E64103` | deep orange/red |
| `header` | `#1E1D23` | near-black section backgrounds (hero, discount banner) |
| `body` | `#F4F1EA` | page background |
| `text` | `#76756D` | body text |

## Known gaps / not yet matched

- Original uses GSAP ScrollSmoother + WOW.js scroll-reveal animations and a Swiper hero/testimonial
  carousel — this pass is static (no carousel behavior, no scroll-linked motion).
- All photography/icons are placeholders — swap in `src/components/sites/foodies/*` before deploy.
- Mobile menu (hamburger) not implemented — nav only shown ≥lg breakpoint.
- Food-menu tab switching is visual only (no JS state yet).
