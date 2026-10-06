import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Globe, Wifi } from 'lucide-react';

interface Interactive3DProps {
  className?: string;
}

// Convert latitude and longitude to 3D Cartesian coordinates on a sphere
function latLongToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
}

// Key Global IEEE Student Branches & Headquarters
const GLOBAL_IEEE_NODES = [
  // Primary Hub - Lucknow
  { name: 'IEEE BBDITM Lucknow', lat: 26.85, lon: 80.95, region: 'R10', isMain: true },
  
  // International Branches Outside India
  { name: 'MIT Student Branch (Cambridge, USA)', lat: 42.36, lon: -71.09, region: 'R1', isMain: false },
  { name: 'Stanford Univ Branch (California, USA)', lat: 37.42, lon: -122.16, region: 'R6', isMain: false },
  { name: 'Imperial College London (UK)', lat: 51.49, lon: -0.17, region: 'R8', isMain: false },
  { name: 'Univ of Tokyo (Japan)', lat: 35.71, lon: 139.76, region: 'R10', isMain: false },
  { name: 'NUS Singapore Branch', lat: 1.29, lon: 103.77, region: 'R10', isMain: false },
  { name: 'Univ of Melbourne (Australia)', lat: -37.79, lon: 144.96, region: 'R10', isMain: false },
  { name: 'ETH Zurich Branch (Switzerland)', lat: 47.37, lon: 8.54, region: 'R8', isMain: false },
  { name: 'Univ of Toronto Branch (Canada)', lat: 43.66, lon: -79.39, region: 'R7', isMain: false },
  { name: 'TU Munich Branch (Germany)', lat: 48.14, lon: 11.56, region: 'R8', isMain: false },
  { name: 'Cairo Univ Branch (Egypt)', lat: 30.02, lon: 31.20, region: 'R8', isMain: false },
  { name: 'Univ of Sao Paulo (Brazil)', lat: -23.55, lon: -46.73, region: 'R9', isMain: false },
  { name: 'IIT Kanpur Student Branch', lat: 26.51, lon: 80.23, region: 'R10', isMain: false },
  { name: 'IIT Bombay Student Branch', lat: 19.13, lon: 72.91, region: 'R10', isMain: false },
];

