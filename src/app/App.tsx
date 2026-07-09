import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { CustomCursor } from "./components/cursor/CustomCursor";
import { useEffect } from "react";

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isTouchDevice(): boolean {
  return window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
}

export default function App() {
  const showCustomCursor = !isTouchDevice() && !prefersReducedMotion();

  useEffect(() => {
    document.body.style.cursor = showCustomCursor ? "none" : "";

    if (prefersReducedMotion()) {
      document.documentElement.style.setProperty("--animation-duration", "0.01ms");
    }

    return () => {
      document.body.style.cursor = "";
    };
  }, [showCustomCursor]);

  return (
    <>
      {showCustomCursor && <CustomCursor />}
      <RouterProvider router={router} />
    </>
  );
}
