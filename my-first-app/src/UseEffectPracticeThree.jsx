import React, { useState, useEffect } from 'react';

const UseEffectPracticeThree = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    console.log("Listener attached (Runs only once on mount)");

    // Cleanup function
    return () => {
      console.log("Listener removed (Runs only once on unmount)");
      window.removeEventListener("resize", handleResize);
    };
  }, []); // <-- Empty array ensures this only runs ONCE on mount and unmount

  return (
    <div>UseEffectPracticeThree: {windowWidth}px</div>
  );
};

export default UseEffectPracticeThree;
