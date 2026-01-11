# Deployment Alternatives for graceanddaniel.com

## Option 1: Netlify (Easiest Alternative)

### Steps:
1. **Build the site:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com) and sign up
   - Drag and drop the `.next` folder, OR
   - Connect to GitHub for continuous deployment
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Configure Domain:**
   - In Netlify dashboard → Site settings → Domain management
   - Add custom domain: `graceanddaniel.com`
   - Netlify will provide DNS records:
     - Type: A, Name: @, Value: (Netlify IP)
     - Type: CNAME, Name: www, Value: (your-site.netlify.app)
   - Add these DNS records in GoDaddy DNS settings

## Option 2: Railway (Simple & Fast)

### Steps:
1. Go to [railway.app](https://railway.app) and sign up
2. Create new project → Deploy from GitHub
3. Connect your GitHub repo
4. Railway auto-detects Next.js
5. Add custom domain in Railway dashboard
6. Update GoDaddy DNS with Railway's DNS records

## Option 3: Render (Free Tier Available)

### Steps:
1. Go to [render.com](https://render.com) and sign up
2. New → Web Service → Connect GitHub
3. Select your repo
4. Build command: `npm install && npm run build`
5. Start command: `npm start`
6. Add custom domain in Render dashboard
7. Update GoDaddy DNS

## Option 4: DigitalOcean App Platform

### Steps:
1. Go to [digitalocean.com](https://digitalocean.com)
2. Create App → Connect GitHub
3. Select Next.js preset
4. Add custom domain
5. Update GoDaddy DNS

## Option 5: AWS Amplify

### Steps:
1. Go to AWS Console → Amplify
2. New app → Host web app → GitHub
3. Connect repo and deploy
4. Add custom domain
5. Update GoDaddy DNS

## Configuring GoDaddy DNS

For any hosting provider, you'll need to:

1. **Log into GoDaddy:**
   - Go to your domain management
   - Find DNS settings for graceanddaniel.com

2. **Add DNS Records:**
   - Your hosting provider will give you specific records
   - Usually includes:
     - A record: @ → IP address
     - CNAME: www → your hosting provider's domain
     - Or CNAME: @ → your hosting provider's domain (if supported)

3. **Wait for Propagation:**
   - DNS changes take 24-48 hours (usually faster)
   - You can check with: `nslookup graceanddaniel.com`

## Recommendation

**Netlify** is the easiest alternative to Vercel - similar interface, free tier, and excellent Next.js support.

Would you like me to help you set up deployment with a specific provider?

