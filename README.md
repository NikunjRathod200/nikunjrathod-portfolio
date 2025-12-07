# Portfolio — Nikunj Rathod

A responsive single-page portfolio website showcasing experience, education, projects, and skills. Built with vanilla HTML, CSS, and JavaScript.

## Live Site
https://nikunjrathod200.github.io/nikunjrathod-portfolio/

## Project Files
- `index.html` — main page with sections: Hero, About, Education, Experience, Projects, Skills, and Contact.
- `styles.css` — responsive styles with dark theme and modern layout.
- `script.js` — interactive features: smooth navigation, mobile menu toggle, contact form mailto handler.

## Local Development

Run locally to preview changes:

```bash
cd /Users/nikunjrathod/Project/portfolio
python3 -m http.server 8000
# open http://localhost:8000 in your browser
```

## Customization

To personalize the portfolio:
- **Content**: Edit section text, links, and descriptions directly in `index.html`.
- **Contact email**: Update `rathodnikunj200@gmail.com` in `index.html` (hero card) and `script.js` (contact form variable `to`).
- **Styling**: Modify colors, fonts, and layout in `styles.css` (CSS variables are in `:root`).
- **Add a resume**: Place your resume PDF in the project folder and update the link in the hero section.

## Deployment

Currently deployed on GitHub Pages. To update:

```bash
git add .
git commit -m "Update portfolio content"
git push origin master
```

Changes appear at the live site within minutes.

## Technologies

- HTML5
- CSS3 (with CSS variables for theming)
- Vanilla JavaScript (no frameworks)
- Responsive design (mobile-first)
- Dark theme with accent colors (Indigo & Cyan)