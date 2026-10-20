# TwinBuilt Studio Website — Cursor Development Instructions

## 1. Project Objective

Build a premium, responsive, accessible, static marketing website for **TwinBuilt Studio**, a sustainability and building-decarbonization consulting studio led by **Dr. Sanam Dabirian**.

The website must communicate expertise in:

- Urban Building Energy Modeling (UBEM)
- Building and district digital twins
- Building retrofit analysis
- Decarbonization strategies
- Data-driven sustainability decision support

The final website will be hosted on **GitHub Pages** using a custom domain:

```text
twinbuiltstudio.net
```

## 2. Important Technical Constraint

This is a static website. Do not create or require a backend, database, server runtime, authentication system, server API, or custom admin panel.

All pages must be generated as static HTML and must work on GitHub Pages.

Use external no-code/free services for the few interactive functions:

- Google Forms for contact and consultation requests
- Google Sheets for response storage
- Calendly only if automatic scheduling is required
- Google Meet or Zoom for online meetings

The website must remain useful even if all external forms are temporarily unavailable. Always provide a visible email fallback:

```text
info@twinbuiltstudio.net
```

## 3. Recommended Stack

Use the following stack unless there is a strong technical reason not to:

- Astro
- TypeScript
- Tailwind CSS or well-structured scoped CSS
- Markdown content collections for blog articles and portfolio case studies
- CSS transitions and Intersection Observer for lightweight reveal animations
- GSAP only for carefully selected scroll-based animations
- SVG icons or Lucide Icons
- GitHub Actions for build and deployment
- GitHub Pages as the production host

Do not use Next.js server features, API routes, server actions, Firebase, Supabase, MongoDB, PostgreSQL, or any other backend service.

## 4. Design Direction

Use an **Apple-inspired editorial product-page aesthetic**, but do not copy Apple’s logo, proprietary assets, exact layouts, text, illustrations, or trade dress.

The design should feel:

- Minimal
- Premium
- Calm
- Architectural
- Scientific
- Editorial
- Mission-driven

The visual language should adapt Apple-like design principles to sustainable cities and building decarbonization.

### Design principles

- Use generous whitespace.
- Give every section one clear message.
- Use large, confident headlines.
- Use restrained animation and smooth transitions.
- Keep navigation and decorative UI visually quiet.
- Use large, high-quality architectural imagery.
- Prefer strong composition over many small decorative elements.
- Maintain excellent readability and contrast.
- Avoid generic startup gradients, excessive glassmorphism, noisy backgrounds, and unnecessary dashboards.

## 5. Brand System

### Colors

Define these as reusable design tokens:

```css
--color-charcoal: #2D3433;
--color-deep: #1A1E1D;
--color-sage: #B2C2B9;
--color-mint: #DCEBE6;
--color-ink: #1D2422;
--color-white-soft: #F4F7F5;
```

Do not use pure white or pure black as primary page backgrounds.

### Typography

- Display and editorial headings: Cormorant Garamond or a comparable elegant serif
- Body text: Cormorant Garamond for prominent editorial copy, with a readable sans-serif fallback for dense text
- Navigation, buttons, labels, metadata: Inter, Manrope, or Poppins

Use responsive typography with `clamp()`. Do not hard-code desktop-only font sizes.

### Shape and spacing

- Buttons: rounded pill or softly rounded rectangle
- Cards: moderate rounded corners, not excessive
- Sections: generous vertical padding
- Avoid heavy shadows; use subtle borders and tonal contrast instead

## 6. Site Map

Create these routes:

```text
/
/about/
/portfolio/
/portfolio/smart-grid-integration-study/
/portfolio/district-energy-optimization/
/portfolio/retrofit-pathway-analysis/
/portfolio/municipal-building-energy-benchmarking/
/portfolio/cityscale-decarbonization/
/portfolio/campus-digital-twin/
/blog/
/blog/leveraging-ai-in-building-energy-analytics/
/blog/decarbonization-strategies-for-sustainable-building-solutions/
/blog/transforming-urban-energy-the-future-of-ubem/
/book-online/
/contact/
/privacy/
```

Do not create a Notifications page. It is a Wix membership feature and is not needed for the static rebuild.

## 7. Shared Layout

Create reusable components for:

- Header
- Desktop navigation
- Mobile navigation drawer
- Footer
- Page hero
- Section heading
- Button
- Service card
- Portfolio card
- Blog card
- Testimonial card
- Consultation card
- Reveal-on-scroll wrapper

The header must:

- Be responsive.
- Include the TwinBuilt Studio wordmark.
- Include links to Home, About, Portfolio, Blog, Book Online, and Contact.
- Clearly indicate the current page.
- Have an accessible mobile menu.

The footer must include:

- TwinBuilt Studio
- Dr. Sanam Dabirian
- `info@twinbuiltstudio.net`
- Navigation links
- Privacy Policy link
- Copyright notice

