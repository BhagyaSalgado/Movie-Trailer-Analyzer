# R26-IT-142 Research Website

Project website for **AI-Powered Movie Trailer Analyzer for Predicting Audience Reactions and Engagement**, a research project at the Sri Lanka Institute of Information Technology (SLIIT).

It's a static site (HTML, CSS and JavaScript) with no build step.

## Project structure

```
index.html        Page layout and sections
css/style.css     Styles
js/content.js     All editable content (milestones, downloads, team, demo video)
js/main.js        Rendering, menu, contact form
images/           Logo, favicon, team photos (images/team/)
```

## Updating content

Most changes happen in **`js/content.js`**:

| What | Where |
|---|---|
| Demo video | `DEMO_VIDEO_ID`: the YouTube ID (the part after `watch?v=`) |
| Milestone dates and marks | `MILESTONES` |
| Document and slide links | Third value in each `DOCS` entry, second value in each `PRES` entry (for example a Google Drive share link) |
| Team details | `SUPS` and `TEAM`: `photo`, `linkedin`, `email` |

- **Team photos:** put them in `images/team/`, for example `images/team/salgado.jpg`, and set `photo: "images/team/salgado.jpg"`.
- **Text sections** (Literature Survey, Research Gap, Objectives and so on) and the **contact email** are in `index.html`.

## Contact form

The form posts to a Vercel serverless function (`api/contact.js`), which emails each message through [Resend](https://resend.com).

1. Sign up at resend.com with **aimovieanalyzer@gmail.com**, then create an API key.
2. In Vercel, open **Project → Settings → Environment Variables** and add:
   - `RESEND_API_KEY`: your Resend API key
   - `CONTACT_TO`: `aimovieanalyzer@gmail.com`
3. Redeploy from **Deployments → ⋯ → Redeploy**.

Messages arrive with the sender's address as *Reply-To*, so you can reply to them directly. The form works only on the deployed site, not with Live Server.

## Run locally

Open `index.html` in a browser, or run:

```bash
npx serve .
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Set **Framework Preset** to **Other**. Leave the build command and output directory empty.
4. Click **Deploy**.

Every push to the main branch redeploys the site automatically.
