"use client";

import { useEffect, useRef, useState } from "react";
import Loader from "./Loader";

export default function ParticleGlobe() {
  const [loading, setLoading] = useState(true);
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const effectRef = useRef<any>(null);

  useEffect(() => {
    async function loadVanta() {
      if (!vantaRef.current) return;

        const NET = (await import("vanta/dist/vanta.net.min")).default;
        const THREE = await import("three");

      if (!effectRef.current) {
        effectRef.current = NET({
          el: vantaRef.current,
          THREE,
          points: 25,
          maxDistance: 15,
          spacing: 15,
          showDots: true,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 100,
          minWidth: 100,
        });

        setLoading(false); // ✅ hide loader AFTER Vanta mounts
      }
    }

    loadVanta();

    return () => {
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, []);

  return (
    <>
      {/* Vanta background (always mounted) */}
      <div ref={vantaRef} className="w-full h-full" />

      {/* Fixed loader overlay */}
      {loading && <Loader />}
    </>
  );
}
