import './index.css';
import React, { useRef } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const str = 'asd';
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div>
      <input type="text" ref={ref} />
      <button
        onClick={() => {
          console.log(ref.current.value);
        }}
      >
        {str}
      </button>
    </div>
  );
}

const root = document.getElementById('root');
createRoot(root).render(<App />);
