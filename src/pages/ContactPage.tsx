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
      console.log('Submitting form with data:', {
        name: formData.name,
        email: formData.email,
        phone_number: formData.phone,
        company_name: formData.company || undefined,
        business_needs: formData.message,
        product: productName || undefined
      });

      const result = await createConsultationBooking({
        name: formData.name,
        email: formData.email,
        phone_number: formData.phone,
        company_name: formData.company || undefined,
        business_needs: formData.message,
        product: productName || undefined
      });

      console.log('Form submission successful:', result);

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
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error('Error details:', errorMessage);

      setSubmitMessage({
        type: 'error',
        text: `There was an error submitting your request: ${errorMessage}. Please try again.`
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
        <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-serif font-bold mb-6">Contact Us</h1>
            <p className="text-xl font-light max-w-3xl mx-auto leading-relaxed">
              Schedule a consultation call with our experts to learn more about our weighing solutions
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-6">Get In Touch</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Ready to learn more about our weighing solutions? Book a consultation call with our experienced team to discuss your specific needs and find the perfect solution for your business.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-1">Our Location</h4>
                    <p className="text-gray-600">
                      The Filing Room (ground Floor),<br />
                      Near Panari Hotel, Mombasa Rd.<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-1">Phone Numbers</h4>
                    <p className="text-gray-600">
                      0722-303505<br />
                      0738-829064
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-1">Email Address</h4>
                    <p className="text-gray-600">
                      info@scale-software.co.ke<br />
                      sales@scale-software.co.ke
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-1">Business Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: Emergency Service Only
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-black mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-red-600 p-3 rounded-full text-white hover:bg-red-700 transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-red-600 p-3 rounded-full text-white hover:bg-red-700 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-red-600 p-3 rounded-full text-white hover:bg-red-700 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">Book a Consultation Call</h3>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="w-full">
                    <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-base"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="w-full">
                    <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-base"
                      placeholder="+254 700 000 000"
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="company" className="block text-sm font-medium text-black mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-base"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                    Tell us about your needs *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-2 focus:ring-red-600 focus:border-transparent text-base resize-none"
                    placeholder="Describe your business needs and which products you'd like to learn more about..."
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="w-full">
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-black mb-2">
                      Preferred Date (Optional)
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-base"
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-black mb-2">
                      Preferred Time (Optional)
                    </label>
                    <input
                      type="time"
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-base"
                    />
                  </div>
                </div>

                {submitMessage && (
                  <div className={`p-4 rounded-lg font-medium text-sm sm:text-base ${
                    submitMessage.type === 'success'
                      ? 'bg-green-50 text-green-800 border-2 border-green-500'
                      : 'bg-red-50 text-red-800 border-2 border-red-500'
                  }`}>
                    {submitMessage.text}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 text-white py-3 sm:py-4 rounded-lg hover:bg-red-700 transition-colors font-medium flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed text-base"
                >
                  <Send className="h-5 w-5" />
                  <span>{isSubmitting ? 'Submitting...' : 'Request Consultation Call'}</span>
                </button>
              </form>
            </div>
          </div>

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
