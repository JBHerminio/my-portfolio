import React, { useEffect } from 'react';
import Typed from 'typed.js';

const Typewriter = () => {
  useEffect(() => {
    const typed = new Typed(".typing", {
      strings: ["Frontend Developer", "Biker", "Gamer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="typing"></div>
  );
};

export default Typewriter;