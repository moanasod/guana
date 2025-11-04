# 🚀 GitHub Pages Deployment Guide with Custom Domain

## Deployment to guana.info

### Step 1: Configure GitHub Pages

1. Go to your GitHub repository: `https://github.com/moanasod/guana`
2. Click `Settings` → `Pages`
3. Under "Build and deployment":
   - **Source:** Select `GitHub Actions`
4. Under "Custom domain":
   - Enter: `guana.info`
   - Click "Save"
   - Enable "Enforce HTTPS" (may take a few minutes to become available)

### Step 2: Configure DNS at your domain registrar

Add the following DNS records:

**A Records** (for apex domain):
```
Type: A    Host: @    Value: 185.199.108.153
Type: A    Host: @    Value: 185.199.109.153
Type: A    Host: @    Value: 185.199.110.153
Type: A    Host: @    Value: 185.199.111.153
```

**CNAME Record** (for www subdomain):
```
Type: CNAME    Host: www    Value: moanasod.github.io
```

> **Note:** DNS changes can take up to 24-48 hours to propagate, but usually happen within a few minutes.

### Step 3: Deploy

```bash
git add .
git commit -m "Deploy to guana.info"
git push origin main
```

That's it! 🎉

### Step 4: View your site

After a few minutes, your site will be live at:
- **Primary:** `https://guana.info`
- **www redirect:** `https://www.guana.info` → redirects to `https://guana.info`

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
`https://github.com/moanasod/guana/actions`

### Site not loading or appears frozen

1. **Clear browser cache:** Hard refresh with `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
2. **Check DNS propagation:** Visit [https://dnschecker.org](https://dnschecker.org) and enter `guana.info`
3. **Verify CNAME file:** Make sure `public/CNAME` contains only `guana.info`
4. **Check GitHub Pages settings:** Ensure custom domain is set to `guana.info` with HTTPS enabled

### Images not loading

- Images are configured for static export (already set up)
- External image URLs should work without any issues
- Local images in `/public/images/` are accessible via `getAssetPath()`

### Custom domain not working

1. Wait 24-48 hours for DNS propagation (usually faster)
2. Verify DNS records are correct at your domain registrar
3. Check GitHub Pages custom domain setting
4. Ensure HTTPS is enforced in GitHub Pages settings

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

