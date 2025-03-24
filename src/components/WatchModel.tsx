
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const WatchModel = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!mountRef.current) return;
    
    // Set up scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x121212);
    
    // Set up camera
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // Set up renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);
    
    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xD4AF37, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    
    const pointLight = new THREE.PointLight(0xD4AF37, 1);
    pointLight.position.set(-5, -5, 5);
    scene.add(pointLight);
    
    // Create watch body
    const watchBodyGeometry = new THREE.CylinderGeometry(2, 2, 0.5, 32);
    const watchBodyMaterial = new THREE.MeshStandardMaterial({
      color: 0xD4AF37,
      metalness: 0.8,
      roughness: 0.2,
    });
    const watchBody = new THREE.Mesh(watchBodyGeometry, watchBodyMaterial);
    scene.add(watchBody);
    
    // Create watch face
    const watchFaceGeometry = new THREE.CircleGeometry(1.8, 32);
    const watchFaceMaterial = new THREE.MeshStandardMaterial({
      color: 0x000000,
      metalness: 0.1,
      roughness: 0.1,
    });
    const watchFace = new THREE.Mesh(watchFaceGeometry, watchFaceMaterial);
    watchFace.position.set(0, 0, 0.26);
    watchBody.add(watchFace);
    
    // Create hour markers
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const markerGeometry = new THREE.BoxGeometry(0.1, 0.4, 0.05);
      const markerMaterial = new THREE.MeshStandardMaterial({
        color: 0xD4AF37,
        metalness: 0.8,
        roughness: 0.2,
      });
      
      const marker = new THREE.Mesh(markerGeometry, markerMaterial);
      const x = 1.4 * Math.sin(angle);
      const y = 1.4 * Math.cos(angle);
      
      marker.position.set(x, y, 0.27);
      marker.rotation.z = angle;
      watchFace.add(marker);
    }
    
    // Create hour hand
    const hourHandGeometry = new THREE.BoxGeometry(0.1, 1, 0.05);
    const hourHandMaterial = new THREE.MeshStandardMaterial({
      color: 0xD4AF37,
      metalness: 0.8,
      roughness: 0.2,
    });
    const hourHand = new THREE.Mesh(hourHandGeometry, hourHandMaterial);
    hourHand.position.z = 0.32;
    watchFace.add(hourHand);
    
    // Create minute hand
    const minuteHandGeometry = new THREE.BoxGeometry(0.06, 1.4, 0.05);
    const minuteHandMaterial = new THREE.MeshStandardMaterial({
      color: 0xD4AF37,
      metalness: 0.8,
      roughness: 0.2,
    });
    const minuteHand = new THREE.Mesh(minuteHandGeometry, minuteHandMaterial);
    minuteHand.position.z = 0.34;
    watchFace.add(minuteHand);
    
    // Create center cap
    const capGeometry = new THREE.SphereGeometry(0.15, 16, 16);
    const capMaterial = new THREE.MeshStandardMaterial({
      color: 0xD4AF37,
      metalness: 0.9,
      roughness: 0.1,
    });
    const cap = new THREE.Mesh(capGeometry, capMaterial);
    cap.position.z = 0.36;
    watchFace.add(cap);
    
    // Animation loop
    let frameId: number;
    
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      
      // Rotate the watch
      watchBody.rotation.y += 0.01;
      
      // Rotate the hands
      const now = new Date();
      const hours = now.getHours() % 12;
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      
      const hourAngle = (hours + minutes / 60) * (Math.PI / 6) - Math.PI / 2;
      const minuteAngle = (minutes + seconds / 60) * (Math.PI / 30) - Math.PI / 2;
      
      hourHand.rotation.z = hourAngle;
      minuteHand.rotation.z = minuteAngle;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return;
      
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);
  
  return <div ref={mountRef} className="w-full h-full min-h-[400px]" />;
};

export default WatchModel;
