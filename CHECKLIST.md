# Pre-Deployment Checklist

Before deploying your portfolio, go through this checklist:

## Required Updates

- [ ] **Replace all instances of "yourdomain.com"** in the following files with your actual domain:
  - [ ] `index.html` (og:url, twitter:url)
  - [ ] `robots.txt`
  - [ ] `sitemap.xml`

- [ ] **Create and upload an Open Graph image** (1200x630px):
  - [ ] Create the image with your name/brand
  - [ ] Upload it to your project (e.g., `og-image.jpg`)
  - [ ] Update `og:image` and `twitter:image` paths in `index.html`

- [ ] **Generate favicon.ico** (optional but recommended):
  - [ ] Use a tool like https://favicon.io/ to convert `favicon.svg` to `favicon.ico`
  - [ ] Add the .ico file to the root directory

## Content Verification

- [ ] **Verify all personal information** in `index.html`:
  - [ ] Name, title, and description
  - [ ] Email address
  - [ ] GitHub URL
  - [ ] LinkedIn URL
  - [ ] University/education details

- [ ] **Check all PDF files** are present and accessible:
  - [ ] `resume.pdf`
  - [ ] Certification PDFs (4 files with proper names)
  - [ ] Consider renaming PDF files to remove spaces (e.g., `ai-for-everyone.pdf`)

- [ ] **Review all project links**:
  - [ ] Update GitHub repository URLs to actual project repos
  - [ ] Add live demo links if available

## Optional Enhancements

- [ ] **Contact Form Integration**:
  - [ ] Choose a form service (Formspree, Netlify Forms, EmailJS, etc.)
  - [ ] Implement form submission functionality
  - [ ] Remove the placeholder alert

- [ ] **Analytics** (optional):
  - [ ] Add Google Analytics
  - [ ] Or use privacy-friendly alternatives (Plausible, Fathom, etc.)

- [ ] **Performance**:
  - [ ] Test on https://pagespeed.web.dev/
  - [ ] Optimize images if any are added
  - [ ] Consider adding preload for critical resources

- [ ] **Accessibility**:
  - [ ] Test with screen reader
  - [ ] Verify keyboard navigation
  - [ ] Check color contrast ratios

## Testing Before Deployment

- [ ] **Local Testing**:
  - [ ] Test in Chrome, Firefox, Safari, Edge
  - [ ] Test responsive design (mobile, tablet, desktop)
  - [ ] Test dark/light mode toggle
  - [ ] Test all navigation links
  - [ ] Test smooth scrolling
  - [ ] Verify PDF downloads work

- [ ] **Clean Up**:
  - [ ] Remove any test files
  - [ ] Verify `.gitignore` is excluding unnecessary files
  - [ ] Review console for any errors

## After Deployment

- [ ] **DNS & SSL**:
  - [ ] Configure custom domain (if applicable)
  - [ ] Verify SSL certificate is active (HTTPS)
  - [ ] Test www and non-www versions

- [ ] **SEO**:
  - [ ] Submit sitemap to Google Search Console
  - [ ] Test Open Graph tags with https://www.opengraph.xyz/
  - [ ] Test Twitter card with https://cards-dev.twitter.com/validator

- [ ] **Share**:
  - [ ] Add portfolio link to GitHub profile
  - [ ] Add to LinkedIn
  - [ ] Add to resume
  - [ ] Share on social media

## Notes

- Most deployment platforms (Netlify, Vercel) provide automatic HTTPS
- DNS propagation can take 24-48 hours
- Keep your repository updated - changes will auto-deploy
