import React, { useRef, useState, useEffect } from 'react';

import Button from "../buttons/Button"

export default function CopyPaster() {

  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess('Copied!');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCopySuccess('');
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="copypaster">
      {
       /* Logical shortcut for only displaying the 
          button if the copy command exists */
       document.queryCommandSupported('copy') &&
        <>
        <Button 
          button 
          id="copy-button"
          onClick={copyToClipboard}
        >Copy
        </Button>
        <div>{copySuccess}</div>
        </>
      }
      <form>
        <textarea
          ref={textAreaRef}
          value='www.parlar.io'
        />
      </form>
    </section>
  );
}