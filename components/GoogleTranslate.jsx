"use client";

import { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
  const script = document.createElement('script');
  script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  script.async = true;
  document.body.appendChild(script);

  window.googleTranslateElementInit = () => {
    if (window.google && window.google.translate) {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,ar,ckb',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      );
    }
  };

  // CSS to hide the translate banner without using MutationObserver
  const style = document.createElement('style');
  style.innerHTML = `
    .goog-te-banner-frame {
      display: none !important;
    }
    body {
      top: 0px !important;
    }
  `;
  document.head.appendChild(style);

  return () => {
    // Clean up script and styles on component unmount
    if (script.parentNode) {
      document.body.removeChild(script);
    }
    if (style.parentNode) {
      document.head.removeChild(style);
    }
  };
}, []);


  return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;
