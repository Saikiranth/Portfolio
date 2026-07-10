import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import "../Styles/Background.css";

function Background() {
  const bgRef = useRef(null);

  useEffect(() => {
    const effect = NET({
      el: bgRef.current,
      THREE,
      color: 0x3b82f6,
      backgroundColor: 0x050816,
      points: 12,
      maxDistance: 22,
      spacing: 18,
      showDots: true,
    });

    return () => effect?.destroy();
  }, []);

  return (
    <>
      <div ref={bgRef} className="background"></div>
      <div className="background-overlay"></div>
    </>
  );
}

export default Background;