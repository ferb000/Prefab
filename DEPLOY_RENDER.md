# Deploy To Render

This project is ready to deploy on Render as a static site.

## Files already added

- `render.yaml`
- Static HTML pages in the repo root
- Shared assets in `assets/`

## Recommended steps

1. Create a GitHub repository and push this folder to it.
2. Sign in to Render.
3. In Render, click `New` > `Static Site`.
4. Connect the GitHub repository.
5. If Render asks for settings manually, use:
   - Build Command: `echo "Static site ready"`
   - Publish Directory: `.`
6. Click `Create Static Site`.

## If you want to use the Blueprint file

Render can also read the `render.yaml` file in the repo root.

The file configures:

- Runtime: static
- Service name: `prefab-ghana-limited`
- Build command: `echo "Static site ready"`
- Publish directory: repo root `.`

## Notes

- This site is pure HTML/CSS/JS, so no server is required.
- Every push to your connected branch can trigger a new deploy on Render.
- After deployment, Render gives you an `onrender.com` URL.
- You can later add a custom domain in the Render dashboard.
