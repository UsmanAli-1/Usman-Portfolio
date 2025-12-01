"use client";

import { useEffect, useRef } from "react";

export default function ParticleGlobe() {
    const vantaRef = useRef<HTMLDivElement | null>(null);
    const effectRef = useRef<any>(null);

    useEffect(() => {
        async function loadVanta() {
            // @ts-ignore
            const NET = (await import("vanta/dist/vanta.net.min")).default;
            // @ts-ignore
            const THREE = await import("three");

            if (!effectRef.current) {
                const vantaNet = NET({
                    el: vantaRef.current!,
                    THREE,
                    points: 15,
                    maxDistance: 25,
                    spacing: 15,
                    showDots: true,
                    mouseControls: true,
                    touchControls: false,
                    gyroControls: false,
                    minHeight: 100.0,
                    minWidth: 100.0,
                });

                effectRef.current = vantaNet;
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

    return <div ref={vantaRef} className="w-full h-full"></div>;
}
