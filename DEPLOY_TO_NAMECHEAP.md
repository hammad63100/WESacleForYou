# Deploy to Namecheap

Since you are deploying to Namecheap, likely using cPanel and a custom domain, follow these steps:

## Prerequisites
1. You have a hosting plan with Namecheap.
2. You have access to cPanel or FTP.
3. You have run `npm run build` locally (I just did this for you).

## Steps via File Manager (cPanel)

1. **Locate your `dist` folder**:
   - Go to `d:\Hammad Work\WESacleForYou\dist`.
   - This folder contains all the files needed for your website (`index.html`, `assets/`, etc.).

2. **Zip the `dist` folder contents**:
   - Select all files inside `dist` (Ctrl+A), right-click -> Send to -> Compressed (zipped) folder.
   - Name it something like `website.zip`.

3. **Login to Namecheap cPanel**:
   - Go to Namecheap Dashboard -> Hosting List -> cPanel.
   - Open **File Manager**.

4. **Navigate to `public_html`**:
   - If this is your main domain, open `public_html`.
   - If this is a subdomain (e.g. `app.yourdomain.com`), open the folder for that subdomain.

5. **Upload & Extract**:
   - Click **Upload** and select your `website.zip`.
   - Once uploaded, right-click `website.zip` inside File Manager and choose **Extract**.
   - Make sure files are extracted directly into `public_html` (or your subdomain folder), not a subfolder.

6. **Verify**:
   - Visit your domain in the browser.
   - The site should load!

## Why I changed `vite.config.ts`?
I changed `base` from `/WESacleForYou/` to `/`. This is because on Namecheap with a custom domain, your site will be at the root (e.g. `yourdomain.com/`), not a subfolder like on GitHub Pages.

## Routing
I also added a `.htaccess` file to handle routing if you ever switch to `BrowserRouter`. For now, `HashRouter` works out of the box.
