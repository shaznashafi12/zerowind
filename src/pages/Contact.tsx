import React, { useState } from 'react';
import instagram from '../images/instagram.svg';
import facebook from '../images/facebook.svg';
import { FaYoutube } from 'react-icons/fa';


export const Contacts: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submit logic here
  };

  return (
    <div className="w-full  min-h-[calc(100vh-100px)] bg-[#272727] text-white px-8 md:px-16 py-12 md:py-20 flex justify-center">
      <div className="w-full pt-32 max-w-5xl space-y-12">
        
        {/* Main Title */}
        <div className="space-y-1">
          <h1 className="text-3xl sm:text-3xl md:text-4xl font-semibold text-[#E2DE00] tracking-tight">
            Have a question?
          </h1>
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-semibold text-[#E2DE00] tracking-tight">
            Do you want to talk to us?
          </h2>
        </div>

        {/* Contact Form */}
<form onSubmit={handleSubmit} className="space-y-12 pt-4">
  
  {/* Grid Inputs */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
    
    {/* Full Name */}
    <div className="relative border-b border-gray-600 focus-within:border-[#E2DE00] transition-colors pb-1">
      <input
        type="text"
        name="fullName"
        id="fullName"
        required
        value={formData.fullName}
        onChange={handleChange}
        placeholder=" "
        className="peer w-full bg-transparent pt-4 pb-2 text-white outline-none text-base"
      />
      <label
        htmlFor="fullName"
        className="absolute left-0 top-4 text-gray-400 text-lg transition-all duration-200 pointer-events-none peer-focus:-top-2 peer-focus:text-xs peer-focus:text-gray-400 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-400"
      >
        Full name *
      </label>
    </div>

    {/* Email */}
    <div className="relative border-b border-gray-600 focus-within:border-[#E2DE00] transition-colors pb-1">
      <input
        type="email"
        name="email"
        id="email"
        required
        value={formData.email}
        onChange={handleChange}
        placeholder=" "
        className="peer w-full bg-transparent pt-4 pb-2 text-white outline-none text-base"
      />
      <label
        htmlFor="email"
        className="absolute left-0 top-4 text-gray-400 text-lg transition-all duration-200 pointer-events-none peer-focus:-top-2 peer-focus:text-xs peer-focus:text-gray-400 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-400"
      >
        Email *
      </label>
    </div>

    {/* Phone */}
    <div className="relative border-b border-gray-600 focus-within:border-[#E2DE00] transition-colors pb-1">
      <input
        type="tel"
        name="phone"
        id="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder=" "
        className="peer w-full bg-transparent pt-4 pb-2 text-white outline-none text-base"
      />
      <label
        htmlFor="phone"
        className="absolute left-0 top-4 text-gray-400 text-lg transition-all duration-200 pointer-events-none peer-focus:-top-2 peer-focus:text-xs peer-focus:text-gray-400 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-400"
      >
        Phone
      </label>
    </div>

    {/* Company */}
    <div className="relative border-b border-gray-600 focus-within:border-[#E2DE00] transition-colors pb-1">
      <input
        type="text"
        name="company"
        id="company"
        value={formData.company}
        onChange={handleChange}
        placeholder=" "
        className="peer w-full bg-transparent pt-4 pb-2 text-white outline-none text-base"
      />
      <label
        htmlFor="company"
        className="absolute left-0 top-4 text-gray-400 text-lg transition-all duration-200 pointer-events-none peer-focus:-top-2 peer-focus:text-xs peer-focus:text-gray-400 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-400"
      >
        Company
      </label>
    </div>
  </div>

  {/* Message Textarea */}
  <div className="relative border-b border-gray-600 focus-within:border-[#E2DE00] transition-colors pt-4">
    <textarea
      name="message"
      id="message"
      required
      rows={4}
      value={formData.message}
      onChange={handleChange}
      placeholder=" "
      className="peer w-full bg-transparent pt-4 pb-2 text-white outline-none resize-y text-base"
    />
    <label
      htmlFor="message"
      className="absolute left-0 top-4 text-gray-400 text-lg transition-all duration-200 pointer-events-none peer-focus:-top-2 peer-focus:text-xs peer-focus:text-gray-400 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-400"
    >
      Message *
    </label>
  </div>

  {/* Checkbox Consent */}
  <label className="flex items-start space-x-3 cursor-pointer select-none pt-2">
    <input
      type="checkbox"
      required
      checked={isChecked}
      onChange={(e) => setIsChecked(e.target.checked)}
      className="mt-1 h-4 w-4 appearance-none border border-[#E2DE00] bg-transparent focus:outline-none shrink-0 transition-none checked:bg-[#E2DE00]"
      style={{
        boxShadow: isChecked ? 'inset 0 0 0 4px #212121' : 'none',
      }}
    />
    <span className="text-sm md:text-base text-gray-300">
      Dichiaro di aver lett ed accettato{' '}
      <a href="#" className="underline hover:text-white transition-colors">
        il trattamento dei miei dati personali
      </a>
      .
    </span>
  </label>

  {/* Send Button */}
  <div className="pt-2">
  <button
    type="submit"
    className="group relative inline-flex items-center justify-center px-8 py-3 rounded-full border border-[#E2DE00] text-[#E2DE00] hover:text-[#212121] text-sm font-semibold tracking-wider overflow-hidden cursor-pointer transition-colors duration-300"
  >
    {/* Overlay with lower z-index */}
    <span className="absolute inset-0 w-[130%] -left-[15%] bg-[#E2DE00] -skew-x-12 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-400 ease-out z-0" />

    {/* Text explicitly above overlay */}
    <span className="relative z-10 transition-colors duration-300">Send</span>
  </button>
</div>

</form>

        {/* Contact Info Footer Section */}
        <div className="pt-16 sm:pt-24 border-t border-transparent">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 flex flex-col sm:flex-row gap-12 lg:gap-25 items-start">
            
            {/* Where we are */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#E2DE00] tracking-wider">
                Where we are
              </h3>
              <div className="text-gray-400 space-y-1 text-lg leading-relaxed tracking-wider">
                <p>Pidigi S.p.a. Via della Meccanica, 29</p>
                <p>37139 Verona (Italy).</p>
              </div>
            </div>

            {/* Contacts */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#E2DE00] tracking-wider">
                Contacts
              </h3>
              <div className="text-gray-400 space-y-1 text-lg leading-relaxed tracking-wider">
                <p>
                  <a href="#" className="hover:text-white transition-colors">
                    info@zerowind.it
                  </a>
                </p>
                <p>
                  <a href="tel:+390459216888" className="hover:text-white transition-colors">
                    +39 045 92 16 888
                  </a>
                </p>
              </div>
            </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-10 md:justify-end pt-2 md:pt-0">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E2DE00] hover:text-white transition-colors text-2xl"
                aria-label="Instagram"
              >
                <img src={instagram} alt="Instagram" className="h-6 w-auto object-contain"
                style={{
        filter: 'brightness(0) saturate(100%) invert(86%) sepia(85%) saturate(1478%) hue-rotate(340deg) brightness(101%) contrast(102%)'
      }}
                />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E2DE00] hover:text-white transition-colors text-2xl"
                aria-label="Facebook"
              >
                <img src={facebook} alt="Instagram" className="h-6 w-auto object-contain" 
                style={{
        filter: 'brightness(0) saturate(100%) invert(86%) sepia(85%) saturate(1478%) hue-rotate(340deg) brightness(101%) contrast(102%)'
      }}
                />
              </a>
             <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E2DE00] hover:text-white transition-colors text-2xl"
                aria-label="YouTube"
              >
                <FaYoutube size={28} />
              </a>
            </div>
            </div>

        </div>

      </div>
    </div>
  );
};