import React from "react";
import { useEffect } from "react";

function useAutoplay(func) {
  useEffect(() => {
    const interval = setInterval(() => {
      func;
    }, 3000);
    return () => clearInterval(interval);
  }, []);
}

export default useAutoplay;
