# Deployment Guide

This portfolio is ready to deploy on multiple platforms. Choose the one that works best for you:

## Option 1: Deploy to Netlify (Recommended)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy)

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Click "Deploy site" (no build configuration needed)

**Custom Domain:** Go to Site settings → Domain management to add your custom domain.

## Option 2: Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Click "Deploy" (default settings work)

**Custom Domain:** Go to Settings → Domains to add your custom domain.

## Option 3: Deploy to GitHub Pages

1. Push your code to GitHub
2. Go to your repository settings
3. Navigate to Pages section
4. Under "Source", select the branch (usually `main`)
5. Click "Save"
6. Your site will be live at `https://username.github.io/repository-name/`

## Option 4: Deploy to Cloudflare Pages

1. Push your code to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Click "Create a project"
4. Connect your GitHub repository
5. Build settings:
   - Build command: (leave empty)
   - Build output directory: `/`
6. Click "Save and Deploy"

## Pre-Deployment Checklist

Before deploying, make sure to:

- [ ] Update the `og:url` and `twitter:url` in [index.html](index.html) with your actual domain
- [ ] Update the `og:image` and `twitter:image` in [index.html](index.html) with your actual OG image URL
- [ ] Create an OG image (recommended size: 1200x630px) for social media previews
- [ ] Add `favicon.ico` for better browser support (you can generate from favicon.svg)
- [ ] Update sitemap.xml with your actual domain
- [ ] Test all PDF links (resume, certifications) work correctly
- [ ] Verify all external links (GitHub, LinkedIn) are correct
- [ ] Test contact form (currently shows alert - consider integrating with a service)

## Custom Domain Setup

After deployment, to use a custom domain:

1. Purchase a domain from a registrar (Namecheap, GoDaddy, Cloudflare, etc.)
2. In your deployment platform (Netlify/Vercel/etc.), add your custom domain
3. Update your domain's DNS records with the provided values
4. Wait for DNS propagation (usually 24-48 hours)

## Contact Form Integration

The contact form currently shows a simple alert. For production, consider integrating with:

- **Netlify Forms** (if using Netlify) - Add `netlify` attribute to form
- **Formspree** - Free tier allows 50 submissions/month
- **EmailJS** - Send emails directly from JavaScript
- **Web3Forms** - Free and open-source form endpoint

## SSL Certificate

All mentioned platforms provide free SSL certificates automatically. Your site will be served over HTTPS.

## Continuous Deployment

Once connected to your Git repository, these platforms will automatically redeploy your site whenever you push changes to your repository.
