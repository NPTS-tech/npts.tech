# Stripe Donation Setup Guide

This guide explains how to set up a Stripe Payment Link to process donations on the NPTS site. The website is statically generated and deployed to GitHub Pages, so we use a simple redirect to Stripe Checkout instead of a complex backend integration.

## 1. Create a Stripe Product
1. Sign in to your [Stripe Dashboard](https://dashboard.stripe.com/).
2. Navigate to **Products** and click **Add Product**.
3. Set the product name (e.g., "Donation").
4. Under Pricing, you can choose:
   - **Customer chooses price** (Recommended for open donations).
   - **Standard pricing** (For fixed donation tiers).
5. Save the product.

## 2. Create a Payment Link
1. Navigate to **Payment Links** in your Stripe Dashboard.
2. Click **New**.
3. Select the "Donation" product you created.
4. Customize the link appearance (add your logo, collect addresses/phone numbers if needed).
5. Click **Create Link**.
6. **Copy the generated URL** (it looks like `https://donate.stripe.com/...`).

## 3. Configure the Application

### GitHub Pages (Production)
Because this is a statically generated site, the environment variable must be present during the build process on GitHub Actions.

1. Go to the GitHub repository.
2. Navigate to **Settings** > **Secrets and variables** > **Actions**.
3. Click on the **Variables** tab (next to Secrets).
4. Click **New repository variable**.
5. Set the Name to: `STRIPE_DONATION_LINK`
6. Set the Value to: The Stripe URL you copied in Step 2.
7. Click **Add variable**.

The next time the site deploys to `master`, the Nuxt application will build with your Stripe URL embedded in the Donors page.

### Local Development
To test this locally:
1. Create a `.env` file in the root of the project.
2. Add your variable:
   ```env
   STRIPE_DONATION_LINK=https://donate.stripe.com/your_generated_link
   ```
3. Run the development server:
   ```bash
   pnpm run dev
   ```

*Note: As a 501(c)(3) non-profit, you can apply for discounted processing rates through Stripe.*
