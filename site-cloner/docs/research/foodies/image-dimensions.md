# Foodies — image dimension spec (no source images included)

Source: https://wowtheme7.com/tf/foodies/ (commercial template demo).

This doc exists so replacement photography/graphics can be sized correctly **without**
redistributing the vendor's actual licensed image files. It lists every distinct image
asset used on the page — **119 total (107 `<img>` tags + 12 CSS `background-image` assets)** —
with:

- **Natural (file) size** — the real pixel dimensions of the source file, read from the
  decoded image (`naturalWidth`/`naturalHeight`), not guessed from markup.
- **Rendered size(s)** — the on-page display box in a 1440px-wide desktop viewport. Some
  images are reused at more than one size across the page; all distinct sizes are listed.
- Section = which component in `src/components/sites/foodies/` that asset belongs to.

## Method / verification

Extracted by loading the live page in headless Chromium (GSAP ScrollSmoother disabled so
layout reflects normal scroll), scrolling fully through to trigger lazy-loaded slides/tabs,
then reading every `<img>` element's natural + rendered box, plus every element with an
inline `background-image`. Counts were cross-checked against the raw HTML source
(`grep` for `<img src=` and `background-image: url(`) — 107 unique `<img>` paths and 12
unique inline background paths, matching exactly. Nothing was skipped.

**A few rows show `0×0` rendered size** (e.g. `home-1.jpg`…`home-11.jpg`, inactive
`food-menu-*` tab icons, `footer-bg.jpg`): these are carousel slides or inactive tab panels
that were collapsed/hidden at the moment of capture. Their **natural (file) size is still
accurate** — use that column for sizing; ignore the `0×0`.

---

### 0. Header

| File | Natural (file) size | Rendered size(s) | Alt / notes |
|---|---|---|---|
| flag.png | 24×18 | 24×18 | flag |
| home-1.jpg | 400×440 | 325×0 (hidden slide) | img |
| home-2.jpg | 400×440 | 325×0 (hidden slide) | img |
| home-3.jpg | 400×440 | 325×0 (hidden slide) | img |
| home-4.jpg | 400×440 | 325×0 (hidden slide) | img |
| home-5.jpg | 400×440 | 325×0 (hidden slide) | img |
| home-6.jpg | 400×440 | 325×0 (hidden slide) | img |
| home-7.jpg | 400×440 | 325×0 (hidden slide) | img |
| home-8.jpg | 400×440 | 325×0 (hidden slide) | img |
| home-9.jpg | 400×440 | 325×0 (hidden slide) | img |
| home-10.jpg | 400×440 | 325×0 (hidden slide) | img |
| home-11.jpg | 400×440 | 325×0 (hidden slide) | img |
| main-logo.png | 177×118 | 177×118 | img |
| vec.png (logo folder) | 16×15 | 16×15 | img |
| order.png | 58×39 | 58×39 | img |
| logo.png | 145×96 | 120×79 (nav), 0×0 (mobile menu clone) | logo-img |

### 1. Hero

| File | Natural (file) size | Rendered size(s) | Alt / notes |
|---|---|---|---|
| hero-bg.jpg *(background)* | 1880×805 | 1400×962 (container) | section bg |
| hero-image.png | 707×662 | 891×864 | img |
| hero-image-2.png | 707×662 | 891×864 | img |
| hero-image-3.png | 707×662 | 891×864, 707×662 | img |
| discount.png | 189×176 | 189×176 | "50% off" badge |
| hero-shape1.png | 217×183 | 217×183 | img |
| hero-shape2.png | 442×210 | 442×210 | img |
| hero-shape-3.png | 229×146 | 229×146 | img |
| hero-shape-4.png | 347×356 | 347×356 | img |

### 2. Shop banner (3 category cards)

| File | Natural (file) size | Rendered size(s) | Alt / notes |
|---|---|---|---|
| shop-banner-1.jpg *(background)* | 613×482 | 451×597 (card) | Burger card bg |
| shop-banner-2.jpg *(background)* | 613×482 | 451×597 (card) | Quesadilla card bg |
| shop-banner-3.jpg *(background)* | 613×482 | 451×597 (card) | Italian card bg |
| burger1.png | 482×409 | 400×339 | img |
| ciken.png | 460×479 | 400×417 | img |
| roll.png | 509×657 | 823×769 | img |

