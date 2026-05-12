# Your Portfolio Site

A minimal, serif-driven portfolio site built with Astro and Markdown content. Designed to be hosted free on Netlify.

---

## What you have

A static site with:

- **Homepage** (`/`) — an archive list of all projects
- **Project pages** (`/projects/[slug]`) — one page per project, generated from a Markdown file
- **Info page** (`/info`) — your bio, exhibitions, press, contact

The look is intentionally spare: serif type (Fraunces), black on white, generous whitespace, underlined links. It is fully responsive.

---

## Part 1 — Get it live (one-time setup)

You will not need to install anything on your computer. Everything happens in your web browser.

### 1. Create a GitHub account

GitHub is where your site's files will live. It is free.

1. Go to <https://github.com> and click **Sign up**.
2. Pick a username (this can be your name — it'll be visible in your project URL until you connect a custom domain).
3. Verify your email.

### 2. Create a new repository and upload these files

1. Once logged in, click the **+** icon in the top-right corner, then **New repository**.
2. Name it something like `portfolio` (lowercase, no spaces).
3. Leave it as **Public**. Do not check any of the "Initialize with" boxes.
4. Click **Create repository**.
5. On the next screen you'll see "Quick setup." Click the link near the bottom that says **uploading an existing file**.
6. Drag the **entire contents** of this folder (not the folder itself — open it and select everything inside) onto the upload area. Wait for the upload to finish.
7. Scroll down and click **Commit changes**.

> ⚠️ Important: do **not** upload the `node_modules` folder or the `dist` folder if either exists in your copy. They are not needed and will slow uploads. The `.gitignore` file already excludes them, but if you see them when selecting files to upload, skip them.

### 3. Connect Netlify

Netlify will build and host your site, for free, every time you push a change to GitHub.

1. Go to <https://app.netlify.com/signup> and sign up using your GitHub account.
2. Once logged in, click **Add new site** → **Import an existing project**.
3. Choose **Deploy with GitHub** and authorize Netlify.
4. Pick the `portfolio` repository you just created.
5. The build settings will be auto-detected from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click **Deploy site**.

In about 60 seconds, your site will be live at something like `https://random-words-12345.netlify.app`. You can rename that in Netlify under **Site configuration** → **Change site name** (e.g. `yourname.netlify.app`).

### 4. (Optional) Custom domain

If you want a `yourname.com` URL:

1. Buy a domain from [Namecheap](https://www.namecheap.com), [Porkbun](https://porkbun.com), or similar. Roughly $10–15/year.
2. In Netlify, go to **Domain management** → **Add a domain** and follow the DNS instructions they give you. Easiest path is to point your domain registrar's "nameservers" to Netlify's. There are guides for this on every registrar's help pages.

---

## Part 2 — Day-to-day: how to add or edit work

This is the part to bookmark. Once the site is live, every change you make in GitHub will auto-rebuild and re-deploy in about 30–60 seconds.

### Adding a new project

1. Go to your repository on GitHub.
2. Navigate to `src/content/projects/`.
3. Click **Add file** → **Create new file**.
4. Name it something like `my-new-project.md` (lowercase, hyphens, no spaces — this becomes part of the URL).
5. Paste the template below and edit:

```markdown
---
title: "My New Project"
year: "2025"
description: "A one-line description used for SEO and link previews."
order: 0
images:
  - src: "/images/my-new-project-1.jpg"
    alt: "Description of the image for screen readers"
    caption: "Optional caption shown below the image."
  - src: "/images/my-new-project-2.jpg"
    alt: "Description of the image"
---

Optional written statement about the work goes here in regular paragraphs.
Markdown supports *italics*, **bold**, and [links](https://example.com).

Leave this section completely empty if you want an images-only page.
```

6. Scroll down and click **Commit changes**.

### Uploading the images for that project

1. Navigate to `public/images/` in your repository.
2. Click **Add file** → **Upload files**.
3. Drag your image files in. **The filenames must match what you wrote in the markdown.**
4. Click **Commit changes**.

Netlify will rebuild and your project will appear at `yourdomain.com/projects/my-new-project` within about a minute.

### Image guidelines

- Resize images to roughly **1600–2400 pixels** on the long edge before uploading. Larger than that is wasted bandwidth.
- JPG for photographs, PNG only for graphics with transparency.
- File names: lowercase, hyphens, no spaces (e.g. `red-room-2025.jpg`, not `Red Room 2025.JPG`).
- A free tool like [Squoosh](https://squoosh.app) can resize and compress in your browser.

### Editing the order of projects on the homepage

Each project's markdown has an `order:` field. Lower numbers appear first. If two projects have the same order (or no order), the one with the later `year` appears first.

### Hiding a project without deleting it

Add `hidden: true` to the frontmatter of any project file. It won't appear on the site but the file stays in your repo.

```markdown
---
title: "Work in progress"
hidden: true
---
```

### Editing the info page

Open `src/pages/info.astro` in GitHub, click the pencil icon, and edit the text. Save by clicking **Commit changes**. (The HTML tags look intimidating but you only need to replace the text between them.)

### Editing the site name in the header

Open `src/layouts/BaseLayout.astro`. Find the line that says `Your Name` (appears in two places) and replace it with your actual name.

---

## Part 3 — Making bigger changes (the flexibility you wanted)

Because you have full code access, you can change anything. Some common tweaks:

| What you want to change | Which file to edit |
|---|---|
| Fonts, colors, spacing | `src/styles/global.css` |
| Homepage layout | `src/pages/index.astro` |
| Project page layout | `src/pages/projects/[...slug].astro` |
| Info page content | `src/pages/info.astro` |
| Site title / nav | `src/layouts/BaseLayout.astro` |

When you want a one-off project page that breaks the normal format (e.g. video instead of stills, a totally different layout), tell Claude what you want and ask it to write a new template. Save it as something like `src/pages/projects/special-project.astro` and it'll take precedence over the markdown system for that single URL.

---

## Part 4 — If something breaks

- **Site didn't update after a commit:** Go to your Netlify dashboard → **Deploys**. If the latest one failed, click into it to see the error log.
- **Image not showing:** check that the filename in markdown exactly matches the uploaded file (case-sensitive, no typos).
- **Want to preview changes locally** (advanced, optional): install [Node.js](https://nodejs.org), clone the repo to your computer, run `npm install`, then `npm run dev`. The site appears at `http://localhost:4321`.

---

## Costs summary

| Item | Cost |
|---|---|
| GitHub account | Free |
| Netlify hosting | Free for personal sites |
| Custom domain (optional) | ~$12/year |
| **Total** | **$0–1/month** |

Netlify's free tier includes 100 GB bandwidth per month, which is plenty for a portfolio site. You'd need tens of thousands of visitors per month to exceed it.

---

## Credits

Built with [Astro](https://astro.build). Typeface: [Fraunces](https://fonts.google.com/specimen/Fraunces) by Undercase Type.
