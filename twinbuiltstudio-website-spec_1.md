# TwinBuilt Studio — Website Rebuild Spec

Source analyzed: https://www.twinbuiltstudio.net/ (live Wix site, current as of Sept 2026)

Use this as a brief for Claude (or any builder) to reconstruct a similar site — same structure, content, and visual language, on a new stack (e.g. a static HTML/React site).

---

## 1. Brand Snapshot

- **Name:** TwinBuilt Studio
- **Tagline:** "Building the Digital Future of Sustainable Cities"
- **Principal:** Dr. Sanam Dabirian
- **Contact email:** info@twinbuiltstudio.net
- **Industry:** Sustainability / building-decarbonization consulting — Urban Building Energy Modeling (UBEM), digital twins, retrofit & decarbonization strategy for municipalities, campuses, and building owners
- **Voice:** Professional, mission-driven, consultative — "empower," "actionable insights," "net-zero," "data-driven." Confident but not salesy; sentences run long and declarative.
- **Logo:** An abstract geometric "steps"/isometric-block mark (suggests stacked building forms or ascending progress) rendered in pale mint, paired with wordmark "S. Dabirian" or "TwinBuilt Studio" in a geometric sans font.

---

## 2. Visual Design System

### Color Palette

| Swatch | Hex | RGB | Usage |
|---|---|---|---|
| Deep charcoal-green | `#2D3433` | 45, 52, 51 | Header/nav bar, primary dark section backgrounds |
| Near-black green | `#1A1E1D` | 26, 30, 29 | Hero image overlay/scrim |
| Sage green | `#B2C2B9` | 178, 194, 185 | Alternate section background (testimonials, process) |
| Pale mint | `#DCEBE6` | 220, 235, 230 | Light section background, headline/body text on dark backgrounds, button borders, logo text |

Pattern: sections alternate between **dark charcoal** and **sage/mint** bands to create rhythm down the page — no pure white or black is used anywhere; everything sits in a muted, earthy green-gray range that reads as "sustainability" without being literally leaf-green.

### Typography

- **Display / headings:** Cormorant Garamond (light weight) — an elegant, high-contrast serif. Large sizes (headline ~64px), tight/negative letter-spacing, sentence case (not all-caps in the actual rendered font, though visual weight makes it read as a statement piece). Used for section headings and hero copy.
- **Body copy:** Also set in Cormorant Garamond at a larger-than-typical body size (~32px for lead paragraphs), justified alignment — gives the page a literary, editorial feel rather than a typical corporate-sans one.
- **Nav / logo / UI labels:** A geometric sans, "Futura" (book weight) — clean, wide, modern counterpoint to the serif display type.
- **Fallback stack used by the live site:** `cormorantgaramond-light, "Cormorant Garamond", serif` for display/body; `futura-lt-w01-book, sans-serif` for nav/logo; system Arial/Helvetica for minor UI chrome.

### Imagery

- Full-bleed, moody, desaturated architectural photography — interior shots with dramatic shadow/blind patterns, green-toned color grading — plus at least one wind-turbine/renewable-energy image and a green-wall/plant detail shot.
- Images are treated with a dark overlay so text stays legible; nothing bright or high-key.

### UI Details

- Buttons: pill/rounded-rectangle (~5px radius) outline style — transparent fill, pale-mint border and text on dark backgrounds ("START YOUR JOURNEY", "LEARN MORE").
- Layout: generous vertical whitespace between full-width bands; each content section is its own full-viewport-width color block.

---

## 3. Sitemap

| Page | Path | Purpose |
|---|---|---|
| Home | `/` | Hero, About teaser, Services, Testimonials, Process, Contact |
| About | `/about` | Mission/approach, deeper narrative |
| Portfolio | `/portfolio` | Case study index (6 projects) |
| Blog | `/blog` | Articles (3 live posts) |
| Book Online | `/book-online` | Paid consultation booking widget |
| Contact | `/contact` | Contact form/details |
| Notifications | `/notifications` | Wix member-account notifications (platform feature — skip unless rebuilding on Wix) |

Primary nav order: Home · About · Contact · Book Online · Blog · Notifications · Portfolio

---

## 4. Page-by-Page Content

### 4.1 Home

**Hero**
- Headline: "Building the Digital Future of Sustainable Cities"
- Subhead: "Welcome to TwinBuilt Studio, your partner in advancing sustainable urban development. We specialize in transforming complex energy data into actionable insights for municipalities and organizations pursuing net-zero goals."
- CTA button: "START YOUR JOURNEY" → links to Book Online

**About (teaser)**
- Heading: "ABOUT TWINBUILT STUDIO"
- Body: "At TwinBuilt Studio, we are passionate about building a sustainable future. Our mission is to empower cities and organizations with innovative solutions in Urban Building Energy Modeling and data-driven analytics to drive decarbonization." Plus: "With a diverse team of experts in engineering, sustainability, and digital technologies, we deliver customized strategies that meet the unique needs of every client."
- CTA: "LEARN MORE" → links to About page

**Services** — Heading: "OUR SERVICES" · Subhead: "Customized Consulting Solutions" · Intro: "Explore our comprehensive services designed to support your sustainability goals."

