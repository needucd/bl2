
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { Save, Plus, Edit, Trash2 } from 'lucide-react';
import BlurGlass from '@/components/ui/BlurGlass';

interface ThyroidPage {
  id: string;
  title: string;
  path: string;
  isCreated: boolean;
}

interface ThyroidPagesManagerProps {
  onCreatePage: (pageId: string, title: string) => void;
  existingPages: string[];
}

export const ThyroidPagesManager = ({ onCreatePage, existingPages }: ThyroidPagesManagerProps) => {
  // Define all thyroid pages we want to create
  const thyroidPages: ThyroidPage[] = [
    { id: "thyroid/thyroid-profile-test", title: "Thyroid Profile Test", path: "/thyroid/thyroid-profile-test", isCreated: false },
    { id: "thyroid/thyroid-function-test", title: "Thyroid Function Test", path: "/thyroid/thyroid-function-test", isCreated: false },
    { id: "thyroid/thyroid-blood-test", title: "Thyroid Blood Test", path: "/thyroid/thyroid-blood-test", isCreated: false },
    { id: "thyroid/thyroid-test-near-me-trivandrum", title: "Thyroid Test Near Me Trivandrum", path: "/thyroid/thyroid-test-near-me-trivandrum", isCreated: false },
    { id: "thyroid/thyroid-test-home-collection-trivandrum", title: "Thyroid Test Home Collection Trivandrum", path: "/thyroid/thyroid-test-home-collection-trivandrum", isCreated: false },
    { id: "thyroid/thyroid-test-home-service-kerala", title: "Thyroid Test Home Service Kerala", path: "/thyroid/thyroid-test-home-service-kerala", isCreated: false },
    { id: "thyroid/best-thyroid-test-center-trivandrum", title: "Best Thyroid Test Center Trivandrum", path: "/thyroid/best-thyroid-test-center-trivandrum", isCreated: false },
    { id: "thyroid/affordable-thyroid-test-trivandrum", title: "Affordable Thyroid Test Trivandrum", path: "/thyroid/affordable-thyroid-test-trivandrum", isCreated: false },
    { id: "thyroid/thyroid-test-laboratory-trivandrum", title: "Thyroid Test Laboratory Trivandrum", path: "/thyroid/thyroid-test-laboratory-trivandrum", isCreated: false },
    { id: "thyroid/t3-t4-tsh-test-trivandrum", title: "T3 T4 TSH Test Trivandrum", path: "/thyroid/t3-t4-tsh-test-trivandrum", isCreated: false },
    { id: "thyroid/complete-thyroid-panel-test", title: "Complete Thyroid Panel Test", path: "/thyroid/complete-thyroid-panel-test", isCreated: false },
    { id: "thyroid/thyroid-antibody-test", title: "Thyroid Antibody Test", path: "/thyroid/thyroid-antibody-test", isCreated: false },
    { id: "thyroid/thyroid-screening-test", title: "Thyroid Screening Test", path: "/thyroid/thyroid-screening-test", isCreated: false },
    { id: "thyroid/thyroid-function-test-at-home", title: "Thyroid Function Test at Home", path: "/thyroid/thyroid-function-test-at-home", isCreated: false },
    { id: "thyroid/comprehensive-thyroid-profile", title: "Comprehensive Thyroid Profile", path: "/thyroid/comprehensive-thyroid-profile", isCreated: false },
    { id: "thyroid/hypothyroidism-test-trivandrum", title: "Hypothyroidism Test Trivandrum", path: "/thyroid/hypothyroidism-test-trivandrum", isCreated: false },
    { id: "thyroid/hyperthyroidism-screening", title: "Hyperthyroidism Screening", path: "/thyroid/hyperthyroidism-screening", isCreated: false },
    { id: "thyroid/thyroid-disorder-test", title: "Thyroid Disorder Test", path: "/thyroid/thyroid-disorder-test", isCreated: false },
    { id: "thyroid/thyroid-hormone-test", title: "Thyroid Hormone Test", path: "/thyroid/thyroid-hormone-test", isCreated: false },
    { id: "thyroid/thyroid-health-check", title: "Thyroid Health Check", path: "/thyroid/thyroid-health-check", isCreated: false },
    // Add all remaining pages from the list
  ];
  
  // Mark created pages
  const updatedPages = thyroidPages.map(page => ({
    ...page,
    isCreated: existingPages.includes(page.id)
  }));
  
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-medium">Thyroid Test Pages Management</h2>
      <p className="text-sm text-bloodlyf-taupe">
        Create or manage thyroid test subpages. {updatedPages.filter(p => p.isCreated).length} of {updatedPages.length} pages created.
      </p>
      
      <div className="grid gap-3">
        {updatedPages.map(page => (
          <BlurGlass 
            key={page.id}
            intensity="light" 
            className={`p-3 rounded-lg flex items-center justify-between ${page.isCreated ? 'border-l-4 border-green-400' : 'border-l-4 border-amber-300'}`}
          >
            <div>
              <div className="font-medium">{page.title}</div>
              <div className="text-xs text-bloodlyf-taupe">{page.path}</div>
            </div>
            {page.isCreated ? (
              <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                Created
              </span>
            ) : (
              <Button 
                size="sm" 
                className="bg-bloodlyf-blue hover:bg-bloodlyf-darkblue"
                onClick={() => onCreatePage(page.id, page.title)}
              >
                <Plus className="h-4 w-4 mr-1" />
                Create
              </Button>
            )}
          </BlurGlass>
        ))}
      </div>
    </div>
  );
};