export const Interactive3D: React.FC<Interactive3DProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;
    const isMobile = window.innerWidth < 768;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 2));
    renderer.setClearColor(0x000000, 0); // Transparent background
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6.2;

    // Master Group for smooth mouse parallax & rotation
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Initial tilt to bring India / Lucknow into view
    globeGroup.rotation.x = 0.32;
    globeGroup.rotation.y = -1.25;

    // Texture Loader
    const textureLoader = new THREE.TextureLoader();
    const earthDayMap = textureLoader.load('/earth-day.jpg');
    const earthSpecularMap = textureLoader.load('/earth-specular.jpg');
    const earthCloudsMap = textureLoader.load('/earth-clouds.png');

    const earthRadius = 2.15;

    // 1. Photorealistic Earth Mesh
    const earthGeometry = new THREE.SphereGeometry(earthRadius, isMobile ? 36 : 64, isMobile ? 36 : 64);
    const earthMaterial = new THREE.MeshPhongMaterial({
      map: earthDayMap,
      specularMap: earthSpecularMap,
      specular: new THREE.Color(0x2266aa),
      shininess: 28,
      emissive: new THREE.Color(0x06182c),
      emissiveIntensity: 0.3,
    });
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    globeGroup.add(earthMesh);

    // 2. Realistic Floating Clouds Layer
    const cloudsGeometry = new THREE.SphereGeometry(earthRadius * 1.018, isMobile ? 32 : 48, isMobile ? 32 : 48);
    const cloudsMaterial = new THREE.MeshLambertMaterial({
      map: earthCloudsMap,
      transparent: true,
      opacity: 0.42,
      blending: THREE.AdditiveBlending,
    });
    const cloudsMesh = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
    globeGroup.add(cloudsMesh);

    // 3. Iconic IEEE Orbital Communication Rings
    const ringGeo = new THREE.RingGeometry(2.6, 2.68, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00a3e0,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.45,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2.3;
    globeGroup.add(ringMesh);

    const ring2Geo = new THREE.RingGeometry(2.85, 2.9, 64);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.25,
    });
    const ring2Mesh = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2Mesh.rotation.x = -Math.PI / 3;
    globeGroup.add(ring2Mesh);

    // 4. Branch Nodes on Earth's Surface
    const lucknowNode = GLOBAL_IEEE_NODES.find(n => n.isMain)!;
    const lucknowPos = latLongToVector3(lucknowNode.lat, lucknowNode.lon, earthRadius * 1.02);

    GLOBAL_IEEE_NODES.forEach((node) => {
      const pos = latLongToVector3(node.lat, node.lon, earthRadius * 1.02);

      // Marker Dot
      const markerGeo = new THREE.SphereGeometry(node.isMain ? 0.08 : 0.045, 16, 16);
      const markerMat = new THREE.MeshBasicMaterial({
        color: node.isMain ? 0xffffff : 0x00f2fe,
      });
      const marker = new THREE.Mesh(markerGeo, markerMat);
      marker.position.copy(pos);
      globeGroup.add(marker);
    });

    // Lucknow (BBDITM Node) Pulsing Ring Beacon
    const pulseRingGeo = new THREE.RingGeometry(0.08, 0.2, 32);
    const pulseRingMat = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.9,
    });
    const pulseRing = new THREE.Mesh(pulseRingGeo, pulseRingMat);
    pulseRing.position.copy(lucknowPos);
    pulseRing.lookAt(0, 0, 0);
    globeGroup.add(pulseRing);

    // 5. Geodesic Connection Arcs linking Lucknow to International Hubs
    const targetHubs = GLOBAL_IEEE_NODES.filter(n => !n.isMain);
    targetHubs.forEach((hub) => {
      const hubPos = latLongToVector3(hub.lat, hub.lon, earthRadius * 1.02);
      const midPoint = lucknowPos.clone().add(hubPos).multiplyScalar(0.5);
      const dist = lucknowPos.distanceTo(hubPos);
      midPoint.normalize().multiplyScalar(earthRadius * (1.06 + dist * 0.16));

      const curve = new THREE.QuadraticBezierCurve3(lucknowPos, midPoint, hubPos);
      const pts = curve.getPoints(32);
      const arcGeo = new THREE.BufferGeometry().setFromPoints(pts);
      const arcMat = new THREE.LineBasicMaterial({
        color: 0x00a3e0,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
      });
      const arc = new THREE.Line(arcGeo, arcMat);
      globeGroup.add(arc);
    });

    // 6. Atmospheric Glow Shader
    const atmosphereGeo = new THREE.SphereGeometry(earthRadius * 1.08, 32, 32);
    const atmosphereMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.68 - dot(vNormal, vec3(0, 0, 1.0)), 2.0);
          gl_FragColor = vec4(0.0, 0.64, 0.98, 1.0) * intensity * 0.75;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
    });
    const atmosphereMesh = new THREE.Mesh(atmosphereGeo, atmosphereMat);
    scene.add(atmosphereMesh);

    // 7. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.1);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 2.2);
    sunLight.position.set(6, 4, 7);
    scene.add(sunLight);

    const ieeeBlueLight = new THREE.DirectionalLight(0x00629b, 1.6);
    ieeeBlueLight.position.set(-6, -4, -4);
    scene.add(ieeeBlueLight);

    // 8. Mouse Interaction & Parallax
    let targetRotationX = 0.32;
    let targetRotationY = -1.25;
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - prevMouseX;
        const deltaY = e.clientY - prevMouseY;
        targetRotationY += deltaX * 0.006;
        targetRotationX += deltaY * 0.006;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
      }
    };

    const onMouseUp = () => { isDragging = false; };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Touch support for mobile
    let prevTouchX = 0;
    let prevTouchY = 0;
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevTouchX = e.touches[0].clientX;
        prevTouchY = e.touches[0].clientY;
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - prevTouchX;
        const deltaY = e.touches[0].clientY - prevTouchY;
        targetRotationY += deltaX * 0.008;
        targetRotationX += deltaY * 0.008;
        prevTouchX = e.touches[0].clientX;
        prevTouchY = e.touches[0].clientY;
      }
    };
    const onTouchEnd = () => { isDragging = false; };

    container.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId: number;
    const startTime = performance.now();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = (performance.now() - startTime) * 0.001;

      // Slow smooth idle rotation
      if (!isDragging) {
        targetRotationY += 0.0018;
      }

      globeGroup.rotation.x += (targetRotationX - globeGroup.rotation.x) * 0.08;
      globeGroup.rotation.y += (targetRotationY - globeGroup.rotation.y) * 0.08;

      // Cloud drift
      cloudsMesh.rotation.y += 0.0006;

      // Pulse Lucknow Beacon
      const pulse = 1 + Math.sin(elapsed * 4.5) * 0.38;
      pulseRing.scale.set(pulse, pulse, pulse);
      pulseRingMat.opacity = 0.5 + Math.sin(elapsed * 4.5) * 0.45;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      earthGeometry.dispose();
      earthMaterial.dispose();
      cloudsGeometry.dispose();
      cloudsMaterial.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      pulseRingGeo.dispose();
      pulseRingMat.dispose();
      atmosphereGeo.dispose();
      atmosphereMat.dispose();
    };
  }, []);

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      
      {/* Background Ambient Radial Glow */}
      <div className="absolute inset-0 bg-radial from-[#00A3E0]/25 via-[#00629B]/10 to-transparent pointer-events-none rounded-full blur-3xl transform scale-90" />

      {/* Three.js Canvas Container */}
      <div
        ref={containerRef}
        className="w-full h-full min-h-[420px] sm:min-h-[500px] lg:min-h-[560px] cursor-grab active:cursor-grabbing"
        title="Interactive 3D Earth Globe — Visualizing IEEE Student Branches across Regions 1 to 10 worldwide"
      />

      {/* Floating Network Legend */}
      <div className="absolute bottom-3 left-3 sm:left-6 flex flex-col gap-1 px-4 py-2.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-xl text-xs pointer-events-none">
        <div className="flex items-center gap-2">
          <Globe className="w-3.5 h-3.5 text-[#00629B] dark:text-cyan-400" />
          <span className="font-extrabold text-slate-900 dark:text-white">IEEE Global Branch Network</span>
        </div>
        <div className="text-[11px] font-mono text-slate-600 dark:text-cyan-300">
          Lucknow STB10214 • 1,900+ Student Branches • Regions 1–10
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
          <Wifi className="w-3 h-3 animate-pulse" />
          <span>Live Geodesic Satellite Links</span>
        </div>
      </div>

    </div>
  );
};