1. **Urban Building Energy Modeling** — "Our UBEM services provide detailed analyses of energy use in urban environments, helping cities and campuses identify efficiency opportunities and plan retrofit initiatives."
2. **Digital Twin Integration** — "Leverage our expertise in digital twin technology to create virtual models of buildings and districts that support smarter operational decisions."
3. **Decarbonization Strategies** — "We specialize in developing actionable retrofit strategies that minimize carbon footprints while enhancing building performance and structural resilience."
4. **Data-Driven Decision Support** — "Utilize our advanced data analytics to make informed decisions that accelerate progress toward net-zero targets."

**Testimonials** — Heading: "CLIENT TESTIMONIALS" · Subhead: "What Our Clients Say"
- John Doe: "TwinBuilt Studio provided invaluable insights into our energy usage..."
- Emily Johnson: "Working with TwinBuilt has transformed our approach to energy management..."
- Michael Lee: "I highly recommend TwinBuilt Studio for their innovative solutions..."

*(These read as placeholder-style testimonials — replace with real client quotes if available.)*

**Process** — Heading: "OUR PROCESS" · Intro: "Our consulting process is designed to yield impactful results. We employ a collaborative approach at every stage."

1. **Assessing Your Needs** — "We begin by conducting a thorough assessment of your current energy landscape and sustainability goals."
2. **Collaborative Strategy Development** — "Our team works closely with you to develop customized strategies tailored to your context."
3. **Ongoing Support and Evaluation** — "We provide continuous support and track your progress toward net-zero targets."

**Contact** — Heading: "CONTACT US" · Subhead: "Get in Touch" · Body: "We invite you to reach out with any inquiries or to discuss how we can assist your organization's sustainability journey." · Contact: Dr. Sanam Dabirian, info@twinbuiltstudio.net

**Footer** — Copyright / site credit to S. Dabirian.

### 4.2 About Page

- Heading: "TRANSFORMING URBAN SUSTAINABILITY"
- Mission statement: "Dedicated to advancing urban sustainability through innovative consulting in Urban Building Energy Modeling (UBEM) and building decarbonization."
- Who they serve: "Municipalities, building owners, and organizations in achieving their net-zero goals and fostering sustainable urban environments" through data-driven approaches.
- Core mission line: "To empower our clients with the tools and strategies necessary to make informed decisions for a sustainable future."
- Approach: Combines "engineering, AI, and digital technologies" to deliver "scalable solutions that facilitate smarter decision-making for cities, campuses, and buildings."
- Team: Dr. Sanam Dabirian, principal.

### 4.3 Portfolio Page

Grid of 6 case-study cards (titles only on the live site — no visible descriptions, so write new 2–3 sentence summaries for each when rebuilding):

1. Smart Grid Integration Study
2. District Energy Optimization
3. Retrofit Pathway Analysis
4. Municipal Building Energy Benchmarking
5. CityScale Decarbonization
6. Campus Digital Twin

Each links to its own case-study detail page (`/portfolio/[slug]`).

### 4.4 Blog Page

Card grid, no sidebar, no category tags. Three posts (author: Sanam Dabirian, ~4 min read each, dated Jun 22):

1. **"Leveraging AI in Building Energy Analytics for Climate Goals"** — "The urgency of addressing climate change has never been more pressing... One of the most promising solutions lies in the integration of artificial intelligence (AI) into building energy analytics."
2. **"Decarbonization Strategies for Sustainable Building Solutions"** — "The construction industry is one of the largest contributors to global carbon emissions, accounting for nearly 39% of total emissions... Decarbonization strategies are essential for reducing the carbon footprint of buildings."
3. **"Transforming Urban Energy: The Future of UBEM"** — "Urban Building Energy Modeling (UBEM) stands at the forefront of this transformation, offering innovative ways to manage energy use in urban environments."

### 4.5 Book Online Page

Three bookable consulting sessions (widget with per-service "Book Now" buttons):

| Service | Duration | Price |
|---|---|---|
| Decarbonization Strategy Session | 1h 30m | $200 CAD |
| Energy Modeling Consultation | 1h | $150 CAD |
| Retrofit Strategy Workshop | (unspecified on live site) | $300 CAD |

### 4.6 Contact Page

- Contact person: Dr. Sanam Dabirian
- Email: info@twinbuiltstudio.net
- (Live site includes a Wix contact form — replace with your own form/mailto)

---

## 5. Rebuild Notes for Claude

When asked to build this site from this spec:

1. **Structure:** Single-page marketing home (hero → about → services → testimonials → process → contact → footer) plus About, Portfolio, Blog, Book Online, and Contact as separate routes/pages.
2. **Design system:** Use the 4-color palette above in alternating full-width bands; Cormorant Garamond (or Google Fonts "Cormorant Garamond") for all headings and lead body copy; a geometric sans (Futura, or Google Fonts "Poppins"/"Century Gothic"-alike) for nav and UI labels.
3. **Imagery:** Source moody, green-toned architectural/renewable-energy stock photography (dark overlays) rather than bright/generic stock — this is core to the mood.
4. **Copy:** Reuse the section copy above verbatim as a starting point; swap the three homepage testimonials for real client quotes before launch, since the current ones read as placeholders (generic names, no company/title attribution).
5. **Booking/portfolio/blog:** These need real backing content (portfolio case-study write-ups, blog post bodies, a booking form or scheduler) since the live site only exposes titles/summaries publicly — decide before build whether to replicate a booking system or link out to Calendly/similar.
6. **Not worth replicating:** the "Notifications" nav item is a Wix account-membership feature, not real site content — omit it unless rebuilding on Wix.
