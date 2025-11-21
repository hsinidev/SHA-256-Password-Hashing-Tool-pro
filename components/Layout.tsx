import React, { useState } from 'react';
import Starfield from './Starfield';
import Modal from './Modal';

interface LayoutProps {
  children: React.ReactNode;
}

// Comprehensive content for Google Policy compliance
const modalContent: Record<string, { title: string; content: React.ReactNode }> = {
  about: {
    title: "About SHA-256 Tool",
    content: (
      <div className="space-y-4 text-gray-300">
        <p>Welcome to the SHA-256 Password Hashing Tool. We are dedicated to providing a secure, client-side solution for generating cryptographic hashes.</p>
        <p>In an age where data privacy is paramount, we believe that simple tools should not require sending your sensitive data to a remote server. That is why this application runs entirely within your web browser using the Web Crypto API.</p>
        <p>Our goal is to offer developers, security enthusiasts, and general users a reliable way to verify data integrity and generate secure password hashes without compromising privacy.</p>
      </div>
    ),
  },
  contact: {
    title: "Contact Us",
    content: (
      <div className="space-y-4 text-gray-300">
        <p>We value your feedback and are here to assist you with any questions or concerns regarding this tool.</p>
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-indigo-400 mb-2">Contact Information</h4>
          <ul className="space-y-2">
            <li className="flex flex-col sm:flex-row sm:items-center">
              <span className="font-semibold w-24 text-white">Website:</span>
              <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">doodax.com</a>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center">
              <span className="font-semibold w-24 text-white">Email:</span>
              <a href="mailto:hsini.web@gmail.com" className="text-blue-400 hover:underline">hsini.web@gmail.com</a>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center">
              <span className="font-semibold w-24 text-white">Owner:</span>
              <span className="text-gray-400">HSINI MOHAMED</span>
            </li>
          </ul>
        </div>
        <p className="text-sm text-gray-400">We aim to respond to all inquiries within 24-48 hours.</p>
      </div>
    ),
  },
  guide: {
    title: "User Guide",
    content: (
      <div className="space-y-4 text-gray-300">
        <h3 className="text-lg font-semibold text-white">How to Use This Tool</h3>
        <ol className="list-decimal list-inside space-y-3">
          <li>
            <span className="text-white font-medium">Enter Input:</span> Type or paste the text you wish to hash into the "Input Text" field. This can be a password, a message, or any string of characters.
          </li>
          <li>
            <span className="text-white font-medium">Toggle Salt (Recommended):</span> For password hashing, we recommend enabling the "Use Salt" toggle. This adds a random string to your input, making the resulting hash unique even if the input is common.
          </li>
          <li>
            <span className="text-white font-medium">Generate:</span> Click the gradient "Generate SHA-256 Hash" button.
          </li>
          <li>
            <span className="text-white font-medium">Copy Result:</span> The secure hash will appear in the right-hand panel. Click the "Copy" button to save it to your clipboard.
          </li>
        </ol>
        <div className="bg-blue-900/30 border border-blue-800 p-3 rounded text-sm text-blue-200 mt-4">
          <strong>Note:</strong> All processing happens locally on your device. No data is sent to our servers.
        </div>
      </div>
    ),
  },
  privacy: {
    title: "Privacy Policy",
    content: (
      <div className="space-y-4 text-sm text-gray-300">
        <p><strong>Last Updated: October 27, 2023</strong></p>
        <p>At SHA-256 Hashing Tool (doodax.com), your privacy is our top priority. This Privacy Policy explains how we handle your information.</p>
        
        <h4 className="font-bold text-white mt-2">1. Data Collection</h4>
        <p>We do not collect, store, or transmit any of the data you enter into the hashing fields. All cryptographic operations are performed client-side using your browser's Web Crypto API.</p>
        
        <h4 className="font-bold text-white mt-2">2. Analytics</h4>
        <p>We may use anonymous analytics tools to understand general usage patterns (e.g., number of visitors) to improve the user experience. No personally identifiable information (PII) is linked to this data.</p>
        
        <h4 className="font-bold text-white mt-2">3. Contact</h4>
        <p>If you contact us via email (hsini.web@gmail.com), we will only use your email address to reply to your inquiry.</p>
        
        <p>For full privacy inquiries, please contact: hsini.web@gmail.com</p>
      </div>
    ),
  },
  terms: {
    title: "Terms of Service",
    content: (
      <div className="space-y-3 text-sm text-gray-300">
        <p>By accessing and using this website (doodax.com), you accept and agree to be bound by the terms and provision of this agreement.</p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Use License:</strong> Permission is granted to temporarily use this tool for personal, non-commercial transitory viewing and operation.</li>
          <li><strong>Disclaimer:</strong> The materials on this website are provided "as is". We make no warranties, expressed or implied.</li>
          <li><strong>Limitations:</strong> In no event shall the owners of this tool be liable for any damages arising out of the use or inability to use the materials on this site.</li>
          <li><strong>Legitimate Use:</strong> You agree to use this tool only for lawful purposes. It must not be used for cracking passwords or illegal activities.</li>
        </ul>
      </div>
    ),
  },
  dmca: {
    title: "DMCA Compliance",
    content: (
      <div className="space-y-3 text-gray-300">
        <p>We respect the intellectual property rights of others. Since this tool is a client-side utility and does not host user-generated content or copyrighted files, DMCA takedown notices are generally not applicable to our core functionality.</p>
        <p>However, if you believe that any material available on our site infringes upon your copyright, please notify us immediately via email at <a href="mailto:hsini.web@gmail.com" className="text-blue-400">hsini.web@gmail.com</a>.</p>
        <p>Please provide:</p>
        <ul className="list-disc list-inside text-sm text-gray-400">
          <li>Identification of the copyrighted work.</li>
          <li>Identification of the material to be removed.</li>
          <li>Your contact information.</li>
        </ul>
      </div>
    ),
  },
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalId: string) => setActiveModal(modalId);
  const closeModal = () => setActiveModal(null);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
    { id: 'guide', label: 'Guide' },
  ];

  const footerLinks = [
    { id: 'privacy', label: 'Privacy Policy' },
    { id: 'terms', label: 'Terms of Service' },
    { id: 'dmca', label: 'DMCA' },
  ];

  return (
    <div className="relative min-h-screen font-sans text-gray-100 selection:bg-indigo-500 selection:text-white overflow-x-hidden flex flex-col">
      <Starfield />
      
      {/* Header */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-black/20 border-b border-white/5 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-purple-800 rounded-xl shadow-lg shadow-purple-900/50 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                </div>
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 tracking-tight">SHA-256 <span className="text-purple-400">Tool</span></span>
            </div>
            
            <nav className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => openModal(link.id)}
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content - Centered & Friendly with Floating Animation */}
      <main className="flex-grow container mx-auto px-4 py-12 flex flex-col items-center justify-center relative z-10 animate-float">
        <div className="w-full max-w-5xl animate-fade-in-up">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-10 bg-black/60 backdrop-blur-md border-t border-white/5 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center space-y-6">
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
               {footerLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => openModal(link.id)}
                  className="hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>© {new Date().getFullYear()} doodax.com</span>
            </div>
            
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
            
            <div className="inline-block px-6 py-3 rounded-full bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300 group">
              <p className="text-sm font-medium text-gray-300 flex items-center gap-2">
                Powered by 
                <a 
                  href="https://github.com/hsinidev" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold group-hover:from-blue-300 group-hover:to-purple-300 transition-all"
                >
                  HSINI MOHAMED
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {activeModal && modalContent[activeModal] && (
        <Modal isOpen={!!activeModal} onClose={closeModal} title={modalContent[activeModal].title}>
          {modalContent[activeModal].content}
        </Modal>
      )}
    </div>
  );
};

export default Layout;