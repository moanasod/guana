# Wedding Website - Montenegro 2025 🇲🇪

A beautiful Next.js wedding website for Moana & Gustav's wedding in Montenegro.

## 🚀 Quick Start

### Development

```bash
# Install dependencies
yarn install

# Start development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run linter
- `yarn export` - Export static site for deployment

## 📦 Deploying to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

This repository is configured with GitHub Actions for automatic deployment.

1. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to `Settings` → `Pages`
   - Under "Build and deployment", set:
     - Source: `GitHub Actions`

2. **Configure for subdomain (if needed):**
   - If deploying to `username.github.io/guana`, uncomment these lines in `next.config.js`:
     ```js
     basePath: '/guana',
     assetPrefix: '/guana',
     ```

3. **Push to main branch:**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

The site will automatically build and deploy! 🎉

### Option 2: Manual Deployment

1. **Build the static site:**
   ```bash
   yarn build
   ```

2. **Deploy the `out` folder:**
   - The static files will be in the `out` directory
   - Upload these to your GitHub Pages branch (`gh-pages`)

## 🌐 Deployment URLs

- **Custom domain:** `username.github.io` (if deploying to root)
- **Repository subdomain:** `username.github.io/guana` (if deploying to subdomain)

## 📝 Important Notes

- The site is configured for static export (`output: 'export'` in `next.config.js`)
- Images are set to `unoptimized: true` for static deployment
- API routes are disabled in static export mode
- The `.nojekyll` file prevents GitHub Pages from ignoring Next.js files

## 🛠️ Tech Stack

- **Framework:** Next.js 12
- **UI Library:** Material-UI (MUI)
- **Styling:** Tailwind CSS
- **Animation:** GSAP
- **Markdown:** Gray Matter, Remark

## 📁 Project Structure

```
guana/
├── _posts/           # FAQ markdown files
├── components/       # React components
├── pages/            # Next.js pages & API routes
├── public/           # Static assets
├── styles/           # Global styles
├── utils/            # Utility functions
└── data/             # Site configuration
```

## 🎨 Customization

Edit `data/portfolio.json` to customize site content, navigation, and project cards.

## 📄 License

Private - All rights reserved
