
# 🛡️ SHA-256 Secure Hashing Tool

<div align="center">
  <img src="public/favicon.svg" alt="Logo" width="100" height="100" />
  
  <h1>SHA-256 Secure Hashing Tool</h1>
  
  <p>
    <strong>Secure. Private. Client-Side.</strong>
  </p>
  
  <p>
    A blazing-fast, privacy-focused cryptographic utility built with React, TypeScript, and the Native Web Crypto API. 
    <br />
    Designed for developers, security researchers, and privacy advocates.
    <br />
    <strong>All processing happens in your browser. Zero data leaves your device.</strong>
  </p>

  <p>
    <a href="https://doodax.com/tools/sha-256-hash-generator/index.html" target="_blank" rel="noopener noreferrer">
      <img src="https://img.shields.io/badge/🚀_LIVE_DEMO-doodax.com-blue?style=for-the-badge&logo=google-chrome" alt="Live Demo" />
    </a>
  </p>
  
  <p>
    <a href="https://github.com/hsinidev/sha256-hashing-tool/issues">Report Bug</a>
    ·
    <a href="https://github.com/hsinidev/sha256-hashing-tool/pulls">Request Feature</a>
  </p>
</div>

---

## 📖 Project Overview

The **SHA-256 Hashing Tool** transforms how users interact with cryptographic functions on the web. Unlike traditional online converters that often transmit sensitive data to a backend server for processing—posing significant security risks—this application leverages the modern **Web Crypto API** (`window.crypto.subtle`). This ensures that all hashing operations are performed locally within the user's browser environment.

The interface features a stunning, immersive **Multi-Colored Cosmic Galaxy UI** powered by a custom HTML5 Canvas particle system, proving that security tools can be both functional and beautiful.

### ✨ Key Features

*   🔒 **100% Client-Side Security:** Your data never touches a server. It is processed in your device's RAM.
*   📂 **File Hashing:** Drag and drop support to verify files (ISOs, documents, images) instantly.
*   ✅ **Integrity Verification:** Built-in comparison tool to check generated hashes against original checksums.
*   🔄 **Multi-Format Output:** Generate hashes in standard **Hexadecimal** or **Base64**.
*   🌌 **Immersive Galaxy Background:** A dynamic, multi-colored animated particle system simulating a deep-space nebula.
*   ⚡ **Native Performance:** Utilizes browser-native C++ cryptographic bindings for instant results.
*   📜 **History Log:** Keeps track of your recent hashing activity within the session.
*   📱 **Responsive Design:** Fully optimized for Mobile, Tablet, and Desktop experiences using Tailwind CSS.
*   🔍 **Advanced SEO:** Integrated Schema.org JSON-LD, semantic HTML5, and comprehensive metadata.
*   📚 **Educational Resource:** Contains a massive, in-depth technical guide on SHA-256 and cryptography.
*   🧂 **Salt Functionality:** Toggleable cryptographic salt to demonstrate robust password security.

---

## 📂 Project Structure

```text
sha256-hashing-tool/
├── public/
│   ├── favicon.svg        # Brand Logo & Icon
│   ├── robots.txt         # SEO Directives for Crawlers
│   └── sitemap.xml        # Website Structure Map
├── src/
│   ├── components/
│   │   ├── HashingTool.tsx    # Core Hashing Logic, File Handling & UI
│   │   ├── Layout.tsx         # Global Layout (Header, Footer, Modals)
│   │   ├── Modal.tsx          # Accessible Pop-up Window System
│   │   ├── SeoArticle.tsx     # SEO-Optimized Content Block (3500+ words)
│   │   └── Starfield.tsx      # HTML5 Canvas Galaxy Animation
│   ├── services/
│   │   └── cryptoService.ts   # Web Crypto API Implementation (Text/File/Base64)
│   ├── App.tsx            # Main React Component
│   ├── index.tsx          # Entry Point
│   └── index.css          # Global Styles & Tailwind Directives
├── index.html             # HTML5 Template with Meta Tags
├── metadata.json          # App Metadata
├── package.json           # NPM Dependencies
└── README.md              # Documentation
```

---

## 🛠️ Tech Stack

*   **Frontend Framework:** React 19
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS 3
*   **Cryptography:** Web Crypto API (SHA-256)
*   **Build Tool:** Vite

---

## 🚀 Getting Started

### Prerequisites

*   Node.js (v16 or higher)
*   npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/hsinidev/sha256-hashing-tool.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd sha256-hashing-tool
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Start the development server:**
    ```bash
    npm run dev
    ```

---

## 👤 Author

**HSINI MOHAMED**

*   **Website:** [doodax.com](https://doodax.com)
*   **Email:** [hsini.web@gmail.com](mailto:hsini.web@gmail.com)
*   **GitHub:** [@hsinidev](https://github.com/hsinidev)

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