## 8. Home Page Requirements

Build the home page as a sequence of full-width editorial sections.

### Hero

Headline:

> Building the Digital Future of Sustainable Cities

Supporting text:

> Welcome to TwinBuilt Studio, your partner in advancing sustainable urban development. We specialize in transforming complex energy data into actionable insights for municipalities and organizations pursuing net-zero goals.

Primary CTA:

```text
START YOUR JOURNEY
```

Link the CTA to `/book-online/`.

Use a dark, moody architectural background image with a readable overlay.

### About teaser

Heading:

> ABOUT TWINBUILT STUDIO

Explain that the studio empowers cities and organizations through UBEM, data-driven analytics, and decarbonization strategies.

Include a `LEARN MORE` button linking to `/about/`.

### Services

Heading:

> OUR SERVICES

Subheading:

> Customized Consulting Solutions

Create four service cards:

1. Urban Building Energy Modeling
2. Digital Twin Integration
3. Decarbonization Strategies
4. Data-Driven Decision Support

Each card needs a concise explanation, a visual cue, and an accessible hover/focus state.

### Client testimonials

Do not publish placeholder testimonials such as John Doe, Emily Johnson, or Michael Lee as real client feedback.

Initially either:

- Hide this section until real testimonials are supplied, or
- Label the section clearly as temporary sample content in development.

### Process

Heading:

> OUR PROCESS

Show three steps:

1. Assessing Your Needs
2. Collaborative Strategy Development
3. Ongoing Support and Evaluation

Use a simple numbered editorial layout rather than a complicated diagram.

### Contact CTA

Heading:

> CONTACT US

Invite visitors to discuss their sustainability goals and link to `/contact/`.

## 9. About Page Requirements

Heading:

> TRANSFORMING URBAN SUSTAINABILITY

Explain that TwinBuilt Studio advances urban sustainability through UBEM and building decarbonization consulting.

Describe the intended clients:

- Municipalities
- Building owners
- Campuses and universities
- Public organizations
- Private organizations pursuing net-zero goals

Explain that the approach combines:

- Engineering
- Artificial intelligence
- Digital twins
- Building energy analysis
- Data-driven decision support

Introduce Dr. Sanam Dabirian as the principal of TwinBuilt Studio. Do not invent academic credentials, clients, awards, or project claims. Use placeholders only where information is still required from the client.

## 10. Portfolio Page Requirements

Create a visual grid of six case-study cards:

1. Smart Grid Integration Study
2. District Energy Optimization
3. Retrofit Pathway Analysis
4. Municipal Building Energy Benchmarking
5. CityScale Decarbonization
6. Campus Digital Twin

Each card must link to a static detail page.

If these are not confirmed completed projects, label them as representative case studies, project concepts, or selected capabilities. Never present fictional projects as completed client work.

Each detail page should contain:

- Title
- Short context
- Challenge
- Approach
- Expected or demonstrated value
- Technologies or analytical methods, only when confirmed
- Relevant image or diagram
- CTA to contact TwinBuilt Studio

Do not invent confidential client names, numerical results, or performance improvements.

## 11. Blog Page Requirements

Create a blog index with a clean card grid and individual article pages.

Initial articles:

1. Leveraging AI in Building Energy Analytics for Climate Goals
2. Decarbonization Strategies for Sustainable Building Solutions
3. Transforming Urban Energy: The Future of UBEM

Each article should include:

- Title
- Author: Sanam Dabirian
- Publication date
- Reading time
- Hero image
- Article body
- Related article links
- Contact CTA

Use Markdown files or Astro content collections. Do not use a CMS or database.

Do not make unsupported statistics or scientific claims sound definitive. Preserve citations or mark content for client review when needed.

## 12. Book Online Page — No Backend

The page must present three consultation options:

| Service | Duration | Price |
|---|---:|---:|
| Decarbonization Strategy Session | 1 hour 30 minutes | $200 CAD |
| Energy Modeling Consultation | 1 hour | $150 CAD |
| Retrofit Strategy Workshop | To be confirmed | $300 CAD |

### Preferred implementation: Google Forms

Use a clearly designed static page with consultation cards and a button such as:

```text
REQUEST THIS CONSULTATION
```

The button may:

- Open one Google Form in a new tab, with the selected service pre-filled if practical, or
- Link to separate Google Forms for each service.

The form should collect:

- Name
- Email
- Organization
- Selected service
- Project or building context
- Preferred meeting format
- Two or three preferred time ranges
- Additional questions

Explain on the page that the request is reviewed manually and the final time is confirmed by email.

Provide a visible fallback:

```text
Prefer email? Contact info@twinbuiltstudio.net
```

### Optional implementation: Calendly

Only add Calendly if the client wants automatic scheduling. The free Calendly plan supports one event type and one calendar connection, so use one general event type such as `TwinBuilt Studio Consultation` and ask the visitor to select the consultation type in the intake questions. Do not build a custom booking engine.

