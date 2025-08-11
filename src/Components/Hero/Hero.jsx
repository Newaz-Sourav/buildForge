import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const [rot, setRot] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, active: false });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const px = x / rect.width;
    const py = y / rect.height;

    setRot({
      x: (py - 0.5) * -8,
      y: (px - 0.5) * 8,
    });

    setMousePos({ x, y, active: true });
  };

  const handleMouseLeave = () => {
    setRot({ x: 0, y: 0 });
    setMousePos((pos) => ({ ...pos, active: false }));
  };

  const glowStyle = mousePos.active
    ? {
        position: "absolute",
        top: mousePos.y,
        left: mousePos.x,
        width: 500,
        height: 500,
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        borderRadius: "50%",
        background: `radial-gradient(circle, rgba(34,197,94,0.4) 0%, rgba(34,197,94,0) 70%)`,
        filter: "blur(70px)",
        zIndex: 1,
      }
    : { display: "none" };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[20rem] sm:h-[25rem] md:h-[30rem] lg:h-[34rem] xl:h-[36rem] 2xl:h-[40rem] flex items-end justify-center"
      style={{ perspective: 1000 }}
    >
      {/* Background with tilt and overflow-hidden */}
      <motion.div
        className="absolute inset-0 bg-amber-50 sm:bg-[url('/assets/home.png')] bg-cover bg-center rounded-lg overflow-hidden"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateX: rot.x, rotateY: rot.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      >
        {/* Glow circle inside background div so it can be clipped */}
        <div style={glowStyle} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center mb-16 px-4">
        <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-slate-800 sm:text-rose-50 font-medium italic p-2">
          Life is a Celebration
        </h1>
        <h4 className="text-lg text-slate-800 sm:text-rose-50 font-medium italic p-2">
          The start is just a click away
        </h4>

        <Link to={"/booking"}>
          <button className="bg-amber-200 p-2 rounded-lg hover:shadow-lg transition-shadow duration-300">
            Book a Meeting <i className="fa-solid fa-arrow-right"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
