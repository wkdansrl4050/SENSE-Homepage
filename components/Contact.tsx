
import React, { useState } from 'react';
import SectionHeader from './SectionHeader';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('SENDING');

    try {
      // Connecting to Formspree endpoint as requested
      const response = await fetch('https://formspree.io/f/meeloegn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('SUCCESS');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('ERROR');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader 
        title="Contact Us" 
        subtitle="Bridging industries and ecosystems through dialogue. We look forward to hearing from you."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-8 pb-20">
        {/* Left: Contact Form */}
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
          {status === 'SUCCESS' ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
              <p className="text-gray-600 mb-8">We have received your inquiry and will respond to your email as soon as possible.</p>
              <button 
                onClick={() => setStatus('IDLE')}
                className="px-8 py-3 bg-[#2E7D32] text-white font-bold rounded-lg hover:bg-[#1B5E20] transition-colors shadow-md"
              >
                Send New Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center italic">
                <span className="w-2 h-6 bg-[#2E7D32] mr-3 rounded-full"></span>
                Direct Inquiry
              </h3>
              
              {status === 'ERROR' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-xl text-sm border border-red-100 mb-6 font-medium">
                  Oops! There was a problem submitting your message. Please try again.
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent transition-all outline-none bg-gray-50/50 font-medium"
                    placeholder="Full Name"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent transition-all outline-none bg-gray-50/50 font-medium"
                    placeholder="Optional"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Email Address</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent transition-all outline-none bg-gray-50/50 font-medium"
                  placeholder="contact@university.ac.kr"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Your Message</label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent transition-all outline-none bg-gray-50/50 resize-none font-medium"
                  placeholder="How can SENSE Lab help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'SENDING'}
                className={`w-full py-4 text-white font-bold rounded-xl transition-all shadow-md flex items-center justify-center ${
                  status === 'SENDING' ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#2E7D32] hover:bg-[#1B5E20] hover:shadow-lg'
                }`}
              >
                {status === 'SENDING' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : 'Submit Message'}
              </button>
            </form>
          )}
        </div>

        {/* Right: Lab Info & Ocean View */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center italic">
              <span className="w-2 h-6 bg-[#2E7D32] mr-3 rounded-full"></span>
              Lab Information
            </h3>
            
            <div className="space-y-4">
              <div className="flex p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-[#2E7D32] transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#2E7D32]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <div className="ml-5">
                  <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Office</h4>
                  <p className="text-gray-900 font-bold leading-relaxed">
                    Bldg 502, Tech District, Seoul, Korea
                  </p>
                </div>
              </div>

              <div className="flex p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-[#2E7D32] transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#2E7D32]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
                  </svg>
                </div>
                <div className="ml-5">
                  <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Email</h4>
                  <p className="text-gray-900 font-black italic">contact@sense-lab.org</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ocean Visual Card */}
          <div className="relative group overflow-hidden rounded-[2rem] h-64 shadow-xl border border-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop" 
              alt="Sustainable Ocean" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white pr-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-80 mb-1">Our Environment</p>
              <h4 className="text-xl font-black italic drop-shadow-lg">Engineering for the future of our oceans and land.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
