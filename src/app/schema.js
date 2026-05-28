export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "divtech Studio",
  description:
    "Jasa pembuatan website profesional untuk UMKM, bisnis, dan instansi di Blora dan Semarang.",
  url: "https://divtech.studio",
  telephone: "+6281234567890",
  email: "hello@divtech.studio",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Blora",
    addressRegion: "Jawa Tengah",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -6.9666,
    longitude: 111.4133,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Blora",
    },
    {
      "@type": "City",
      name: "Semarang",
    },
    {
      "@type": "Country",
      name: "Indonesia",
    },
  ],
  serviceType: [
    "Pembuatan Website",
    "Landing Page",
    "Company Profile",
    "Toko Online",
    "Sistem Web Custom",
  ],
  priceRange: "$$",
  openingHours: "Mo-Sa 08:00-17:00",
};