### 3. Shop category (5-product row)

| File | Natural (file) size | Rendered size(s) | Alt / notes |
|---|---|---|---|
| shop-category-1.png | 200×187 | 200×187 | product thumb |
| shop-category-2.png | 220×187 | 220×187 | product thumb |
| shop-category-3.png | 224×187 | 224×187 | product thumb |
| shop-category-4.png | 197×187 | 197×187 | product thumb |
| shop-category-5.png | 197×187 | 197×187 | product thumb |
| shop-category-6.png | 179×187 | 179×187 | product thumb |
| line-shape.png | 312×16 | 286×15 | divider |
| sec-line.png | 263×23 | 263×23 | divider |
| shape-1.png | 260×45 | 260×45 | decorative |
| shape-2.png | 139×258 | 139×258 | decorative |
| pizza-shape.png | 421×301 | 421×301 | decorative |
| rev-shape.png | 158×136 | 158×136 | decorative |

### 4. Discount food (3 promo cards)

| File | Natural (file) size | Rendered size(s) | Alt / notes |
|---|---|---|---|
| food-banner-1.jpg *(background)* | 881×226 | 859×225 (card) | card bg |
| food-banner-2.jpg *(background)* | 433×403 | 421×411 (card) | card bg |
| food-banner-4.jpg *(background)* | 424×644 | 421×651 (card) | card bg |
| food-banner-3.jpg | 433×403 | 421×411 | img |
| discount-box.png | 132×132 | 179×179 | "$19" badge |
| pizza-discount.png | 375×349 | 375×349 | img |
| food-menu2.png | 365×193 | 365×193 | img |
| sticker.png | 187×135 | 187×135 | decorative |
| shape1.png | 79×98 | 79×98 | decorative |
| shape2.png | 170×172 | 170×172 | decorative |
| shape-5.png | 264×195 | 264×195 | decorative |

### 5. Food menu

| File | Natural (file) size | Rendered size(s) | Alt / notes |
|---|---|---|---|
| food-menu-1.png | 88×92 | 88×92 (active tab), 0×0 (inactive) | menu item thumb |
| food-menu-2.png | 92×92 | 92×92, 0×0 | menu item thumb |
| food-menu-3.png | 88×92 | 88×92, 0×0 | menu item thumb |
| food-menu-4.png | 92×92 | 92×92, 0×0 | menu item thumb |
| food-menu-5.png | 92×92 | 92×92, 0×0 | menu item thumb |
| food-menu-6.png | 88×92 | 88×92, 0×0 | menu item thumb |
| food-menu-7.png | 88×92 | 88×92, 0×0 | menu item thumb |
| food-menu-8.png | 110×92 | 110×92, 0×0 | menu item thumb |
| food-menu-9.png | 92×92 | 92×92, 0×0 | menu item thumb |
| food-menu-10.png | 88×92 | 88×92, 0×0 | menu item thumb |
| food-menu-line.png | 18×652 | 18×652 | vertical divider |

### 6. Combo banner

| File | Natural (file) size | Rendered size(s) | Alt / notes |
|---|---|---|---|
| comboo-banner.jpg *(background)* | 1880×699 | 1400×776 (section) | section bg |
| burger2.png | 715×622 | 500×435 | img |
| pizza-image2.png | 657×636 | 500×484 | img |
| left-shape.png | 775×701 | 650×776 | decorative |
| right-shape.png | 809×408 | 700×353 | decorative |
| line-2.png | 1869×49 | 1400×37 | divider |
| sec-line2.png | 263×23 | 263×23 | divider |

### 7. Feature (4-col)

| File | Natural (file) size | Rendered size(s) | Alt / notes |
|---|---|---|---|
| icon-1.svg | 55×68 | 55×68 | "Testy & Spicy" icon |
| icon-2.svg | 68×68 | 68×68 | "Quality Foods" icon |
| icon-3.svg | 68×68 | 68×68 | "Original Recipes" icon |
| icon-4.svg | 68×68 | 68×68 | "Fast Delivery" icon |

