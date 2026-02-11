
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
                  placeholder="your@email.com"
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

        {/* Right: Lab Info & Map View */}
        <div className="space-y-8 pt-0 md:pt-10">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center italic">
              <span className="w-2 h-6 bg-[#2E7D32] mr-3 rounded-full"></span>
              Lab Information
            </h3>
            
            <div className="space-y-4">
              {/* Address Card */}
              <div className="flex p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-[#2E7D32] transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#2E7D32]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <div className="ml-5">
                  <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Office</h4>
                  <div className="text-gray-900 font-bold leading-relaxed">
                    Department of Chemical Engineering<br />
                    Keimyung University<br />
                    1095 Dalgubeol-daero, Dalseo-gu, Daegu 42601, Korea
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-[#2E7D32] transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#2E7D32]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-5">
                  <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Contact</h4>
                  <p className="text-gray-900 font-bold">Tel: +82-53-580-5236</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-[#2E7D32] transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#2E7D32]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
                  </svg>
                </div>
                <div className="ml-5">
                  <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Email</h4>
                  <p className="text-gray-900 font-black italic">mwlee@kmu.ac.kr</p>
                  <p className="text-gray-900 font-black italic">mwlee.kmu@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Clickable Map Location Card */}
          <a 
            href="https://maps.app.goo.gl/WqiQUoXYmA1mypg96" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block relative group overflow-hidden rounded-[2rem] h-72 shadow-xl border border-gray-100 cursor-pointer bg-gray-50"
          >
            {/* Map visual background */}
            <div className="absolute inset-0">
               <img 
                src="https://lh3.googleusercontent.com/d/1ciYHOIam9qmux34ZmjcL8zVpdCxe2EJf" 
                alt="Keimyung University Map" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop';
                }}
              />
              {/* Stylized map marker mockup */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="relative">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-3 py-1 rounded-lg shadow-md border border-gray-100 font-black text-[#2E7D32] text-sm">
                    계명대학교 공학관
                  </div>
                </div>
              </div>
            </div>
            
            {/* Overlay for Better Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent group-hover:from-black/90 transition-all"></div>
            
            {/* Interaction Button */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="px-8 py-3 bg-[#2E7D32] text-white font-black rounded-full flex items-center space-x-3 shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                <span>Navigate in Google Maps</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
            </div>

            {/* Content Labels */}
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-xs font-black uppercase tracking-[0.2em] opacity-80 mb-2">Location Map</p>
              <h4 className="text-2xl font-black italic drop-shadow-lg leading-tight">
                Keimyung University<br />
                <span className="text-lg font-bold not-italic opacity-90">SENSE Laboratory</span>
              </h4>
            </div>
          </a>
          <p className="text-center text-xs text-gray-400 font-medium italic">Click the map to get directions to our office</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
