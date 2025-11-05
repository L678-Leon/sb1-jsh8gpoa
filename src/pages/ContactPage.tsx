import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Linkedin } from 'lucide-react';
import { createConsultationBooking } from '../lib/supabase';
import { Helmet } from 'react-helmet-async';

const ContactPage = () => {
  const location = useLocation();
  const productName = location.state?.product || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: productName ? `I'm interested in learning more about ${productName}.` : '',
    preferredDate: '',
    preferredTime: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    if (productName) {
      setFormData(prev => ({
        ...prev,
        message: `I'm interested in learning more about ${productName}.`
      }));
    }
  }, [productName]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      await createConsultationBooking({
        name: formData.name,
        email: formData.email,
        phone_number: formData.phone,
        company_name: formData.company || undefined,
        business_needs: formData.message,
        product: productName || undefined
      });

      setSubmitMessage({
        type: 'success',
        text: 'Thank you for your inquiry! We will get back to you soon.'
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        preferredDate: '',
        preferredTime: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage({
        type: 'error',
        text: 'There was an error submitting your request. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Scales & Software Kenya | Get a Weighing Quote</title>
        <meta
          name="description"
          content="Get in touch with Scales & Software Kenya for weighbridge installations, weighing software, and technical support. Contact us for custom solutions today."
        />
        <meta
          name="keywords"
          content="contact scales and software, weighing support kenya, weighbridge quotation, industrial scale supplier, smartweigh kenya, weighing systems customer service"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Scales & Software Kenya" />
        <meta
          property="og:description"
          content="Reach Scales & Software Kenya for reliable industrial weighing solutions, SmartWeigh software, and weighbridge support."
        />
        <meta property="og:url" content="https://scalesandsoftware.com/contact" />
        <meta property="og:image" content="https://scalesandsoftware.com/images/og-preview.jpg" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-serif font-bold mb-6">Contact Us</h1>
            <p className="text-xl font-light max-w-3xl mx-auto leading-relaxed">
              Schedule a consultation call with our experts to learn more about our weighing solutions
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            {/* ... (your entire existing JSX stays unchanged here) ... */}
          </div>

          {/* Emergency Contact */}
          <div className="mt-16 bg-gradient-to-r from-red-600 to-black rounded-xl p-8 text-white text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">Emergency Support</h2>
            <p className="text-lg font-light mb-6">
              Need immediate assistance? Our emergency support team is available 24/7 for critical issues.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-red-200" />
                <span className="text-xl font-semibold">+254-722-303505</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-red-200" />
                <div className="text-xl font-semibold">
                  <div>info@scale-software.co.ke</div>
                  <div>sales1@scale-software.co.ke</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
