import React from 'react';

function CustomFooter() {
  return (
    <footer className="flex items-center justify-center p-4 bg-gray-800 text-white">
      <p className="text-center">
        Diseñado y desarrollado por{' '}
        <a
          className="text-blue-400 hover:underline"
          href="https://github.com/Luizfer-Col"
          target="_blank"
          rel="noopener noreferrer"
        >
          Luizfer-Col
        </a>
      </p>
    </footer>
  );
}

export default CustomFooter;
