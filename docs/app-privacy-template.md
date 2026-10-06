# Adding a privacy policy for a new app

Every app NPTS publishes on Google Play needs its own privacy policy page and, if users can create accounts, its own account-deletion page. Google Play requirements:

- [User Data policy](https://support.google.com/googleplay/android-developer/answer/10144311): the policy must name the app or the developer on the store listing (NPTS), list the data collected and who it is shared with, give a privacy contact, and describe retention and deletion.
- [Account deletion requirements](https://support.google.com/googleplay/android-developer/answer/13327111): users must be able to request deletion inside the app **and** on a web page that does not require the app.

## Steps

1. Get a signed agreement with the partner organization. It covers who decides how the data is used, who answers user requests, and permission to use their name and logo on the Play listing.
2. Go through the app's database schema and third-party services. List every kind of personal data and every service that receives it.
3. Copy `content/privacy/esperanza.md` to `content/privacy/<app>.md` and rewrite each section for the new app. Do not keep claims you have not checked in the app's code.
4. If the app has accounts, copy `content/delete-account/esperanza.md` to `content/delete-account/<app>.md`.
5. Add both routes to `nitro.prerender.routes` in `nuxt.config.ts`.
6. Add the app to the "App-specific policies" list in `content/privacy.md`.
7. In Play Console for the app:
   - Store settings: Privacy policy URL is `https://npts.tech/privacy/<app>`.
   - App content > Data safety: answers must match the privacy page.
   - App content > Data safety > Data deletion: Delete account URL is `https://npts.tech/delete-account/<app>`.

## Sections every app policy needs

- App name, NPTS as developer, the partner organization and how they relate
- Who uses the app (user roles)
- Information collected, grouped by type
- How it is used, including "we do not sell or advertise"
- Who can see it: partner, providers or other users, NPTS admins, each third-party service by name
- Security
- Retention and deletion, linking to the delete-account page
- Children
- Changes and contact (info@npts.tech)