### Payment

Do not implement payment processing in the first version unless the client explicitly requests it.

Recommended initial process:

1. Visitor submits a consultation request.
2. Sanam reviews the request.
3. Sanam confirms the time and scope by email.
4. Sanam provides payment instructions or an invoice manually.

## 13. Contact Page — No Backend

Create a polished contact page with:

- Dr. Sanam Dabirian
- `info@twinbuiltstudio.net`
- Short invitation to get in touch
- Embedded Google Form or button linking to Google Form
- Email fallback using a normal `mailto:` link
- Link to Book Online

Do not pretend that a native HTML form sends email. A static HTML form alone cannot reliably deliver email without an external form service.

## 14. Privacy Page

Create a basic Privacy Policy page explaining:

- What information the contact or consultation forms collect
- That responses are processed through Google Forms and Google Sheets
- Why the information is collected
- That information is not sold
- How a person can request correction or deletion
- How to contact TwinBuilt Studio

Use clear language and mark the page for client/legal review before launch.

## 15. Animation Requirements

Use animation to support storytelling, not distract from content.

Implement:

- Gentle fade-and-translate reveal on scroll
- Subtle image scale on hero sections
- Smooth hover states for cards and buttons
- Active navigation transitions
- Optional sticky header transition after scrolling

Respect users who prefer reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Do not add continuous background animations, excessive parallax, or WebGL unless specifically requested later.

## 16. Images and Assets

Use temporary local image placeholders until the client supplies approved assets.

Image style:

- Moody architectural photography
- Desaturated green/charcoal color treatment
- Building interiors and façades
- Renewable energy and urban infrastructure
- Digital twin or 3D city imagery

Optimize images as WebP or AVIF. Add descriptive `alt` text. Do not use Apple product imagery or copyrighted assets without permission.

## 17. SEO and Accessibility

Every page must include:

- Unique `<title>`
- Unique meta description
- Canonical URL where appropriate
- Open Graph title, description, and image
- Semantic HTML
- One clear H1
- Logical heading hierarchy
- Keyboard-accessible navigation
- Visible focus states
- Sufficient color contrast
- Accessible labels for all form links and buttons
- Descriptive image alt text

Generate a sitemap and robots file. Ensure the custom domain is used in production metadata.

## 18. GitHub Pages Deployment

Configure the project for GitHub Pages:

- Build the static site with Astro.
- Add a GitHub Actions workflow for deployment.
- Use the official Pages deployment action or the current recommended Pages workflow.
- Configure the production site URL as `https://twinbuiltstudio.net`.
- Add a `CNAME` file if required by the selected deployment method.
- Do not use a server adapter.
- Test all routes after deployment.

The production build must not contain secrets, API keys, private client data, or form response data.

## 19. Cursor Working Rules

When implementing the project:

1. Inspect the existing repository before changing files.
2. Do not delete existing user work without explicit permission.
3. Build reusable components instead of duplicating markup.
4. Keep all content editable in Markdown or clearly separated data files.
5. Keep external form URLs in one configuration file or constants module.
6. Never invent client testimonials, project results, credentials, or statistics.
7. Use placeholder text marked `CONTENT TO CONFIRM` where necessary.
8. Keep the website static and GitHub Pages compatible.
9. After each meaningful change, run the formatter, type checker, build, and tests if available.
10. Check the result in both desktop and mobile viewport sizes.

## 20. Suggested Implementation Order

Implement in this order:

1. Initialize Astro and TypeScript.
2. Create design tokens and global styles.
3. Create the shared layout, header, navigation, and footer.
4. Build the Home page.
5. Build About and Contact pages.
6. Build the Book Online page with placeholder Google Form links.
7. Add Markdown-driven Portfolio pages.
8. Add Markdown-driven Blog pages.
9. Add Privacy Policy.
10. Add SEO metadata and sitemap.
11. Add responsive behavior and accessibility improvements.
12. Add GitHub Actions deployment.
13. Run production build and perform a full route review.

## 21. Acceptance Criteria

The implementation is complete when:

- The site builds successfully with no errors.
- All listed routes work as static pages.
- The website works on GitHub Pages.
- The site is responsive on desktop, tablet, and mobile.
- The visual style is premium, minimal, and architectural.
- No backend or database is required.
- Contact and consultation actions lead to configured external forms or email.
- Placeholder content is clearly identified.
- No fake testimonials or unsupported project claims are published.
- Keyboard navigation and reduced-motion behavior work.
- Images are optimized and have alt text.
- The site contains no exposed secrets.
- The custom domain can be configured without changing the application architecture.

Before final launch, ask the client to confirm:

- Logo and brand assets
- Approved images
- Real testimonials
- Portfolio case-study details
- Complete blog content
- Google Form URLs
- Whether Calendly is required
- Payment and cancellation policy
- Privacy Policy wording
