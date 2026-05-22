# How to Add Text Page Posts

Text posts are the reverse-chronological news entries that appear on `/text`, below your bio. Each one is announcements, links to press features, exhibition openings, awards, residencies, anything you'd otherwise post to social media.

Each post is one markdown file. The image is optional. You can have posts that are just a title and date, posts that link out to articles, posts with a flyer or press photo, or any combination.

---

## Step 1 (optional): Upload an image to GitHub

Skip this step if your post is text-only.

1. If your post needs an image (a show flyer, a screenshot of a press feature, etc.), prepare it first: aim for **1200–1800 pixels** on the long edge. JPG for photos and press features, PNG for graphics.
2. Rename the file to be short and lowercase: `nyt-feature-2024.jpg`, not `Screenshot 2024-09-15.png`.
3. In your repository, navigate to `public/images/`, click **Add file** → **Upload files**, drag your image in, commit.

---

## Step 2: Create the post markdown file

1. In your repository, navigate to `src/content/text/`.
2. Click **Add file** → **Create new file**.
3. Name it something descriptive, ending in `.md` — for example: `nyt-feature.md` or `2024-graham-grant.md`. Use the date in the filename if it helps you organize. The filename doesn't appear on the site.
4. Paste this template into the editor:

```markdown
---
title: "Title of your post"
date: "2024-09-15"
link: "https://example.com/optional-url"
image: "/images/optional-image.jpg"
---

Optional one or two sentences of context here.
```

5. Edit the fields. Delete any field you don't need (just remove the entire line).
6. Commit.

---

## Field reference

| Field | Required? | What it does |
|---|---|---|
| `title` | Yes | The headline of the post. If `link` is set, this becomes a clickable link to the URL. |
| `date` | Yes | When the post is dated. Format `YYYY-MM-DD`. Controls sort order — newest at the top. |
| `link` | Optional | External URL. When set, the title becomes a clickable link with a small `↗` arrow next to it, and clicking opens in a new tab. |
| `image` | Optional | Path to an image file in `public/images/`. Displays at full column width below the title. |
| Body text | Optional | One or two sentences of context, written below the closing `---`. Smaller font than the title. |

---

## Four common post shapes

**Press feature with link, no image, no context text:**

```markdown
---
title: "Featured in Frieze Magazine"
date: "2024-11-12"
link: "https://frieze.com/article-url"
---
```

**Show announcement with flyer image and context:**

```markdown
---
title: "Solo Exhibition at Gallery Name"
date: "2025-03-20"
image: "/images/gallery-show-flyer.jpg"
---

Opening reception Saturday, March 22, 6–9pm. On view through April 30.
```

**Award with link and image:**

```markdown
---
title: "Recipient, Sample Foundation Grant"
date: "2024-08-01"
link: "https://samplefoundation.org/grants/2024"
image: "/images/foundation-announcement.jpg"
---
```

**Quick text-only update:**

```markdown
---
title: "New studio in Pilsen"
date: "2025-01-10"
---

After two years in Bridgeport, I've moved my practice to a larger studio in Pilsen.
```

---

## Common issues

**Post doesn't appear on the page.** Most likely the date is in the wrong format. It must be `YYYY-MM-DD` with the dashes — `2024-09-15`, not `9/15/2024` or `Sept 15 2024` or `2024-9-15`.

**The link arrow doesn't show.** The `link` field is either missing or the URL doesn't have `https://` at the start. The arrow only appears when the title is genuinely clickable.

**Image is huge / takes forever to load.** You uploaded a high-resolution original. Re-prep the file at 1200–1800px and upload again with the same filename — it'll overwrite the previous one.

**Sort order is wrong.** Double-check the dates in each post's frontmatter. Posts sort by the `date:` field, not by upload order or filename.

---

## Editing or deleting a post

To **edit**: navigate to the file in `src/content/text/`, click the pencil icon, change what you need, commit.

To **delete**: navigate to the file, click the pencil icon, then the trash icon near the top of the editor. Confirm.

If a post had an image and no other content uses it, also delete the image from `public/images/` to keep things tidy.

---

## Tip: backdating posts

You can post things that happened in the past — the `date` field is just metadata, not the day you upload it. If you want to fill in older press features and shows now, just set the `date` to when they actually happened. They'll sort into the correct chronological position automatically.
