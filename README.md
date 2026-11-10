# ISNEAK COLLECTIVE — Angular Storefront

An Angular storefront recreation inspired by the supplied Mr Sambs / Zansify products page, rebranded with the provided **ISNEAK COLLECTIVE — BUILT ON CULTURE** logo.

## Included

- Responsive storefront with desktop and mobile navigation
- Supplied logo asset used throughout the site
- Dark editorial hero section and branded footer
- Smart storefront search and category filters
- Product catalogue seeded with the 15 products and listed prices visible on the reference page
- Product sorting (featured, price, and name)
- Product quick-view dialog with size selection
- Add-to-bag interaction and bag drawer
- Newsletter form validation and feedback
- Responsive layouts for mobile, tablet, and desktop

## Requirements

- Node.js **20.19.x**, **22.12.0+**, or **24.0+**
- npm

The project targets Angular 21 LTS. Confirm your installed versions with:

```bash
node --version
npm --version
```

## Run locally

1. Extract the ZIP file.
2. Open a terminal in the `isneak-collective` folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open the local URL printed by Angular CLI (normally `http://localhost:4200`).

## Production build

```bash
npm run build
```

The production output is written to `dist/isneak-collective/`.

## Important project notes

- The product catalogue is currently frontend demo data. Update the `products` array in `src/app/app.component.ts` to manage products, prices, sizes, and descriptions.
- Product photos currently reference the public Cloudinary image assets exposed by the supplied reference storefront. Replace these image URLs with your own licensed product photography before publishing commercially.
- The bag, checkout prompt, and newsletter confirmation are frontend interactions only. No payment gateway, inventory system, customer database, email marketing provider, or order API is connected yet.
- The brand logo is stored at `public/assets/isneak-collective-logo.png`.
