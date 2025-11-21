import React, { useState } from 'react';

const JsonLdSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://doodax.com/#website",
        "url": "https://doodax.com/",
        "name": "SHA-256 Password Hashing Tool",
        "description": "Secure, client-side SHA-256 hashing using the Web Crypto API.",
        "publisher": {
          "@type": "Person",
          "name": "HSINI MOHAMED",
          "url": "https://doodax.com"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://doodax.com/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "SHA-256 Online Hash Generator",
        "url": "https://doodax.com/",
        "applicationCategory": "SecurityApplication",
        "operatingSystem": "Any",
        "browserRequirements": "Requires JavaScript and Web Crypto API support",
        "softwareVersion": "1.0.0",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "description": "A client-side web application for generating SHA-256 hashes securely for files and text. No server uploads required.",
        "featureList": "File hashing, Text hashing, Hex and Base64 output, Hash verification, Salt generation",
        "author": {
            "@type": "Person",
            "name": "HSINI MOHAMED"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://doodax.com/"
        }]
      },
      {
        "@type": "HowTo",
        "name": "How to Generate a SHA-256 Hash Online Securely",
        "description": "Follow these simple steps to generate a secure SHA-256 hash for any text or file directly in your browser.",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Choose Input Type",
            "text": "Select whether you want to hash a text string or upload a file using the tabs at the top of the tool."
          },
          {
            "@type": "HowToStep",
            "name": "Enter Data",
            "text": "Type your password/text into the input field or drag and drop your file into the upload area."
          },
          {
            "@type": "HowToStep",
            "name": "Select Options",
            "text": "Choose your desired output format (Hexadecimal or Base64) and optionally enable 'Add Salt' for extra security on text inputs."
          },
          {
            "@type": "HowToStep",
            "name": "Generate Hash",
            "text": "Click the 'Generate Hash' button. The checksum will be calculated instantly on your device."
          },
          {
            "@type": "HowToStep",
            "name": "Copy or Verify",
            "text": "Copy the resulting hash to your clipboard or use the verification tool to compare it against a known checksum."
          }
        ]
      },
      {
        "@type": "Article",
        "headline": "The Ultimate Guide to SHA-256 Hashing: Security, Tools, and Best Practices",
        "description": "A comprehensive technical analysis of SHA-256 hashing, cybersecurity best practices, salt strategies, and client-side encryption technologies.",
        "author": {
          "@type": "Person",
          "name": "HSINI MOHAMED",
          "url": "https://github.com/hsinidev"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Doodax",
            "logo": {
                "@type": "ImageObject",
                "url": "https://doodax.com/favicon.svg"
            }
        },
        "datePublished": "2023-10-27",
        "dateModified": "2023-10-28",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://doodax.com/"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is SHA-256 used for?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SHA-256 is used for data integrity verification, digital signatures, password hashing, and is a core component of blockchain technologies like Bitcoin. It ensures that data has not been tampered with."
            }
          },
          {
            "@type": "Question",
            "name": "Is SHA-256 reversible?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, SHA-256 is a one-way cryptographic hash function. It is computationally infeasible to reverse the process to discover the original input from the hash output."
            }
          },
          {
            "@type": "Question",
            "name": "Why is client-side hashing more secure?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Client-side hashing ensures that your raw data (like passwords or private files) never leaves your device. Only the hash is potentially sent or used, drastically reducing the risk of interception or server-side data breaches."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

const FullArticle = () => (
  <article className="prose prose-invert prose-lg max-w-none text-gray-300 mt-8 font-sans" itemScope itemType="https://schema.org/TechArticle">
    
    <div className="p-6 bg-black/30 rounded-xl border border-purple-800/30 mb-12 backdrop-blur-sm shadow-lg">
        <h2 id="toc" className="text-2xl font-bold text-white mt-0 mb-4 border-b border-purple-500/30 pb-2">Table of Contents</h2>
        <nav>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-base">
                <li><a href="#introduction" className="hover:text-purple-400 transition-colors flex items-center"><span className="mr-2 text-purple-500 font-bold">1.</span> Introduction to Cryptography</a></li>
                <li><a href="#what-is-sha256" className="hover:text-purple-400 transition-colors flex items-center"><span className="mr-2 text-purple-500 font-bold">2.</span> Decoding SHA-256</a></li>
                <li><a href="#mechanics" className="hover:text-purple-400 transition-colors flex items-center"><span className="mr-2 text-purple-500 font-bold">3.</span> The Mechanics of Hashing</a></li>
                <li><a href="#encryption-vs-hashing" className="hover:text-purple-400 transition-colors flex items-center"><span className="mr-2 text-purple-500 font-bold">4.</span> Encryption vs. Hashing</a></li>
                <li><a href="#password-security" className="hover:text-purple-400 transition-colors flex items-center"><span className="mr-2 text-purple-500 font-bold">5.</span> Password Security & Salting</a></li>
                <li><a href="#web-crypto" className="hover:text-purple-400 transition-colors flex items-center"><span className="mr-2 text-purple-500 font-bold">6.</span> The Web Crypto API Revolution</a></li>
                <li><a href="#collisions" className="hover:text-purple-400 transition-colors flex items-center"><span className="mr-2 text-purple-500 font-bold">7.</span> Collision Resistance</a></li>
                <li><a href="#applications" className="hover:text-purple-400 transition-colors flex items-center"><span className="mr-2 text-purple-500 font-bold">8.</span> Real-World Applications</a></li>
                <li><a href="#future" className="hover:text-purple-400 transition-colors flex items-center"><span className="mr-2 text-purple-500 font-bold">9.</span> Future of Cryptography</a></li>
                <li><a href="#faq" className="hover:text-purple-400 transition-colors flex items-center"><span className="mr-2 text-purple-500 font-bold">10.</span> Frequently Asked Questions</a></li>
            </ul>
        </nav>
    </div>

    <h2 id="introduction" className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">1. Introduction to Cryptography in the Digital Age</h2>
    <p>
        In the vast, interconnected expanse of the modern digital world, security is not merely a feature—it is a fundamental necessity. As we entrust more of our personal lives, financial assets, and confidential communications to digital platforms, the mechanisms that protect this data become increasingly critical. At the heart of this security infrastructure lies <strong>cryptography</strong>, the mathematical science of protecting information.
    </p>
    <p>
        Among the myriad of cryptographic tools available to developers and security experts, the <strong>SHA-256</strong> (Secure Hash Algorithm 256-bit) stands out as a titan. It is the digital backbone of the internet, securing everything from the HTTPS connections that protect your browsing to the immutable ledgers of cryptocurrencies like Bitcoin. This comprehensive guide aims to demystify SHA-256, exploring its inner workings, its vital role in data integrity, and why tools like our <em>SHA-256 Password Hashing Tool</em> are essential for maintaining privacy in an era of surveillance and data breaches.
    </p>
    <p>
        By utilizing client-side technologies, specifically the Web Crypto API, we can now perform military-grade encryption and hashing directly within the browser. This represents a paradigm shift in web security, moving trust from the server (which you must trust blindly) to the client (where you have control).
    </p>
    
    <h2 id="what-is-sha256" className="text-3xl font-bold text-white mt-12">2. Decoding SHA-256: The Gold Standard</h2>
    <p>
        SHA-256 is part of the SHA-2 family of algorithms, designed by the United States National Security Agency (NSA) and published in 2001 by NIST as a U.S. Federal Information Processing Standard (FIPS). It succeeded the SHA-1 algorithm, which has since been deprecated due to security vulnerabilities.
    </p>
    <p>
        But what exactly does it do? In simple terms, SHA-256 takes an input of any length—be it a single letter, a password, or the entire text of <em>War and Peace</em>—and processes it to produce a fixed-size output of 256 bits. This output is typically rendered as a hexadecimal string of 64 characters.
    </p>
    <p>
        The beauty of SHA-256 lies in its deterministic nature. If you hash the word "Secure", you will get the exact same 64-character string every single time. However, change even a single bit of the input—change "Secure" to "secure"—and the resulting hash will be completely different. This phenomenon is known as the <strong>avalanche effect</strong>, and it is a hallmark of a high-quality hash function.
    </p>

    <h3 className="text-2xl font-semibold text-purple-300 mt-8">Key Characteristics of SHA-256</h3>
    <ul className="list-disc pl-6 space-y-2 text-gray-300">
        <li><strong>Deterministic:</strong> Identical inputs always yield identical outputs, ensuring reliability in verification processes.</li>
        <li><strong>Quick Computation:</strong> It is computationally efficient to calculate the hash for any given data, making it suitable for real-time applications.</li>
        <li><strong>Pre-image Resistance:</strong> It is computationally infeasible to reverse the process. You cannot take a hash and determine the original input, protecting the secrecy of the source data.</li>
        <li><strong>Collision Resistance:</strong> It is statistically impossible (with current technology) to find two different inputs that result in the same hash, ensuring data uniqueness.</li>
    </ul>

    <h2 id="mechanics" className="text-3xl font-bold text-white mt-12">3. The Mechanics of Hashing</h2>
    <p>
        To understand why SHA-256 is so secure, one must look at how it processes data. The algorithm works by breaking the input message into blocks of 512 bits. It then processes these blocks one by one, using a complex series of mathematical operations including bitwise shifts, additions modulo 2^32, and logical functions (Ch, Maj, Sigma, etc.).
    </p>
    <p>
        The algorithm initializes with eight constant 32-bit words (taken from the fractional parts of the square roots of the first eight prime numbers). As it processes each block of message data, it mutates these state variables via a compression function. After the final block is processed, the resulting values of these eight variables are concatenated to produce the final 256-bit hash. This intricate mixing of bits ensures that the output appears completely random and has no discernable correlation to the input, despite being fully deterministic.
    </p>

    <h2 id="encryption-vs-hashing" className="text-3xl font-bold text-white mt-12">4. Encryption vs. Hashing: A Crucial Distinction</h2>
    <p>
        One of the most common misconceptions in cybersecurity is confusing hashing with encryption. While both protect data, they serve fundamentally different purposes.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-green-500 shadow-md">
            <h4 className="text-xl font-bold text-green-400 mb-2">Encryption (Two-Way)</h4>
            <p className="text-sm">Encryption is designed to obscure data so that it can be securely transmitted and then restored to its original form. It requires a key. If you encrypt a file with AES-256, you (or the recipient) can decrypt it back to the original file using the correct key.</p>
            <p className="mt-4 text-xs uppercase tracking-widest text-gray-500 font-bold">Examples: AES, RSA, PGP</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-purple-500 shadow-md">
            <h4 className="text-xl font-bold text-purple-400 mb-2">Hashing (One-Way)</h4>
            <p className="text-sm">Hashing is a one-way street. It is a destructive process that distills data into a fingerprint. You cannot "unhash" a SHA-256 string to get the password back. This makes it perfect for verifying integrity without knowing the content.</p>
            <p className="mt-4 text-xs uppercase tracking-widest text-gray-500 font-bold">Examples: SHA-256, MD5, Bcrypt</p>
        </div>
    </div>

    <h2 id="password-security" className="text-3xl font-bold text-white mt-12">5. Password Security and the Importance of Salting</h2>
    <p>
        When you create an account on a website, the server should never store your actual password. If the database were hacked, your password would be exposed. Instead, the server hashes your password and stores the hash. When you log in, the server hashes the password you entered and compares it to the stored hash.
    </p>
    <p>
        However, simple hashing is vulnerable to <strong>Rainbow Table Attacks</strong>. Hackers have pre-computed massive tables of hashes for billions of common passwords. If your password is "password123", a hacker can look up its hash in a table and instantly know your password.
    </p>
    <h3 className="text-2xl font-semibold text-purple-300 mt-6">The Solution: Cryptographic Salting</h3>
    <p>
        A "salt" is a random string of characters added to the password <em>before</em> it is hashed. 
        <br />
        <code className="block bg-gray-800 p-3 rounded mt-2 text-blue-300">Hash(Password + Salt) = Secure Hash</code>
    </p>
    <p>
        Because the salt is unique for every user, the resulting hash is also unique, even if two users have the same password. This renders rainbow tables useless, as the attacker would need to re-compute the entire table for every single user's unique salt. Our tool demonstrates this via the "Use Salt" toggle, showcasing how the output changes drastically.
    </p>

    <h2 id="web-crypto" className="text-3xl font-bold text-white mt-12">6. The Web Crypto API: Revolutionizing Client-Side Security</h2>
    <p>
        Historically, if you wanted to hash a file or password in a web app, you had to use slow JavaScript libraries or send the data to a server. Sending raw data to a server is a security risk—it could be intercepted in transit (Man-in-the-Middle attack) or logged by a malicious server admin.
    </p>
    <p>
        The <strong>Web Crypto API</strong> changes everything. It provides a low-level interface to the cryptographic primitives provided by the browser's underlying operating system. This offers two massive benefits:
    </p>
    <ol className="list-decimal pl-6 space-y-4 mt-4">
        <li className="pl-2"><strong>Performance:</strong> Operations are handled by optimized native code (often hardware-accelerated), making them blazing fast compared to pure JavaScript implementations.</li>
        <li className="pl-2"><strong>Security:</strong> Sensitive data remains in the user's memory. The keys and data do not need to be exposed to the JavaScript environment in ways that are easily accessible to XSS attacks (when using SubtleCrypto correctly).</li>
    </ol>
    <p className="mt-4">
        This tool leverages <code>window.crypto.subtle.digest('SHA-256', data)</code> to perform all calculations on your machine. We never see your data. It is the ultimate form of privacy-preserving application architecture.
    </p>

    <h2 id="collisions" className="text-3xl font-bold text-white mt-12">7. Collision Resistance and the Birthday Paradox</h2>
    <p>
        A hash collision occurs when two distinct inputs produce the same output. For a hash function to be considered secure, finding a collision must be computationally infeasible.
    </p>
    <p>
        With SHA-256, the output space is 2^256. This is a number so astronomically large that it is difficult to comprehend. To put it in perspective, there are approximately 10^80 atoms in the observable universe. 2^256 is roughly 10^77.
    </p>
    <p>
        The <strong>Birthday Paradox</strong> probability theory suggests that you would need to generate approximately 2^128 hashes to have a 50% chance of finding a collision. 2^128 is about 3.4 x 10^38. Even with all the computing power on Earth combined, it would take billions of years to find a collision. This is why SHA-256 is trusted for critical infrastructure.
    </p>

    <h2 id="applications" className="text-3xl font-bold text-white mt-12">8. Real-World Applications of SHA-256</h2>
    <p>Beyond passwords, SHA-256 is the glue holding the digital world together:</p>
    <div className="space-y-4 mt-4">
        <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <div>
                <h4 className="text-lg font-bold text-white">Bitcoin & Blockchain</h4>
                <p className="text-sm">Miners race to find a value that, when hashed with SHA-256, produces a result with a specific number of leading zeros. This "Proof of Work" secures the network and validates transactions.</p>
            </div>
        </div>
        <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            <div>
                <h4 className="text-lg font-bold text-white">SSL/TLS Certificates</h4>
                <p className="text-sm">When you see the lock icon in your browser, SHA-256 is likely being used to verify the signature of the website's certificate, proving you are talking to the real server (e.g., google.com) and not an imposter.</p>
            </div>
        </div>
        <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </div>
            <div>
                <h4 className="text-lg font-bold text-white">Software Integrity</h4>
                <p className="text-sm">Developers publish SHA-256 checksums alongside their software downloads. Users can hash the downloaded file to verify it hasn't been tampered with or corrupted during download.</p>
            </div>
        </div>
    </div>

    <h2 id="future" className="text-3xl font-bold text-white mt-12">9. The Future: Is SHA-256 Quantum Proof?</h2>
    <p>
        As we stand on the brink of the quantum computing era, questions arise about the longevity of current cryptographic standards. Quantum computers, using Grover's Algorithm, could theoretically speed up the process of finding a hash pre-image.
    </p>
    <p>
        However, SHA-256 is remarkably resilient. While Grover's algorithm effectively halves the security bits (reducing SHA-256 to 128 bits of security), 128 bits is still considered computationally secure against brute force attacks for the foreseeable future.
    </p>

    <h2 id="faq" className="text-3xl font-bold text-white mt-12">10. Frequently Asked Questions (FAQ)</h2>
    <div className="space-y-6 mt-6">
      <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-colors">
        <h3 className="font-bold text-lg text-purple-300">Q: Is it safe to hash my real password on this site?</h3>
        <p className="mt-2 text-gray-300">A: Yes. Because this tool uses client-side hashing, your password never leaves your browser. It is processed in your device's memory and then discarded. However, as a general security practice, you should always be cautious about typing your primary passwords into any third-party website.</p>
      </div>
      <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-colors">
        <h3 className="font-bold text-lg text-purple-300">Q: Can I decrypt a SHA-256 hash?</h3>
        <p className="mt-2 text-gray-300">A: No. SHA-256 is a one-way function. The only way to "crack" it is to guess the input, hash it, and see if it matches (Brute Force). This is why using strong, long passwords is essential.</p>
      </div>
      <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-colors">
        <h3 className="font-bold text-lg text-purple-300">Q: What is a collision?</h3>
        <p className="mt-2 text-gray-300">A: A collision occurs when two different inputs produce the exact same hash output. While theoretically possible, it has never been achieved with SHA-256 and is considered impossible with current technology.</p>
      </div>
       <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-colors">
        <h3 className="font-bold text-lg text-purple-300">Q: Why is the hash always 64 characters long?</h3>
        <p className="mt-2 text-gray-300">A: SHA-256 produces a 256-bit binary output. When we represent this in hexadecimal (base-16), each character represents 4 bits. 256 divided by 4 equals 64 characters.</p>
      </div>
    </div>

    <div className="mt-12 p-8 bg-gradient-to-r from-purple-900 to-black rounded-xl text-center border border-purple-500/30 shadow-2xl">
        <p className="text-2xl font-bold text-white">Secure Your Data Today</p>
        <p className="text-purple-200 mt-2">Start using client-side SHA-256 hashing for your development and security needs.</p>
    </div>
  </article>
);

const SeoArticle: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="mt-20 max-w-5xl mx-auto relative z-20 pb-20" aria-label="SHA-256 Guide">
      <JsonLdSchema />
      
      <div className="bg-black/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
        <div className="p-8 sm:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-1 bg-purple-500 rounded-full"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Cryptographic Hashing: The Ultimate Guide</h2>
          </div>
          
          {/* Collapsed State: Shows only 2 lines via line-clamp */}
          <div className={`relative transition-all duration-500 ease-in-out`}>
             <p className={`text-gray-300 leading-relaxed text-lg ${!isOpen ? 'line-clamp-2' : ''}`}>
                Dive deep into the world of digital security with our comprehensive guide to cryptographic hashing. Understand the principles behind SHA-256, its critical role in data integrity, the mechanics of the avalanche effect, and how modern web applications leverage client-side APIs for enhanced privacy and security. This guide covers everything from basic definitions to quantum-proofing your data.
            </p>
          </div>
          
          {/* Expanded Content */}
          <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isOpen ? 'max-h-[20000px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <FullArticle />
          </div>

          <div className="mt-6 flex justify-center">
             <button
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls="full-article"
                className="group flex items-center gap-2 px-8 py-3 bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/50 rounded-full text-purple-300 font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            >
                <span>{isOpen ? 'Read Less' : 'Read Full Article'}</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoArticle;