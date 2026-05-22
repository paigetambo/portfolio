# How to Upload Process Images

Process images are individual photos or gifs of in-progress work. They appear in a grid on `/process` and are tagged to specific projects so visitors can filter by which project's process they want to see.

Each process image is one markdown file plus one image file. The markdown file tells the site what image to show, which project it belongs to, and when it was taken. The image file is the actual visual.

---

## Before you start: prepare your image

1. Pick the image you want to upload (photo, gif, screenshot, scan — any visual format works).
2. Resize it so the long edge is roughly **1600 pixels**. Anything bigger is wasted bandwidth since the grid only shows it at a small size anyway. Use [Squoosh.app](https://squoosh.app) to resize in your browser — drag the image in, set "Resize" on the right panel, download.
3. Rename the file to be short, lowercase, and hyphen-separated. Good: `basket-weave-detail.jpg`. Bad: `IMG_1043 (2).JPG`.
4. JPG for photos, PNG for screenshots with text or graphics, GIF for animations.

A note about gifs: the grid crops every image to a square, so make sure the most important part of your animation is in the center of the frame. Also, big gifs eat bandwidth fast — keep them under 5 MB if you can ([ezgif.com](https://ezgif.com) optimizes them).

---

## Step 1: Upload the image file to GitHub

1. Go to your repository on GitHub.
2. Navigate into `public/images/`.
3. Click the **Add file** button at the top right, then **Upload files**.
4. Drag your image into the upload area.
5. Scroll down and click **Commit changes**.

The image is now reachable at `paigetambornino.com/images/[your-filename]` even though it doesn't appear anywhere on the site yet — that comes next.

---

## Step 2: Create the markdown file

1. In your repository, navigate into `src/content/process/`.
2. Click **Add file** → **Create new file**.
3. Name the file something descriptive, ending in `.md` — for example: `basket-weave-detail.md`. The filename itself doesn't appear anywhere on the site; it's only for your own organization.
4. Paste this template into the editor:

```markdown
---
image: "/images/your-image-filename.jpg"
alt: "Short description of what's in the image"
project: "Basket 1"
date: "2024-09-15"
---
```

5. Edit the four fields to match your image (see field reference below).
6. Scroll down and click **Commit changes**.

Within about 30–60 seconds, Netlify will rebuild the site and your image will appear on `/process`.

---

## Field reference

| Field | Required? | What it does |
|---|---|---|
| `image` | Yes | The path to your uploaded image, starting with `/images/`. Must exactly match the filename you uploaded. |
| `alt` | Recommended | Short description for screen readers and SEO. Not visible on the page. |
| `project` | Optional | The name of the project this image belongs to. Used for filtering. Capitalization and extra spaces don't matter — "Basket 1", "basket 1", and "BASKET  1" all match the same project. If left blank or mistyped, the image still appears in "All" but won't filter into any specific project category. |
| `date` | Optional | When the image was taken. Format `YYYY-MM-DD`. Controls sort order on the page (newest first). |

---

## Common issues

**Image doesn't appear on the page.** Most often this is a filename mismatch. Open the markdown file and check that the `image:` value exactly matches the filename in `public/images/`, including capitalization. `Photo.jpg` is different from `photo.jpg`.

**Image appears but doesn't filter under a project.** Either the `project` field is missing/empty, or it's typed in a way that doesn't match any project's title. Open one of your project files in `src/content/projects/` and copy the `title:` value exactly — that's what the `project:` field is matching against.

**Build failed after committing.** Check Netlify → Deploys → most recent. If it's red, click into it and look for a YAML parsing error in the log. Usually a missing quote or a stray colon in your markdown. Fix the file on GitHub and commit again.

---

## Editing or deleting a process image later

To **edit**: navigate to the markdown file in `src/content/process/`, click the pencil icon, change what you need, commit.

To **delete**: navigate to the markdown file, click the pencil icon, then click the trash icon near the top of the editor. Confirm the delete. You should also delete the image file in `public/images/` if no other content references it.

---

## Batching uploads to save build credits

Every commit triggers a Netlify rebuild (15 credits). If you have 10 process images to upload, that's 150 credits if done one-by-one. Better workflow:

1. Drag all 10 images into `public/images/` in a single upload, commit once.
2. Create all 10 markdown files in one session by opening multiple browser tabs, then commit them in quick succession (Netlify only rebuilds once if commits arrive within a few seconds).

This keeps you well under the credit limit even on the free tier.
