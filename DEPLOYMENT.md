# Intangible Heritage Website — Production Deployment Guide

This guide describes how to deploy the **Intangible Heritage** website to your Virtual Private Server (VPS) using **Docker**, **GitHub Container Registry (GHCR)**, **GitHub Actions**, and **CapRover**.

---

## 1. Summary of Files Created & Modified

| File | Status | Description |
|---|---|---|
| `next.config.ts` | Modified | Enabled `output: "standalone"` for self-contained, optimized Docker containers |
| `Dockerfile` | Created | Multi-stage production container build (Node.js 20 LTS, non-root user, health check) |
| `.dockerignore` | Created | Excludes `node_modules`, `.next`, credentials, git, and local dev files from Docker build context |
| `.github/workflows/deploy.yml` | Created | CI/CD pipeline triggered on `push` to `main` and `workflow_dispatch` |
| `.env.example` | Created | Template of environment variables with safe placeholder values and security scopes |
| `DEPLOYMENT.md` | Created | End-to-end operational documentation |

---

## 2. Prerequisites

Before setting up deployment, verify you have:
1. **GitHub Repository** with admin permissions to configure repository secrets.
2. **CapRover VPS** up and running with a root domain (e.g. `captain.yourvps.com`) and working SSL.
3. **Domain Name** pointed to your VPS (or using CapRover's default wildcard subdomain).

---

## 3. GitHub Repository Settings & Permissions

1. Open your GitHub repository: `https://github.com/KavinduLakshanFernando/Intangible-Heritage-website`.
2. Go to **Settings** > **Actions** > **General**.
3. Under **Workflow permissions**:
   - Ensure **Read and write permissions** is selected, OR allow workflows to request permissions (the workflow explicitly specifies `contents: read` and `packages: write`).
4. Under **GitHub Container Registry (GHCR)** visibility:
   - When the first image is pushed to GHCR, GitHub creates a package under your profile/organization.
   - By default, new GHCR packages may be **Private**. If private, CapRover must authenticate with GHCR to pull the image (see Section 7).

---

## 4. Required GitHub Secrets

In GitHub, go to **Settings** > **Secrets and variables** > **Actions** and click **New repository secret**.

Add the following three secrets:

| Secret Name | Value Example | Description |
|---|---|---|
| `CAPROVER_SERVER` | `https://captain.yourdomain.com` | Full URL of your CapRover dashboard (including `https://`) |
| `CAPROVER_APP` | `intangible-heritage` | Exact name of the application created in CapRover |
| `CAPROVER_APP_TOKEN` | `c34f...` (alphanumeric string) | App-specific deployment token generated from CapRover |

> [!NOTE]
> No personal GitHub tokens are needed for building/pushing to GHCR; the workflow uses the automatic `${{ secrets.GITHUB_TOKEN }}` provided by GitHub Actions.

---

## 5. CapRover Application Setup

1. Log into your **CapRover Web Dashboard**.
2. Go to **Apps** in the left sidebar.
3. In the input box under **Create A New App**:
   - Enter your app name (e.g. `intangible-heritage`).
   - Leave *Has Persistent Data* **unchecked** (Next.js is stateless).
   - Click **Create New App**.
4. Click on the newly created app to open its settings.
5. In the **HTTP Settings** section:
   - Confirm **Container HTTP Port** is set to `3000`. Next.js standalone server listens on port `3000`.

---

## 6. How to Generate the CapRover Deployment Token

1. Inside your app in the CapRover dashboard, switch to the **Deployment** tab.
2. Scroll down to **Method 3: Deploy from Github/Bitbucket/Gitlab**.
3. Under **App-Specific Token**, click **Enable App Token** (or copy the existing token).
4. Copy this token and save it as the `CAPROVER_APP_TOKEN` secret in your GitHub repository.

---

## 7. GHCR Private Image Authentication in CapRover

If your GHCR package is private, CapRover on your VPS needs credentials to pull images from `ghcr.io`.

### Step 1: Create a GitHub Personal Access Token (PAT)
1. Go to your GitHub account **Settings** > **Developer Settings** > **Personal access tokens** > **Tokens (classic)**.
2. Click **Generate new token (classic)**.
3. Name it: `caprover-ghcr-pull`.
4. Select the scope:
   - `read:packages` (Download packages from GitHub Package Registry).
5. Click **Generate token** and copy the token value (`ghp_...`).

### Step 2: Add Registry in CapRover
1. In CapRover, click **Cluster** from the left navigation menu.
2. Scroll to the **Cluster / Docker Registry** section.
3. Click **Add Third Party Registry**.
4. Fill in the registry credentials:
   - **Registry Domain**: `ghcr.io`
   - **Username**: `KavinduLakshanFernando` (your GitHub username)
   - **Password**: `<your_github_pat_from_step_1>`
   - **Email**: your GitHub account email address
5. Click **Add**. CapRover can now securely pull private images from `ghcr.io`.

*(If you choose to change the GHCR package visibility to "Public" via GitHub package settings, this step is optional).*

---

## 8. Domain and HTTPS (SSL) Configuration

1. In your DNS provider (e.g., Cloudflare, Namecheap, GoDaddy):
   - Add an `A` record pointing your domain (e.g. `intangibleheritage.lk` or `subdomain.yourdomain.com`) to your VPS IP address.
2. In CapRover, open your app (`intangible-heritage`) and go to the **HTTP Settings** tab.
3. Under **Domain Name**:
   - Enter your domain (e.g. `intangibleheritage.lk`).
   - Click **Connect New Domain**.
4. Once verified, click **Enable HTTPS** to provision a free, auto-renewing Let's Encrypt SSL certificate.
5. Check **Force HTTPS by redirecting all HTTP traffic to HTTPS**.

---

## 9. Setting Runtime Environment Variables

Next.js server-side environment variables should be configured directly in CapRover:

1. In CapRover, open the app and go to the **App Configs** tab.
2. Scroll down to **Environmental Variables**.
3. Add any runtime variables:
   ```env
   NODE_ENV=production
   PORT=3000
   HOSTNAME=0.0.0.0
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   ```
4. If using Nodemailer / SMTP:
   ```env
   SMTP_HOST=smtp.mailgun.org
   SMTP_PORT=587
   SMTP_USER=postmaster@your-domain.com
   SMTP_PASS=your-secret-password
   SMTP_FROM="Intangible Heritage <noreply@your-domain.com>"
   ```
5. Click **Save & Restart**.

---

## 10. How to Deploy

### Option A: Automatic Deployment via Git Push (Recommended)
Every commit pushed to the `main` branch triggers the deployment pipeline:

```bash
git add .
git commit -m "feat: updates for production deployment"
git push origin main
```

### Option B: Manual Trigger via GitHub UI
1. Go to your GitHub repository.
2. Click the **Actions** tab.
3. In the left sidebar, click **Build and Deploy to CapRover**.
4. Click the **Run workflow** dropdown on the right.
5. Select branch `main` and click **Run workflow**.

---

## 11. Monitoring and Troubleshooting

### Inspecting GitHub Actions Errors
1. In your GitHub repository, click **Actions**.
2. Click on the latest workflow run.
3. If a step failed (e.g., *Validate Required Secrets* or *Build and Push Docker Image*), click into the `Build, Publish, and Deploy` job to read the detailed logs.

### Checking CapRover Application Logs
1. In CapRover, go to **Apps** > `intangible-heritage`.
2. Go to the **App Logs** tab.
3. Review the live container logs.
4. You can also view logs on your VPS via SSH:
   ```bash
   docker service logs srv-captain--intangible-heritage --follow --tail 100
   ```

---

## 12. Rollback Procedure

### Option 1: Roll Back via CapRover Web Dashboard (Instant)
1. Go to **Apps** > `intangible-heritage` > **Deployment** tab.
2. Scroll down to **Deploy previous version**.
3. CapRover maintains previously deployed Docker images. Select the previous image and click **Deploy**.

### Option 2: Roll Back to a Specific Git Commit
1. Go to GitHub **Actions** > **Build and Deploy to CapRover**.
2. Run the workflow manually from an older commit, or revert the git commit on the `main` branch:
   ```bash
   git revert HEAD
   git push origin main
   ```
The CI/CD pipeline will immediately build and deploy the reverted commit.

---

## 13. Common Troubleshooting Solutions

| Issue | Cause | Fix |
|---|---|---|
| **`Missing required repository secret(s)`** | GitHub Secrets are missing or named incorrectly | Set `CAPROVER_SERVER`, `CAPROVER_APP`, and `CAPROVER_APP_TOKEN` in GitHub repository secrets |
| **`502 Bad Gateway`** | Container HTTP port misconfigured | In CapRover > App > HTTP Settings, ensure Container HTTP Port is set to `3000` |
| **`image pull failure` / `unauthorized`** | CapRover cannot pull the private GHCR image | Add GHCR registry with a GitHub PAT in CapRover > Cluster > Docker Registry (Section 7) |
| **Container restarts continuously** | Memory exhaustion or build crash | In CapRover > App Configs, increase Instance Count to 1 and ensure VPS has at least 512MB RAM free |
| **Assets/Images returning 404** | Static files missing from standalone runner | Handled automatically by the multi-stage Dockerfile which copies `.next/static` and `public/` into the runner |
