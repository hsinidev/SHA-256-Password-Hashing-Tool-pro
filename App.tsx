import React from 'react';
import Layout from './components/Layout';
import HashingTool from './components/HashingTool';
import SeoArticle from './components/SeoArticle';

const App: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-500 mb-4">
            Secure SHA-256 Hash Generator & File Verifier
          </h1>
          <p className="text-lg text-gray-300 mt-3 max-w-2xl mx-auto leading-relaxed">
            Free, blazing-fast, and 100% private. Generate cryptographic checksums for text and files directly in your browser using the Web Crypto API.
          </p>
        </div>
        <HashingTool />
        <SeoArticle />
      </div>
    </Layout>
  );
};

export default App;