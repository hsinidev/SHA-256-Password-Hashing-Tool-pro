import React, { useState, useCallback, useRef } from 'react';
import { generateSha256Hash, generateFileHash, HashFormat } from '../services/cryptoService';

interface HistoryItem {
  id: string;
  label: string;
  hash: string;
  timestamp: string;
  type: 'text' | 'file';
}

const HashingTool: React.FC = () => {
  // Modes & Settings
  const [mode, setMode] = useState<'text' | 'file'>('text');
  const [format, setFormat] = useState<HashFormat>('hex');
  const [useSalt, setUseSalt] = useState<boolean>(false);

  // Inputs
  const [inputText, setInputText] = useState<string>('');
  const [inputFile, setInputFile] = useState<File | null>(null);
  const [verifyHash, setVerifyHash] = useState<string>('');

  // Outputs
  const [hashedText, setHashedText] = useState<string>('');
  const [isHashing, setIsHashing] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Helper to add to history
  const addToHistory = (label: string, hash: string, type: 'text' | 'file') => {
    const newItem: HistoryItem = {
      id: Math.random().toString(36).substring(7),
      label: label.length > 30 ? label.substring(0, 30) + '...' : label,
      hash,
      timestamp: new Date().toLocaleTimeString(),
      type
    };
    setHistory(prev => [newItem, ...prev].slice(0, 5)); // Keep last 5
  };

  const handleHash = useCallback(async () => {
    setError('');
    setHashedText('');
    setIsHashing(true);

    try {
      let result = '';
      
      if (mode === 'text') {
        if (!inputText) throw new Error('Please enter text to hash.');
        let textToHash = inputText;
        if (useSalt) {
            const salt = Math.random().toString(36).substring(2, 15);
            textToHash += salt; // In a real app, you'd display this salt to the user
        }
        result = await generateSha256Hash(textToHash, format);
        addToHistory(textToHash, result, 'text');
      } else {
        if (!inputFile) throw new Error('Please select a file to hash.');
        result = await generateFileHash(inputFile, format);
        addToHistory(inputFile.name, result, 'file');
      }

      setHashedText(result);
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
      setError(errorMessage);
    } finally {
      setIsHashing(false);
    }
  }, [inputText, inputFile, mode, format, useSalt]);

  const handleCopy = () => {
    if (hashedText) {
      navigator.clipboard.writeText(hashedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // File Handling
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setInputFile(e.target.files[0]);
      setHashedText('');
      setError('');
    }
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setInputFile(e.dataTransfer.files[0]);
      setMode('file');
      setHashedText('');
      setError('');
    }
  };

  // Verification Logic
  const isMatch = verifyHash && hashedText ? verifyHash.trim().toLowerCase() === hashedText.toLowerCase() : null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" role="region" aria-label="Hashing Tools">
      
      {/* Left Column: Main Tool */}
      <div className="lg:col-span-2 space-y-6">
        
        <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-6 sm:p-8">
          {/* Tabs */}
          <div className="flex space-x-4 mb-6 border-b border-gray-700 pb-2" role="tablist">
            <button
              role="tab"
              aria-selected={mode === 'text'}
              onClick={() => setMode('text')}
              className={`pb-2 text-sm font-bold uppercase tracking-wider transition-colors ${mode === 'text' ? 'text-indigo-400 border-b-2 border-indigo-400' : 'text-gray-500 hover:text-gray-300'}`}
            >
              Text String
            </button>
            <button
              role="tab"
              aria-selected={mode === 'file'}
              onClick={() => setMode('file')}
              className={`pb-2 text-sm font-bold uppercase tracking-wider transition-colors ${mode === 'file' ? 'text-indigo-400 border-b-2 border-indigo-400' : 'text-gray-500 hover:text-gray-300'}`}
            >
              File Upload
            </button>
          </div>

          {/* Input Area */}
          <div className="min-h-[200px] mb-6">
            {mode === 'text' ? (
              <div className="flex flex-col h-full">
                 <label htmlFor="input-text" className="text-xs font-semibold text-gray-400 mb-2 uppercase">Input Text</label>
                 <textarea
                    id="input-text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type or paste content here..."
                    aria-label="Text to hash"
                    className="w-full flex-grow p-4 bg-black/40 border border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-200 placeholder-gray-600 resize-none transition-all"
                  />
              </div>
            ) : (
              <div 
                className="flex flex-col h-full"
                onDragOver={(e) => e.preventDefault()}
                onDrop={onDrop}
              >
                <label className="text-xs font-semibold text-gray-400 mb-2 uppercase">File Input</label>
                <div className="flex-grow border-2 border-dashed border-gray-700 hover:border-indigo-500 rounded-xl bg-black/20 flex flex-col items-center justify-center p-8 transition-colors cursor-pointer group"
                     onClick={() => fileInputRef.current?.click()}
                     role="button"
                     aria-label="Upload file area"
                     tabIndex={0}
                     >
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    className="hidden" 
                    onChange={onFileChange} 
                    aria-hidden="true"
                  />
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                  </div>
                  {inputFile ? (
                    <div className="text-center">
                      <p className="text-white font-medium truncate max-w-xs">{inputFile.name}</p>
                      <p className="text-gray-500 text-sm">{(inputFile.size / 1024).toFixed(2)} KB</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <p className="text-gray-300 font-medium">Click to Upload or Drag & Drop</p>
                      <p className="text-gray-500 text-sm">Any file type supported</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
             <div className="flex items-center space-x-4 bg-black/30 p-1 rounded-lg border border-gray-700/50">
                <button
                  onClick={() => setFormat('hex')}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${format === 'hex' ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                  aria-label="Set output format to Hex"
                >
                  HEX
                </button>
                <button
                  onClick={() => setFormat('base64')}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${format === 'base64' ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                  aria-label="Set output format to Base64"
                >
                  Base64
                </button>
             </div>
             
             {mode === 'text' && (
                <button 
                    className="flex items-center space-x-2 cursor-pointer group bg-transparent border-none" 
                    onClick={() => setUseSalt(!useSalt)}
                    aria-pressed={useSalt}
                    aria-label="Toggle salt for password hashing"
                >
                    <div className={`w-10 h-5 rounded-full relative transition-colors ${useSalt ? 'bg-green-500' : 'bg-gray-600'}`}>
                        <div className={`w-3 h-3 bg-white rounded-full absolute top-1 transition-all ${useSalt ? 'left-6' : 'left-1'}`}></div>
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-gray-200">Add Random Salt</span>
                </button>
             )}
          </div>

          <button
            onClick={handleHash}
            disabled={isHashing}
            className="w-full py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white font-bold rounded-xl shadow-lg shadow-purple-900/30 transform transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            aria-label="Generate SHA-256 Hash"
          >
            {isHashing ? (
               <>
                 <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                 <span>Processing...</span>
               </>
            ) : (
               <span>Generate Hash</span>
            )}
          </button>
          
          {error && <p className="mt-4 text-red-400 text-center bg-red-900/20 p-2 rounded border border-red-800/50" role="alert">{error}</p>}
        </div>

        {/* Output Section */}
        <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-6 sm:p-8">
           <div className="flex items-center justify-between mb-2">
              <label htmlFor="hash-output" className="text-xs font-semibold text-gray-400 uppercase">Hash Output</label>
              {hashedText && (
                 <span className="text-xs text-indigo-400 font-mono bg-indigo-900/30 px-2 py-0.5 rounded border border-indigo-500/30">
                    {format.toUpperCase()} | {hashedText.length} chars
                 </span>
              )}
           </div>
           
           <div className="relative group">
             <textarea
               id="hash-output"
               readOnly
               value={hashedText}
               placeholder="Result will appear here..."
               aria-live="polite"
               className={`w-full p-4 font-mono text-sm bg-black/60 border rounded-xl text-green-400 break-all min-h-[120px] focus:outline-none transition-colors ${isMatch === true ? 'border-green-500/50 bg-green-900/10' : isMatch === false ? 'border-red-500/50 bg-red-900/10' : 'border-gray-700'}`}
             />
             <button
               onClick={handleCopy}
               disabled={!hashedText}
               className="absolute top-3 right-3 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-300 hover:text-white transition-colors disabled:opacity-0 group-hover:disabled:opacity-0 group-hover:opacity-100 opacity-0"
               title="Copy to Clipboard"
               aria-label="Copy hash to clipboard"
             >
               {copied ? <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>}
             </button>
           </div>
        </div>
      </div>

      {/* Right Column: Tools & History */}
      <div className="space-y-6">
         
         {/* Verification Tool */}
         <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
               <svg className="w-5 h-5 mr-2 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               Verify Integrity
            </h3>
            <label htmlFor="verify-input" className="text-sm text-gray-400 mb-4 block">Paste a hash below to compare it with your generated result.</label>
            
            <div className="relative">
               <input 
                 id="verify-input"
                 type="text" 
                 value={verifyHash}
                 onChange={(e) => setVerifyHash(e.target.value)}
                 placeholder="Paste original hash..."
                 className={`w-full p-3 pl-10 text-sm bg-black/40 border rounded-lg focus:outline-none transition-all ${isMatch === true ? 'border-green-500 text-green-400' : isMatch === false ? 'border-red-500 text-red-400' : 'border-gray-700 text-gray-200'}`}
               />
               <div className="absolute left-3 top-3">
                  {isMatch === true ? (
                     <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  ) : isMatch === false ? (
                     <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  ) : (
                     <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  )}
               </div>
            </div>
            
            {isMatch === true && <div role="status" className="mt-3 text-xs font-bold text-green-400 bg-green-900/20 p-2 rounded text-center border border-green-900/50">MATCH CONFIRMED</div>}
            {isMatch === false && <div role="status" className="mt-3 text-xs font-bold text-red-400 bg-red-900/20 p-2 rounded text-center border border-red-900/50"> hashes DO NOT MATCH</div>}
         </div>

         {/* History */}
         <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-6">
             <h3 className="text-lg font-bold text-white mb-4 flex items-center">
               <svg className="w-5 h-5 mr-2 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               Recent Activity
            </h3>
            
            <div className="space-y-3">
               {history.length === 0 ? (
                 <p className="text-sm text-gray-500 text-center py-4 italic">No hashes generated yet.</p>
               ) : (
                 history.map(item => (
                    <div key={item.id} className="bg-black/20 p-3 rounded-lg border border-white/5 hover:border-indigo-500/30 transition-colors">
                       <div className="flex justify-between items-start mb-1">
                          <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${item.type === 'file' ? 'bg-blue-900/40 text-blue-300' : 'bg-purple-900/40 text-purple-300'}`}>{item.type.toUpperCase()}</span>
                          <span className="text-[10px] text-gray-500">{item.timestamp}</span>
                       </div>
                       <p className="text-sm text-gray-300 truncate mb-1" title={item.label}>{item.label}</p>
                       <div className="flex items-center bg-black/40 rounded p-1.5">
                          <code className="text-[10px] text-gray-500 truncate flex-grow">{item.hash}</code>
                          <button 
                            onClick={() => {
                                navigator.clipboard.writeText(item.hash);
                                // Optional toast here
                            }}
                            className="ml-2 text-gray-500 hover:text-white"
                            title="Copy"
                            aria-label="Copy history item"
                          >
                             <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                          </button>
                       </div>
                    </div>
                 ))
               )}
            </div>
         </div>

      </div>
    </div>
  );
};

export default HashingTool;