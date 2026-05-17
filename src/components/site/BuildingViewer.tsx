import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface BuildingViewerProps {
  className?: string;
}

export function BuildingViewer({ className }: BuildingViewerProps) {
  const viewerRef = useRef<HTMLDivElement | null>(null);
  const [viewerError, setViewerError] = useState<string | null>(null);

  useEffect(() => {
    let disposed = false;
    let cleanup = () => {};

    const mount = async () => {
      if (!viewerRef.current) return;
      try {
        const [{ OrbitControls }, { GLTFLoader }] = await Promise.all([
          import("three/examples/jsm/controls/OrbitControls.js"),
          import("three/examples/jsm/loaders/GLTFLoader.js"),
        ]);

        if (disposed || !viewerRef.current) return;

        const container = viewerRef.current;
        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 2000);
        camera.position.set(16, 10, 16);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setClearColor(0x000000, 0); // Transparent background
        container.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.autoRotate = true; // Add auto rotation to make it look dynamic in hero
        controls.autoRotateSpeed = 2.0;
        controls.target.set(0, 0, 0);
        controls.enableZoom = false; // Disable scroll zoom by default so page scrolling isn't hijacked
        controls.update();

        scene.add(new THREE.AmbientLight(0xffffff, 0.85));
        const dir = new THREE.DirectionalLight(0xffffff, 1.1);
        dir.position.set(10, 16, 8);
        scene.add(dir);

        const root = new THREE.Group();
        scene.add(root);

        const loadGltf = (path: string) =>
          new Promise<THREE.Group>((resolve, reject) => {
            const gltfLoader = new GLTFLoader();
            gltfLoader.load(
              path,
              (gltf: any) => resolve(gltf.scene),
              undefined,
              reject
            );
          });

        try {
          const building = await loadGltf("/building.glb");
          root.add(building);
        } catch (err: any) {
          console.error("GLTF Load Error:", err);
          setViewerError(`Failed to load building model.`);
          return;
        }

        const box = new THREE.Box3().setFromObject(root);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        root.position.sub(center);

        const maxDim = Math.max(size.x, size.y, size.z);
        
        const updateScale = () => {
          if (maxDim > 0) {
            // Use a smaller scale target for mobile devices
            const targetSize = window.innerWidth < 768 ? 12 : 18;
            const scale = targetSize / maxDim;
            root.scale.setScalar(scale);
          }
        };
        
        updateScale();
        setViewerError(null);

        const onResize = () => {
          if (!viewerRef.current) return;
          camera.aspect = viewerRef.current.clientWidth / viewerRef.current.clientHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(viewerRef.current.clientWidth, viewerRef.current.clientHeight);
          updateScale(); // Ensure scale stays responsive if window is resized across breakpoints
        };
        window.addEventListener("resize", onResize);

        let frame = 0;
        const animate = () => {
          if (disposed) return;
          frame = requestAnimationFrame(animate);
          controls.update();
          renderer.render(scene, camera);
        };
        animate();

        cleanup = () => {
          cancelAnimationFrame(frame);
          window.removeEventListener("resize", onResize);
          controls.dispose();
          renderer.dispose();
          if (renderer.domElement.parentNode === container) {
            container.removeChild(renderer.domElement);
          }
        };
      } catch {
        setViewerError("3D viewer could not be initialized.");
      }
    };

    mount();
    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  if (viewerError) {
    return (
      <div className={`flex items-center justify-center bg-card border border-border rounded-2xl ${className}`}>
        <p className="text-sm text-muted-foreground">{viewerError}</p>
      </div>
    );
  }

  return <div ref={viewerRef} className={className} />;
}
