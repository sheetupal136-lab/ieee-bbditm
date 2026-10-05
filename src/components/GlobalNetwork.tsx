import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Network } from 'lucide-react';

export const GlobalNetwork: React.FC = () => {
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = canvasContainerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      return;
    }

    const width = container.clientWidth || 360;
    const height = container.clientHeight || 360;
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.z = 5.2;

    const group = new THREE.Group();
    scene.add(group);

    // Subtle Core Sphere
    const sphereGeo = new THREE.SphereGeometry(1.6, 28, 28);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x061426,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    group.add(sphere);

    // Geodesic Network Arcs between 4 Hubs
    // Lucknow, Tokyo, Silicon Valley, London
    const hubs = [
      new THREE.Vector3(0.8, 0.7, 1.2).normalize().multiplyScalar(1.62),   // Lucknow
      new THREE.Vector3(1.3, 0.8, 0.6).normalize().multiplyScalar(1.62),   // Asia-Pac
      new THREE.Vector3(-1.1, 0.9, 0.8).normalize().multiplyScalar(1.62),  // USA
      new THREE.Vector3(-0.2, 1.2, 1.0).normalize().multiplyScalar(1.62),  // Europe
    ];

    // Hub Points
    const hubGeo = new THREE.BufferGeometry().setFromPoints(hubs);
    const hubMat = new THREE.PointsMaterial({ color: 0x38bdf8, size: 0.15 });
    const hubPoints = new THREE.Points(hubGeo, hubMat);
    group.add(hubPoints);

    // Connecting Great Circle Arcs
    hubs.forEach((h1, i) => {
      hubs.forEach((h2, j) => {
        if (i < j) {
          const curve = new THREE.QuadraticBezierCurve3(
            h1,
            h1.clone().add(h2).multiplyScalar(0.6).normalize().multiplyScalar(2.05),
            h2
          );
          const points = curve.getPoints(24);
          const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
          const lineMat = new THREE.LineBasicMaterial({
            color: 0x00a3e0,
            transparent: true,
            opacity: 0.65,
          });
          const arc = new THREE.Line(lineGeo, lineMat);
          group.add(arc);
        }
      });
    });

    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      group.rotation.y += 0.003;
      group.rotation.x = Math.sin(Date.now() * 0.001) * 0.1;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      hubGeo.dispose();
      hubMat.dispose();
    };
  }, []);

  return (
    <section className="py-20 lg:py-28 relative bg-slate-50 dark:bg-[#07111E] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-[#002855] via-[#071529] to-[#040C18] rounded-3xl border border-[#00629B]/40 shadow-2xl p-8 sm:p-14 relative overflow-hidden">
          
          <div className="absolute inset-0 tech-grid-pattern opacity-20 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-bold uppercase tracking-wider border border-white/10">
                <Network className="w-3.5 h-3.5" />
                <span>Global Ecosystem</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                From Lucknow to the World: <br />
                <span className="text-cyan-400">The Global IEEE Network</span>
              </h2>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                As an IEEE member at BBDITM, you are not limited to campus walls. You are plugged directly into a worldwide technical fraternity of 420,000+ engineers, 1,900+ student branches, and premier international research conferences.
              </p>

              {/* Hierarchy Nodes */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 text-center">
                  <div className="text-cyan-400 font-bold text-sm">BBDITM</div>
                  <div className="text-[11px] text-slate-300">Local Branch</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 text-center">
                  <div className="text-cyan-400 font-bold text-sm">UP Section</div>
                  <div className="text-[11px] text-slate-300">State Network</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 text-center">
                  <div className="text-cyan-400 font-bold text-sm">Region 10</div>
                  <div className="text-[11px] text-slate-300">Asia-Pacific</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 text-center">
                  <div className="text-cyan-400 font-bold text-sm">IEEE Global</div>
                  <div className="text-[11px] text-slate-300">160+ Countries</div>
                </div>
              </div>
            </div>

            {/* Right Mini 3D Globe */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full max-w-[340px] aspect-square relative flex items-center justify-center">
                <div 
                  ref={canvasContainerRef} 
                  className="w-full h-full flex items-center justify-center"
                  title="IEEE Global Interconnected Nodes"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
