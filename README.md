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

## 📦 Deploying to GitHub Pages with Custom Domain

This repository is configured with GitHub Actions for automatic deployment to **guana.info**.

### Setup Steps:

1. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to `Settings` → `Pages`
   - Under "Build and deployment", set:
     - Source: `GitHub Actions`
   - Under "Custom domain", enter: `guana.info`
   - Enable "Enforce HTTPS"

2. **Configure DNS (if not already done):**
   - Add these DNS records at your domain registrar:
     - Type `A` → Points to: `185.199.108.153`
     - Type `A` → Points to: `185.199.109.153`
     - Type `A` → Points to: `185.199.110.153`
     - Type `A` → Points to: `185.199.111.153`
     - Type `CNAME` → Name: `www` → Points to: `moanasod.github.io`

3. **Deploy:**
   ```bash
   git add .
   git commit -m "Deploy to guana.info"
   git push origin main
   ```

The site will automatically build and deploy to **guana.info**! 🎉

## 🌐 Live Site

- **Production:** [https://guana.info](https://guana.info)
- **Development:** [http://localhost:3000](http://localhost:3000)

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
