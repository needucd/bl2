
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';
import Footer from './Footer';
import HomeCollectionBooking from './HomeCollectionBooking';
import { ScrollArea } from './ui/scroll-area';

interface SchemaData {
  "@context": string;
  "@type": string;
  "name": string;
  "description": string;
  "usesDevice"?: {
    "@type": string;
    "name": string;
  };
  "relevantSpecialty"?: {
    "@type": string;
    "name": string;
  };
  "usedToDiagnose"?: {
    "@type": string;
    "name": string;
  };
  [key: string]: any;
}

interface PackageTemplateProps {
  title: string;
  metaTitle: string;
  metaDescription: string;
  packageName: string;
  schemaData: SchemaData;
  children: React.ReactNode;
}

const PackageTemplate: React.FC<PackageTemplateProps> = ({
  title,
  metaTitle,
  metaDescription,
  packageName,
  schemaData,
  children
}) => {
  return (
    <ScrollArea className="h-screen w-full">
      <div className="min-h-screen bg-bloodlyf-ivory text-bloodlyf-taupe">
        <Helmet>
          <title>{metaTitle}</title>
          <meta name="description" content={metaDescription} />
          <script type="application/ld+json">
            {JSON.stringify(schemaData)}
          </script>
        </Helmet>

        <Navbar />

        <main className="bloodlyf-container py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <h1 className="text-3xl md:text-4xl font-serif font-semibold text-bloodlyf-darkblue">
                {title}
              </h1>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-bloodlyf-beige/30 space-y-4">
                {children}
              </div>
            </div>
            
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <HomeCollectionBooking testType={packageName} />
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </ScrollArea>
  );
};

export default PackageTemplate;