### 8. Testimonial

| File | Natural (file) size | Rendered size(s) | Alt / notes |
|---|---|---|---|
| client-1.png | 44×44 | 44×44 | avatar |
| star.png | 132×25 | 132×25 | star rating sprite |
| testimonial-bg.png | 424×273 | 424×273 | card speech-bubble bg |
| testi-shap1.png | 173×296 | 173×296 | decorative |
| testi-shap2.png | 99×165 | 99×165 | decorative |
| vec.png (home-1 folder) | 19×19 | 19×19 | quote mark |

### 9. Support banners (24/7 + special offer + special menu)

| File | Natural (file) size | Rendered size(s) | Alt / notes |
|---|---|---|---|
| food-banner-5.jpg *(background)* | 613×400 | 451×415 (card) | card bg |
| food-banner-6.jpg *(background)* | 613×400 | 451×415 (card) | card bg |
| food-banner-7.jpg *(background)* | 613×400 | 451×415 (card) | card bg |
| burger3.png | 376×454 | 343×415 | img |
| fry.png | 375×349 | 270×251 | img |
| food.png | 367×330 | 250×225 | img |
| text.png | 245×150 | 200×122 | "Special Menu" wordmark |
| line-3.png | 605×16 | 451×12 | divider |
| line-4.png | 612×16 | 451×12 | divider |
| tomato-shape-2.png | 168×150 | 168×150 | decorative |

### 10. Best delivery

| File | Natural (file) size | Rendered size(s) | Alt / notes |
|---|---|---|---|
| delivery-image.png | 392×336 | 392×336 | scooter illustration |
| info.png | 172×64 | 172×64 | "78+ customers" avatar strip |

### 11. Discount banner (Happy Sunday)

| File | Natural (file) size | Rendered size(s) | Alt / notes |
|---|---|---|---|
| discount-banner.jpg *(background)* | 1880×701 | 1400×599 (section) | section bg |
| pizza-image.png | 860×429 | 600×299 | img |
| circle-box.png | 191×189 | 191×189 | "50% Off" badge |
| flower-shape.png | 1130×701 | 966×599 | decorative |
| flower-2.png | 222×130 | 222×130 | decorative |
| tomato-shape.png | 130×278 | 130×278 | decorative |
| pizza-shape-2.png | 605×280 | 400×185 | decorative |
| top-shape.png | 1880×49 | 1400×36 | scalloped divider |

### 12. Contact

| File | Natural (file) size | Rendered size(s) | Alt / notes |
|---|---|---|---|
| contact-image.png | 870×664 | 870×664 | fries/chicken photo |

### 13. News

| File | Natural (file) size | Rendered size(s) | Alt / notes |
|---|---|---|---|
| news-1.jpg | 424×300 | 416×294 | blog post cover |
| news-2.jpg | 424×300 | 416×294 | blog post cover |
| news-3.jpg | 424×300 | 416×294 | blog post cover |
| user.png | 18×22 | 18×22 | author icon |
| comments.png | 18×17 | 18×17 | comments icon |

### 14. Footer

| File | Natural (file) size | Rendered size(s) | Alt / notes |
|---|---|---|---|
| footer-bg.jpg | 1920×855 | 0×0 (used as painted-in bg via JS, not visible as `<img>`) | section bg source |
| footer-logo.svg | 148×101 | 148×101 | logo |
| footer-top-shape.png | 1920×50 | 1440×38 | scalloped divider |
| footer-shape-1.png | 224×187 | 224×187 | decorative |
| footer-shape-2.png | 106×117 | 106×117 | decorative |
| footer-shape-3.png | 195×190 | 195×190 | decorative |
| footer-shape-4.png | 323×343 | 323×343 | decorative |
| footer-shape-5.png | 253×235 | 253×235 | decorative |
| recent-image1.jpg | 69×67 | 69×67 | recent-post thumb |
| recent-image2.jpg | 69×67 | 69×67 | recent-post thumb |
| recent-image3.jpg | 69×67 | 69×67 | recent-post thumb |
