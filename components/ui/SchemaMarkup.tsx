
import React from 'react';

export const SchemaMarkup: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "V Project - Desenvolvimento Web High-End",
    "image": "https://vproject.com.br/logo.png",
    "@id": "https://vproject.com.br/",
    "url": "https://vproject.com.br/",
    "telephone": "+5511999999999",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Atendimento Digital / Remoto",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "postalCode": "01000-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -23.55052,
      "longitude": -46.633308
    },
    "founder": {
      "@type": "Person",
      "name": "Vinícius de Oliveira",
      "jobTitle": "Fullstack Web Developer",
      "sameAs": [
        "https://linkedin.com/in/vinicius-oliveira",
        "https://github.com/v-project"
      ]
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://instagram.com/vproject",
      "https://vproject.com.br"
    ],
    "description": "A V Project é especializada na criação de sites institucionais, e-commerces e landing pages de alta conversão, utilizando tecnologias de ponta como Next.js e Tailwind CSS."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
