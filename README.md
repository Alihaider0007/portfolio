# Portfolio Website

A modern, professional portfolio for a Computer Science student—suitable for recruiters and graduate school applications.

## Features

- **Dark / Light mode** with persisted preference
- **Responsive** layout for mobile and desktop
- **Sections:** Hero, About, Skills, Projects, Certifications, Experience timeline, Social links, Contact form, Footer
- **Smooth animations** and hover effects
- **SEO optimized** with meta tags, sitemap, and robots.txt
- **Deployment ready** with configurations for Netlify, Vercel, and GitHub Pages
- **Tech stack:** HTML, CSS, JavaScript (no build step)

## Quick Start

1. Open `index.html` in a browser, or run a local server:
   ```bash
   npx serve .
   ```
2. Customize content in `index.html` (name, links, projects, etc.).
3. Add your **resume** as `resume.pdf` in the project root. The nav **Resume** link opens it in a new tab; **Download Resume** (hero) downloads it. You can also set `href` to a full URL (e.g. Google Drive, your domain) if you host the PDF elsewhere.

## Deployment

This portfolio is ready to deploy! See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions on deploying to:

- **Netlify** (Recommended) - One-click deployment with automatic HTTPS
- **Vercel** - Fast deployment with edge network
- **GitHub Pages** - Free hosting directly from your repository
- **Cloudflare Pages** - Global CDN with free SSL

### Quick Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## Customization

- **Personal info:** Update name, email, university, and links (GitHub, LinkedIn) in `index.html`.
- **Projects:** Edit the project cards and GitHub URLs.
- **Certifications / Experience:** Adjust the certification and timeline entries.
- **Colors / fonts:** Edit CSS variables and font imports in `styles.css` and `index.html`.
- **Meta tags:** Update Open Graph and Twitter card URLs in `index.html` after deployment.
- **Domain:** Update `robots.txt` and `sitemap.xml` with your actual domain.

## File Structure

```
├── index.html         # Main markup
├── resume.html        # Resume viewer page
├── styles.css         # Styles and theme
├── script.js          # Theme toggle, nav, form, animations
├── resume.pdf         # Your resume
├── favicon.svg        # Site favicon
├── netlify.toml       # Netlify deployment config
├── vercel.json        # Vercel deployment config
├── robots.txt         # SEO - search engine directives
├── sitemap.xml        # SEO - site structure
├── .gitignore         # Git ignore rules
├── DEPLOYMENT.md      # Deployment guide
└── README.md          # This file
```

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge). Uses CSS variables, `backdrop-filter`, and `IntersectionObserver`.

## Performance

- **No build step** - Deploy as-is
- **Optimized assets** - Minimal CSS/JS
- **Fast loading** - Leverages browser caching
- **CDN ready** - Works great with edge networks

## License

Feel free to use this template for your own portfolio. Attribution appreciated but not required.
