export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string[];
  noindex?: boolean;
}

export const SITE = {
  name: "Exportandes",
  url: "https://exportandes.cl",
  description: "Compramos chatarra de cobre, aluminio y metales al mejor precio en Concepción y Biobío. Retiro gratis, pago inmediato.",
  phone: "+56933301114",
  email: "contacto@exportandes.cl",
  address: {
    street: "Av. Pedro de Valdivia 733",
    city: "Concepción",
    region: "Biobío",
    country: "CL",
    postalCode: "4030000",
  },
  social: {
    instagram: "https://instagram.com/exportandes",
    facebook: "https://facebook.com/exportandes",
  },
};

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": SITE.name,
  "description": SITE.description,
  "url": SITE.url,
  "telephone": SITE.phone,
  "email": SITE.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": SITE.address.street,
    "addressLocality": SITE.address.city,
    "addressRegion": SITE.address.region,
    "addressCountry": SITE.address.country,
    "postalCode": SITE.address.postalCode,
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -36.8270,
    "longitude": -73.0503,
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:30",
      "closes": "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "13:00",
    },
  ],
  "priceRange": "$$",
  "image": `${SITE.url}/og-image.jpg`,
  "sameAs": [SITE.social.instagram, SITE.social.facebook],
});

export const getProductSchema = (name: string, price: number, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": name,
  "description": description,
  "offers": {
    "@type": "Offer",
    "price": price,
    "priceCurrency": "CLP",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": price,
      "priceCurrency": "CLP",
      "unitCode": "KGM",
      "unitText": "kg",
    },
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": SITE.name,
    },
  },
});
