
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import BlurGlass from '@/components/ui/BlurGlass';
import { toast } from '@/hooks/use-toast';

const CorporateEnquiryForm = ({ packageType }: { packageType: string }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    companySize: 'Under 50',
    packageInterest: packageType,
    message: '',
    preferredContact: 'email',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Enquiry Submitted",
        description: "Thank you for your interest! Our team will contact you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        companySize: 'Under 50',
        packageInterest: packageType,
        message: '',
        preferredContact: 'email',
      });
    }, 1500);
  };

  return (
    <BlurGlass intensity="medium" className="p-6 rounded-xl">
      <h3 className="text-xl font-medium text-bloodlyf-darkblue mb-4">Corporate Health Enquiry</h3>
      <p className="text-sm text-bloodlyf-taupe mb-6">
        Fill in the form below to receive a customized quote for your organization's health needs.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Company Name*</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full p-2 border border-bloodlyf-beige/50 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Contact Person*</label>
          <input
            type="text"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            className="w-full p-2 border border-bloodlyf-beige/50 rounded-md"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email Address*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-bloodlyf-beige/50 rounded-md"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number*</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-bloodlyf-beige/50 rounded-md"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Company Size</label>
          <select
            name="companySize"
            value={formData.companySize}
            onChange={handleChange}
            className="w-full p-2 border border-bloodlyf-beige/50 rounded-md"
          >
            <option value="Under 50">Under 50 employees</option>
            <option value="50-200">50-200 employees</option>
            <option value="201-500">201-500 employees</option>
            <option value="501-1000">501-1000 employees</option>
            <option value="Over 1000">Over 1000 employees</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Package Interest</label>
          <input
            type="text"
            name="packageInterest"
            value={formData.packageInterest}
            onChange={handleChange}
            className="w-full p-2 border border-bloodlyf-beige/50 rounded-md bg-gray-50"
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Message (Optional)</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full p-2 border border-bloodlyf-beige/50 rounded-md"
            placeholder="Please share any specific requirements or questions..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Preferred Contact Method</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="preferredContact"
                value="email"
                checked={formData.preferredContact === 'email'}
                onChange={handleChange}
                className="mr-2"
              />
              Email
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="preferredContact"
                value="phone"
                checked={formData.preferredContact === 'phone'}
                onChange={handleChange}
                className="mr-2"
              />
              Phone
            </label>
          </div>
        </div>

        <Button 
          type="submit" 
          disabled={loading}
          className="w-full py-3 bg-bloodlyf-blue hover:bg-bloodlyf-darkblue text-white"
        >
          {loading ? "Submitting..." : "Submit Enquiry"}
        </Button>

        <p className="text-xs text-bloodlyf-taupe/70 text-center mt-4">
          Your data is secure and will only be used to contact you regarding this inquiry.
        </p>
      </form>
    </BlurGlass>
  );
};

export default CorporateEnquiryForm;
