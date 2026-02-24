# APSF Archive Site - Maintenance Guide

## Overview

This is the archived website for the Apex Public School Foundation, a 501(c)(3) nonprofit that operated from 2019 to 2026. The site preserves the foundation's legacy and grant history.

**Live URL:** https://archive.helpapexschools.org

## Hosting

The site is hosted on **GitHub Pages** from the `main` branch of this repository. Any changes pushed to `main` are automatically deployed.

- **Custom domain** is configured via the `CNAME` file (do not delete this file)
- DNS for `archive.helpapexschools.org` must point to GitHub Pages (see GitHub docs for current IPs)
- There is no build step — the site is plain HTML and CSS served directly

## Site Structure

```
APSF/
├── index.html              # Homepage (mission, impact, thank you)
├── grants-2020.html        # Grant recipients by year
├── grants-2022.html        #   (note: no 2021 page)
├── grants-2023.html
├── grants-2024.html
├── grants-2025.html
├── grants-2026.html
├── styles.css              # All site styling
├── images/
│   ├── apsf-logo-whitetext@3x.png   # Header logo
│   └── boy-girl-students-curious.jpg # Homepage hero image
├── CNAME                   # Custom domain config for GitHub Pages
└── MAINTENANCE.md          # This file
```

## Making Changes

### Editing content

1. Edit the HTML files directly — no framework or templating is used
2. Commit and push to `main` to deploy
3. Changes typically appear on the live site within 1-2 minutes

### Updating styles

All styling is in `styles.css`. Key design decisions:

- **Dark header/footer** (`#16213e`) with light content area (`#f5f7fa`)
- **Accent colors:** blue (`#4a90d9`) for headings/links, green (`#2d9a4e`) for grant amounts and buttons
- **Hero section** has a dark gradient background with white text
- Content sections use white cards on the light gray background

### Shared elements across pages

The **header** and **footer** are duplicated in every HTML file (no templating). If you change the header or footer, you must update all 7 HTML files:

- `index.html`
- `grants-2020.html`
- `grants-2022.html`
- `grants-2023.html`
- `grants-2024.html`
- `grants-2025.html`
- `grants-2026.html`

### Adding a new grants page

1. Copy an existing grants page (e.g., `grants-2026.html`) as a template
2. Update the page title, year heading, summary stats, and grant table rows
3. Add a link to the new page in the **year navigation bar** on all grants pages
4. Update the "Past Grants" link in the header nav if it should point to the newest year

### Grant table format

Each row in the grants table follows this structure:

```html
<tr>
    <td class="grant-title">Grant Title<br><small>Brief description</small></td>
    <td>School Name</td>
    <td>Teacher Name(s)</td>
    <td class="amount">$X,XXX</td>
</tr>
```

## Troubleshooting

- **Site not updating after push:** Check the GitHub Pages deployment status under the repository's Actions tab
- **Custom domain not working:** Verify the `CNAME` file contains `archive.helpapexschools.org` and DNS records are correct
- **Images not loading:** Ensure image paths are relative (e.g., `images/filename.jpg`) since the site has no base URL configuration
