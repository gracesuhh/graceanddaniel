# Deployment Guide for graceanddaniel.com

## Option 1: Deploy to Vercel (Recommended for Next.js)

### Step 1: Push to GitHub
1. Create a new repository on GitHub (e.g., `wedding-website`)
2. Add the remote and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/wedding-website.git
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

### Step 3: Configure Custom Domain
1. In your Vercel project dashboard, go to "Settings" → "Domains"
2. Add `graceanddaniel.com` and `www.graceanddaniel.com`
3. Vercel will provide DNS records to add:
   - Type: A
   - Name: @
   - Value: 76.76.21.21
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com

4. Add these DNS records in your domain registrar (where you bought graceanddaniel.com)
5. Wait for DNS propagation (can take up to 24 hours, usually much faster)

## Option 2: Deploy to Netlify

### Step 1: Build the site
```bash
npm run build
```

### Step 2: Deploy
1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Drag and drop the `.next` folder, OR
3. Connect to GitHub and auto-deploy

### Step 3: Configure Domain
1. Go to "Domain settings"
2. Add custom domain `graceanddaniel.com`
3. Follow Netlify's DNS instructions

## Option 3: Other Hosting Providers

You can also deploy to:
- AWS Amplify
- Google Cloud Run
- DigitalOcean App Platform
- Any Node.js hosting service

For these, you'll need to:
1. Build: `npm run build`
2. Start: `npm start`
3. Configure environment variables if needed
4. Set up custom domain DNS records

## Important Notes

- Make sure your domain `graceanddaniel.com` is registered and you have access to DNS settings
- DNS changes can take 24-48 hours to propagate globally
- Vercel is the easiest option for Next.js projects
- The site will automatically rebuild on every git push if connected to GitHub

