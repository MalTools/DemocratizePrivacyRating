import React, { ReactNode } from 'react';

export function extractTextFromElement(element: ReactNode): string {
  if (!element) return ''; // Handle null or undefined

  if (typeof element === 'string') {
    return element; // Return plain text
  }

  if (Array.isArray(element)) {
    // Handle arrays (e.g., multiple children)
    return element.map(child => extractTextFromElement(child)).join('');
  }

  if (React.isValidElement(element)) {
    // Use isValidElement to check if it's a ReactElement
    const children = element.props.children;
    return extractTextFromElement(children);
  }

  return ''; // Return empty string for unsupported types
}

// src/utils/imageModal.tsx

export const showImageModal = (src: string) => {
  const modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  modal.style.display = 'flex';
  modal.style.justifyContent = 'center';
  modal.style.alignItems = 'center';
  modal.style.zIndex = '1000';

  const img = document.createElement('img');
  img.src = src;
  img.style.maxWidth = '90%';
  img.style.maxHeight = '90%';
  img.style.borderRadius = '8px';

  modal.appendChild(img);

  modal.onclick = () => {
    document.body.removeChild(modal);
  };

  document.body.appendChild(modal);
};

