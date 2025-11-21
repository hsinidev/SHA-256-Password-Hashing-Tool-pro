
export type HashFormat = 'hex' | 'base64';

/**
 * Converts an ArrayBuffer to a Hexadecimal string.
 */
const bufferToHex = (buffer: ArrayBuffer): string => {
  const byteArray = new Uint8Array(buffer);
  const hexCodes = new Array(byteArray.length);
  for (let i = 0; i < byteArray.length; i++) {
    hexCodes[i] = byteArray[i].toString(16).padStart(2, '0');
  }
  return hexCodes.join('');
};

/**
 * Converts an ArrayBuffer to a Base64 string.
 */
const bufferToBase64 = (buffer: ArrayBuffer): string => {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
};

/**
 * Generates a SHA-256 hash of a given string using the Web Crypto API.
 */
export const generateSha256Hash = async (text: string, format: HashFormat = 'hex'): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
  return format === 'hex' ? bufferToHex(hashBuffer) : bufferToBase64(hashBuffer);
};

/**
 * Generates a SHA-256 hash of a File object.
 * Reads the file into memory as an ArrayBuffer.
 */
export const generateFileHash = async (file: File, format: HashFormat = 'hex'): Promise<string> => {
  // Note: For extremely large files (>500MB), a streaming approach (chunking) 
  // would be preferred to avoid memory limits, but Web Crypto API digest() is one-shot.
  const buffer = await file.arrayBuffer();
  const hashBuffer = await window.crypto.subtle.digest('SHA-256', buffer);
  return format === 'hex' ? bufferToHex(hashBuffer) : bufferToBase64(hashBuffer);
};
