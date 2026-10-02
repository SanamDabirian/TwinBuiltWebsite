export const site = {
  name: "TwinBuilt Studio",
  principal: "Dr. Sanam Dabirian",
  email: "info@twinbuiltstudio.net",
  url: "https://twinbuiltstudio.net",
  tagline: "Building the Digital Future of Sustainable Cities",
  shortTagline: "Sustainable Building Intelligence",
  description:
    "TwinBuilt Studio helps municipalities and organizations pursue net-zero goals through urban building energy modeling, digital twins, retrofit analysis, and data-driven decarbonization strategy.",
} as const;

/** Temporary visible build number. Increment by 1 after each completed round of changes. */
export const siteVersion = 26;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/portfolio/", label: "Portfolio" },
  { href: "/blog/", label: "Blog" },
  { href: "/book-online/", label: "Book Online" },
  { href: "/contact/", label: "Contact" },
] as const;

export const defaultOgImage = "/images/og-default.png";
