# 🚀 GitHub Pages Deployment Guide

## Quick Setup (5 minutes)

### Step 1: Configure Next.js for your GitHub repository

Your repository name is `guana`. Choose one deployment option:

#### Option A: Deploy to subdomain (username.github.io/guana)
Uncomment these lines in `next.config.js`:
```js
basePath: '/guana',
assetPrefix: '/guana',
```

#### Option B: Deploy to root domain (username.github.io)
Leave `next.config.js` as is (no basePath needed).

### Step 2: Enable GitHub Pages

1. Go to your GitHub repository: `https://github.com/YOUR_USERNAME/guana`
2. Click `Settings` → `Pages`
3. Under "Build and deployment":
   - **Source:** Select `GitHub Actions`
4. Save!

### Step 3: Deploy

```bash
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin main
```

That's it! 🎉

### Step 4: View your site

After a few minutes, your site will be live at:
- **Option A (subdomain):** `https://YOUR_USERNAME.github.io/guana`
- **Option B (root):** `https://YOUR_USERNAME.github.io`

## 🔄 Updating the Site

Every time you push to the `main` branch, GitHub Actions will automatically rebuild and redeploy your site.

```bash
# Make your changes
git add .
git commit -m "Update content"
git push origin main
```

## 🐛 Troubleshooting

### Build fails on GitHub Actions

Check the Actions tab in your repository to see the error logs:
`https://github.com/YOUR_USERNAME/guana/actions`

### Images not loading

Make sure `images: { unoptimized: true }` is set in `next.config.js` (already configured).

### 404 errors on page refresh

If using Option A (subdomain), make sure `basePath` and `assetPrefix` are uncommented in `next.config.js`.

### API routes not working

API routes (`pages/api/*`) don't work with static export. The blog/FAQ creation features will only work in development mode (`yarn dev`).

## 📊 Monitoring Deployments

View deployment status:
- Go to the `Actions` tab in your GitHub repository
- Each push will trigger a new deployment
- Green checkmark = successful deployment
- Red X = failed (click to see logs)

## 🔧 Local Testing

Test the production build locally:

```bash
yarn build
npx serve out
```

Open `http://localhost:3000` to preview your static site.

## 📞 Need Help?

- [Next.js Static Export Docs](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [GitHub Actions for Pages](https://github.com/actions/deploy-pages)

