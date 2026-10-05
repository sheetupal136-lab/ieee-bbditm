// ===================================================================
// IEEE BBDITM 3D PHOTOREALISTIC EARTH GLOBE ENGINE (THREE.JS)
// ===================================================================

function initIEEEGlobe(containerId) {
  const container = document.getElementById(containerId);
  if (!container || typeof THREE === 'undefined') return;

  const width = container.clientWidth || 500;
  const height = container.clientHeight || 500;
  const isMobile = window.innerWidth < 768;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.z = 6.2;

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
  } catch (e) {
    console.warn("WebGL renderer init failed:", e);
    return;
  }

  const globeGroup = new THREE.Group();
  scene.add(globeGroup);

  globeGroup.rotation.x = 0.32;
  globeGroup.rotation.y = -1.25;

  const textureLoader = new THREE.TextureLoader();
  const earthDayMap = textureLoader.load('images/earth-day.jpg');
  const earthSpecularMap = textureLoader.load('images/earth-specular.jpg');
  const earthCloudsMap = textureLoader.load('images/earth-clouds.png');

  const earthRadius = 2.15;

  // 1. Photorealistic Earth
  const earthGeo = new THREE.SphereGeometry(earthRadius, isMobile ? 36 : 64, isMobile ? 36 : 64);
  const earthMat = new THREE.MeshPhongMaterial({
    map: earthDayMap,
    specularMap: earthSpecularMap,
    specular: new THREE.Color(0x2266aa),
    shininess: 28,
    emissive: new THREE.Color(0x06182c),
    emissiveIntensity: 0.3,
  });
  const earthMesh = new THREE.Mesh(earthGeo, earthMat);
  globeGroup.add(earthMesh);

  // 2. Cloud Layer
  const cloudsGeo = new THREE.SphereGeometry(earthRadius * 1.018, isMobile ? 32 : 48, isMobile ? 32 : 48);
  const cloudsMat = new THREE.MeshLambertMaterial({
    map: earthCloudsMap,
    transparent: true,
    opacity: 0.42,
    blending: THREE.AdditiveBlending,
  });
  const cloudsMesh = new THREE.Mesh(cloudsGeo, cloudsMat);
  globeGroup.add(cloudsMesh);

  // 3. Orbital Ring
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

  // Helper: lat/lon to vector3
  function latLongToVector3(lat, lon, radius) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);
    return new THREE.Vector3(x, y, z);
  }

  // IEEE Branches
  const branches = [
    { name: 'Lucknow BBDITM', lat: 26.85, lon: 80.95, isMain: true },
    { name: 'MIT (USA)', lat: 42.36, lon: -71.09 },
    { name: 'Stanford (USA)', lat: 37.42, lon: -122.16 },
    { name: 'Imperial College London', lat: 51.49, lon: -0.17 },
    { name: 'Univ of Tokyo', lat: 35.71, lon: 139.76 },
    { name: 'NUS Singapore', lat: 1.29, lon: 103.77 },
    { name: 'Univ of Melbourne', lat: -37.79, lon: 144.96 },
    { name: 'ETH Zurich', lat: 47.37, lon: 8.54 },
    { name: 'Univ of Toronto', lat: 43.66, lon: -79.39 },
  ];

  const lucknowPos = latLongToVector3(26.85, 80.95, earthRadius * 1.02);

  branches.forEach(b => {
    const pos = latLongToVector3(b.lat, b.lon, earthRadius * 1.02);
    const markerGeo = new THREE.SphereGeometry(b.isMain ? 0.08 : 0.045, 16, 16);
    const markerMat = new THREE.MeshBasicMaterial({ color: b.isMain ? 0xffffff : 0x00f2fe });
    const marker = new THREE.Mesh(markerGeo, markerMat);
    marker.position.copy(pos);
    globeGroup.add(marker);

    if (!b.isMain) {
      const midPoint = lucknowPos.clone().add(pos).multiplyScalar(0.5);
      const dist = lucknowPos.distanceTo(pos);
      midPoint.normalize().multiplyScalar(earthRadius * (1.06 + dist * 0.16));

      const curve = new THREE.QuadraticBezierCurve3(lucknowPos, midPoint, pos);
      const pts = curve.getPoints(24);
      const arcGeo = new THREE.BufferGeometry().setFromPoints(pts);
      const arcMat = new THREE.LineBasicMaterial({
        color: 0x00a3e0,
        transparent: true,
        opacity: 0.55,
        blending: THREE.AdditiveBlending,
      });
      const arc = new THREE.Line(arcGeo, arcMat);
      globeGroup.add(arc);
    }
  });

  // Pulse Ring for Lucknow
  const pulseGeo = new THREE.RingGeometry(0.08, 0.2, 32);
  const pulseMat = new THREE.MeshBasicMaterial({
    color: 0x00f2fe,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.9,
  });
  const pulseRing = new THREE.Mesh(pulseGeo, pulseMat);
  pulseRing.position.copy(lucknowPos);
  pulseRing.lookAt(0, 0, 0);
  globeGroup.add(pulseRing);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.1);
  scene.add(ambientLight);

  const sunLight = new THREE.DirectionalLight(0xffffff, 2.2);
  sunLight.position.set(6, 4, 7);
  scene.add(sunLight);

  // Mouse Interaction
  let targetRotX = 0.32;
  let targetRotY = -1.25;
  let isDragging = false;
  let prevX = 0, prevY = 0;

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    prevX = e.clientX;
    prevY = e.clientY;
  });

  window.addEventListener('mousemove', (e) => {
    if (isDragging) {
      targetRotY += (e.clientX - prevX) * 0.008;
      targetRotX += (e.clientY - prevY) * 0.008;
      prevX = e.clientX;
      prevY = e.clientY;
    }
  });

  window.addEventListener('mouseup', () => { isDragging = false; });

  // Touch Support
  container.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      isDragging = true;
      prevX = e.touches[0].clientX;
      prevY = e.touches[0].clientY;
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (isDragging && e.touches.length === 1) {
      targetRotY += (e.touches[0].clientX - prevX) * 0.008;
      targetRotX += (e.touches[0].clientY - prevY) * 0.008;
      prevX = e.touches[0].clientX;
      prevY = e.touches[0].clientY;
    }
  }, { passive: true });

  window.addEventListener('touchend', () => { isDragging = false; });

  // Animation Loop
  const startTime = performance.now();
  function animate() {
    requestAnimationFrame(animate);
    const elapsed = (performance.now() - startTime) * 0.001;

    if (!isDragging) {
      targetRotY += 0.0018;
    }

    globeGroup.rotation.x += (targetRotX - globeGroup.rotation.x) * 0.08;
    globeGroup.rotation.y += (targetRotY - globeGroup.rotation.y) * 0.08;

    cloudsMesh.rotation.y += 0.0006;

    const pulse = 1 + Math.sin(elapsed * 4.5) * 0.35;
    pulseRing.scale.set(pulse, pulse, pulse);

    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener('resize', () => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });
}
