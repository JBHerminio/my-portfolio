import React, { useEffect } from "react";
import Typed from "typed.js";

const Typewriter = () => {
  useEffect(() => {
    const typed = new Typed(".typing", {
      strings: [
        "Frontend Developer",
        "Wed Developer",
        "App Developer",
        "Runner",
        "Biker",
        "Gamer",
      ],
      typeSpeed: 100,
      backSpeed: 20,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <div className="typing"></div>;
};

export default Typewriter;
