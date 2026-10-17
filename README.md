# Amitabh Trehan academic website

A lightweight Jekyll site for GitHub Pages. Content that changes frequently lives in `_data/news.yml` and `_data/publications.yml`.

## Publish on GitHub Pages

1. Create a GitHub repository named `YOUR-USERNAME.github.io`.
2. Upload every file and folder from this package to the repository root.
3. In the repository, open **Settings > Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, then select `main` and `/ (root)`.
5. The site will appear at `https://YOUR-USERNAME.github.io/`.

## Update the site

- News: edit `_data/news.yml`.
- Publications: edit `_data/publications.yml`.
- Biography and profile links: edit `_data/profile.yml`.
- Teaching: edit `teaching/index.md`.
- CV: place the PDF at `assets/Amitabh-Trehan-CV.pdf`.
- Photograph: place a square image at `assets/profile.jpg`, then replace the `portrait` div in `index.md` with an image element if desired.

## Use amitabhtrehan.net

In **Settings > Pages**, enter `amitabhtrehan.net` under **Custom domain** before changing DNS. Follow GitHub's current official custom-domain guidance for your registrar, then enable **Enforce HTTPS** when available.

## Local preview (optional)

Install Ruby and Bundler, then run:

```bash
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000`.

## Content incorporated from the February 2026 CV

The biography, research themes, selected publications, funded projects, teaching and service pages were curated from `AmitabhTrehan-CV-Feb-2026.pdf`. The downloadable copy is stored as `assets/Amitabh-Trehan-CV.pdf`.
