import { useState, useEffect } from "react";

export const useKeyLock = (key) => {
    const [toggled, setToggled] = useState(false);
  
    useEffect(() => {
      const onKeyDown = (e) => setToggled((pToggled) => e.getModifierState?.(key) ?? pToggled);
      document.addEventListener('keydown', onKeyDown);
      return () => document.removeEventListener('keydown', onKeyDown);
    }, [key]);
  
    return toggled;
  };