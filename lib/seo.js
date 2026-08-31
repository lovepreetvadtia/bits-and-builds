export const SITE_URL = "https://bits-and-builds.vercel.app";
export const SITE_NAME = "Bits and Builds";
export const GOOGLE_SITE_VERIFICATION = "3iVhPjJbfJ6OSy_uOjL7AFcxK6fcq-96hzcDExuY0pc";
export const GA_TRACKING_ID = "G-09K7G2R4RD";
export const FOUNDERS = [
  { name: "Lavi", role: "Co-Founder & Technical Director" },
  { name: "Jass", role: "Co-Founder & Creative Director" },
];
export const AGENCY_PHONE = "+91 6367637487";
export const AGENCY_PHONE_CLEAN = "+916367637487";
export const AGENCY_EMAIL = "bitss.builds@gmail.com";
export const AGENCY_LOCATION = "Sri Ganganagar, Rajasthan 335002, India";
export const WHATSAPP_URL = "https://wa.me/916367637487?text=Hi%20Bits%20and%20Builds!%20I%20would%20like%20to%20discuss%20a%20project.";
export const FACEBOOK_URL = "https://www.facebook.com/bits.builds/";
export const INSTAGRAM_URL = "https://www.instagram.com/bits.builds/";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Bits and Builds",
    legalName: "Bits and Builds Digital Marketing & Web Studio",
    image: `${SITE_URL}/og-image.jpg`,
    logo: `${SITE_URL}/icons/logo.webp`,
    "@id": `${SITE_URL}/#organization`,
    url: SITE_URL,
    telephone: AGENCY_PHONE,
    email: AGENCY_EMAIL,
    priceRange: "₹₹ - ₹₹₹₹",
    founder: FOUNDERS.map((f) => ({
      "@type": "Person",
      name: f.name,
      jobTitle: f.role,
    })),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sri Ganganagar City",
      addressLocality: "Sri Ganganagar",
      addressRegion: "Rajasthan",
      postalCode: "335002",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 29.9038,
      longitude: 73.8772,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Sri Ganganagar" },
      { "@type": "State", name: "Rajasthan" },
      { "@type": "Country", name: "India" },
      { "@type": "Place", name: "Worldwide" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Marketing & Web Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development (Next.js SSR)" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Marketing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "PPC Advertising (Meta & Google Ads)" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO (GMB, AEO, GEO, Local SEO)" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Graphic Design & Branding" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reels & Short-Form Video" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Local Brand Automation (Hospitals & Restaurants)" } },
      ],
    },
  };
}

export function serviceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    provider: {
      "@type": "ProfessionalService",
      name: "Bits and Builds",
      url: SITE_URL,
      telephone: AGENCY_PHONE,
    },
    description: service.description,
    areaServed: "India and Worldwide",
  };
}

export function serviceDetailSchema(service) {
  return serviceSchema(service);
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export function buildMetadata({ title, description, path = "", keywords = [] }) {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title.includes("Bits and Builds") ? title : `${title} | Bits and Builds`;
  const defaultKeywords = [
    "Bits and Builds",
    "Digital Marketing Agency Sri Ganganagar",
    "Web Development Rajasthan",
    "SEO Agency India",
    "Local SEO Sri Ganganagar",
    "PPC Facebook Ads Google Ads",
    "Hospital Appointment Automation",
    "Restaurant Table Booking Automation",
    "Lavi and Jass",
    "Next.js Development Agency",
  ];

  return {
    title: fullTitle,
    description,
    keywords: [...keywords, ...defaultKeywords],
    alternates: { canonical: url },
    icons: {
      icon: [
        { url: "/icons/favicon.ico" },
        { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/icons/logo.svg", type: "image/svg+xml" },
      ],
      apple: [
        { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
      other: [
        {
          rel: "android-chrome-192x192",
          url: "/icons/android-chrome-192x192.png",
        },
        {
          rel: "android-chrome-512x512",
          url: "/icons/android-chrome-512x512.png",
        },
      ],
    },
    manifest: "/icons/site.webmanifest",
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: `${SITE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    verification: {
      google: GOOGLE_SITE_VERIFICATION,
    },
  };
}
