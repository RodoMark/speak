import React, { useRef, useState } from 'react';

export default function CopyPaster() {

  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess('Copied!');
  };

  return (
    <div>
      {
       /* Logical shortcut for only displaying the 
          button if the copy command exists */
       document.queryCommandSupported('copy') &&
        <div>
          <button onClick={copyToClipboard}>Copy</button> 
          {copySuccess}
        </div>
      }
      <form>
        <textarea
          ref={textAreaRef}
          value='Some text to copy'
        />
      </form>
    </div>
  );
}