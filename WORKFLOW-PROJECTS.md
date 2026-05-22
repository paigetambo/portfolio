# How to Manage Project Pages

A project is your most substantial piece of content — a body of work that gets its own page, multiple images, an optional written statement, and a thumbnail on the homepage. Each project lives in one markdown file in `src/content/projects/`, with its image files in `public/images/`.

This document covers four common tasks: adding a new project from scratch, editing an existing project, changing how it appears on the homepage, and removing a project.

---

## Adding a new project from scratch

**Step 1: Prepare your images.**

1. Pick all the images you want on the project page (usually 3–10). Plus one image for the thumbnail (can be one of the project images or a different one).
2. Resize each to roughly **1800–2400 pixels** on the long edge. Project images display larger than process or post images, so you want more resolution here.
3. Rename them descriptively and consistently. Example for a project called "Red Room": `red-room-1.jpg`, `red-room-2.jpg`, `red-room-3.jpg`, etc.

**Step 2: Upload images.**

1. Go to `public/images/` in your repository.
2. Click **Add file** → **Upload files**, drag in all the images for this project at once.
3. Commit.

**Step 3: Create the project markdown file.**

1. Navigate to `src/content/projects/`.
2. Click **Add file** → **Create new file**.
3. Name it with the project's slug — lowercase, hyphens, ending in `.md`. For example: `red-room.md`. **This becomes part of the URL**: the project will live at `paigetambornino.com/projects/red-room`. Pick carefully because changing it later breaks any link you've shared.
4. Paste this template and edit the fields:

```markdown
---
title: "Red Room"
year: "2025"
description: "A short one-sentence description for SEO and link previews."
order: 0
thumbnail_size: "large"
images:
  - src: "/images/red-room-1.jpg"
    alt: "Wide shot of the installation"
    caption: "Optional italic caption shown below the image."
  - src: "/images/red-room-2.jpg"
    alt: "Detail of the corner"
  - src: "/images/red-room-3.jpg"
    alt: "Long view through the doorway"
    caption: "Installation view, Gallery Name, 2025."
---

Optional written statement about the work goes here, written in plain
paragraphs. Use *italics* and **bold** if useful. Leave this section
empty if you want an images-only project page.
```

5. Commit. Within ~60 seconds the project appears on your homepage thumbnail grid and at `/projects/red-room`.

---

## Full field reference

| Field | Required? | What it does |
|---|---|---|
| `title` | Yes | The project name, shown on the homepage thumbnail label and at the top of the project page. |
| `year` | Optional | Displayed in muted text below the thumbnail and as the project's date on the project page. |
| `description` | Optional | A short sentence for SEO and link previews. Not visible on the page itself — only in browser bookmarks and Google results. |
| `order` | Optional | Controls sort order on the homepage. Lower numbers come first. Newest work usually gets `0`, next gets `1`, etc. If two projects have the same `order` (or no order), they sort by `year` descending. |
| `thumbnail_size` | Optional | One of `"small"`, `"medium"`, `"large"`. Controls how big the thumbnail appears on the homepage. Default is `"medium"`. See sizing rules below. |
| `thumbnail` | Optional | Path to a specific image to use as the thumbnail. If not set, the first image in your `images:` list is used. |
| `hidden` | Optional | Set to `true` to keep the project file but not display it anywhere on the site. |
| `images` | Optional | List of images shown on the project page, in order. Each image needs `src` (path) and optionally `alt` (accessibility), `caption` (italic text below), and `width` (e.g., `"400px"` to display smaller than full column). |
| Body text | Optional | Written statement below the closing `---`. Appears at the bottom of the project page, below the images. |

---

## Thumbnail sizing on the homepage

The homepage uses a "bucket" layout that adjusts based on each project's `thumbnail_size`:

| Size | What it looks like |
|---|---|
| `"large"` | Full width — one thumbnail per row |
| `"medium"` | Half width — two thumbnails per row |
| `"small"` | One-third width — three thumbnails per row |

If you don't set `thumbnail_size`, the project shows as medium by default.

The browser fits as many of each size as it can in each row. Mixing sizes can create small gaps at row ends — if that bugs you, group projects of the same size together using the `order` field.

---

## Editing an existing project

To **change project text or settings**: navigate to the file in `src/content/projects/`, click the pencil icon, edit, commit.

To **add a new image**:

1. Upload the new image to `public/images/` (same as initial setup).
2. Open the project markdown file.
3. Add a new entry to the `images:` list:

   ```yaml
   images:
     - src: "/images/red-room-1.jpg"
       alt: "Wide shot"
     - src: "/images/red-room-2.jpg"
       alt: "Detail"
     - src: "/images/red-room-new.jpg"   ← new image
       alt: "Another angle"
   ```

4. Commit.

To **reorder images**: rearrange the entries in the `images:` list. They display in the order you list them.

To **remove an image**: delete its entry from the `images:` list (the three lines `- src:`, `alt:`, and optionally `caption:`). Also delete the image file from `public/images/` if no other project uses it.

To **change the thumbnail**: either move the desired image to the top of your `images:` list, or add a `thumbnail:` line above the `images:` block:

```markdown
thumbnail: "/images/red-room-2.jpg"
```

---

## Changing how a project appears on the homepage

**Move it up or down in the order:** edit the `order:` field. Lower numbers appear first.

**Make the thumbnail bigger or smaller:** change `thumbnail_size:` between `"small"`, `"medium"`, and `"large"`.

**Temporarily hide it without deleting:** add `hidden: true` to the frontmatter. The project file stays in your repo but disappears from the homepage and is unreachable at its URL. Remove the line (or set to `false`) to bring it back.

---

## Deleting a project completely

1. Navigate to the project file in `src/content/projects/`.
2. Click the pencil icon to edit.
3. Look for the trash/delete icon near the top of the editor. Click it. Confirm the delete in the commit message that appears.
4. Optionally also delete its image files from `public/images/` to keep your repo clean.

**Note**: if anyone has bookmarked the project's URL, that link will now 404. If the project was meaningful enough that you want old links to keep working, consider using `hidden: true` instead, or setting up a redirect (let me know if you want to do that).

---

## Common issues

**Project doesn't appear on the homepage but the file exists.** Check that `hidden:` isn't set to `true`. Also check the file actually ends in `.md` (without that extension, Astro ignores it).

**Images on the project page show as broken icons.** Filename mismatch between the markdown's `src:` field and the actual file in `public/images/`. Case-sensitive: `Red-Room-1.jpg` ≠ `red-room-1.jpg`.

**Build failed after committing.** Open Netlify → Deploys → latest. If red, click in for the error. Usually a YAML formatting issue — a missing quote around a string, wrong indentation under `images:`, or a missing colon. Indentation under `images:` must be exactly two spaces per level, no tabs.

**Homepage thumbnail looks different size than I expected.** Confirm `thumbnail_size:` is in quotes and one of the three allowed values (`"small"`, `"medium"`, `"large"`). Anything else falls back to medium.

**Thumbnail looks wrong because it's pulling from the wrong image.** Either change which image is first in the `images:` list, or add a dedicated `thumbnail:` field pointing at the right image.

---

## A note on URLs

A project's URL is based on the filename. The file `red-room.md` becomes the URL `/projects/red-room`. If you rename the file later, old links to the URL will break. Pick the filename carefully when creating the project, because URL stability matters for any link you share or that gets picked up by Google.
