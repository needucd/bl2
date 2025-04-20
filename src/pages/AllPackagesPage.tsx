import React from "react";
import { Link } from "react-router-dom";
import { testPackagesGroupedByCategory } from "@/lib/packageData"; // You'll create this as a helper to fetch grouped data from your PackageDetail.tsx
import BlurGlass from "@/components/ui/BlurGlass";
import { Button } from "@/components/ui/button";

const AllPackagesPage = () => {
  return (
    <div className="min-h-screen bg-bloodlyf-ivory text-bloodlyf-taupe py-16 px-4 sm:px-8 lg:px-12">
      <h1 className="text-3xl font-bold text-center mb-10">Explore All Test Packages</h1>
      <div className="space-y-16">
        {Object.entries(testPackagesGroupedByCategory).map(([category, packages]) => (
          <div key={category}>
            <h2 className="text-2xl font-semibold mb-6 border-b border-gray-300 pb-2">
              {category}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <BlurGlass
                  key={pkg.id}
                  className="p-6 rounded-2xl shadow-md flex flex-col justify-between backdrop-blur-xl"
                >
                  <div>
                    <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-sm text-muted mb-3">{pkg.description}</p>
                    <ul className="text-sm text-bloodlyf-darkblue list-disc list-inside mb-4">
                      {pkg.inclusions.slice(0, 5).map((test, index) => (
                        <li key={index}>{test}</li>
                      ))}
                      {pkg.inclusions.length > 5 && (
                        <li className="italic text-xs text-bloodlyf-gray">...and more</li>
                      )}
                    </ul>
                  </div>
                  <div className="mt-auto">
                    <p className="text-lg font-semibold mb-2">
                      ₹{pkg.price.toLocaleString("en-IN")} <span className="text-sm line-through ml-2 text-gray-500">₹{pkg.originalPrice.toLocaleString("en-IN")}</span>
                    </p>
                    <Link to={`/package/${pkg.id}`}>
                      <Button className="w-full">View Package</Button>
                    </Link>
                  </div>
                </BlurGlass>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPackagesPage;
